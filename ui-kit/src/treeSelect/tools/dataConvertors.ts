import {IFieldNames} from '@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes';
import {ILabeledValue, ITreeSelectValue} from '@src/treeSelect/types/types';
import React, {Key} from 'react';
import {findNodeIndex} from '@src/_shared/hooks/treeComponentApiMethods/serviceMethods/findNodeIndex';

/**
 * Convert unknown value (Key|Key[]|Object|Object[]) to values with label array {value: Key, label?: ReactNode}[]
 * @param val
 * @param fieldNames
 */
export const anyValueToValuesWithLabel = (val: ITreeSelectValue, fieldNames: IFieldNames): ILabeledValue[] | undefined => {
    if (!val) return undefined;
    if (!Array.isArray(val)) {
        if (typeof val === 'object') {
            if (isLabeledValue(val)) return [val];
            return [nodeToLabeledValue(val, fieldNames)];
        } else return [{value: val}];
    }

    const result: ILabeledValue[] = [];
    for (const item of val) {
        if (!item) continue;

        if (typeof item === 'object') {
            if (isLabeledValue(item)) result.push(item);
            else result.push(nodeToLabeledValue(item, fieldNames));
        } else result.push({value: item});
    }
    return result;
};

export const isLabeledValue = (val: unknown): val is ILabeledValue => {
    return !!(val && typeof val === 'object' && (val as Record<string, unknown>)['value']);
};

/**
 * Convert node ({id:Key, title:.....}) to value with label ({value: Key, label?: ReactNode})
 * @param node
 * @param fieldNames
 */
export const nodeToLabeledValue = (node: Record<string, unknown>, fieldNames: IFieldNames): ILabeledValue => {
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
 * @return node without children
 */
export const LabeledValueToNode = (
    val: ILabeledValue,
    dataSet: Record<string, unknown>[] | undefined,
    fieldNames: IFieldNames
): Record<string, unknown> => {
    const baseNode = {[fieldNames.key]: val.value, [fieldNames.title]: val.label};
    const {idx, nodes} = findNodeIndex(dataSet, val.value, fieldNames);
    if (idx < 0 || !nodes?.[idx]) return baseNode;
    const node = {...nodes[idx]}
    delete node[fieldNames.children];
    return node;
};
