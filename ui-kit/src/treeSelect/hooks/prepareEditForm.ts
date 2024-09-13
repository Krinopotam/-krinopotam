import {Key, useContext, useMemo} from 'react';
import {GetUuid, IsObjectHasOwnProperty} from '@krinopotam/js-helpers';
import {ITreeSelectApi, ITreeSelectNode, ITreeSelectProps} from '@src/treeSelect';
import type {IDFormApi, IDFormDataSet} from '@src/dForm/types/dFormTypes';
import {ILabeledValue} from '@src/treeSelect/types/types';
import {IFieldNames} from '@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes';
import {TreeSelectContext} from '@src/treeSelect/context/context';

export const usePrepareEditFormProps = (treeApi: ITreeSelectApi, props: ITreeSelectProps, forGroup: boolean) => {
    const {dialogOpenedRef} = useContext(TreeSelectContext);

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
            if (prevOnSubmitSuccess?.(values, dataSet, resultData, formApi) === false) return false;

            const formMode = formApi.model.getFormMode();
            const fieldNames = treeApi.getFieldNames();

            const updatedNode = {...resultData} as ITreeSelectNode & {parent?: Record<string, unknown>; parentId?: Key};

            let targetKey: Key | undefined;
            if (IsObjectHasOwnProperty(updatedNode, fieldNames.parent)) targetKey = updatedNode[fieldNames.parent]?.[fieldNames.key] as Key;
            else targetKey = treeApi.getActiveNodeKey();

            if (formMode === 'create' || formMode === 'clone') {
                if (!updatedNode[fieldNames.key]) updatedNode[fieldNames.key] = GetUuid();
                treeApi.addNode(updatedNode, targetKey, 'insideBottom', {ensureVisible: true});
            } else if (formMode === 'update') {
                treeApi.updateNode(updatedNode, targetKey, {ensureVisible: true});
                const curValues = treeApi.getValues();
                treeApi.setValues(refreshSelectedValues(curValues, updatedNode, fieldNames));
            }
        };

        const prevOnOpen = editFormProps?.onOpen;
        formProps.onOpen = (formApi, dataSet) => {
            if (prevOnOpen?.(formApi, dataSet) === false) return false;
            dialogOpenedRef.current = true;
        };

        const prevOnClose = editFormProps?.onClosed;
        formProps.onClosed = formApi => {
            prevOnClose?.(formApi);
            dialogOpenedRef.current = false;
        };

        return formProps;
    }, [dialogOpenedRef, forGroup, props?.editFormProps, props?.editGroupFormProps, props.language, treeApi]);
};

/** WORKAROUND:
 * Since the label of the selected value is stored in labeledValue, it does not change when the title of the node changes.
 * Therefore, we use a workaround: we overwrite the selected labeledValue, but only with value, without label.
 * Then treeSelect itself will update the selected label from the dataSet
 * */
const refreshSelectedValues = (vals: ILabeledValue[] | undefined, updatedNode: ITreeSelectNode, fieldNames: IFieldNames) => {
    if (!vals) return undefined;
    const result: ILabeledValue[] = [];
    for (const val of vals) {
        if (val.value === updatedNode[fieldNames.key]) result.push({value: val.value});
        else result.push(val);
    }

    return result;
};
