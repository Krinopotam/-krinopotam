import {ILabeledValue} from '@src/treeSelect/types/types';
import {getNodeIndex} from '@src/_shared/hooks/treeComponentApiMethods/serviceMethods/getNodeIndex';

/**
 * Convert value with label ({value: Key, label?: ReactNode}) to node ({id:Key, title:ReactNode})
 * Will try to find node in dataSet.
 * If not found - will return base node with id and title only, generated from {value: Key, label?: ReactNode}
 * @param val
 * @param dataSet
 * @param fieldNames
 * @return node without children
 */
export const labeledValueToNode = (
    val: ILabeledValue,
    dataSet: Record<string, unknown>[] | undefined,
    fieldNames: {
        key: string;
        title: string;
        children: string;
    }
): Record<string, unknown> => {
    const baseNode = {[fieldNames.key]: val.value, [fieldNames.title]: val.label};
    const {idx, nodes} = getNodeIndex(dataSet, val.value, fieldNames);
    if (idx < 0 || !nodes?.[idx]) return baseNode;
    const node = {...nodes[idx]};
    delete node[fieldNames.children];
    return node;
};
