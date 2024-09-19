import {useContext, useMemo} from 'react';
import {GetUuid} from '@krinopotam/js-helpers/helpersString/getUuid';
import {IsObjectHasOwnProperty} from '@krinopotam/js-helpers/helpersObjects/isObjectHasOwnProperty';
import {ITreeSelectApi, ITreeSelectNode, ITreeSelectProps} from '@src/treeSelect';
import {ILabeledValue} from '@src/treeSelect/types/types';
import {IFieldNames} from '@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes';
import {TreeSelectContext} from '@src/treeSelect/context/context';
import {IKey} from '@krinopotam/service-types';

export const useGetEditFormProps = (treeApi: ITreeSelectApi, props: ITreeSelectProps, forGroup: boolean) => {
    const {dialogOpenedRef} = useContext(TreeSelectContext);

    return useMemo(() => {
        const editFormProps = !forGroup ? props?.editFormProps : props?.editGroupFormProps;
        if (!editFormProps) return undefined;

        const formProps = {...editFormProps};
        if (props.language && !formProps.language) formProps.language = props.language;

        const prevOnSubmitSuccess = editFormProps?.onSubmitSuccess;
        formProps.onSubmitSuccess = (values, dataSet, resultData, formApi, cbControl) => {
            prevOnSubmitSuccess?.(values, dataSet, resultData, formApi, cbControl);
            if (cbControl.isPrevented()) return;

            const formMode = formApi.model.getFormMode();
            const fieldNames = treeApi.getFieldNames();

            const updatedNode = {...resultData} as ITreeSelectNode & {parent?: Record<string, unknown>; parentId?: IKey};

            let targetKey: IKey | undefined;
            if (IsObjectHasOwnProperty(updatedNode, fieldNames.parent)) targetKey = updatedNode[fieldNames.parent]?.[fieldNames.key] as IKey;
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
        formProps.onOpen = (formApi, dataSet, props, cbControl) => {
            const result = prevOnOpen?.(formApi, dataSet, props, cbControl);
            if (cbControl.isPrevented()) return result;

            dialogOpenedRef.current = true;
            return result
        };

        const prevOnClose = editFormProps?.onClosed;
        formProps.onClosed = (formApi, cbControl) => {
            prevOnClose?.(formApi, cbControl);
            if (cbControl.isPrevented()) return;

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
