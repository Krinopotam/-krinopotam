import {IDFormModalProps} from '@src/dFormModal';
import {ISelectFieldProps, SelectField} from '@src/dForm/fields/select';
import {ITreeSelectFieldProps, TreeSelectField} from '@src/dForm/fields/treeSelect';
import {getCanHaveChildrenOnly} from '@src/_shared/hooks/treeComponentApiMethods/serviceMethods/getCanHaveChildrenOnly';
import {ITreeSelectApi} from '@src/treeSelect';
import {getFieldsListForSelect} from '@src/dFormConstructor/renders/fieldsTree/tools/getFieldsListForSelect';
import {getFieldInfoByCode} from '@src/dFormConstructor/renders/fieldsTree/tools/getFieldInfoByCode';
import {generateFieldId} from '@src/dFormConstructor/renders/fieldsTree/tools/generateFieldId';
import {useContext} from 'react';
import {FormInfo} from '@src/dFormConstructor/fields/formInfo';
import {BaseComponentInfo} from '@src/dFormConstructor/fields/baseComponentInfo';
import {FormPropsContext} from '@src/dFormConstructor/context/formPropsProvider';
import {FormSourceContext} from "@src/dFormConstructor/context/formSourceProvider";
import {formPropsToSource} from "@src/dFormConstructor/renders/sourceEditor/tools/formPropsToSource";

export const useGetTreeEditFormProps = (treeApi: ITreeSelectApi, formInfo: FormInfo): IDFormModalProps => {
    const {setFormProps} = useContext(FormPropsContext);
    const {setSource} = useContext(FormSourceContext);
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
                            const selectedFieldInfoClass = getFieldInfoByCode(selectedCode as string);
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
                const fieldInfoClass = getFieldInfoByCode(values.componentInfoCode);
                const fieldInfo = new fieldInfoClass();
                const newId = generateFieldId(formInfo, fieldInfo.CODE);
                fieldInfo.setId(newId);
                fieldInfo.setLabel(newId);

                const parentFieldInfo: BaseComponentInfo = dataSet['parent']?.['fieldInfo'];
                if (!parentFieldInfo) return;
                parentFieldInfo.addChild(fieldInfo);
                treeApi.selectNode(newId);
                treeApi.ensureNodeVisible(newId);
                treeApi.expandNode(parentFieldInfo.getId());
                const formProps = formInfo.toFormProps()
                setFormProps(formInfo.toFormProps(), 'fieldsTree');
                setSource(formPropsToSource(formProps), 'fieldsTree')
            }
        },
    };
};
