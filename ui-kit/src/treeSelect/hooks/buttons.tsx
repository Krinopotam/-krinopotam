import React, {useCallback, useContext, useMemo, useState} from 'react';
import {IsPromise, MergeObjects} from '@krinopotam/js-helpers';
import {ITreeSelectApi, ITreeSelectNode, ITreeSelectProps} from '@src/treeSelect';
import {ITreeSelectButton, ITreeSelectButtons} from '@src/treeSelect/types/types';
import {IDFormDataSet} from '@src/dForm';

import {
    defaultButtonClone,
    defaultButtonCreate,
    defaultButtonCreateGroup,
    defaultButtonDelete,
    defaultButtonUpdate,
    defaultButtonView,
    defaultHeaderLabel,
} from '@src/_shared/hooks/buttons/defaultButtonsProps';
import {MessageBox, MessageBoxApi} from '@src/messageBox';
import {IButtonsRowApi} from '@src/buttonsRow';
import {IError} from '@krinopotam/service-types';
import {ErrorMessage} from '@src/errorMessage';
import {TreeSelectContext} from '@src/treeSelect/context/context';

export const useInitButtons = (api: ITreeSelectApi, props: ITreeSelectProps) => {
    api.getButtonsApi().refreshButtons = useRefreshButtons();

    const activeNode = api.getActiveNode(true);
    const isGroup = props.groupsMode && !activeNode?.isLeaf;

    const propsButtons = props.editButtons;
    const buttonsSize = props.buttonsSize ?? 'small';
    const buttonsPos = props.buttonsPosition ?? 'right';

    const headerLabel = useGetHeaderLabel(props);
    const createButton = useGetCreateButton(api, props);
    const createGroupButton = useGetCreateGroupButton(api, props);
    const viewButton = useGetViewButton(api, props, activeNode, isGroup);
    const cloneButton = useGetCloneButton(api, props, activeNode, isGroup);
    const updateButton = useGetUpdateButton(api, props, activeNode, isGroup);
    const deleteButton = useGetDeleteButton(api, props, activeNode, isGroup);

    return useMemo(() => {
        const defaultButtons = {
            headerLabel: headerLabel,
            view: viewButton,
            create: createButton,
            createGroup: createGroupButton,
            clone: cloneButton,
            update: updateButton,
            delete: deleteButton,
        } as ITreeSelectButtons;

        const resultButtons = MergeObjects(defaultButtons, propsButtons);

        for (const buttonId in resultButtons) {
            const btn = resultButtons[buttonId];
            if (!btn || buttonId === 'headerLabel' || btn.type === 'hotkey') continue;
            btn.size = btn.size ?? buttonsSize;
            btn.position = btn.position ?? buttonsPos;
            if (btn.checkDisabled) btn.disabled = !activeNode;
            if (btn.checkHidden) btn.hidden = !activeNode;
        }

        return resultButtons;
    }, [headerLabel, viewButton, createButton, createGroupButton, cloneButton, updateButton, deleteButton, propsButtons, buttonsSize, buttonsPos, activeNode]);
};

const useRefreshButtons = () => {
    const [, refreshButtons] = useState({});
    return useCallback(() => {
        refreshButtons({});
    }, [refreshButtons]);
};

/** Get label props */
const useGetHeaderLabel = (api: ITreeSelectProps): ITreeSelectButton | undefined => {
    return useMemo(() => {
        if (!api.headerLabel) return undefined;

        return {
            ...defaultHeaderLabel,
            title: api.headerLabel,
        } satisfies ITreeSelectButton;
    }, [api.headerLabel]);
};

/** Get create button props */
const useGetCreateButton = (api: ITreeSelectApi, props: ITreeSelectProps): ITreeSelectButton | undefined => {
    return useMemo(() => {
        if (!props.editFormProps || props.disabled || props.readOnly || props.editButtons?.create === null) return undefined;
        return {
            ...defaultButtonCreate,
            title: api.t('create'),
            tooltip: api.t('createRecord'),
            onClick: () => {
                console.log('open ',api.getIsOpen())
                    api.setIsOpen(true);

                const fieldNames = api.getFieldNames();
                const activeNode = api.getActiveNode();
                let parent: ITreeSelectNode | undefined = undefined;
                if (activeNode) {
                    if (!activeNode.isLeaf) parent = activeNode;
                    else parent = api.getParentNode(activeNode);
                }
                api.getEditFormApi().open('create', {defaultValues: {[fieldNames.parent]: parent}});
            },
        } satisfies ITreeSelectButton;
    }, [api, props.disabled, props.editButtons?.create, props.editFormProps, props.readOnly]);
};

/** Get create group button props */
const useGetCreateGroupButton = (api: ITreeSelectApi, props: ITreeSelectProps): ITreeSelectButton | undefined => {
    return useMemo(() => {
        if (!props.editGroupFormProps || props.disabled || props.readOnly || props.editButtons?.createGroup === null) return undefined;
        return {
            ...defaultButtonCreateGroup,
            title: api.t('createGroup'),
            tooltip: api.t('createRecordsGroup'),
            onClick: () => {
                const fieldNames = api.getFieldNames();
                const activeNode = api.getActiveNode();
                let parent: ITreeSelectNode | undefined = undefined;
                if (activeNode) {
                    if (!activeNode.isLeaf) parent = activeNode;
                    else parent = api.getParentNode(activeNode);
                }
                api.getEditGroupFormApi().open('create', {defaultValues: {[fieldNames.parent]: parent}});
            },
        } satisfies ITreeSelectButton;
    }, [props.editGroupFormProps, props.disabled, props.readOnly, props.editButtons?.createGroup, api]);
};

/** Get view button props */
const useGetViewButton = (
    api: ITreeSelectApi,
    props: ITreeSelectProps,
    activeNode: ITreeSelectNode | undefined,
    isGroup?: boolean
): ITreeSelectButton | undefined => {
    return useMemo(() => {
        if (
            (!isGroup && !props.editFormProps) ||
            (isGroup && !props.editGroupFormProps) ||
            !props.readOnly ||
            props.disabled ||
            props.editButtons?.view === null
        )
            return undefined;
        return {
            ...defaultButtonView,
            title: api.t('view'),
            tooltip: api.t('viewRecord'),
            disabled: !activeNode,
            onClick: () => {
                if (!activeNode) return;
                const fieldNames = api.getFieldNames();
                const parent = api.getParentNode(activeNode);
                if (!isGroup) api.getEditFormApi().open('view', {dataSet: {...getDataSet(activeNode), [fieldNames.parent]: parent}});
                else api.getEditGroupFormApi().open('view', {dataSet: {...getDataSet(activeNode), [fieldNames.parent]: parent}});
            },
        } satisfies ITreeSelectButton;
    }, [isGroup, props.editFormProps, props.editGroupFormProps, props.readOnly, props.disabled, props.editButtons?.view, activeNode, api]);
};

/** Get clone button props */
const useGetCloneButton = (
    api: ITreeSelectApi,
    props: ITreeSelectProps,
    activeNode: ITreeSelectNode | undefined,
    isGroup?: boolean
): ITreeSelectButton | undefined => {
    return useMemo(() => {
        const editGroupFormProps = props.editGroupFormProps;

        if (
            (!isGroup && !props.editFormProps) ||
            (isGroup && !props.editGroupFormProps) ||
            props.disabled ||
            props.readOnly ||
            props.editButtons?.clone === null
        )
            return undefined;

        return {
            ...defaultButtonClone,
            title: isGroup && editGroupFormProps ? api.t('cloneGroup') : api.t('clone'),
            tooltip: isGroup && editGroupFormProps ? api.t('cloneRecordsGroup') : api.t('cloneRecord'),
            disabled: !activeNode,
            onClick: () => {
                if (!activeNode) return;
                const fieldNames = api.getFieldNames();
                const parent = api.getParentNode(activeNode);
                if (!isGroup) api.getEditFormApi().open('clone', {dataSet: {...getDataSet(activeNode), [fieldNames.parent]: parent}});
                else api.getEditGroupFormApi().open('clone', {dataSet: {...getDataSet(activeNode), [fieldNames.parent]: parent}});
            },
        } satisfies ITreeSelectButton;
    }, [props.editGroupFormProps, props.editFormProps, props.disabled, props.readOnly, props.editButtons?.clone, isGroup, activeNode, api]);
};

/** Get update button props */
const useGetUpdateButton = (
    api: ITreeSelectApi,
    props: ITreeSelectProps,
    activeNode: ITreeSelectNode | undefined,
    isGroup?: boolean
): ITreeSelectButton | undefined => {

    return useMemo(() => {
        const editGroupFormProps = props.editGroupFormProps;

        if (
            (!isGroup && !props.editFormProps) ||
            (isGroup && !props.editGroupFormProps) ||
            props.disabled ||
            props.readOnly ||
            props.editButtons?.update === null
        )
            return undefined;
        return {
            ...defaultButtonUpdate,
            title: isGroup && editGroupFormProps ? api.t('editGroup') : api.t('edit'),
            tooltip: isGroup && editGroupFormProps ? api.t('editRecordsGroup') : api.t('editRecord'),
            disabled: !activeNode,
            onClick: () => {
                if (!activeNode) return;
                const fieldNames = api.getFieldNames();
                const parent = api.getParentNode(activeNode);
                if (!isGroup) api.getEditFormApi().open('update', {dataSet: {...getDataSet(activeNode), [fieldNames.parent]: parent}});
                else api.getEditGroupFormApi().open('update', {dataSet: {...getDataSet(activeNode), [fieldNames.parent]: parent}});
            },
        } satisfies ITreeSelectButton;
    }, [props.editGroupFormProps, props.editFormProps, props.disabled, props.readOnly, props.editButtons?.update, isGroup, activeNode, api]);
};

/** Get delete button props */
const useGetDeleteButton = (
    api: ITreeSelectApi,
    props: ITreeSelectProps,
    activeNode: ITreeSelectNode | undefined,
    isGroup?: boolean
): ITreeSelectButton | undefined => {
    const {ctrlPressedRef} = useContext(TreeSelectContext);
    return useMemo(() => {
        if (!props.editFormProps || props.disabled || props.readOnly || props.editButtons?.delete === null) return undefined;
        return {
            ...defaultButtonDelete,
            title: isGroup ? api.t('deleteGroup') : api.t('delete'),
            tooltip: isGroup ? api.t('deleteRecordsGroup') : api.t('deleteRecord'),
            disabled: !activeNode,
            onClick: () => {
                if (!activeNode) return;
                api.setIsOpen(true);
                if (!props.confirmDelete) {
                    deleteNode(activeNode, props, api, ctrlPressedRef, api.t('error'));
                    api.setIsOpen(undefined);
                    return;
                }

                const messageBox = MessageBox.confirmWaiter({
                    language: props.language,
                    content: props.nodeDeleteMessage ?? api.t('deleteSelectedRecordQt'),
                    onOk: () => {
                        deleteNode(activeNode, props, api, ctrlPressedRef, api.t('error'), messageBox);
                    },
                    onCancel: () => {
                        messageBox.destroy();
                        if (!ctrlPressedRef.current) api.setIsOpen(undefined);
                    },
                });
            },
        } satisfies ITreeSelectButton;
    }, [props, isGroup, activeNode, api, ctrlPressedRef]);
};

const deleteNode = (
    node: ITreeSelectNode,
    props: ITreeSelectProps,
    api: ITreeSelectApi,
    ctrlPressedRef: React.MutableRefObject<boolean>,
    errorMsg: string,
    messageBox?: MessageBoxApi
) => {
    const buttonsApi: IButtonsRowApi = api.getButtonsApi();
    const deleteResult = props?.onDelete?.(node, api);

    if (!IsPromise(deleteResult)) {
        if (api.isNodeSelected(node)) api.selectNode(node, false);
        api.removeNode(node);
        if (!ctrlPressedRef.current) api.setIsOpen(undefined);
        if (messageBox) messageBox.destroy();
        return;
    }

    if (!props.confirmDelete) {
        buttonsApi.loading('delete', true);
        buttonsApi.disableAll(true);
    }

    deleteResult
        .then(() => {
            messageBox?.destroy();
            if (!api.getIsMounted()) return;
            api.removeNode(node);
            if (!ctrlPressedRef.current) api.setIsOpen(undefined);
            if (!props.confirmDelete) {
                buttonsApi.loading('delete', false);
                buttonsApi.disableAll(false);
            }
        })
        .catch((error: IError) => {
            messageBox?.destroy();
            if (!api.getIsMounted()) return;
            if (!props.confirmDelete) {
                buttonsApi.loading('delete', false);
                buttonsApi.disableAll(false);
            }

            MessageBox.alert({
                language: props.language,
                title: errorMsg,
                content: <ErrorMessage error={error} />,
                colorType: 'danger',
                onOk: () => {
                    if (!ctrlPressedRef.current) api.setIsOpen(undefined);
                },
            });
        });
};

const getDataSet = (node: ITreeSelectNode) => {
    const dataSet = {...node};
    return dataSet as IDFormDataSet;
};
