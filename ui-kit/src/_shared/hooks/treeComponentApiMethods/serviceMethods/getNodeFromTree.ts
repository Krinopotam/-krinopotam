import {getNodeIndex} from '@src/_shared/hooks/treeComponentApiMethods/serviceMethods/getNodeIndex';
import {IKey} from '@krinopotam/service-types';

export const getNodeFromTree = (
    node: IKey | Record<string, unknown> | undefined,
    dataSet: Record<string, unknown>[] | undefined,
    fieldNames: {
        key: string;
        children: string;
    }
) => {
    const {idx, nodes} = getNodeIndex(dataSet, node, fieldNames);
    return idx > -1 ? nodes![idx] : undefined;
};
