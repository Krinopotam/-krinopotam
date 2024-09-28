import {getNodeIndex} from '@src/_shared/hooks/treeComponentApiMethods/serviceMethods/getNodeIndex';
import {AnyType, IKey} from '@krinopotam/service-types';

export const removeFromTree = (
    node: IKey | Record<string, AnyType> | undefined,
    dataSet: Record<string, AnyType>[] | undefined,
    fieldNames: {
        key: string;
        children: string;
    }
) => {
    const {idx, nodes} = getNodeIndex(dataSet, node, fieldNames);
    if (idx < 0 || !nodes) return;
    nodes.splice(idx, 1);
};
