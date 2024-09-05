import {Key, useCallback} from 'react';
import {useGetNode} from '@src/_shared/hooks/treeComponentApiMethods/useGetNode';
import {IFieldNames} from '@src/_shared/@types/nodes';

export const useGetActiveNode = <T extends Record<string, unknown>>(
    dataSet: T[] | undefined,
    fieldNames: IFieldNames,
    selectedKeys: Key[] | undefined
): ((singleOnly?: boolean, externalDataset?: T[]) => T | undefined) => {
    const getActiveNodeKey = useGetActiveNodeKey(selectedKeys);
    const getNode = useGetNode(dataSet, fieldNames);
    return useCallback(
        (singleOnly, externalDataset) => {
            const activeKey = getActiveNodeKey(singleOnly);
            return getNode(activeKey, externalDataset);
        },
        [getActiveNodeKey, getNode]
    );
};
export const useGetActiveNodeKey = (selectedKeys: Key[] | undefined): ((singleOnly?: boolean) => Key | undefined) => {
    return useCallback(
        singleOnly => {
            if (!selectedKeys?.length) return undefined;
            if (singleOnly) return selectedKeys?.length === 1 ? selectedKeys[0] : undefined;
            return selectedKeys[selectedKeys.length - 1];
        },
        [selectedKeys]
    );
};
