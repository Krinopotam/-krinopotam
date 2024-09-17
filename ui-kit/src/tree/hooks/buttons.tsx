import React, {useCallback, useMemo, useState} from 'react';
import {CopyOutlined, DeleteOutlined, EditOutlined, EyeOutlined, FolderAddOutlined, PlusOutlined} from '@ant-design/icons';
import {MergeObjects} from '@krinopotam/js-helpers';
import {IExtTreeApi, IExtTreeButton, IExtTreeButtons, IExtTreeNode, IExtTreeProps} from '@src/tree/types/types';
import {IDFormDataSet} from '@src/dForm';
import {IKey} from '@krinopotam/service-types';

export const useInitButtons = (treeApi: IExtTreeApi, treeProps: IExtTreeProps): IExtTreeButtons => {
    const [, refreshButtons] = useState({});
    const buttons = treeProps.buttons;
    const buttonsSize = treeProps.buttonsSize ?? 'small';
    const buttonsPos = treeProps.buttonsPosition ?? 'right';
    const activeItem = '0'; //treeApi.getActiveRow();
    const selectedNodes = treeApi.getSelectedNodes();

    treeApi.getButtonsApi().refreshButtons = useRefreshButtons(refreshButtons);

    const headerLabel = useGetHeaderLabel(treeProps);
    const viewButton = useGetViewButton(treeApi, treeProps, selectedNodes);
    const createButton = useGetCreateButton(treeApi, treeProps);
    const createGroupButton = useGetCreateGroupButton(treeApi, treeProps);

    const cloneButton = useGetCloneButton(treeApi, treeProps, selectedNodes);
    const updateButton = useGetUpdateButton(treeApi, treeProps, selectedNodes);
    const deleteButton = useGetDeleteButton(treeApi, treeProps, activeItem);
    const arrowUpHotkey = useGetArrowUpHotKey(treeApi);
    const arrowDownHotkey = useGetArrowDownHotKey(treeApi);

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

        const resultButtons = MergeObjects(defaultButtons, buttons);

        for (const buttonId in resultButtons) {
            const btn = resultButtons[buttonId];
            if (!btn || buttonId === 'headerLabel' || btn.type === 'hotkey') continue;
            btn.size = btn.size ?? buttonsSize;
            btn.position = btn.position ?? buttonsPos;
            if (btn.checkDisabled) btn.disabled = !activeItem;
            if (btn.checkHidden) btn.hidden = !activeItem;
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
        buttons,
        buttonsSize,
        buttonsPos,
    ]);
};

const useRefreshButtons = (refreshButtons: React.Dispatch<React.SetStateAction<Record<string, unknown>>>) => {
    return useCallback(() => {
        refreshButtons({});
    }, [refreshButtons]);
};

/** Get label props */
const useGetHeaderLabel = (treeProps: IExtTreeProps): IExtTreeButton | undefined => {
    return useMemo(() => {
        if (!treeProps.headerLabel) return undefined;

        return {
            weight: 1,
            title: treeProps.headerLabel,
            type: 'element',
            position: 'left',
        } satisfies IExtTreeButton;
    }, [treeProps.headerLabel]);
};

/** Get view button props */
const useGetViewButton = (api: IExtTreeApi, treeProps: IExtTreeProps, selectedNodes: IExtTreeNode[] | undefined): IExtTreeButton | undefined => {
    return useMemo(() => {
        const editFormApi = api.getEditFormApi();
        if (!treeProps.editFormProps || !treeProps.readOnly || treeProps.buttons?.view === null) return undefined;

        return {
            weight: 100,
            title: api.t('view'),
            tooltip: api.t('viewRecord'),
            icon: <EyeOutlined />,
            position: 'right',
            disabled: selectedNodes?.length !== 1,
            hotKeys: [{key: 'Enter'}],
            onClick: () => {
                const nodes = api.getSelectedNodes();
                if (nodes?.length !== 1) return;
                const node = nodes[0];
                editFormApi.open('view', {dataSet: node as IDFormDataSet});
            },
        } satisfies IExtTreeButton;
    }, [api, treeProps.editFormProps, treeProps.readOnly, treeProps.buttons?.view, selectedNodes]);
};

/** Get create button props */
const useGetCreateButton = (api: IExtTreeApi, treeProps: IExtTreeProps): IExtTreeButton | undefined => {
    return useMemo(() => {
        const editFormApi = api.getEditFormApi();

        if (!treeProps.editFormProps || treeProps.readOnly || treeProps.buttons?.create === null) return undefined;
        return {
            weight: 110,
            title: api.t('create'),
            tooltip: api.t('createRecord'),
            icon: <PlusOutlined />,
            position: 'right',
            hotKeys: [{key: 'Insert'}],
            onClick: () => {
                const fieldNames = api.getFieldNames();
                const activeNode = api.getActiveNode();
                let parent: IExtTreeNode | undefined = undefined;
                if (activeNode) {
                    if (!activeNode.isLeaf) parent = activeNode;
                    else parent = api.getParentNode(activeNode[fieldNames.key] as IKey);
                }
                console.log(parent);
                editFormApi.open('create', {defaultValues: {parent}});
            },
        } satisfies IExtTreeButton;
    }, [api, treeProps.buttons?.create, treeProps.editFormProps, treeProps.readOnly]);
};

/** Get create group button props */
const useGetCreateGroupButton = (api: IExtTreeApi, treeProps: IExtTreeProps): IExtTreeButton | undefined => {
    return useMemo(() => {
        const editGroupFormApi = api.getEditGroupFormApi();
        if (!treeProps.editGroupFormProps || treeProps.readOnly || treeProps.buttons?.createGroup === null) return undefined;
        return {
            weight: 115,
            title: api.t('createGroup'),
            tooltip: api.t('createRecordsGroup'),
            icon: <FolderAddOutlined />,
            position: 'right',
            onClick: () => {
                const fieldNames = api.getFieldNames();
                const activeNode = api.getActiveNode();
                let parent: IExtTreeNode | undefined = undefined;
                if (activeNode) {
                    if (!activeNode.isLeaf) parent = activeNode;
                    else parent = api.getParentNode(activeNode[fieldNames.key] as IKey);
                }
                editGroupFormApi.open('create', {defaultValues: {parent}});
            },
        } satisfies IExtTreeButton;
    }, [api, treeProps.editGroupFormProps, treeProps.readOnly, treeProps.buttons?.createGroup]);
};

/** Get clone button props */
const useGetCloneButton = (api: IExtTreeApi, treeProps: IExtTreeProps, selectedNodes: IExtTreeNode[] | undefined): IExtTreeButton | undefined => {
    return useMemo(() => {
        const editFormApi = api.getEditFormApi();
        const editGroupFormApi = api.getEditGroupFormApi();
        const editGroupFormProps = treeProps.editGroupFormProps;

        if (!treeProps.editFormProps || treeProps.readOnly || treeProps.buttons?.clone === null) return undefined;
        const nodes = api.getSelectedNodes();
        const isGroup = nodes?.length === 1 && !nodes[0].isLeaf;

        return {
            weight: 120,
            title: isGroup && editGroupFormProps ? api.t('cloneGroup') : api.t('clone'),
            tooltip: isGroup && editGroupFormProps ? api.t('cloneRecordsGroup') : api.t('cloneRecord'),
            icon: <CopyOutlined />,
            position: 'right',
            disabled: selectedNodes?.length !== 1,
            hotKeys: [{key: 'F9'}],
            onClick: () => {
                const nodes = api.getSelectedNodes();
                if (nodes?.length !== 1) return;
                const node = nodes[0];

                if (node.isLeaf || !editGroupFormProps) editFormApi.open('clone', {dataSet: getDataSet(node)});
                else editGroupFormApi.open('clone', {dataSet: getDataSet(node)});
            },
        } satisfies IExtTreeButton;
    }, [api, treeProps.editGroupFormProps, treeProps.editFormProps, treeProps.readOnly, treeProps.buttons?.clone, selectedNodes]);
};

/** Get update button props */
const useGetUpdateButton = (api: IExtTreeApi, treeProps: IExtTreeProps, selectedNodes: IExtTreeNode[] | undefined): IExtTreeButton | undefined => {
    return useMemo(() => {
        const editFormApi = api.getEditFormApi();
        const editGroupFormApi = api.getEditGroupFormApi();
        const editGroupFormProps = treeProps.editGroupFormProps;

        if (!treeProps.editFormProps || treeProps.readOnly || treeProps.buttons?.update === null) return undefined;
        const nodes = api.getSelectedNodes();
        const isGroup = nodes?.length === 1 && !nodes[0].isLeaf;

        return {
            weight: 130,
            title: isGroup && editGroupFormProps ? api.t('editGroup') : api.t('edit'),
            tooltip: isGroup && editGroupFormProps ? api.t('editRecordsGroup') : api.t('editRecord'),
            icon: <EditOutlined />,
            position: 'right',
            disabled: selectedNodes?.length !== 1,
            hotKeys: [{key: 'Enter'}, {key: 'F2'}],
            onClick: () => {
                const nodes = api.getSelectedNodes();
                if (nodes?.length !== 1) return;
                const node = nodes[0];
                const parent = nodes[0];

                if (node.isLeaf || !editGroupFormProps) editFormApi.open('update', {dataSet: getDataSet(node)});
                else editGroupFormApi.open('update', {dataSet: {...getDataSet(node), parent}});
            },
        } satisfies IExtTreeButton;
    }, [api, treeProps.editGroupFormProps, treeProps.editFormProps, treeProps.readOnly, treeProps.buttons?.update, selectedNodes]);
};

/** Get delete button props */
const useGetDeleteButton = (api: IExtTreeApi, treeProps: IExtTreeProps, activeItem: any): IExtTreeButton | undefined => {
    return useMemo(() => {
        if (!treeProps.editFormProps || treeProps.readOnly || treeProps.buttons?.delete === null) return undefined;
        const nodes = api.getSelectedNodes();
        const isGroup = nodes?.length === 1 && !nodes[0].isLeaf;
        const keyField = treeProps.fieldNames?.key ?? 'id';
        return {
            weight: 140,
            title: isGroup ? api.t('deleteGroup') : api.t('delete'),
            tooltip: isGroup ? api.t('deleteRecordsGroup') : api.t('deleteRecord'),
            icon: <DeleteOutlined />,
            position: 'right',
            colorType: 'danger',
            disabled: !activeItem,
            hotKeys: [{key: 'Delete', ctrl: true}],
            onClick: () => {
                const nodes = api.getSelectedNodes();
                if (nodes?.length !== 1) return;
                const node = nodes[0];
                api.removeNode(node[keyField] as IKey, {select: 'next'});
            },
        } satisfies IExtTreeButton;
    }, [treeProps.editFormProps, treeProps.readOnly, treeProps.buttons?.delete, treeProps.fieldNames?.key, api, activeItem]);
};

/** Get arrow up hotkey props */
const useGetArrowUpHotKey = (treeApi: IExtTreeApi): IExtTreeButton | undefined => {
    return useMemo(() => {
        return {
            type: 'hotkey',
            hotKeys: [{key: 'ArrowUp'}],
            onClick: () => {
                const activeKey = treeApi.getSelectedKeys()?.[0];
                const prevNode = treeApi.getPrevNodeKey(activeKey);
                if (prevNode) treeApi.setSelectedKeys([prevNode]);
            },
        } satisfies IExtTreeButton;
    }, [treeApi]);
};

/** Get arrow down hotkey props */
const useGetArrowDownHotKey = (treeApi: IExtTreeApi): IExtTreeButton | undefined => {
    return useMemo(() => {
        return {
            type: 'hotkey',
            hotKeys: [{key: 'ArrowDown'}],
            onClick: () => {
                const activeKey = treeApi.getSelectedKeys()?.[0];
                const nextNode = treeApi.getNextNodeKey(activeKey);
                if (nextNode) treeApi.setSelectedKeys([nextNode]);
            },
        } satisfies IExtTreeButton;
    }, [treeApi]);
};

const getDataSet = (node: IExtTreeNode) => {
    const dataSet = {...node};
    delete dataSet.icon;
    delete dataSet.isLeaf;
    return dataSet as IDFormDataSet;
};
