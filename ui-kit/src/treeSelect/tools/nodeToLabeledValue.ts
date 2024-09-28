import {ILabeledValue} from '@src/treeSelect/types/types';
import {AnyType, IKey} from '@krinopotam/service-types';
import React from 'react';

/**
 * Convert node ({id:Key, title:.....}) to value with label ({value: Key, label?: ReactNode})
 * @param node
 * @param fieldNames
 */
export const nodeToLabeledValue = (
    node: Record<string, AnyType>,
    fieldNames: {
        key: string;
        title: string;
    }
): ILabeledValue => {
    const key = node[fieldNames.key] as IKey;
    const label = node[fieldNames.title] as React.ReactNode;
    return {value: key, label: label};
};
