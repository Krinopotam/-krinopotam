import {Key, useMemo} from 'react';
import {GetUuid} from '@krinopotam/js-helpers';
import {ITreeSelectApi, ITreeSelectNode, ITreeSelectProps} from "@src/treeSelect";
import type {IDFormApi, IDFormDataSet} from "@src/dForm/types/dFormTypes";

export const usePrepareEditFormProps = (treeApi: ITreeSelectApi, props: ITreeSelectProps, forGroup: boolean) => {
    return useMemo(() => {
        const editFormProps = !forGroup ? props?.editFormProps : props?.editGroupFormProps;
        if (!editFormProps) return undefined;

        const formProps = {...editFormProps};
        if (props.language && !formProps.language) formProps.language = props.language;

        const prevOnSubmitSuccess = editFormProps?.onSubmitSuccess;

        formProps.onSubmitSuccess = (
            values: Record<string, unknown>,
            dataSet: IDFormDataSet,
            resultData: Record<string, unknown> | undefined,
            formApi: IDFormApi
        ) => {
            if (prevOnSubmitSuccess && prevOnSubmitSuccess(values, dataSet, resultData, formApi) === false) return false;

            const formMode = formApi.model.getFormMode();
            const fieldNames = treeApi.getFieldNames();

            const updatedNode = {...formApi.model.getFormDataSet(), ...resultData} as ITreeSelectNode & {parent?: Record<string, unknown>; parentId?: Key};

            if (formMode === 'create' || formMode === 'clone') {
                if (!updatedNode[fieldNames.key]) updatedNode[fieldNames.key] = GetUuid();
                const targetKey = treeApi.getActiveNodeKey();
                treeApi.addNode(updatedNode, targetKey, 'insideBottom', {ensureVisible: true});
            } else if (formMode === 'update') {
                let targetKey: Key | undefined = undefined;
                if (updatedNode.parent) targetKey = updatedNode.parent[fieldNames.key] as Key;
                else if (updatedNode.parentId) targetKey = updatedNode.parentId;
                treeApi.updateNode(updatedNode, targetKey, {ensureVisible: true});
            }
        };

        return formProps;
    }, [forGroup, props?.editFormProps, props?.editGroupFormProps, props.language, treeApi]);
};