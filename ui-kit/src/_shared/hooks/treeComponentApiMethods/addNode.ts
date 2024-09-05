import React, {Key, useCallback} from 'react';
import {IBaseTreeComponentProps, IFieldNames, INodePosition} from '@src/_shared/@types/nodes';
import {AddElementToArray, CloneObject} from '@krinopotam/js-helpers';
import {useGetNode} from '@src/_shared/hooks/treeComponentApiMethods/useGetNode';
import {useGetParentNode} from '@src/_shared/hooks/treeComponentApiMethods/getParentNode';
import {useSelectNode} from '@src/_shared/hooks/treeComponentApiMethods/useSelected';
import {useEnsureNodeVisible} from '@src/_shared/hooks/treeComponentApiMethods/useEnsureNodeVisible';

export const useAddNode = <T extends Record<string, unknown>>({
    dataSet,
    fieldNames,
    props,
    setDataSet,
    selectedKeys,
    setSelectedKeys,
    expandedKeys,
    setExpandedKeys,
    prepareNodeFn,
}: {
    dataSet: T[] | undefined;
    fieldNames: IFieldNames;
    props: IBaseTreeComponentProps<T>;
    setDataSet: React.Dispatch<React.SetStateAction<T[] | undefined>>;
    selectedKeys: Key[] | undefined;
    setSelectedKeys: React.Dispatch<React.SetStateAction<Key[] | undefined>>;
    expandedKeys: React.Key[] | undefined;
    setExpandedKeys: React.Dispatch<React.SetStateAction<React.Key[] | undefined>>;
    prepareNodeFn: (node: T, props: IBaseTreeComponentProps) => T;
}): ((
    node: T,
    targetKey?: Key,
    position?: INodePosition,
    opts?: {
        ensureVisible?: boolean;
        select?: boolean;
    },
    externalDataset?: T[] | undefined
) => T[] | undefined) => {
    const getNode = useGetNode(dataSet, fieldNames);
    const getParentNode = useGetParentNode(dataSet, fieldNames);
    const selectNode = useSelectNode(selectedKeys, setSelectedKeys, props.multiple);
    const ensureNodeVisible = useEnsureNodeVisible(dataSet, fieldNames, expandedKeys, setExpandedKeys);
    return useCallback(
        (node, targetKey, position, opts, externalDataset) => {
            if (!node) return;

            const data = externalDataset ?? CloneObject(dataSet ?? []);
            const targetNode = getNode(targetKey, data);
            if (!targetNode || ((position === 'insideTop' || position === 'insideBottom') && targetNode?.isLeaf)) position = 'below'; //we can't add node into the leaf node or undefined node

            let targetList: T[] = [];
            if (!targetNode) targetList = data;

            if (targetNode && (position === 'insideTop' || position === 'insideBottom')) {
                if (!targetNode[fieldNames.children]) (targetNode[fieldNames.children] as T[]) = targetList;
                else targetList = targetNode[fieldNames.children] as T[];
                const arrPos = position === 'insideTop' ? 'top' : 'bottom';
                AddElementToArray(targetList, prepareNodeFn(node, props), undefined, arrPos, false);
            } else {
                if (targetNode) {
                    const parentNode = getParentNode(targetNode[fieldNames.key] as Key, data);
                    if (parentNode) targetList = parentNode[fieldNames.children] as T[];
                    else targetList = data;
                }

                if (position === 'above') AddElementToArray(targetList, prepareNodeFn(node, props), targetNode, 'above', false);
                else if (position === 'below') AddElementToArray(targetList, prepareNodeFn(node, props), targetNode, 'below', false);
            }

            if (!externalDataset) setDataSet(data);
            if (opts?.ensureVisible) ensureNodeVisible(node[fieldNames.key] as Key, data);
            if (opts?.select) selectNode(node[fieldNames.key] as Key, true);
            return data;
        },
        [dataSet, ensureNodeVisible, fieldNames.children, fieldNames.key, getNode, getParentNode, prepareNodeFn, props, selectNode, setDataSet]
    );
};
