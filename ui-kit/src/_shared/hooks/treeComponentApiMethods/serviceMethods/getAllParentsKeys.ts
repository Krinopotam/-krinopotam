import {Key} from "react";

/**
 * Get all parents keys
 * @param dataSet - hierarchy collection of nodes
 * @param keyField - field name of node key
 * @param childrenField - field name of node children
 */
export const getAllParentsKeys = <T extends Record<string, unknown>>(dataSet: T[] | undefined, keyField: string, childrenField: string) => {
    const parentsKeys: Key[] = [];

    const recursive = (data: T[]) => {
        for (const node of data) {
            if (!node[childrenField]) continue
            parentsKeys.push(node[keyField] as Key);
            recursive(node[childrenField] as T[])
        }
    };
    if (!dataSet) return undefined;
    recursive(dataSet);
    return parentsKeys;
};
