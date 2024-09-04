type IKey = string | number | bigint;

export interface IFindNodeOptions {
    /** If true, search will be performed only in the same level */
    sameLevelOnly?: boolean;
    /** If true, search will be performed only in the expanded nodes (default true) */
    expandedOnly?: boolean;
    /** If true, search will be performed only in the selectable nodes (default true) */
    selectableOnly?: boolean;
    /** If true, search will be performed only in the not disabled nodes (default true) */
    notDisabled?: boolean;
}

/**
 * Find next node key in data set by display order.
 * If no node on same level found, returns next of parent level node key.
 * If current node has children, returns the first one
 * @param dataSet - hierarchy collection of nodes
 * @param key - node key
 * @param expandedKeys - keys of expanded nodes
 * @param keyField - field name of node key
 * @param childrenField - field name of node children
 * @param opts - search options
 */
export const findNextNodeKey = <T extends Record<string, unknown>>(
    dataSet: T[] | undefined,
    key: IKey | undefined,
    expandedKeys: IKey[] | undefined,
    keyField: string,
    childrenField: string,
    opts?: IFindNodeOptions
): IKey | undefined => {
    let curFound = !key;
    let breakSearch = false;

    const recursive = (nodes: T[]): IKey | undefined => {
        for (const node of nodes) {
            if (breakSearch) return undefined;
            if (curFound && isNodeCanBeSelected(node, opts)) return node[keyField] as IKey;

            if (typeof key === 'undefined' || node[keyField] === key) curFound = true;

            if (node[childrenField] && (!curFound || shouldSearchInChildren(node, expandedKeys, keyField, opts))) {
                const childResult = recursive(node[childrenField] as T[]);
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
 * Find зкум node key in data set by display order.
 * If no node on same level found, returns parent node key.
 * If the parent has children nodes, then we return the last one
 * @param dataSet - hierarchy collection of nodes
 * @param key - node key
 * @param expandedKeys - keys of expanded nodes
 * @param keyField - field name of node key
 * @param childrenField - field name of node children
 * @param opts - search options
 */
export const findPrevNodeKey = <T extends Record<string, unknown>>(
    dataSet: T[] | undefined,
    key: IKey | undefined,
    expandedKeys: IKey[] | undefined,
    keyField: string,
    childrenField: string,
    opts?: IFindNodeOptions
): IKey | undefined => {
    let curFound = !key;
    let breakSearch = false;

    const recursive = (nodes: T[]): IKey | undefined => {
        for (let i = nodes.length - 1; i >= 0; i--) {
            const node = nodes[i];
            if (breakSearch) return undefined;

            if (node[childrenField] && (!curFound || shouldSearchInChildren(node, expandedKeys, keyField, opts))) {
                const childResult = recursive(node[childrenField] as T[]);
                if (childResult) return childResult;
            }

            if (curFound && isNodeCanBeSelected(node, opts)) return node[keyField] as IKey;

            if (typeof key === 'undefined' || node[keyField] === key) curFound = true;
        }

        if (curFound && opts?.sameLevelOnly) breakSearch = true;
        return undefined;
    };

    if (!dataSet) return undefined;
    return recursive(dataSet);
};

const isNodeCanBeSelected = (node: Record<string, unknown>, opts?: IFindNodeOptions) =>
    (opts?.notDisabled === false || node.disabled !== true) && (opts?.selectableOnly === false || node.selectable !== false);

const shouldSearchInChildren = (node: Record<string, unknown>, expandedKeys: IKey[] | undefined, keyField: string, opts?: IFindNodeOptions) => {
    return !opts?.sameLevelOnly && (opts?.expandedOnly === false || expandedKeys?.includes(node[keyField] as IKey));
};
