import {Key, useCallback, useMemo, useState} from 'react';
import {MergeObjects} from '@krinopotam/js-helpers';
import {ITreeSelectApi, ITreeSelectNode, ITreeSelectProps} from '@src/treeSelect';
import {ITreeSelectButton, ITreeSelectButtons} from '@src/treeSelect/types/types';
import {IDFormDataSet} from '@src/dForm';
import {useTranslate} from '@src/_shared/hooks/useTranslate';

import {
    defaultButtonClone,
    defaultButtonCreate,
    defaultButtonCreateGroup,
    defaultButtonDelete,
    defaultButtonUpdate,
    defaultButtonView,
    defaultHeaderLabel,
} from '@src/_shared/hooks/buttons/defaultButtonsProps';
import {translations} from '@src/treeSelect/translations/translations';

let i = 0;
export const useInitButtons = (api: ITreeSelectApi, treeProps: ITreeSelectProps) => {
    api.getButtonsApi().refreshButtons = useRefreshButtons();

    const activeNode = api.getActiveNode(true);
    const isGroup = treeProps.groupsMode && !activeNode?.isLeaf;

    const buttons = treeProps.editButtons;
    const buttonsSize = treeProps.buttonsSize ?? 'small';
    const buttonsPos = treeProps.buttonsPosition ?? 'right';
    const activeItem = '0'; //api.getActiveRow();
    const selectedNodes = api.getSelectedNodes();

    const headerLabel = useGetHeaderLabel(treeProps);
    const viewButton = useGetViewButton(api, treeProps, selectedNodes);
    const createButton = useGetCreateButton(api, treeProps);
    const createGroupButton = useGetCreateGroupButton(api, treeProps);

    const cloneButton = useGetCloneButton(api, treeProps, selectedNodes);
    const updateButton = useGetUpdateButton(api, treeProps, selectedNodes);
    const deleteButton = useGetDeleteButton(api, treeProps, activeNode, isGroup);

    return useMemo(() => {
        const defaultButtons = {
            headerLabel: headerLabel,
            view: viewButton,
            create: createButton,
            createGroup: createGroupButton,
            clone: cloneButton,
            update: updateButton,
            delete: deleteButton,
            ver: {title: i++},
        } as ITreeSelectButtons;

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
    }, [headerLabel, viewButton, createButton, createGroupButton, cloneButton, updateButton, deleteButton, buttons, buttonsSize, buttonsPos]);
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

/** Get view button props */
const useGetViewButton = (api: ITreeSelectApi, treeProps: ITreeSelectProps, selectedNodes: ITreeSelectNode[] | undefined): ITreeSelectButton | undefined => {
    const t = useTranslate(treeProps.language, translations, treeProps.translation);

    return useMemo(() => {
        if (!treeProps.editFormProps || !treeProps.readOnly || treeProps.editButtons?.view === null) return undefined;

        return {
            ...defaultButtonView,
            title: t('view'),
            tooltip: t('viewRecord'),
            disabled: selectedNodes?.length !== 1,
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
            ...defaultButtonCreate,
            title: t('create'),
            tooltip: t('createRecord'),
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
            ...defaultButtonCreateGroup,
            title: t('createGroup'),
            tooltip: t('createRecordsGroup'),
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
            ...defaultButtonClone,
            title: isGroup && editGroupFormProps ? t('cloneGroup') : t('clone'),
            tooltip: isGroup && editGroupFormProps ? t('cloneRecordsGroup') : t('cloneRecord'),
            disabled: selectedNodes?.length !== 1,
            onClick: () => {
                const nodes = api.getSelectedNodes();
                if (nodes?.length !== 1) return;
                const node = nodes[0];

                if (node.isLeaf || !editGroupFormProps) api.getEditFormApi().open('clone', {dataSet: getDataSet(node)});
                else api.getEditGroupFormApi().open('clone', {dataSet: getDataSet(node)});
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
            ...defaultButtonUpdate,
            title: isGroup && editGroupFormProps ? t('editGroup') : t('edit'),
            tooltip: isGroup && editGroupFormProps ? t('editRecordsGroup') : t('editRecord'),
            disabled: selectedNodes?.length !== 1,
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
const useGetDeleteButton = (
    api: ITreeSelectApi,
    treeProps: ITreeSelectProps,
    activeNode: ITreeSelectNode | undefined,
    isGroup?: boolean
): ITreeSelectButton | undefined => {
    const t = useT(api);

    return useMemo(() => {
        if (!treeProps.editFormProps || treeProps.readOnly || treeProps.editButtons?.delete === null) return undefined;
        return {
            ...defaultButtonDelete,
            title: isGroup ? t('deleteGroup') : t('delete'),
            tooltip: isGroup ? t('deleteRecordsGroup') : t('deleteRecord'),
            disabled: !activeNode,
            onClick: () => {
                if (!activeNode) return;
                api.deleteNode(activeNode);
            },
        } satisfies ITreeSelectButton;
    }, [treeProps.editFormProps, treeProps.readOnly, treeProps.editButtons?.delete, isGroup, t, activeNode, api]);
};

const getDataSet = (node: ITreeSelectNode) => {
    const dataSet = {...node};
    delete dataSet.icon;
    delete dataSet.isLeaf;
    return dataSet as IDFormDataSet;
};

const useT = (api: ITreeSelectApi) => {
    const treeProps = api.getProps();
    const t = useTranslate(treeProps.language, translations, treeProps.translation);
    return useMemo(() => t, [t]);
};
