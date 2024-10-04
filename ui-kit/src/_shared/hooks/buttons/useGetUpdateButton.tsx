import {AnyType} from '@krinopotam/service-types';
import {defaultButtonUpdate} from '@src/_shared/hooks/buttons/defaultButtonsProps';
import {ITreeComponentApi} from '@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes';
import {IFormButton, IFormButtons} from '@src/buttonsRow';
import {IDFormModalApi, IDFormModalProps} from '@src/dFormModal';
import {useMemo} from 'react';

/** Get update button props */
export const useGetUpdateButton = (
    api: {
        t: (str: 'edit' | 'editGroup' | 'editRecord' | 'editRecordsGroup') => string;
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
            props.buttons?.update === null
        )
            return undefined;

        return {
            ...defaultButtonUpdate,
            title: !isLeaf && props.groupsMode ? api.t('editGroup') : api.t('edit'),
            tooltip: !isLeaf && props.groupsMode ? api.t('editRecordsGroup') : api.t('editRecord'),
            disabled: !activeNode,
            onClick: () => {
                if (!activeNode) return;
                const fieldNames = api.getFieldNames();
                const parent = api.getParentNode(activeNode);
                if (!props.groupsMode || isLeaf)
                    api.getEditFormApi().open('update', {
                        dataSet: {
                            ...getFormDataSetFn(activeNode),
                            [fieldNames.parent]: parent,
                        },
                    });
                else
                    api.getEditGroupFormApi().open('update', {
                        dataSet: {
                            ...getFormDataSetFn(activeNode),
                            [fieldNames.parent]: parent,
                        },
                    });
            },
        } satisfies IFormButton;
    }, [
        isLeaf,
        props.editFormProps,
        props.groupsMode,
        props.editGroupFormProps,
        props.readOnly,
        props.disabled,
        props.buttons?.update,
        api,
        activeNode,
        getFormDataSetFn,
    ]);
};
