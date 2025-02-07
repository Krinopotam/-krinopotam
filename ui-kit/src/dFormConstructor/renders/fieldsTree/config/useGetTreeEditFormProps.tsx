import {IDFormModalProps} from '@src/dFormModal';
import {ISelectFieldProps, SelectField} from '@src/dForm/fields/select';
import {ITreeSelectFieldProps, TreeSelectField} from '@src/dForm/fields/treeSelect';
import {getCanHaveChildrenOnly} from '@src/_shared/hooks/treeComponentApiMethods/serviceMethods/getCanHaveChildrenOnly';
import {ITreeSelectApi} from '@src/treeSelect';
import {getFieldsListForSelect} from '@src/dFormConstructor/renders/fieldsTree/tools/getFieldsListForSelect';
import {findFieldInfoByCode} from '@src/dFormConstructor/renders/fieldsTree/tools/findFieldInfoByCode';
import {generateFieldId} from '@src/dFormConstructor/renders/fieldsTree/tools/generateFieldId';
import React from 'react';
import {FormInfo} from '@src/dFormConstructor/fields/formInfo';
import {BaseComponentInfo} from '@src/dFormConstructor/fields/baseComponentInfo';

export const useGetTreeEditFormProps = (
    treeApi: ITreeSelectApi,
    formInfo: FormInfo,
    setRerenderTree: React.Dispatch<React.SetStateAction<object>>,
    setFormProps: React.Dispatch<React.SetStateAction<object>>
): IDFormModalProps => {
    return {
        formId: 'EditForm',
        fieldsProps: {
            componentInfoCode: {
                component: SelectField,
                label: 'Компонент',
                dataSet: getFieldsListForSelect(),
                rules: [{type: 'string', rule: 'not-empty', message: 'Необходимо указать тип поля'}],
            } satisfies ISelectFieldProps,

            parent: {
                component: TreeSelectField,
                label: 'Родительский компонент',
                rules: [{type: 'object', rule: 'not-empty', message: 'Необходимо указать родительский компонент'}],
            } satisfies ITreeSelectFieldProps,
        },

        onFormInit: formApi => {
            const model = formApi.model;
            const parentField = model.getField('parent');
            const parentsData = treeApi.getDataSet();
            const formMode = model.getFormMode();

            /** modify dataset for update to avoid the possibility of a parent node choosing itself or its own child node */
            const removeId = formMode === 'update' ? model.getFormDataSet()['id'] : undefined;
            const dataSet = getCanHaveChildrenOnly(parentsData, undefined, removeId);
            parentField.updateProps({dataSet: dataSet});
        },
        onSubmitSuccess: (values, dataSet, _resultData, api, cbControl) => {
            cbControl.preventOriginal();

            const formMode = api.model.getFormMode();
            if (formMode === 'create' || formMode === 'clone') {
                const fieldInfoClass = findFieldInfoByCode(values.componentInfoCode);
                const newFieldId = generateFieldId(formInfo);
                const fieldInfoClassInstance = new fieldInfoClass({componentId: newFieldId});
                const parentFieldInfo: BaseComponentInfo = dataSet['parent']?.['fieldInfo'];
                if (!parentFieldInfo) return;
                parentFieldInfo.addChild(fieldInfoClassInstance);
                setRerenderTree({});
                treeApi.selectNode(newFieldId);
                treeApi.ensureNodeVisible(newFieldId);
                setFormProps(formInfo.toFormProps());
            }
        },
    };
};
