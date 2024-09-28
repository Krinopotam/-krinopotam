import {AnyType, IKey} from '@krinopotam/service-types';
import {IFindNodeOptions} from '@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes';
import {shouldSearchInChildren} from '@src/_shared/hooks/treeComponentApiMethods/serviceMethods/shouldSearchInChildren';
import {isNodeCanBeSelected} from '@src/_shared/hooks/treeComponentApiMethods/serviceMethods/isNodeCanBeSelected';
import {getNextNodeKey} from '@src/_shared/hooks/treeComponentApiMethods/serviceMethods/getNextNodeKey';

/**
 * Find prev node key in data set by display order.
 * If no node on same level found, returns parent node key.
 * If the parent has children nodes, then we return the last one
 * @param dataSet - hierarchy collection of nodes
 * @param node - node or node key
 * @param expandedKeys - keys of expanded nodes
 * @param fieldNames - field names
 * @param opts - search options
 */
export const getPrevNodeKey = <T extends Record<string, AnyType>>(
    dataSet: T[] | undefined,
    node: IKey | Record<string, AnyType> | undefined,
    expandedKeys: IKey[] | undefined,
    fieldNames: {key: string; children: string, disabled: string, selectable: string},
    opts?: IFindNodeOptions
): IKey | undefined => {
    const key = typeof node === 'object' ? (node[fieldNames.key] as IKey) : node;

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

            if (curFound && isNodeCanBeSelected(node, fieldNames, opts)) return node[fieldNames.key] as IKey;

            if (node[fieldNames.key] === key) curFound = true;
        }

        if (curFound && opts?.sameLevelOnly) breakSearch = true;
        return undefined;
    };

    if (!dataSet?.length) return undefined;
    if (typeof key === 'undefined') return getNextNodeKey(dataSet, undefined, expandedKeys, fieldNames, opts);

    const result = recursive(dataSet);
    if (result) return result;

    if (opts?.defaultToBoundary === false) return undefined;
    return getNextNodeKey(dataSet, undefined, expandedKeys, fieldNames, opts);
};
