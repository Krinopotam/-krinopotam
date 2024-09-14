import {IKey} from '@krinopotam/service-types';
import {IFindNodeOptions} from '@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes';
import {shouldSearchInChildren} from '@src/_shared/hooks/treeComponentApiMethods/serviceMethods/shouldSearchInChildren';
import {isNodeCanBeSelected} from '@src/_shared/hooks/treeComponentApiMethods/serviceMethods/isNodeCanBeSelected';
import {findNextNodeKey} from '@src/_shared/hooks/treeComponentApiMethods/serviceMethods/findeNextNodeKey';

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
    key: IKey | undefined,
    expandedKeys: IKey[] | undefined,
    fieldNames: {key: string; children: string},
    opts?: IFindNodeOptions
): IKey | undefined => {
    let curFound = !key;
    let breakSearch = false;

    const recursive = (nodes: T[]): IKey | undefined => {
        for (let i = nodes.length - 1; i >= 0; i--) {
            const node = nodes[i];
            if (breakSearch) return undefined;

            if (node[fieldNames.children] && (!curFound || shouldSearchInChildren(node, expandedKeys, fieldNames, opts))) {
                const childResult = recursive(node[fieldNames.children] as T[]);
                if (childResult) return childResult;
                if (breakSearch) return undefined;
            }

            if (curFound && isNodeCanBeSelected(node, opts)) return node[fieldNames.key] as IKey;

            if (node[fieldNames.key] === key) curFound = true;
        }

        if (curFound && opts?.sameLevelOnly) breakSearch = true;
        return undefined;
    };

    if (!dataSet) return undefined;
    if (typeof key === 'undefined') return findNextNodeKey(dataSet, undefined, expandedKeys, fieldNames, opts);

    const result = recursive(dataSet);
    if (result) return result;

    if (opts?.defaultToBoundary === false) return undefined;
    return findNextNodeKey(dataSet, undefined, expandedKeys, fieldNames, opts);
};
