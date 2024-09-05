import {useExpandParentNodes} from '@src/_shared/hooks/treeComponentApiMethods/useExpand';
import {IFieldNames} from '@src/_shared/@types/nodes';
import React, {Key, useCallback} from 'react';

export const useEnsureNodeVisible = <T extends Record<string, unknown>>(
    dataSet: T[] | undefined,
    fieldNames: IFieldNames,
    expandedKeys: React.Key[] | undefined,
    setExpandedKeys: React.Dispatch<React.SetStateAction<React.Key[] | undefined>>
): ((key: Key, externalDataset?: T[] | undefined) => void) => {
    const expandParentNodes = useExpandParentNodes(dataSet, fieldNames, expandedKeys, setExpandedKeys);
    return useCallback(
        (key, externalDataset) => {
            expandParentNodes(key, externalDataset);
        },
        [expandParentNodes]
    );
};
