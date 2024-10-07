// noinspection DuplicatedCode

import {useGetCloneButton} from '@src/_shared/hooks/buttons/useGetCloneButton';
import {useGetCreateButton} from '@src/_shared/hooks/buttons/useGetCreateButton';
import {useGetCreateGroupButton} from '@src/_shared/hooks/buttons/useGetCreateGroupButton';
import {useGetDeleteButton} from '@src/_shared/hooks/buttons/useGetDeleteButton';
import {useGetHeaderLabel} from '@src/_shared/hooks/buttons/useGetHeaderLabel';
import {useGetUpdateButton} from '@src/_shared/hooks/buttons/useGetUpdateButton';
import {useGetViewButton} from '@src/_shared/hooks/buttons/useGetViewButton';
import {IDFormDataSet} from '@src/dForm';
import {IExtTreeApi, IExtTreeButton, IExtTreeButtons, IExtTreeNode, IExtTreeProps} from '@src/tree';
import {useCallback, useMemo, useState} from 'react';
import {mergeButtons} from '@src/buttonsRow';

export const useGetButtonsProps = (api: IExtTreeApi, props: IExtTreeProps) => {
    api.getButtonsApi().refreshButtons = useRefreshButtons();
    const fieldNames = api.getFieldNames();

    const activeNode = api.getActiveNode(true);
    const isLeaf = !!activeNode?.isLeaf || !!(props.groupsMode && !activeNode?.[fieldNames.isGroup]);

    const propsButtons = props.buttons;
    const buttonsSize = props.buttonsSize ?? 'small';
    const buttonsPos = props.buttonsPosition ?? 'right';

    const headerLabel = useGetHeaderLabel(props);
    const createButton = useGetCreateButton(api, props, isLeaf);
    const createGroupButton = useGetCreateGroupButton(api, props, isLeaf);
    const viewButton = useGetViewButton(api, props, activeNode, prepareFormDataSet, isLeaf);
    const cloneButton = useGetCloneButton(api, props, activeNode, prepareFormDataSet, isLeaf);
    const updateButton = useGetUpdateButton(api, props, activeNode, prepareFormDataSet, isLeaf);
    const deleteButton = useGetDeleteButton(api, props, activeNode, isLeaf);
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

        const resultButtons = mergeButtons(defaultButtons, propsButtons);

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
