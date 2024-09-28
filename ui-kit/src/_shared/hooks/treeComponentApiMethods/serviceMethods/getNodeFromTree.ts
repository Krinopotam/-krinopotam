import {getNodeIndex} from '@src/_shared/hooks/treeComponentApiMethods/serviceMethods/getNodeIndex';
import {AnyType, IKey} from '@krinopotam/service-types';

export const getNodeFromTree = (
    node: IKey | Record<string, AnyType> | undefined,
    dataSet: Record<string, AnyType>[] | undefined,
    fieldNames: {
        key: string;
        children: string;
    }
) => {
    const {idx, nodes} = getNodeIndex(dataSet, node, fieldNames);
    return idx > -1 ? nodes![idx] : undefined;
};
