// noinspection DuplicatedCode

import {MergeObjects} from '@krinopotam/js-helpers/helpersObjects/mergeObjects';
import {useGetCloneButton} from '@src/_shared/hooks/buttons/useGetCloneButton';
import {useGetCreateButton} from '@src/_shared/hooks/buttons/useGetCreateButton';
import {useGetCreateGroupButton} from '@src/_shared/hooks/buttons/useGetCreateGroupButton';
import {useGetDeleteButton} from '@src/_shared/hooks/buttons/useGetDeleteButton';
import {useGetHeaderLabel} from '@src/_shared/hooks/buttons/useGetHeaderLabel';
import {useGetUpdateButton} from '@src/_shared/hooks/buttons/useGetUpdateButton';
import {useGetViewButton} from '@src/_shared/hooks/buttons/useGetViewButton';
import {IDFormDataSet} from '@src/dForm';
import {ITreeSelectApi, ITreeSelectNode, ITreeSelectProps} from '@src/treeSelect';
import {TreeSelectContext} from '@src/treeSelect/context/context';
import {ITreeSelectButtons} from '@src/treeSelect/types/types';
import {useCallback, useContext, useMemo, useState} from 'react';

export const useGetButtonsProps = (api: ITreeSelectApi, props: ITreeSelectProps) => {
    const {dialogOpenedRef} = useContext(TreeSelectContext);
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
    const deleteButton = useGetDeleteButton(
        api,
        props,
        activeNode,
        isLeaf,
        () => {
            dialogOpenedRef.current = true;
        },
        () => {
            dialogOpenedRef.current = false;
        }
    );

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


const prepareFormDataSet = (node: ITreeSelectNode) => {
    const dataSet = {...node};
    return dataSet as IDFormDataSet;
};
