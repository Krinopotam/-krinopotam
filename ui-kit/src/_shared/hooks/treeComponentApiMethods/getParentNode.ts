import {Key, useCallback} from 'react';
import {IFieldNames} from '@src/_shared/@types/nodes';

export const useGetParentNode = <T extends Record<string, unknown>>(
    dataSet: T[] | undefined,
    fieldNames: IFieldNames
): ((key: Key, externalDataset?: T[]) => T | undefined) => {
    return useCallback(
        (key, externalDataset) => {
            const recursive = (nodes: T[], parentNode: T | undefined): T | undefined => {
                for (const node of nodes) {
                    if (node[fieldNames.key] === key) return parentNode;
                    if (node[fieldNames.children]) {
                        const result = recursive(node[fieldNames.children] as T[], node);
                        if (result) return result;
                    }
                }
                return undefined;
            };

            const data = externalDataset ?? dataSet;

            if (!data) return undefined;
            return recursive(data, undefined);
        },
        [dataSet, fieldNames.children, fieldNames.key]
    );
};
