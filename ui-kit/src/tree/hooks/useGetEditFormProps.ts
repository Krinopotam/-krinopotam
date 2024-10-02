import {GetUuid} from '@krinopotam/js-helpers';
import {AnyType, IKey} from '@krinopotam/service-types';
import {IExtTreeApi, IExtTreeNode, IExtTreeProps} from '@src/tree/types/types';
import {useMemo} from 'react';

export const useGetEditFormProps = (treeApi: IExtTreeApi, treeProps: IExtTreeProps, forGroup: boolean) => {
    return useMemo(() => {
        const editFormProps = !forGroup ? treeProps?.editFormProps : treeProps?.editGroupFormProps;
        if (!editFormProps) return undefined;

        const formProps = {...editFormProps};
        if (treeProps.language && !formProps.language) formProps.language = treeProps.language;

        const propsOnSubmitSuccess = editFormProps?.onSubmitSuccess;

        formProps.onSubmitSuccess = (values, dataSet, resultData, formApi, cbControl) => {
            propsOnSubmitSuccess?.(values, dataSet, resultData, formApi, cbControl);
            if (cbControl.isPrevented()) return;

            const formMode = formApi.model.getFormMode();
            const fieldNames = treeApi.getFieldNames();

            const updatedNode = {...dataSet, ...resultData} as IExtTreeNode & {
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
                    sortNodes: treeProps.sortOnChange,
                });
            } else if (formMode === 'update') {
                treeApi.updateNode(updatedNode, targetKey, {ensureVisible: true, sortNodes: treeProps.sortOnChange});
            }
        };

        return formProps;
    }, [forGroup, treeProps?.editFormProps, treeProps?.editGroupFormProps, treeProps.language, treeProps.selectNewNode, treeApi]);
};
