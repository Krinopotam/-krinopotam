import {AnyType, IKey} from '@krinopotam/service-types';
import {getNodeFromTree} from '@src/_shared/hooks/treeComponentApiMethods/serviceMethods/getNodeFromTree';
import {getParentNode} from '@src/_shared/hooks/treeComponentApiMethods/serviceMethods/getParentNode';
import {moveNode} from '@src/_shared/hooks/treeComponentApiMethods/serviceMethods/moveNode';

export const updateNodeInTree = (
    node: Record<string, AnyType> | undefined,
    target: IKey | Record<string, AnyType> | undefined,
    dataSet: Record<string, AnyType>[] | undefined,
    fieldNames: {
        key: string;
        children: string;
        isLeaf: string;
        isGroup: string;
    },
    groupsMode?: boolean
) => {
    if (!node || !dataSet) return;

    const updateNode = getNodeFromTree(node, dataSet, fieldNames);
    if (!updateNode) return dataSet;

    updateValues(updateNode, node, fieldNames.children);

    const targetNode = getNodeFromTree(target, dataSet, fieldNames);
    const parentNode = getParentNode(node, dataSet, fieldNames);
    if (targetNode === parentNode) return dataSet;
    return moveNode(node, targetNode, dataSet, fieldNames, 'insideBottom', groupsMode) ?? [];
};

const updateValues = (source: Record<string, AnyType>, target: Record<string, AnyType>, childrenField: string) => {
    for (const field in target) {
        if (field === childrenField) continue;
        source[field] = target[field];
    }
};
