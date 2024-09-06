import {IFieldNames, IFindNodeOptions} from "@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes";
import {Key} from "react";


/**
 * Find next node key in data set by display order.
 * If no node on same level found, returns next of parent level node key.
 * If current node has children, returns the first one
 * @param dataSet - hierarchy collection of nodes
 * @param key - node key
 * @param expandedKeys - keys of expanded nodes
 * @param fieldNames - field names
 * @param opts - search options
 */
export const findNextNodeKey = <T extends Record<string, unknown>>(
    dataSet: T[] | undefined,
    key: Key | undefined,
    expandedKeys: Key[] | undefined,
    fieldNames: IFieldNames,
    opts?: IFindNodeOptions
): Key | undefined => {
    let curFound = !key;
    let breakSearch = false;

    const recursive = (nodes: T[]): Key | undefined => {
        for (const node of nodes) {
            if (breakSearch) return undefined;
            if (curFound && isNodeCanBeSelected(node, opts)) return node[fieldNames.key] as Key;

            if (typeof key === 'undefined' || node[fieldNames.key] === key) curFound = true;

            if (node[fieldNames.children] && (!curFound || shouldSearchInChildren(node, expandedKeys, fieldNames, opts))) {
                const childResult = recursive(node[fieldNames.children] as T[]);
                if (childResult) return childResult;
            }
        }

        if (curFound && opts?.sameLevelOnly) breakSearch = true;
        return undefined;
    };

    if (!dataSet) return undefined;
    return recursive(dataSet);
};

/**
 * Find prev node key in data set by display order.
 * If no node on same level found, returns parent node key.
 * If the parent has children nodes, then we return the last one
 * @param dataSet - hierarchy collection of nodes
 * @param key - node key
 * @param expandedKeys - keys of expanded nodes
 * @param fieldNames - field names
 * @param opts - search options
 */
export const findPrevNodeKey = <T extends Record<string, unknown>>(
    dataSet: T[] | undefined,
    key: Key | undefined,
    expandedKeys: Key[] | undefined,
    fieldNames: IFieldNames,
    opts?: IFindNodeOptions
): Key | undefined => {
    let curFound = !key;
    let breakSearch = false;

    const recursive = (nodes: T[]): Key | undefined => {
        for (let i = nodes.length - 1; i >= 0; i--) {
            const node = nodes[i];
            if (breakSearch) return undefined;

            if (node[fieldNames.children] && (!curFound || shouldSearchInChildren(node, expandedKeys, fieldNames, opts))) {
                const childResult = recursive(node[fieldNames.children] as T[]);
                if (childResult) return childResult;
            }

            if (curFound && isNodeCanBeSelected(node, opts)) return node[fieldNames.key] as Key;

            if (typeof key === 'undefined' || node[fieldNames.key] === key) curFound = true;
        }

        if (curFound && opts?.sameLevelOnly) breakSearch = true;
        return undefined;
    };

    if (!dataSet) return undefined;
    return recursive(dataSet);
};

const isNodeCanBeSelected = (node: Record<string, unknown>, opts?: IFindNodeOptions) =>
    (opts?.notDisabled === false || node.disabled !== true) && (opts?.selectableOnly === false || node.selectable !== false);

const shouldSearchInChildren = (node: Record<string, unknown>, expandedKeys: Key[] | undefined, fieldNames: IFieldNames, opts?: IFindNodeOptions) => {
    return !opts?.sameLevelOnly && (opts?.expandedOnly === false || expandedKeys?.includes(node[fieldNames.key] as Key));
};
