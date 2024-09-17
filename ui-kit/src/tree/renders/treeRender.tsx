import React, {Key, useCallback} from 'react';
import type {TreeProps} from 'antd';
import {Tree as AntdTree} from 'antd';
import type {IExtTreeNode} from '@src/tree/types/types';
import {IExtTreeApi, IExtTreeProps, INodePosition} from '@src/tree/types/types';

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
            const props = treeApi.getTreeProps();

            if (!props.noDeselect || info.selected) {
                treeApi.setSelectedKeys(keys);
                props.onSelect?.(keys, info);
            }
        },
        [treeApi]
    );
};

const useOnExpand = (treeApi: IExtTreeApi) => {
    return useCallback<NonNullable<IExtTreeProps['onExpand']>>(
        (keys, info) => {
            const props = treeApi.getTreeProps();
            treeApi.setExpandedKeys(keys);
            props.onExpand?.(keys, info);
        },
        [treeApi]
    );
};

const useOnDoubleClick = (treeApi: IExtTreeApi) => {
    return useCallback<NonNullable<IExtTreeProps['onDoubleClick']>>(
        (e, node) => {
            const props = treeApi.getTreeProps();
            const fieldNames = treeApi.getFieldNames();

            if ((node[fieldNames.children] as IExtTreeNode[])?.length) treeApi.toggleNode(node[fieldNames.key] as Key);
            else treeApi.buttonsApi.triggerClick('update');

            if (props.onDoubleClick) props.onDoubleClick?.(e, node);
        },
        [treeApi]
    );
};

const useOnDrop = (treeApi: IExtTreeApi) => {
    return useCallback<NonNullable<TreeProps<IExtTreeNode>['onDrop']>>(
        info => {
            let pos: INodePosition = 'insideTop';
            if (info.dropToGap) pos = info.dropPosition < 0 ? 'above' : 'below';
            treeApi.moveNode(info.dragNode.id, info.node.id, pos);
        },
        [treeApi]
    );
};
