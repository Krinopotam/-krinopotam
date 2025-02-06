import React, {useState} from 'react';
import {IExtTreeNode, IExtTreeProps, Tree} from '@src/tree';
import {BaseFieldInfo} from '@src/dFormConstructor/fields/baseFieldInfo';
import {IDFormModalProps} from '@src/dFormModal';
import {GetUuid} from '@krinopotam/js-helpers';
import {ITreeSelectFieldProps, TreeSelectField} from '@src/dForm/fields/treeSelect';
import {ITreeSelectApi} from '@src/treeSelect';
import {ISelectFieldProps, SelectField} from '@src/dForm/fields/select';
import {FIELDS_LIST, findFieldByType} from '@src/dFormConstructor/FIELDS_LIST';
import {AnyType, IKey} from '@krinopotam/service-types';
import {getCanHaveChildrenOnly} from '@src/_shared/hooks/treeComponentApiMethods/serviceMethods/getCanHaveChildrenOnly';

const treeApi = {} as ITreeSelectApi;

const defaultTreeProps: IExtTreeProps = {
    apiRef: treeApi,
    defaultExpandAll: true,
    buttonsIconsOnly: true,
    draggableOrder:true,
    buttons: {update: null, clone: null, create: {tooltip: 'Добавить поле'}},
    onDelete: () => {},
    confirmDelete: false,
};

export const FieldsTree = (): React.JSX.Element => {
    const [fieldsCollection, setFieldsCollection] = useState([]);
    const dataSet = getDataSet(fieldsCollection);
    const editFormProps = useTreeEditFormProps();
    const treeProps = {...defaultTreeProps, dataSet, editFormProps};
    return <Tree {...treeProps} />;
};

const getDataSet = (fieldsCollection: BaseFieldInfo[]): IExtTreeNode[] => {
    const result: IExtTreeNode[] = [];
    for (const fieldInfo of fieldsCollection) {
        const id = fieldInfo.getFieldId();
        const label = fieldInfo.getFieldLabel();
        result.push({id: id, title: label, fieldInfo});
    }

    return result;
};

const useTreeEditFormProps = (): IDFormModalProps => {
    return {
        formId: 'EditForm',
        fieldsProps: {
            component: {
                component: SelectField,
                label: 'Компонент',
                dataSet: FIELDS_LIST,
                rules: [{type: 'string', rule: 'not-empty', message: 'Необходимо указать тип поля'}],
            } satisfies ISelectFieldProps,

            parent: {
                component: TreeSelectField,
                label: 'Родительский компонент',
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
        onSubmitSuccess: (values, dataSet, resultData, api, cbControl) => {
            cbControl.preventOriginal();

            const formMode = api.model.getFormMode();
            const fieldNames = treeApi.getFieldNames();
            const treeProps = treeApi.getProps();

            const componentInfo = findFieldByType(values.component);

            if (!componentInfo) return;
            const updatedNode = {...dataSet, ...resultData, title: `${componentInfo.label} [${111}]`, isLeaf: true} as IExtTreeNode & {
                parent?: Record<string, AnyType>;
                parentId?: IKey;
            };

            let targetKey: IKey | undefined;
            if (updatedNode[fieldNames.parent]) targetKey = updatedNode[fieldNames.parent]?.[fieldNames.key] as IKey;
            else if (updatedNode[fieldNames.parent] === null) targetKey = undefined;
            else targetKey = treeApi.getActiveNodeKey();

            if (formMode === 'create' || formMode === 'clone') {
                if (!updatedNode[fieldNames.key]) updatedNode[fieldNames.key] = GetUuid();
                treeApi.addNode(updatedNode, targetKey, 'insideBottom', {
                    ensureVisible: true,
                    select: !!treeProps.selectNewNode,
                    sortNodes: false,
                });
            } else if (formMode === 'update') {
                treeApi.updateNode(updatedNode, targetKey, {ensureVisible: true, sortNodes: false});
            }
        },
    };
};
