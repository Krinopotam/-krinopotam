import {IFindNodeOptions} from '@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes';
import {IKey} from '@krinopotam/service-types';
import {shouldSearchInChildren} from '@src/_shared/hooks/treeComponentApiMethods/serviceMethods/shouldSearchInChildren';
import {isNodeCanBeSelected} from '@src/_shared/hooks/treeComponentApiMethods/serviceMethods/isNodeCanBeSelected';
import {getPrevNodeKey} from '@src/_shared/hooks/treeComponentApiMethods/serviceMethods/getPrevNodeKey';

/**
 * Find next node key in data set by display order.
 * If no node on same level found, returns next of parent level node key.
 * If current node has children, returns the first one
 * @param dataSet - hierarchy collection of nodes
 * @param node - node key or node
 * @param expandedKeys - keys of expanded nodes
 * @param fieldNames - field names
 * @param opts - search options
 */
export const getNextNodeKey = <T extends Record<string, unknown>>(
    dataSet: T[] | undefined,
    node: IKey | Record<string, unknown> | undefined,
    expandedKeys: IKey[] | undefined,
    fieldNames: {key: string; children: string, disabled: string, selectable: string},
    opts?: IFindNodeOptions
): IKey | undefined => {
    const key = typeof node === 'object' ? (node[fieldNames.key] as IKey) : node;

    let curFound = !key;
    let breakSearch = false;

    const recursive = (nodes: T[]): IKey | undefined => {
        for (const node of nodes) {
            if (breakSearch) return undefined;
            if (curFound && isNodeCanBeSelected(node, fieldNames, opts)) return node[fieldNames.key] as IKey;

            if (typeof key === 'undefined' || node[fieldNames.key] === key) curFound = true;

            if (node[fieldNames.children] && (!curFound || shouldSearchInChildren(node, expandedKeys, fieldNames, opts))) {
                const childResult = recursive(node[fieldNames.children] as T[]);
                if (childResult) return childResult;
            }
        }

        if (curFound && opts?.sameLevelOnly) breakSearch = true;
        return undefined;
    };

    if (!dataSet?.length) return undefined;
    const result = recursive(dataSet);
    if (result) return result;

    if (opts?.defaultToBoundary === false) return undefined;

    return key ?? getPrevNodeKey(dataSet, undefined, expandedKeys, fieldNames, opts);
};
