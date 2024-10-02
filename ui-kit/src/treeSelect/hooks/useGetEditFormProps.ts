import {GetUuid} from '@krinopotam/js-helpers/helpersString/getUuid';
import {AnyType, IKey} from '@krinopotam/service-types';
import {IFieldNames} from '@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes';
import {ITreeSelectApi, ITreeSelectNode, ITreeSelectProps} from '@src/treeSelect';
import {TreeSelectContext} from '@src/treeSelect/context/context';
import {ILabeledValue} from '@src/treeSelect/types/types';
import {useContext, useMemo} from 'react';

export const useGetEditFormProps = (treeApi: ITreeSelectApi, treeProps: ITreeSelectProps, forGroup: boolean) => {
    const {dialogOpenedRef} = useContext(TreeSelectContext);

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

            const updatedNode = {...dataSet, ...resultData} as ITreeSelectNode & {
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
                const curValues = treeApi.getValues();
                treeApi.setValues(refreshSelectedValues(curValues, updatedNode, fieldNames));
            }
        };

        const prevOnOpen = editFormProps?.onOpen;
        formProps.onOpen = (formApi, dataSet, props, cbControl) => {
            const result = prevOnOpen?.(formApi, dataSet, props, cbControl);
            if (cbControl.isPrevented()) return result;

            dialogOpenedRef.current = true;
            return result;
        };

        const prevOnClose = editFormProps?.onClosed;
        formProps.onClosed = (formApi, cbControl) => {
            prevOnClose?.(formApi, cbControl);
            if (cbControl.isPrevented()) return;

            dialogOpenedRef.current = false;
        };

        return formProps;
    }, [forGroup, treeProps?.editFormProps, treeProps?.editGroupFormProps, treeProps.language, treeProps.selectNewNode, treeApi, dialogOpenedRef]);
};

/** WORKAROUND:
 * Since the label of the selected value is stored in labeledValue, it does not change when the title of the node changes.
 * Therefore, we use a workaround: we overwrite the selected labeledValue, but only with value, without label.
 * Then treeSelect itself will update the selected label from the dataSet
 * */
const refreshSelectedValues = (vals: ILabeledValue[] | undefined | null, updatedNode: ITreeSelectNode, fieldNames: IFieldNames) => {
    if (!vals) return null;
    const result: ILabeledValue[] = [];
    for (const val of vals) {
        if (val.value === updatedNode[fieldNames.key]) result.push({value: val.value});
        else result.push(val);
    }

    return result;
};
