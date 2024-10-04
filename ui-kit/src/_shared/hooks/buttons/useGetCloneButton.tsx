import {AnyType} from '@krinopotam/service-types';
import {defaultButtonClone} from '@src/_shared/hooks/buttons/defaultButtonsProps';
import {ITreeComponentApi} from '@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes';
import {IFormButton, IFormButtons} from '@src/buttonsRow';
import {IDFormModalApi, IDFormModalProps} from '@src/dFormModal';
import {useMemo} from 'react';

/** Get clone button props */
export const useGetCloneButton = (
    api: {
        t: (str: 'clone' | 'cloneGroup' | 'cloneRecord' | 'cloneRecordsGroup') => string;
        getFieldNames: ITreeComponentApi['getFieldNames'];
        getParentNode: ITreeComponentApi['getParentNode'];
        getEditFormApi: () => IDFormModalApi;
        getEditGroupFormApi: () => IDFormModalApi;
    },
    props: {
        editFormProps?: IDFormModalProps;
        editGroupFormProps?: IDFormModalProps;
        groupsMode?: boolean;
        disabled?: boolean;
        readOnly?: boolean;
        buttons?: IFormButtons;
    },
    activeNode: Record<string, AnyType> | undefined,
    getFormDataSetFn: (node: Record<string, AnyType>) => Record<string, AnyType>,
    isLeaf: boolean
): IFormButton | undefined => {
    return useMemo(() => {
        if (
            !props.editFormProps ||
            (props.groupsMode && !isLeaf && !props.editGroupFormProps) ||
            props.readOnly ||
            props.disabled ||
            props.buttons?.clone === null
        )
            return undefined;

        return {
            ...defaultButtonClone,
            title: !isLeaf && props.groupsMode ? api.t('cloneGroup') : api.t('clone'),
            tooltip: !isLeaf && props.groupsMode ? api.t('cloneRecordsGroup') : api.t('cloneRecord'),
            disabled: !activeNode,
            onClick: () => {
                if (!activeNode) return;
                const fieldNames = api.getFieldNames();
                const parent = api.getParentNode(activeNode);
                if (!props.groupsMode || isLeaf)
                    api.getEditFormApi().open('clone', {
                        dataSet: {
                            ...getFormDataSetFn(activeNode),
                            [fieldNames.parent]: parent,
                        },
                    });
                else
                    api.getEditGroupFormApi().open('clone', {
                        dataSet: {
                            ...getFormDataSetFn(activeNode),
                            [fieldNames.parent]: parent,
                        },
                    });
            },
        } satisfies IFormButton;
    }, [
        props.editGroupFormProps,
        props.editFormProps,
        props.groupsMode,
        props.readOnly,
        props.disabled,
        props.buttons?.clone,
        isLeaf,
        api,
        activeNode,
        getFormDataSetFn,
    ]);
};
