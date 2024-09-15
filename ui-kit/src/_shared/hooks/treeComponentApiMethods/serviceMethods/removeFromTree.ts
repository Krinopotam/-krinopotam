import {getNodeIndex} from '@src/_shared/hooks/treeComponentApiMethods/serviceMethods/getNodeIndex';
import {IKey} from '@krinopotam/service-types';

export const removeFromTree = (
    node: IKey | Record<string, unknown> | undefined,
    dataSet: Record<string, unknown>[] | undefined,
    fieldNames: {
        key: string;
        children: string;
    }
) => {
    const {idx, nodes} = getNodeIndex(dataSet, node, fieldNames);
    if (idx < 0 || !nodes) return;
    nodes.splice(idx, 1);
};
