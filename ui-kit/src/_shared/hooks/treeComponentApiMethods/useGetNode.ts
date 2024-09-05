import {Key, useCallback} from 'react';
import {findNodeIndex} from '@src/_shared/tools/nodesMethods/findNodeIndex';
import {IFieldNames} from '@src/_shared/@types/nodes';

export const useGetNode = <T extends Record<string, unknown>>(
    dataSet: T[] | undefined,
    fieldNames: IFieldNames
): ((key: Key | undefined, externalDataset?: T[]) => T | undefined) => {
    return useCallback(
        (key, externalDataset) => {
            if (!key) return undefined;
            const data = externalDataset ?? dataSet;
            const {idx, nodes} = findNodeIndex(data, key, fieldNames.key, fieldNames.children);
            return idx > -1 ? nodes![idx] : undefined;
        },
        [dataSet, fieldNames.children, fieldNames.key]
    );
};

export const useGetNodes = <T extends Record<string, unknown>>(
    dataSet: T[] | undefined,
    fieldNames: IFieldNames
): ((key: Key | Key[] | null | undefined, extDataSet?: T[]) => T[] | undefined) => {
    const getNode = useGetNode(dataSet, fieldNames);
    return useCallback(
        (keys, externalDataset) => {
            if (!keys) return undefined;
            if (!Array.isArray(keys)) keys = [keys];
            const result: T[] = [];
            for (const key of keys) {
                const node = getNode(key, externalDataset);
                if (node) result.push(node);
            }

            return result;
        },
        [getNode]
    );
};
