import {IDFormModalProps} from '@src/dFormModal';
import {ISelectFieldProps, SelectField} from '@src/dForm/fields/select';
import {ITreeSelectFieldProps, TreeSelectField} from '@src/dForm/fields/treeSelect';
import {getCanHaveChildrenOnly} from '@src/_shared/hooks/treeComponentApiMethods/serviceMethods/getCanHaveChildrenOnly';
import {getFieldsListForSelect} from '@src/dFormConstructor/renders/fieldsTree/tools/getFieldsListForSelect';
import {getFieldInfoByCode} from '@src/dFormConstructor/renders/fieldsTree/tools/getFieldInfoByCode';
import {useContext} from 'react';
import {FormInfo} from '@src/dFormConstructor/fields/formInfo';
import {BaseComponentInfo} from '@src/dFormConstructor/fields/baseComponentInfo';
import {IExtTreeApi} from '@src/tree';
import {SelectedFieldContext} from '@src/dFormConstructor/context/selectedFieldProvider';
import {UpperFirstLetter} from '@krinopotam/js-helpers';

export const useGetTreeEditFormProps = (treeApi: IExtTreeApi, formInfo: FormInfo): IDFormModalProps => {
    const {setSelectedField} = useContext(SelectedFieldContext);
    return {
        formId: 'EditForm',
        fieldsProps: {
            componentInfoCode: {
                component: SelectField,
                label: 'Component',
                dataSet: getFieldsListForSelect(),
                rules: [
                    {type: 'string', rule: 'not-empty', message: 'You need to choose a field'},
                    {
                        type: 'custom',
                        callback: (selectedCode, formModel) => {
                            const selectedFieldInfoClass = getFieldInfoByCode(selectedCode as string);
                            const selectedFieldInfo = new selectedFieldInfoClass();
                            const parentFieldInfo = formModel.getField('parent')?.getValue()?.['fieldInfo'] as BaseComponentInfo;
                            if (!parentFieldInfo) return '';

                            if (!parentFieldInfo.canHaveChild(selectedFieldInfo) || !selectedFieldInfo.canHaveParent(parentFieldInfo)) {
                                return 'This field type can not belong to the specified parent';
                            }

                            return '';
                        },
                    },
                ],
            } satisfies ISelectFieldProps,

            parent: {
                component: TreeSelectField,
                label: 'Parental component',
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
                const fieldInfoClass = getFieldInfoByCode(values.componentInfoCode);
                const fieldInfo = new fieldInfoClass();
                const newId = formInfo.generateNewFieldId(fieldInfo.CODE);
                fieldInfo.setId(newId);
                fieldInfo.setLabel(UpperFirstLetter(newId));

                const parentFieldInfo: BaseComponentInfo = dataSet['parent']?.['fieldInfo'];
                if (!parentFieldInfo) return;
                parentFieldInfo.addChild(fieldInfo);
                treeApi.selectNode(fieldInfo.NODE_ID);
                treeApi.ensureNodeVisible(fieldInfo.NODE_ID);
                treeApi.expandNode(parentFieldInfo.NODE_ID);
                setSelectedField(fieldInfo);
                formInfo.emitFieldsTreeRerender();
                formInfo.emitFormPreviewRerender();
                formInfo.emitPropsEditorRerender();
            }
        },
    };
};
