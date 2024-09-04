import React, {Key, useCallback, useMemo, useState} from 'react';
import {CopyOutlined, DeleteOutlined, EditOutlined, EyeOutlined, PlusOutlined, FolderAddOutlined} from '@ant-design/icons';
import {MergeObjects} from '@krinopotam/js-helpers';
import {ITreeSelectApi, ITreeSelectNode, ITreeSelectProps} from "@src/treeSelect";
import {ITreeSelectButton, ITreeSelectButtons} from "@src/treeSelect/types/types";
import {IDFormDataSet} from "@src/dForm";
import {useTranslate} from "@src/_shared/hooks/useTranslate";
import {translations} from "@src/treeSelect/translations/translations";


export const useInitButtons = (api: ITreeSelectApi, treeProps: ITreeSelectProps) => {
    const [, refreshButtons] = useState({});
    api.getButtonsApi().refreshButtons = useRefreshButtons(refreshButtons);
    const buttons = treeProps.editButtons;
    const buttonsSize = treeProps.buttonsSize ?? 'small';
    const buttonsPos = treeProps.buttonsPosition ?? 'right';
    const iconsOnly = treeProps.buttonsIconsOnly;
    const activeItem = '0'; //api.getActiveRow();
    const selectedNodes = api.getSelectedNodes();

    const headerLabel = useGetHeaderLabel(treeProps);
    const viewButton = useGetViewButton(api, treeProps, selectedNodes);
    const createButton = useGetCreateButton(api, treeProps);
    const createGroupButton = useGetCreateGroupButton(api, treeProps);

    const cloneButton = useGetCloneButton(api, treeProps, selectedNodes);
    const updateButton = useGetUpdateButton(api, treeProps, selectedNodes);
    const deleteButton = useGetDeleteButton(api, treeProps, activeItem);

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

        const resultButtons = MergeObjects(defaultButtons, buttons);

        for (const buttonId in resultButtons) {
            const btn = resultButtons[buttonId];
            if (!btn || buttonId === 'headerLabel' || btn.type === 'hotkey') continue;
            btn.size = btn.size ?? buttonsSize;
            btn.position = btn.position ?? buttonsPos;
            if (iconsOnly) {
                btn.tooltip = btn.tooltip ?? btn.title?.toString();
                btn.title = undefined;
            }

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
        buttons,
        buttonsSize,
        buttonsPos,
        iconsOnly,
    ]);
};

const useRefreshButtons = (refreshButtons: React.Dispatch<React.SetStateAction<Record<string, unknown>>>) => {
    return useCallback(() => {
        refreshButtons({});
    }, [refreshButtons]);
};

/** Get label props */
const useGetHeaderLabel = (api: ITreeSelectProps): ITreeSelectButton | undefined => {
    return useMemo(() => {
        if (!api.headerLabel) return undefined;

        return {
            weight: 1,
            title: api.headerLabel,
            type: 'element',
            position: 'left',
        } satisfies ITreeSelectButton;
    }, [api.headerLabel]);
};

/** Get view button props */
const useGetViewButton = (api: ITreeSelectApi, treeProps: ITreeSelectProps, selectedNodes: ITreeSelectNode[] | undefined): ITreeSelectButton | undefined => {
    const t = useTranslate(treeProps.language, translations, treeProps.translation);

    return useMemo(() => {
        if (!treeProps.editFormProps || !treeProps.readOnly || treeProps.editButtons?.view === null) return undefined;

        return {
            weight: 100,
            title: t('view'),
            tooltip: t('viewRecord'),
            icon: <EyeOutlined />,
            position: 'right',
            disabled: selectedNodes?.length !== 1,
            hotKeys: [{key: 'Enter'}],
            onClick: () => {
                const nodes = api.getSelectedNodes();
                if (nodes?.length !== 1) return;
                const node = nodes[0];
                api.getEditFormApi().open('view', {dataSet: node as IDFormDataSet});
            },
        } satisfies ITreeSelectButton;
    }, [api, treeProps.editFormProps, treeProps.readOnly, treeProps.editButtons?.view, t, selectedNodes]);
};

/** Get create button props */
const useGetCreateButton = (api: ITreeSelectApi, treeProps: ITreeSelectProps): ITreeSelectButton | undefined => {
    const t = useTranslate(treeProps.language, translations, treeProps.translation);

    return useMemo(() => {
        if (!treeProps.editFormProps || treeProps.readOnly || treeProps.editButtons?.create === null) return undefined;
        return {
            weight: 110,
            title: t('create'),
            tooltip: t('createRecord'),
            icon: <PlusOutlined />,
            position: 'right',
            hotKeys: [{key: 'Insert'}],
            onClick: () => {
                const fieldNames = api.getFieldNames();
                const activeNode = api.getActiveNode();
                let parent: ITreeSelectNode | undefined = undefined;
                if (activeNode) {
                    if (!activeNode.isLeaf) parent = activeNode;
                    else parent = api.getParentNode(activeNode[fieldNames.key] as Key);
                }
                console.log(parent);
                api.getEditFormApi().open('create', {defaultValues: {parent}});
            },
        } satisfies ITreeSelectButton;
    }, [api, treeProps.editButtons?.create, treeProps.editFormProps, treeProps.readOnly, t]);
};

/** Get create group button props */
const useGetCreateGroupButton = (api: ITreeSelectApi, treeProps: ITreeSelectProps): ITreeSelectButton | undefined => {
    const t = useTranslate(treeProps.language, translations, treeProps.translation);
    return useMemo(() => {
        if (!treeProps.editGroupFormProps || treeProps.readOnly || treeProps.editButtons?.createGroup === null) return undefined;
        return {
            weight: 115,
            title: t('createGroup'),
            tooltip: t('createRecordsGroup'),
            icon: <FolderAddOutlined />,
            position: 'right',
            onClick: () => {
                const fieldNames = api.getFieldNames();
                const activeNode = api.getActiveNode();
                let parent: ITreeSelectNode | undefined = undefined;
                if (activeNode) {
                    if (!activeNode.isLeaf) parent = activeNode;
                    else parent = api.getParentNode(activeNode[fieldNames.key] as Key);
                }
                api.getEditGroupFormApi().open('create', {defaultValues: {parent}});
            },
        } satisfies ITreeSelectButton;
    }, [api, treeProps.editGroupFormProps, treeProps.readOnly, treeProps.editButtons?.createGroup, t]);
};

/** Get clone button props */
const useGetCloneButton = (api: ITreeSelectApi, treeProps: ITreeSelectProps, selectedNodes: ITreeSelectNode[] | undefined): ITreeSelectButton | undefined => {
    const t = useTranslate(treeProps.language, translations, treeProps.translation);

    return useMemo(() => {
        const editGroupFormProps = treeProps.editGroupFormProps;

        if (!treeProps.editFormProps || treeProps.readOnly || treeProps.editButtons?.clone === null) return undefined;
        const nodes = api.getSelectedNodes();
        const isGroup = nodes?.length === 1 && !nodes[0].isLeaf;

        return {
            weight: 120,
            title: isGroup && editGroupFormProps ? t('cloneGroup') : t('clone'),
            tooltip: isGroup && editGroupFormProps ? t('cloneRecordsGroup') : t('cloneRecord'),
            icon: <CopyOutlined />,
            position: 'right',
            disabled: selectedNodes?.length !== 1,
            hotKeys: [{key: 'F9'}],
            onClick: () => {
                const nodes = api.getSelectedNodes();
                if (nodes?.length !== 1) return;
                const node = nodes[0];

                if (node.isLeaf || !editGroupFormProps) api.getEditFormApi().open('clone', {dataSet: getDataSet(node)});
                else  api.getEditGroupFormApi().open('clone', {dataSet: getDataSet(node)});
            },
        } satisfies ITreeSelectButton;
    }, [api, treeProps.editGroupFormProps, treeProps.editFormProps, treeProps.readOnly, treeProps.editButtons?.clone, t, selectedNodes?.length]);
};

/** Get update button props */
const useGetUpdateButton = (api: ITreeSelectApi, treeProps: ITreeSelectProps, selectedNodes: ITreeSelectNode[] | undefined): ITreeSelectButton | undefined => {
    const t = useTranslate(treeProps.language, translations, treeProps.translation);

    return useMemo(() => {
        const editGroupFormProps = treeProps.editGroupFormProps;

        if (!treeProps.editFormProps || treeProps.readOnly || treeProps.editButtons?.update === null) return undefined;
        const nodes = api.getSelectedNodes();
        const isGroup = nodes?.length === 1 && !nodes[0].isLeaf;

        return {
            weight: 130,
            title: isGroup && editGroupFormProps ? t('editGroup') : t('edit'),
            tooltip: isGroup && editGroupFormProps ? t('editRecordsGroup') : t('editRecord'),
            icon: <EditOutlined />,
            position: 'right',
            disabled: selectedNodes?.length !== 1,
            hotKeys: [{key: 'Enter'}, {key: 'F2'}],
            onClick: () => {
                const nodes = api.getSelectedNodes();
                if (nodes?.length !== 1) return;
                const node = nodes[0];
                const parent = nodes[0];

                if (node.isLeaf || !editGroupFormProps) api.getEditFormApi().open('update', {dataSet: getDataSet(node)});
                else api.getEditGroupFormApi().open('update', {dataSet: {...getDataSet(node), parent}});
            },
        } satisfies ITreeSelectButton;
    }, [api, treeProps.editGroupFormProps, treeProps.editFormProps, treeProps.readOnly, treeProps.editButtons?.update, t, selectedNodes]);
};

/** Get delete button props */
const useGetDeleteButton = (api: ITreeSelectApi, treeProps: ITreeSelectProps, activeItem: any): ITreeSelectButton | undefined => {
    const t = useTranslate(treeProps.language, translations, treeProps.translation);

    return useMemo(() => {
        if (!treeProps.editFormProps || treeProps.readOnly || treeProps.editButtons?.delete === null) return undefined;
        const nodes = api.getSelectedNodes();
        const isGroup = nodes?.length === 1 && !nodes[0].isLeaf;
        const keyField = treeProps.fieldNames?.key ?? 'id';
        return {
            weight: 140,
            title: isGroup ? t('deleteGroup') : t('delete'),
            tooltip: isGroup ? t('deleteRecordsGroup') : t('deleteRecord'),
            icon: <DeleteOutlined />,
            position: 'right',
            colorType: 'danger',
            disabled: !activeItem,
            hotKeys: [{key: 'Delete', ctrl: true}],
            onClick: () => {
                const nodes = api.getSelectedNodes();
                if (nodes?.length !== 1) return;
                const node = nodes[0];
                api.removeNode(node[keyField] as Key, {select: 'next'});
            },
        } satisfies ITreeSelectButton;
    }, [treeProps.editFormProps, treeProps.readOnly, treeProps.editButtons?.delete, treeProps.fieldNames?.key, api, t, activeItem]);
};


const getDataSet = (node: ITreeSelectNode) => {
    const dataSet = {...node};
    delete dataSet.icon;
    delete dataSet.isLeaf;
    return dataSet as IDFormDataSet;
};
