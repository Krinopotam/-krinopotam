import React, {Key, useCallback, useEffect, useState} from 'react';
import {IBaseTreeComponentProps, IFieldNames} from '@src/_shared/@types/nodes';
import {useGetNode} from '@src/_shared/hooks/treeComponentApiMethods/useGetNode';

export const useExpandedKeys = (props: IBaseTreeComponentProps): [React.Key[] | undefined, React.Dispatch<React.SetStateAction<React.Key[] | undefined>>] => {
    const [expandedKeys, setExpandedKeys] = useState(props.expandedKeys ?? props.defaultExpandedKeys);
    useEffect(() => {
        if (!props.defaultExpandAll) {
            setExpandedKeys(props.expandedKeys); //user can set treeExpandedKeys in props
        }
    }, [props.defaultExpandAll, props.expandedKeys]);
    return [expandedKeys, setExpandedKeys];
};

export const useGetExpandedKeys = (expandedKeys: React.Key[] | undefined) => {
    return useCallback(() => expandedKeys, [expandedKeys]);
};

export const useSetExpandedKeys = (setExpandedKeys: React.Dispatch<React.SetStateAction<React.Key[] | undefined>>) => {
    return useCallback(
        (keys: React.Key[] | undefined) => {
            setExpandedKeys(keys);
        },
        [setExpandedKeys]
    );
};

export const useGetExpandedNodes = <T extends Record<string, unknown>>(
    dataSet: T[] | undefined,
    expandedKeys: React.Key[] | undefined,
    fieldNames: IFieldNames
): (() => T[] | undefined) => {
    const getNode = useGetNode(dataSet, fieldNames);
    const getExpandedKeys = useGetExpandedKeys(expandedKeys);

    return useCallback(() => {
        const expandedKeys = getExpandedKeys();
        if (!expandedKeys) return undefined;

        const result: T[] = [];
        for (const key of expandedKeys) {
            const foundNode = getNode(key);
            if (foundNode) result.push(foundNode);
        }
        return result;
    }, [getExpandedKeys, getNode]);
};

export const useIsNodeExpanded = (expandedKeys: React.Key[] | undefined): ((key: Key) => boolean) => {
    const getExpandedKeys = useGetExpandedKeys(expandedKeys);
    return useCallback((key: Key) => getExpandedKeys()?.includes(key) ?? false, [getExpandedKeys]);
};

export const useExpandNode = (
    expandedKeys: React.Key[] | undefined,
    setExpandedKeys: React.Dispatch<React.SetStateAction<React.Key[] | undefined>>
): ((key: Key) => void) => {
    return useCallback(
        key => {
            if (expandedKeys?.includes(key)) return;
            setExpandedKeys([...(expandedKeys ?? []), key]);
        },
        [expandedKeys, setExpandedKeys]
    );
};

export const useCollapseNode = (
    expandedKeys: React.Key[] | undefined,
    setExpandedKeys: React.Dispatch<React.SetStateAction<React.Key[] | undefined>>
): ((key: Key) => void) => {
    return useCallback(
        key => {
            if (!expandedKeys?.includes(key)) return;
            setExpandedKeys(expandedKeys?.filter(curKey => curKey !== key));
        },
        [expandedKeys, setExpandedKeys]
    );
};

export const useToggleNode = (
    expandedKeys: React.Key[] | undefined,
    setExpandedKeys: React.Dispatch<React.SetStateAction<React.Key[] | undefined>>
): ((key: Key) => boolean) => {
    return useCallback(
        key => {
            if (expandedKeys?.includes(key)) {
                setExpandedKeys(expandedKeys?.filter(curKey => curKey !== key));
                return false;
            } else {
                setExpandedKeys([...(expandedKeys ?? []), key]);
                return true;
            }
        },
        [expandedKeys, setExpandedKeys]
    );
};

export const useExpandParentNodes = <T extends Record<string, unknown>>(
    dataSet: T[] | undefined,
    fieldNames: IFieldNames,
    expandedKeys: React.Key[] | undefined,
    setExpandedKeys: React.Dispatch<React.SetStateAction<React.Key[] | undefined>>
): ((key: Key, externalDataset?: T[]) => void) => {
    const expandNode = useExpandNode(expandedKeys, setExpandedKeys);
    return useCallback(
        (key, externalDataset) => {
            const recursive = (nodes: T[]) => {
                for (const node of nodes) {
                    if (node[fieldNames.key] === key) return true;

                    if (node[fieldNames.children]) {
                        const founded = recursive(node[fieldNames.children] as T[]);

                        if (founded) {
                            expandNode(node[fieldNames.key] as Key);
                            return true;
                        }
                    }
                }
            };

            const data = externalDataset ?? dataSet;

            if (!data) return;
            recursive(data);
        },
        [dataSet, expandNode, fieldNames.children, fieldNames.key]
    );
};
