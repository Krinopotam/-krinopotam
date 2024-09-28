import {AnyType, IKey} from "@krinopotam/service-types";

/**
 * Find node by node key
 * @param dataSet - hierarchy collection of nodes
 * @param node - node or node key
 * @param fieldNames
 * @returns founded node index and nodes collection, where node is located (it may be not the dataSet, for example children)
 */
export const getNodeIndex = <T extends Record<string, AnyType>>(
    dataSet: T[] | undefined,
    node: IKey | Record<string, AnyType> | undefined,
    fieldNames:{key: string; children: string}
): {
    idx: number;
    nodes: T[] | undefined;
} => {
    const key = typeof node === 'object' ? (node[fieldNames.key] as IKey) : node;

    const recursive = (nodes: T[] | undefined): {idx: number; nodes: T[] | undefined} => {
        if (!nodes || !key) return {idx: -1, nodes: undefined};
        for (let i = 0; i < nodes.length; i++) {
            const node = nodes[i];
            if (node[fieldNames.key] === key) return {idx: i, nodes};

            const childInfo = recursive(node[fieldNames.children] as T[]);
            if (childInfo.idx > -1) return childInfo;
        }

        return {idx: -1, nodes: undefined};
    };

    return recursive(dataSet);
};
