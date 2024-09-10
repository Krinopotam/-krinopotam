import {IFieldNames} from '@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes';
import {IBaseValueWithLabel, ITreeSelectValue} from '@src/treeSelect/types/types';
import React, {Key} from 'react';
import {findNodeIndex} from '@src/_shared/hooks/treeComponentApiMethods/serviceMethods/findNodeIndex';

/**
 * Convert unknown value (Key|Key[]|Object|Object[]) to values with label array {value: Key, label?: ReactNode}[]
 * @param val
 * @param fieldNames
 */
export const anyValueToValuesWithLabel = (val: ITreeSelectValue, fieldNames: IFieldNames): IBaseValueWithLabel[] | undefined => {
    if (!val) return undefined;
    if (!Array.isArray(val)) {
        if (typeof val === 'object') {
            if (isValueWithLabel(val)) return [val];
            return [nodeToValueWithLabel(val, fieldNames)];
        } else return [{value: val}];
    }

    const result: IBaseValueWithLabel[] = [];
    for (const item of val) {
        if (!item) continue;

        if (typeof item === 'object') {
            if (isValueWithLabel(item)) result.push(item);
            else result.push(nodeToValueWithLabel(item, fieldNames));
        } else result.push({value: item});
    }
    return result;
};

export const isValueWithLabel = (val: unknown): val is IBaseValueWithLabel => {
    return !!(val && typeof val === 'object' && (val as Record<string, unknown>)['value']);
};

/**
 * Convert node ({id:Key, title:.....}) to value with label ({value: Key, label?: ReactNode})
 * @param node
 * @param fieldNames
 */
export const nodeToValueWithLabel = (node: Record<string, unknown>, fieldNames: IFieldNames): IBaseValueWithLabel => {
    const key = node[fieldNames.key] as Key;
    const label = node[fieldNames.title] as React.ReactNode;
    return {value: key, label: label};
};

/**
 * Convert value with label ({value: Key, label?: ReactNode}) to node ({id:Key, title:ReactNode})
 * Will try to find node in dataSet.
 * If not found - will return base node with id and title only, generated from {value: Key, label?: ReactNode}
 * @param val
 * @param dataSet
 * @param fieldNames
 */
export const valueWithLabelToNode = (
    val: IBaseValueWithLabel,
    dataSet: Record<string, unknown>[] | undefined,
    fieldNames: IFieldNames
): Record<string, unknown> => {
    const baseNode = {[fieldNames.key]: val.value, [fieldNames.title]: val.label};
    const {idx, nodes} = findNodeIndex(dataSet, val.value, fieldNames);
    if (idx < 0 || !nodes?.[idx]) return baseNode;
    return nodes[idx];
};
