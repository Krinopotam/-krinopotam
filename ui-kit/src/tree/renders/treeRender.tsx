import React from 'react';
import type {TreeProps} from 'antd';
import {Tree as AntdTree} from 'antd';
import type {IExtTreeNode} from '@src/tree/types/types';
import {IExtTreeApi, IExtTreeProps} from '@src/tree/types/types';
import {IError, IKey} from '@krinopotam/service-types';
import {INodePosition} from '@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes';
import {MessageBox, MessageBoxApi} from '@src/messageBox';
import {IsPromise} from '@krinopotam/js-helpers/helpersObjects/isPromise';
import {ErrorMessage} from '@src/errorMessage';

export const TreeRender = ({
    treeApi,
    allProps,
    antdTreeProps,
}: {
    treeApi: IExtTreeApi;
    allProps: IExtTreeProps;
    antdTreeProps: TreeProps<IExtTreeNode>;
}): React.JSX.Element => {
    const onSelect = useOnSelect(treeApi);
    const onExpand = useOnExpand(treeApi);
    const onDblClick = useOnDoubleClick(treeApi);
    const onDrop = useOnDrop(treeApi);
    const allowDrop = useAllowDrop(treeApi);

    return (
        <AntdTree
            className="draggable-tree"
            onDrop={onDrop}
            allowDrop={allowDrop}
            {...antdTreeProps}
            /* no override section */
            draggable={!allProps.readOnly && allProps.draggable !== false}
            ref={treeApi.treeRef}
            treeData={treeApi.getDataSet()}
            selectedKeys={treeApi.getSelectedKeys()}
            expandedKeys={treeApi.getExpandedKeys()}
            fieldNames={{key: 'id', title: 'title', children: 'children', ...allProps.fieldNames}}
            onSelect={onSelect}
            onExpand={onExpand}
            onDoubleClick={onDblClick}
        />
    );
};

const useOnSelect = (treeApi: IExtTreeApi): NonNullable<IExtTreeProps['onSelect']> => {
    return (keys, info) => {
        const props = treeApi.getProps();

        if (!props.noDeselect || info.selected) {
            treeApi.setSelectedKeys(keys as IKey[]);
            props.onSelect?.(keys, info);
        }
    };
};

const useOnExpand = (treeApi: IExtTreeApi): NonNullable<IExtTreeProps['onExpand']> => {
    return (keys, info) => {
        const props = treeApi.getProps();
        treeApi.setExpandedKeys(keys as IKey[]);
        props.onExpand?.(keys, info);
    };
};

const useOnDoubleClick = (treeApi: IExtTreeApi): NonNullable<IExtTreeProps['onDoubleClick']> => {
    return (e, node) => {
        const props = treeApi.getProps();
        if (props.onDoubleClick) props.onDoubleClick?.(e, node);

        const fieldNames = treeApi.getFieldNames();

        if (!props.disabled && !props.readOnly && (props.editFormProps || props.editGroupFormProps)) {
            treeApi.getButtonsApi().triggerClick('update');
            return;
        }

        if ((node[fieldNames.children] as IExtTreeNode[])?.length) treeApi.toggleNode(node[fieldNames.key] as IKey);
    };
};

const useAllowDrop = (api: IExtTreeApi): NonNullable<IExtTreeProps['allowDrop']> => {
    return info => {
        //dropPosition: -1 - above (root only), 0 - inside, 1 - below
        const treeProps = api.getProps();
        const fieldNames = api.getFieldNames();
        if (treeProps.groupsMode) {
            if (treeProps.draggableOrder) return (info.dropPosition <= 0 && info.dropNode[fieldNames.isGroup]) || info.dropPosition > 0;
            return info.dropPosition <= 0 && info.dropNode[fieldNames.isGroup];
        }

        return treeProps.draggableOrder ? true : info.dropPosition === 0;
    };
};

const useOnDrop = (api: IExtTreeApi): NonNullable<TreeProps<IExtTreeNode>['onDrop']> => {
    return info => {
        const treeProps = api.getProps();
        let pos: INodePosition = 'insideTop';
        if (info.dropToGap) pos = info.dropPosition < 0 ? 'above' : 'below';
        if (!info.dragNode) return;

        if (!treeProps.confirmMove) {
            moveNode(info.dragNode, info.node, pos, true, api);
            return;
        }

        const messageBox = MessageBox.confirmWaiter({
            language: treeProps.language,
            content: treeProps.nodeMoveMessage ?? api.t('moveRecordQt'),
            onOk: () => {
                moveNode(info.dragNode, info.node, pos, true, api, messageBox);
            },
            onCancel: () => {
                messageBox.destroy();
            },
        });
    };
};

const moveNode = (node: IExtTreeNode, targetNode: IExtTreeNode, pos: INodePosition, ensureVisible: boolean, api: IExtTreeApi, messageBox?: MessageBoxApi) => {
    const props = api.getProps();
    const moveResult = props?.onNodeMove?.(node, targetNode, pos, api);

    if (!IsPromise(moveResult)) {
        api.moveNode(node, targetNode, pos, {ensureVisible: ensureVisible, sortNodes: props.sortOnChange});
        if (messageBox) messageBox.destroy();
        return;
    }

    moveResult
        .then(() => {
            messageBox?.destroy();
            if (!api.getIsMounted()) return;
            api.moveNode(node, targetNode, pos, {ensureVisible: ensureVisible, sortNodes: props.sortOnChange});
        })
        .catch((error: IError) => {
            messageBox?.destroy();
            if (!api.getIsMounted()) return;

            MessageBox.alert({
                language: props.language,
                title: api.t('error'),
                content: <ErrorMessage error={error} />,
                colorType: 'danger',
            });
        });
};
