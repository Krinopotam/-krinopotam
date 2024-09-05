import React, {Key, useCallback} from 'react';
import {findNextNodeKey, findPrevNodeKey} from '@src/_shared/tools/nodesMethods/findeNextNodeKey';
import {IFieldNames, IFindNodeOptions} from '@src/_shared/@types/nodes';
import {useGetNode} from '@src/_shared/hooks/treeComponentApiMethods/useGetNode';

export const useGetNextNodeKey = <T extends Record<string, unknown>>(
    dataSet: T[] | undefined,
    fieldNames: IFieldNames,
    expandedKeys: React.Key[] | undefined
): ((key: Key | undefined, opts?: IFindNodeOptions, externalDataset?: T[]) => Key | undefined) => {
    return useCallback(
        (key, opts, externalDataset) => {
            return findNextNodeKey(externalDataset ?? dataSet, key, expandedKeys, fieldNames, opts);
        },
        [dataSet, expandedKeys, fieldNames]
    );
};

export const useGetPrevNodeKey = <T extends Record<string, unknown>>(
    dataSet: T[] | undefined,
    fieldNames: IFieldNames,
    expandedKeys: React.Key[] | undefined
): ((key: Key | undefined, opts?: IFindNodeOptions, externalDataset?: T[]) => Key | undefined) => {
    return useCallback(
        (key, opts, externalDataset) => {
            return findPrevNodeKey(externalDataset ?? dataSet, key, expandedKeys, fieldNames, opts);
        },
        [dataSet, expandedKeys, fieldNames]
    );
};

export const useGetNextNode = <T extends Record<string, unknown>>(
    dataSet: T[] | undefined,
    fieldNames: IFieldNames,
    expandedKeys: React.Key[] | undefined
): ((node: T, opts?: IFindNodeOptions, externalDataset?: T[]) => T | undefined) => {
    const getNode = useGetNode(dataSet, fieldNames);
    return useCallback(
        (node, opts, externalDataset) => {
            const nextKey = findNextNodeKey(externalDataset ?? dataSet, node[fieldNames.key] as Key, expandedKeys, fieldNames, opts);
            return nextKey ? getNode(nextKey, externalDataset) : undefined;
        },
        [dataSet, expandedKeys, fieldNames, getNode]
    );
};

export const useGetPrevNode = <T extends Record<string, unknown>>(
    dataSet: T[] | undefined,
    fieldNames: IFieldNames,
    expandedKeys: React.Key[] | undefined
): ((node: T, opts?: IFindNodeOptions, externalDataset?: T[]) => T | undefined) => {
    const getNode = useGetNode(dataSet, fieldNames);
    return useCallback(
        (node, opts, externalDataset) => {
            const prevKey = findPrevNodeKey(externalDataset ?? dataSet, node[fieldNames.key] as Key, expandedKeys, fieldNames, opts);
            return prevKey ? getNode(prevKey, externalDataset) : undefined;
        },
        [dataSet, expandedKeys, fieldNames, getNode]
    );
};
