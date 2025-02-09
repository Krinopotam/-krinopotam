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
                rules: [
                    {type: 'string', rule: 'not-empty', message: 'You need to choose a field'},
                    {
                        type: 'custom',
                        callback: (selectedCode, formModel) => {
                            const selectedFieldInfoClass = findFieldInfoByCode(selectedCode as string);
                            const selectedFieldInfo = new selectedFieldInfoClass();
                            const parentFieldInfo = formModel.getField('parent')?.getValue()?.['fieldInfo'] as BaseComponentInfo;
                            if (!parentFieldInfo) return '';

                            if (
                                (parentFieldInfo.canHaveChildren() !== true && parentFieldInfo.canHaveChildren() !== selectedFieldInfo.CODE) ||
                                (selectedFieldInfo.mustHaveParent() !== true && selectedFieldInfo.mustHaveParent() !== parentFieldInfo.CODE)
                            ) {
                                return 'This field type can not belong to the specified parent';
                            }

                            return '';
                        },
                    },
                ],
            } satisfies ISelectFieldProps,

            parent: {
                component: TreeSelectField,
                label: 'Родительский компонент',
                rules: [{type: 'object', rule: 'not-empty', message: 'You need to choose a parent field'}],
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
                const fieldInfo = new fieldInfoClass();
                const newId = generateFieldId(formInfo, fieldInfo.CODE);
                fieldInfo.setId(newId);
                fieldInfo.setLabel(newId);

                const parentFieldInfo: BaseComponentInfo = dataSet['parent']?.['fieldInfo'];
                if (!parentFieldInfo) return;
                parentFieldInfo.addChild(fieldInfo);
                setRerenderTree({});
                treeApi.selectNode(newId);
                treeApi.ensureNodeVisible(newId);
                treeApi.expandNode(parentFieldInfo.getId());
                setFormProps(formInfo.toFormProps());
            }
        },
    };
};
