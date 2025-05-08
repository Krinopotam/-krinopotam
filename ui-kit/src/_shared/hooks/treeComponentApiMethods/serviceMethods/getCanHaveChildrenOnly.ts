import {AnyType, IKey} from '@krinopotam/service-types';

type INode = Record<string, AnyType>;

/** @Returns Nodes DataSet, consisting only of nodes that can have children */
export const getCanHaveChildrenOnly = <T extends Record<string, AnyType> = Record<string, AnyType>>(
    dataSet: T[] | undefined,
    fieldNames: {
        key: string;
        children: string;
        isLeaf: string;
    } = {key: 'id', children: 'children', isLeaf: 'isLeaf'},
    removeBranchId?: IKey
): T[] | undefined => {
    const recursive = (nodes: INode[], removeBranch?: IKey) => {
        const result: T[] = [];
        for (const node of nodes) {
            if (node[fieldNames.isLeaf] || node[fieldNames.key] === removeBranch) continue;
            const {[fieldNames.children]: children, ...clonedNode} = node;
            result.push(clonedNode as T);
            if (node[fieldNames.children]) clonedNode[fieldNames.children] = recursive(node[fieldNames.children], removeBranch);
        }

        return result;
    };

    if (!dataSet) return undefined;
    return recursive(dataSet, removeBranchId);
};
