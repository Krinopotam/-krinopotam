import {AnyType, IKey} from '@krinopotam/service-types';

type INode = Record<string, AnyType>;

/** @Returns Nodes DataSet, of groups nodes only */
export const getGroupsOnly = <T extends Record<string, AnyType> = Record<string, AnyType>>(
    dataSet: T[] | undefined,
    fieldNames: {
        key: string;
        children: string;
        isGroup: string;
    }= {key: 'id', children: 'children', isGroup: 'isGroup'},
    removeBranchId?: IKey
): T[] | undefined => {
    const recursive = (nodes: INode[], removeBranch?: IKey) => {
        const result: T[] = [];
        for (const node of nodes) {
            if (!node[fieldNames.isGroup] || node[fieldNames.key] === removeBranch) continue;
            const {[fieldNames.children]: children, ...clonedNode} = node;
            result.push(clonedNode as T);
            if (node[fieldNames.children]) clonedNode[fieldNames.children] = recursive(node[fieldNames.children], removeBranch);
        }

        return result;
    };

    if (!dataSet) return undefined;
    return recursive(dataSet, removeBranchId);
};
