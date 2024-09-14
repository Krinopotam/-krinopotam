import {IFindNodeOptions} from '@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes';
import {IKey} from '@krinopotam/service-types';
import {shouldSearchInChildren} from "@src/_shared/hooks/treeComponentApiMethods/serviceMethods/shouldSearchInChildren";
import {isNodeCanBeSelected} from "@src/_shared/hooks/treeComponentApiMethods/serviceMethods/isNodeCanBeSelected";
import {findPrevNodeKey} from "@src/_shared/hooks/treeComponentApiMethods/serviceMethods/findPrevNodeKey";

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
    key: IKey | undefined,
    expandedKeys: IKey[] | undefined,
    fieldNames: {key: string; children: string},
    opts?: IFindNodeOptions
): IKey | undefined => {
    let curFound = !key;
    let breakSearch = false;

    const recursive = (nodes: T[]): IKey | undefined => {
        for (const node of nodes) {
            if (breakSearch) return undefined;
            if (curFound && isNodeCanBeSelected(node, opts)) return node[fieldNames.key] as IKey;

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
    const result = recursive(dataSet);
    if (result) return result

    if (opts?.defaultToBoundary === false) return undefined
    return key ? key : findPrevNodeKey(dataSet,undefined,expandedKeys,fieldNames,opts);
};

