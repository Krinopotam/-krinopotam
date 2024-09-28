import {AddElementToArray} from '@krinopotam/js-helpers/helpersObjects/addElementToArray';
import {AnyType, IKey} from '@krinopotam/service-types';
import {INodePosition} from '@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes';
import {getNodeFromTree} from '@src/_shared/hooks/treeComponentApiMethods/serviceMethods/getNodeFromTree';
import {getParentNode} from '@src/_shared/hooks/treeComponentApiMethods/serviceMethods/getParentNode';

export const addNodeToTree = (
    node: Record<string, AnyType> | undefined,
    target: IKey | Record<string, AnyType> | undefined,
    dataSet: Record<string, AnyType>[] | undefined,
    fieldNames: {
        key: string;
        children: string;
        isLeaf: string;
        isGroup: string;
    },
    position?: INodePosition,
    groupsMode?: boolean
) => {
    if (!node || !dataSet) return;

    const targetNode = getNodeFromTree(target, dataSet, fieldNames);
    if (
        !targetNode ||
        !position ||
        ((position === 'insideTop' || position === 'insideBottom') && (targetNode?.[fieldNames.isLeaf] || (groupsMode && !targetNode?.[fieldNames.isGroup])))
    ) {
        position = 'below'; //we can't add node into the leaf node or undefined node
    }

    let targetList: Record<string, AnyType>[] = [];
    if (!targetNode) targetList = dataSet;

    if (targetNode && (position === 'insideTop' || position === 'insideBottom')) {
        if (!targetNode[fieldNames.children]) targetNode[fieldNames.children] = targetList;
        else targetList = targetNode[fieldNames.children] as Record<string, AnyType>[];
        const arrPos = position === 'insideTop' ? 'top' : 'bottom';
        AddElementToArray(targetList, node, undefined, arrPos, false);
    } else {
        if (targetNode) {
            const parentNode = getParentNode(targetNode, dataSet, fieldNames);
            if (parentNode) targetList = parentNode[fieldNames.children] as Record<string, AnyType>[];
            else targetList = dataSet;
        }

        if (position === 'above') AddElementToArray(targetList, node, targetNode, 'above', false);
        else if (position === 'below') AddElementToArray(targetList, node, targetNode, 'below', false);
    }

    return dataSet;
};
