import {AddElementToArray} from '@krinopotam/js-helpers/helpersObjects/addElementToArray';
import {IKey} from '@krinopotam/service-types';
import {INodePosition} from '@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes';
import {getNodeFromTree} from '@src/_shared/hooks/treeComponentApiMethods/serviceMethods/getNodeFromTree';
import {findParentNode} from '@src/_shared/hooks/treeComponentApiMethods/serviceMethods/findParentNode';

export const addNodeToTree = (
    dataSet: Record<string, unknown>[] | undefined,
    node: Record<string, unknown> | undefined,
    fieldNames: {
        key: string;
        children: string;
        isLeaf: string;
        isFolder: string;
    },
    target?: IKey | Record<string, unknown>,
    position?: INodePosition,
    groupsMode?: boolean
) => {
    if (!node || !dataSet) return;

    const targetKey = typeof target === 'object' ? (target[fieldNames.key] as IKey) : target;
    const targetNode = getNodeFromTree(targetKey, dataSet, fieldNames);
    if (
        !targetNode ||
        ((position === 'insideTop' || position === 'insideBottom') && (targetNode?.[fieldNames.isLeaf] || (groupsMode && !targetNode?.[fieldNames.isFolder])))
    ) {
        position = 'below'; //we can't add node into the leaf node or undefined node
    }

    let targetList: Record<string, unknown>[] = [];
    if (!targetNode) targetList = dataSet;

    if (targetNode && (position === 'insideTop' || position === 'insideBottom')) {
        if (!targetNode[fieldNames.children]) targetNode[fieldNames.children] = targetList;
        else targetList = targetNode[fieldNames.children] as Record<string, unknown>[];
        const arrPos = position === 'insideTop' ? 'top' : 'bottom';
        AddElementToArray(targetList, node, undefined, arrPos, false);
    } else {
        if (targetNode) {
            const parentNode = findParentNode(dataSet, targetNode, fieldNames);
            if (parentNode) targetList = parentNode[fieldNames.children] as Record<string, unknown>[];
            else targetList = dataSet;
        }

        if (position === 'above') AddElementToArray(targetList, node, targetNode, 'above', false);
        else if (position === 'below') AddElementToArray(targetList, node, targetNode, 'below', false);
    }

    return dataSet;
};
