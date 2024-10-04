import {AnyType} from '@krinopotam/service-types';
import {defaultButtonView} from '@src/_shared/hooks/buttons/defaultButtonsProps';
import {ITreeComponentApi} from '@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes';
import {IFormButton, IFormButtons} from '@src/buttonsRow';
import {IDFormModalApi, IDFormModalProps} from '@src/dFormModal';
import {useMemo} from 'react';

/** Get view button props */
export const useGetViewButton = (
    api: {
        t: (str: 'view' | 'viewGroup' | 'viewRecord' | 'viewRecordsGroup') => string;
        getFieldNames: ITreeComponentApi['getFieldNames'];
        getActiveNode: ITreeComponentApi['getActiveNode'];
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
            !props.readOnly ||
            props.disabled ||
            props.buttons?.view === null
        )
            return undefined;
        return {
            ...defaultButtonView,
            title: !isLeaf && props.groupsMode ? api.t('viewGroup') : api.t('view'),
            tooltip: !isLeaf && props.groupsMode ? api.t('viewRecordsGroup') : api.t('viewRecord'),
            disabled: !activeNode,
            onClick: () => {
                if (!activeNode) return;
                const fieldNames = api.getFieldNames();
                const parent = api.getParentNode(activeNode);
                if (!props.groupsMode || isLeaf)
                    api.getEditFormApi().open('view', {
                        dataSet: {
                            ...getFormDataSetFn(activeNode),
                            [fieldNames.parent]: parent,
                        },
                    });
                else
                    api.getEditGroupFormApi().open('view', {
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
        props.buttons?.view,
        api,
        activeNode,
        getFormDataSetFn,
    ]);
};
