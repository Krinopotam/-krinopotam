import React, {useCallback} from 'react';
import type {TreeProps} from 'antd';
import {Tree as AntdTree} from 'antd';
import type {IExtTreeNode} from '@src/tree/types/types';
import {IExtTreeApi, IExtTreeProps} from '@src/tree/types/types';
import {IKey} from '@krinopotam/service-types';
import {INodePosition} from "@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes";

export const TreeRender = (props: {treeApi: IExtTreeApi; allProps: IExtTreeProps; antdTreeProps: TreeProps<IExtTreeNode>}): React.JSX.Element => {
    const treeApi = props.treeApi;
    const onSelect = useOnSelect(treeApi);
    const onExpand = useOnExpand(treeApi);
    const onDblClick = useOnDoubleClick(treeApi);
    const onDrop = useOnDrop(treeApi);

    return (
        <AntdTree
            className="draggable-tree"
            draggable
            onDrop={onDrop}
            {...props.antdTreeProps}
            /* no override section */
            ref={props.treeApi.treeRef}
            treeData={treeApi.getDataSet()}
            selectedKeys={treeApi.getSelectedKeys()}
            expandedKeys={treeApi.getExpandedKeys()}
            fieldNames={{key: 'id', title: 'title', children: 'children', ...props.allProps.fieldNames}}
            onSelect={onSelect}
            onExpand={onExpand}
            onDoubleClick={onDblClick}
        />
    );
};

const useOnSelect = (treeApi: IExtTreeApi) => {
    return useCallback<NonNullable<IExtTreeProps['onSelect']>>(
        (keys, info) => {
            const props = treeApi.getProps();

            if (!props.noDeselect || info.selected) {
                treeApi.setSelectedKeys(keys as IKey[]);
                props.onSelect?.(keys, info);
            }
        },
        [treeApi]
    );
};

const useOnExpand = (treeApi: IExtTreeApi) => {
    return useCallback<NonNullable<IExtTreeProps['onExpand']>>(
        (keys, info) => {
            const props = treeApi.getProps();
            treeApi.setExpandedKeys(keys as IKey[]);
            props.onExpand?.(keys, info);
        },
        [treeApi]
    );
};

const useOnDoubleClick = (treeApi: IExtTreeApi) => {
    return useCallback<NonNullable<IExtTreeProps['onDoubleClick']>>(
        (e, node) => {
            const props = treeApi.getProps();
            const fieldNames = treeApi.getFieldNames();

            if ((node[fieldNames.children] as IExtTreeNode[])?.length) treeApi.toggleNode(node[fieldNames.key] as IKey);
            else treeApi.getButtonsApi().triggerClick('update');

            if (props.onDoubleClick) props.onDoubleClick?.(e, node);
        },
        [treeApi]
    );
};

const useOnDrop = (api: IExtTreeApi) => {
    return useCallback<NonNullable<TreeProps<IExtTreeNode>['onDrop']>>(
        info => {
            let pos: INodePosition = 'insideTop';
            if (info.dropToGap) pos = info.dropPosition < 0 ? 'above' : 'below';
            if (!info.dragNode.id) return
            api.moveNode(info.dragNode.id, info.node.id, pos);
        },
        [api]
    );
};
