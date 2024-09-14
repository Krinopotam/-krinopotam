import {findNodeIndex} from '@src/_shared/hooks/treeComponentApiMethods/serviceMethods/findNodeIndex';
import {IKey} from "@krinopotam/service-types";

export const removeFromTree = (dataSet: Record<string, unknown>[]|undefined, key: IKey | undefined, fieldNames: {key: string; children: string}) => {
    if (!key || !dataSet) return;
    const {idx, nodes} = findNodeIndex(dataSet, key, {key: fieldNames.key, children: fieldNames.children});
    nodes?.splice(idx, 1);
};
