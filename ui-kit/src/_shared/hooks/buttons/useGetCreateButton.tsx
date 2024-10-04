import {AnyType} from "@krinopotam/service-types";
import {defaultButtonCreate} from '@src/_shared/hooks/buttons/defaultButtonsProps';
import {ITreeComponentApi} from '@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes';
import {IFormButton, IFormButtons} from '@src/buttonsRow';
import {IDFormModalApi, IDFormModalProps} from "@src/dFormModal";
import {useMemo} from "react";

/** Get create button props */
export const useGetCreateButton = (
    api: {
        t: (str: 'create' | 'createRecord') => string;
        getFieldNames: ITreeComponentApi['getFieldNames'];
        getActiveNode: ITreeComponentApi['getActiveNode'];
        getParentNode: ITreeComponentApi['getParentNode'];
        getEditFormApi: () => IDFormModalApi;
    },
    props: {
        editFormProps?: IDFormModalProps;
        groupsMode?: boolean;
        disabled?: boolean;
        readOnly?: boolean;
        buttons?: IFormButtons;
    },
    isLeaf: boolean
): IFormButton | undefined => {
    return useMemo(() => {
        if (!props.editFormProps || props.disabled || props.readOnly || props.buttons?.create === null) return undefined;
        return {
            ...defaultButtonCreate,
            title: api.t('create'),
            tooltip: api.t('createRecord'),
            onClick: () => {
                const fieldNames = api.getFieldNames();
                const activeNode = api.getActiveNode(false);
                let parent: Record<string, AnyType> | undefined;
                if (activeNode) parent = activeNode && !isLeaf ? activeNode : api.getParentNode(activeNode);

                api.getEditFormApi().open('create', {defaultValues: {[fieldNames.parent]: parent}});
            },
        } satisfies IFormButton;
    }, [props.editFormProps, props.disabled, props.readOnly, props.buttons?.create, api, isLeaf]);
};
