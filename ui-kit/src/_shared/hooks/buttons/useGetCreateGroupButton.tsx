import {AnyType} from '@krinopotam/service-types';
import {defaultButtonCreateGroup} from '@src/_shared/hooks/buttons/defaultButtonsProps';
import {ITreeComponentApi} from '@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes';
import {IFormButton, IFormButtons} from '@src/buttonsRow';
import {IDFormModalApi, IDFormModalProps} from '@src/dFormModal';
import {useMemo} from 'react';

/** Get create group button props */
export const useGetCreateGroupButton = (
    api: {
        t: (str: 'createGroup' | 'createRecordsGroup') => string;
        getFieldNames: ITreeComponentApi['getFieldNames'];
        getActiveNode: ITreeComponentApi['getActiveNode'];
        getParentNode: ITreeComponentApi['getParentNode'];
        getEditGroupFormApi: () => IDFormModalApi;
    },
    props: {
        editGroupFormProps?: IDFormModalProps;
        groupsMode?: boolean;
        disabled?: boolean;
        readOnly?: boolean;
        buttons?: IFormButtons;
    },
    isLeaf: boolean
): IFormButton | undefined => {
    return useMemo(() => {
        if (!props.editGroupFormProps || !props.groupsMode || props.disabled || props.readOnly || props.buttons?.createGroup === null) return undefined;
        return {
            ...defaultButtonCreateGroup,
            title: api.t('createGroup'),
            tooltip: api.t('createRecordsGroup'),
            onClick: () => {
                const fieldNames = api.getFieldNames();
                const activeNode = api.getActiveNode(false);
                let parent: Record<string, AnyType> | undefined = undefined;
                if (activeNode) parent = activeNode && !isLeaf ? activeNode : api.getParentNode(activeNode);

                api.getEditGroupFormApi().open('create', {defaultValues: {[fieldNames.parent]: parent}});
            },
        } satisfies IFormButton;
    }, [props.editGroupFormProps, props.groupsMode, props.disabled, props.readOnly, props.buttons?.createGroup, api, isLeaf]);
};
