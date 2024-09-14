import {IKey} from "@krinopotam/service-types";

/**
 * Find node by node key
 * @param dataSet - hierarchy collection of nodes
 * @param key - node key
 * @param fieldNames
 * @returns founded node index and nodes collection, where node is located (it may be not the dataSet, for example children)
 */
export const findNodeIndex = <T extends Record<string, unknown>>(
    dataSet: T[] | undefined,
    key: IKey,
    fieldNames:{key: string; children: string}
): {
    idx: number;
    nodes: T[] | undefined;
} => {
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
