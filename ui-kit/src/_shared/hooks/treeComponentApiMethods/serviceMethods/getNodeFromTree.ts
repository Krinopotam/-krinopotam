import {findNodeIndex} from '@src/_shared/hooks/treeComponentApiMethods/serviceMethods/findNodeIndex';
import {IKey} from '@krinopotam/service-types';

export const getNodeFromTree = (
    key: IKey | undefined,
    dataSet: Record<string, unknown>[] | undefined,
    fieldNames: {
        key: string;
        children: string;
    }
) => {
    if (!key || !dataSet) return undefined;
    const {idx, nodes} = findNodeIndex(dataSet, key, fieldNames);
    return idx > -1 ? nodes![idx] : undefined;
};
