import {AnyType, IKey} from '@krinopotam/service-types';
import {INodePosition} from '@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes';
import {removeFromTree} from '@src/_shared/hooks/treeComponentApiMethods/serviceMethods/removeFromTree';
import {addNodeToTree} from '@src/_shared/hooks/treeComponentApiMethods/serviceMethods/addNodeToTree';
import {getNodeFromTree} from '@src/_shared/hooks/treeComponentApiMethods/serviceMethods/getNodeFromTree';
import {IsDebugMode} from '@krinopotam/common-hooks';
import {isDescendant} from '@src/_shared/hooks/treeComponentApiMethods/serviceMethods/isDescendant';

export const moveNode = (
    node: Record<string, AnyType> | IKey,
    target: Record<string, AnyType> | IKey | undefined,
    dataSet: Record<string, AnyType>[],
    fieldNames: {
        key: string;
        children: string;
        isLeaf: string;
        isGroup: string;
    },
    position?: INodePosition,
    groupsMode?: boolean
) => {
    const movedNode = getNodeFromTree(node, dataSet, fieldNames);
    const targetNode = getNodeFromTree(target, dataSet, fieldNames);

    if (targetNode === movedNode || isDescendant(movedNode, targetNode , dataSet, fieldNames)) {
        if (IsDebugMode()) console.warn("Can't move node to itself or it's descendant");
        return dataSet;
    }

    if (!movedNode) {
        if (IsDebugMode()) console.warn("Can't move node, it's not exist in tree");
        return dataSet;
    }
    removeFromTree(movedNode, dataSet, fieldNames);
    addNodeToTree(movedNode, target, dataSet, fieldNames, position, groupsMode);

    return dataSet;
};
