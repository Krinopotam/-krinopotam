// noinspection DuplicatedCode

import React, {useCallback, useMemo, useState} from 'react';
import {IsPromise} from '@krinopotam/js-helpers/helpersObjects/isPromise';
import {MergeObjects} from '@krinopotam/js-helpers/helpersObjects/mergeObjects';
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
import {IExtTreeApi, IExtTreeButton, IExtTreeButtons, IExtTreeNode, IExtTreeProps} from '@src/tree';

export const useGetButtonsProps = (api: IExtTreeApi, props: IExtTreeProps) => {
    api.getButtonsApi().refreshButtons = useRefreshButtons();
    const fieldNames = api.getFieldNames();

    const activeNode = api.getActiveNode(true);
    const isGroup = !activeNode?.isLeaf && (!props.groupsMode || activeNode?.[fieldNames.isGroup]);

    const propsButtons = props.buttons;
    const buttonsSize = props.buttonsSize ?? 'small';
    const buttonsPos = props.buttonsPosition ?? 'right';

    const headerLabel = useGetHeaderLabel(props);
    const createButton = useGetCreateButton(api, props, isGroup);
    const createGroupButton = useGetCreateGroupButton(api, props, isGroup);
    const viewButton = useGetViewButton(api, props, activeNode, isGroup);
    const cloneButton = useGetCloneButton(api, props, activeNode, isGroup);
    const updateButton = useGetUpdateButton(api, props, activeNode, isGroup);
    const deleteButton = useGetDeleteButton(api, props, activeNode, isGroup);
    const arrowUpHotkey = useGetArrowUpHotKey(api);
    const arrowDownHotkey = useGetArrowDownHotKey(api);

    return useMemo(() => {
        const defaultButtons = {
            headerLabel: headerLabel,
            view: viewButton,
            create: createButton,
            createGroup: createGroupButton,
            clone: cloneButton,
            update: updateButton,
            delete: deleteButton,
            arrowUp: arrowUpHotkey,
            arrowDown: arrowDownHotkey,
        } as IExtTreeButtons;

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
    }, [
        headerLabel,
        viewButton,
        createButton,
        createGroupButton,
        cloneButton,
        updateButton,
        deleteButton,
        arrowUpHotkey,
        arrowDownHotkey,
        propsButtons,
        buttonsSize,
        buttonsPos,
        activeNode,
    ]);
};

const useRefreshButtons = () => {
    const [, refreshButtons] = useState({});
    return useCallback(() => {
        refreshButtons({});
    }, [refreshButtons]);
};

/** Get label props */
const useGetHeaderLabel = (props: IExtTreeProps): IExtTreeButton | undefined => {
    return useMemo(() => {
        if (!props.headerLabel) return undefined;

        return {
            ...defaultHeaderLabel,
            title: props.headerLabel,
        } satisfies IExtTreeButton;
    }, [props.headerLabel]);
};

/** Get create button props */
const useGetCreateButton = (api: IExtTreeApi, props: IExtTreeProps, isGroup: boolean): IExtTreeButton | undefined => {
    return useMemo(() => {
        if (!props.editFormProps || props.disabled || props.readOnly || props.buttons?.create === null) return undefined;
        return {
            ...defaultButtonCreate,
            title: api.t('create'),
            tooltip: api.t('createRecord'),
            onClick: () => {
                const fieldNames = api.getFieldNames();
                const activeNode = api.getActiveNode(false);
                let parent: IExtTreeNode | undefined = undefined;
                if (activeNode) parent = activeNode && isGroup ? activeNode : api.getParentNode(activeNode);

                api.getEditFormApi().open('create', {defaultValues: {[fieldNames.parent]: parent}});
            },
        } satisfies IExtTreeButton;
    }, [props.editFormProps, props.disabled, props.readOnly, props.buttons?.create, api, isGroup]);
};

/** Get create group button props */
const useGetCreateGroupButton = (api: IExtTreeApi, props: IExtTreeProps, isGroup: boolean): IExtTreeButton | undefined => {
    return useMemo(() => {
        if (!props.editGroupFormProps || !props.groupsMode || props.disabled || props.readOnly || props.buttons?.createGroup === null) return undefined;
        return {
            ...defaultButtonCreateGroup,
            title: api.t('createGroup'),
            tooltip: api.t('createRecordsGroup'),
            onClick: () => {
                const fieldNames = api.getFieldNames();
                const activeNode = api.getActiveNode(false);
                let parent: IExtTreeNode | undefined = undefined;
                if (activeNode) parent = activeNode && isGroup ? activeNode : api.getParentNode(activeNode);

                api.getEditGroupFormApi().open('create', {defaultValues: {[fieldNames.parent]: parent}});
            },
        } satisfies IExtTreeButton;
    }, [props.editGroupFormProps, props.groupsMode, props.disabled, props.readOnly, props.buttons?.createGroup, api, isGroup]);
};

/** Get view button props */
const useGetViewButton = (api: IExtTreeApi, props: IExtTreeProps, activeNode: IExtTreeNode | undefined, isGroup?: boolean): IExtTreeButton | undefined => {
    return useMemo(() => {
        if ((!isGroup && !props.editFormProps) || (isGroup && !props.editGroupFormProps) || !props.readOnly || props.disabled || props.buttons?.view === null)
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
                if (!isGroup) api.getEditFormApi().open('view', {dataSet: {...prepareFormDataSet(activeNode), [fieldNames.parent]: parent}});
                else api.getEditGroupFormApi().open('view', {dataSet: {...prepareFormDataSet(activeNode), [fieldNames.parent]: parent}});
            },
        } satisfies IExtTreeButton;
    }, [isGroup, props.editFormProps, props.editGroupFormProps, props.readOnly, props.disabled, props.buttons?.view, activeNode, api]);
};

/** Get clone button props */
const useGetCloneButton = (api: IExtTreeApi, props: IExtTreeProps, activeNode: IExtTreeNode | undefined, isGroup?: boolean): IExtTreeButton | undefined => {
    return useMemo(() => {
        const editGroupFormProps = props.editGroupFormProps;

        if ((!isGroup && !props.editFormProps) || (isGroup && !props.editGroupFormProps) || props.disabled || props.readOnly || props.buttons?.clone === null)
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
                if (!isGroup) api.getEditFormApi().open('clone', {dataSet: {...prepareFormDataSet(activeNode), [fieldNames.parent]: parent}});
                else api.getEditGroupFormApi().open('clone', {dataSet: {...prepareFormDataSet(activeNode), [fieldNames.parent]: parent}});
            },
        } satisfies IExtTreeButton;
    }, [props.editGroupFormProps, props.editFormProps, props.disabled, props.readOnly, props.buttons?.clone, isGroup, activeNode, api]);
};

/** Get update button props */
const useGetUpdateButton = (api: IExtTreeApi, props: IExtTreeProps, activeNode: IExtTreeNode | undefined, isGroup?: boolean): IExtTreeButton | undefined => {
    return useMemo(() => {
        const editGroupFormProps = props.editGroupFormProps;

        if ((!isGroup && !props.editFormProps) || (isGroup && !props.editGroupFormProps) || props.disabled || props.readOnly || props.buttons?.update === null)
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
                if (!isGroup) api.getEditFormApi().open('update', {dataSet: {...prepareFormDataSet(activeNode), [fieldNames.parent]: parent}});
                else api.getEditGroupFormApi().open('update', {dataSet: {...prepareFormDataSet(activeNode), [fieldNames.parent]: parent}});
            },
        } satisfies IExtTreeButton;
    }, [props.editGroupFormProps, props.editFormProps, props.disabled, props.readOnly, props.buttons?.update, isGroup, activeNode, api]);
};

/** Get delete button props */
const useGetDeleteButton = (api: IExtTreeApi, props: IExtTreeProps, activeNode: IExtTreeNode | undefined, isGroup?: boolean): IExtTreeButton | undefined => {
    return useMemo(() => {
        if (!props.editFormProps || props.disabled || props.readOnly || props.buttons?.delete === null) return undefined;
        return {
            ...defaultButtonDelete,
            title: isGroup ? api.t('deleteGroup') : api.t('delete'),
            tooltip: isGroup ? api.t('deleteRecordsGroup') : api.t('deleteRecord'),
            disabled: !activeNode,
            onClick: () => {
                if (!activeNode) return;
                if (!props.confirmDelete) {
                    deleteNode(activeNode, props, api);
                    return;
                }

                const messageBox = MessageBox.confirmWaiter({
                    language: props.language,
                    content: props.nodeDeleteMessage ?? api.t('deleteSelectedRecordQt'),
                    colorType: 'danger',
                    onOk: () => {
                        deleteNode(activeNode, props, api, messageBox);
                    },
                    onCancel: () => {
                        messageBox.destroy();
                    },
                });
            },
        } satisfies IExtTreeButton;
    }, [props, isGroup, api, activeNode]);
};

const deleteNode = (node: IExtTreeNode, props: IExtTreeProps, api: IExtTreeApi, messageBox?: MessageBoxApi) => {
    const buttonsApi: IButtonsRowApi = api.getButtonsApi();
    const deleteResult = props?.onDelete?.(node, api);

    if (!IsPromise(deleteResult)) {
        api.removeNode(node, {select: props.selectNewNode ? 'next' : undefined});
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
            api.removeNode(node, {select: props.selectNewNode ? 'next' : undefined});
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
                title: api.t('error'),
                content: <ErrorMessage error={error} />,
                colorType: 'danger',
            });
        });
};

const prepareFormDataSet = (node: IExtTreeNode) => {
    const dataSet = {...node};
    return dataSet as IDFormDataSet;
};

/** Get arrow up hotkey props */
const useGetArrowUpHotKey = (api: IExtTreeApi): IExtTreeButton | undefined => {
    return useMemo(() => {
        return {
            type: 'hotkey',
            hotKeys: [{key: 'ArrowUp'}],
            onClick: () => {
                const activeKey = api.getSelectedKeys()?.[0];
                const prevNode = api.getPrevNodeKey(activeKey);
                if (prevNode) api.setSelectedKeys([prevNode]);
            },
        } satisfies IExtTreeButton;
    }, [api]);
};

/** Get arrow down hotkey props */
const useGetArrowDownHotKey = (api: IExtTreeApi): IExtTreeButton | undefined => {
    return useMemo(() => {
        return {
            type: 'hotkey',
            hotKeys: [{key: 'ArrowDown'}],
            onClick: () => {
                const activeKey = api.getActiveNodeKey();
                const nextNode = api.getNextNodeKey(activeKey);
                if (nextNode) api.setSelectedKeys([nextNode]);
            },
        } satisfies IExtTreeButton;
    }, [api]);
};
