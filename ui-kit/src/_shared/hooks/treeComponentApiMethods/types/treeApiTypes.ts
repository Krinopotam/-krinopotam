import {IBaseComponentApi} from '@src/_shared/hooks/componentApiMethods/types/apiTypes';
import {AnyType, IKey} from '@krinopotam/service-types';

export interface IFindNodeOptions {
    /** If true, search will be performed only in the same level */
    sameLevelOnly?: boolean;
    /** If true, search will be performed only in the expanded nodes (default true) */
    expandedOnly?: boolean;
    /** If true, search will be performed only in the selectable nodes (default true) */
    selectableOnly?: boolean;
    /** If true, search will be performed only in the not disabled nodes (default true) */
    notDisabled?: boolean;
    /** If node is not found and defaultToBoundary is true, search will return boundary node, first or last (default true) */
    defaultToBoundary?: boolean;
}

export type IFieldNames = {
    key: string;
    title: string;
    children: string;
    parent: string;
    isLeaf: string;
    isGroup: string;
    disabled: string;
    selectable: string;
};

export type INodePosition = 'below' | 'above' | 'insideTop' | 'insideBottom';

export interface ITreeComponentApi<TNode extends Record<string, AnyType> = Record<string, AnyType>, TProps extends object = object>
    extends IBaseComponentApi<TProps> {
    /** Get node fields names */
    getFieldNames: () => IFieldNames;

    /** Returns data set */
    getDataSet: () => TNode[] | undefined;

    /** Set data set */
    setDataSet: (dataSet: TNode[] | undefined) => void;

    /** Returns groups only data set
     * @param removeBranch - this branch will be removed in result data set
     * @param extDataset - if not set, current data set will be used, if set, will return only groups in this data set
     */
    getGroupsOnly: (removeBranch?: IKey | TNode, extDataset?: TNode[]) => TNode[] | undefined;

    /** Sort data set
     * @param order - sort order
     * @param extDataset - if not set, current data set will be used, if set, will be sorted in this data set
     * @param extComparator - external comparator function or array of fields names to sort by. If not set will be used props comparator
     */
    sortTree: (order: 'asc' | 'desc', extDataset?: TNode[], extComparator?: (keyof TNode)[] | ((a: TNode, b: TNode) => number)) => TNode[] | undefined;

    /** Returns selected keys */
    getSelectedKeys: () => IKey[] | undefined;

    /** Set selected keys
     * @param keys - array of selected keys
     */
    setSelectedKeys: (keys: IKey | IKey[] | null | undefined) => void;

    /** Returns selected nodes
     * @param extDataset - if not set, current data set will be used, if set, node will be searched in this data set
     * */
    getSelectedNodes: (extDataset?: TNode[]) => TNode[] | undefined;

    /** Get node selected status
     * @param externalDataset - if not set, current data set will be used, if set, node will be searched in this data set
     * */
    isNodeSelected: (node?: IKey | TNode) => boolean;

    /**
     * Select/deselect node
     * @param node - node or key
     * @param select - if true, node will be selected (default true)
     * @param withChildren - select/deselect whole subtree
     * @param extDataSet - if not set, current data set will be used, if set, node will be searched in this data set
     */
    selectNode: (node: IKey | TNode | undefined, select?: boolean, withChildren?: boolean, extDataSet?: TNode[]) => void;

    /**
     * Returns active node
     * By default, active node is last selected node.
     * @param singleOnly - component have active node if only one node is selected
     * @param extDataSet - if not set, current data set will be used, if set, node will be searched in this data set
     */
    getActiveNode: (singleOnly?: boolean, withChildren?: boolean, extDataSet?: TNode[]) => TNode | undefined;

    /** Returns active node key (last selected) */
    getActiveNodeKey: (singleOnly?: boolean) => IKey | undefined;

    /** Returns expanded keys */
    getExpandedKeys: () => IKey[] | undefined;

    /** Set expanded keys */
    setExpandedKeys: (keys: IKey[] | undefined) => void;

    /**
    * Returns expanded nodes
    * @param extDataSet - if not set, current data set will be used, if set, node will be searched in this data set
    */
    getExpandedNodes: (extDataSet?: TNode[]) => TNode[] | undefined;

    /** Check if node is expanded */
    isNodeExpanded: (key: IKey | TNode) => boolean;

    /** Expand node */
    expandNode: (key: IKey | TNode) => void;

    /** Collapse node */
    collapseNode: (key: IKey | TNode) => void;

    /** Toggle node (expand if collapsed, collapse if expanded) */
    toggleNode: (key: IKey | TNode) => void;

    /**
     * Returns node
     * @param key - node key
     * @param extDataSet - if not set, current data set will be used, if set, node will be searched in this data set
     */
    getNode: (key: IKey | undefined, extDataSet?: TNode[]) => TNode | undefined;

    /**
     * Returns the nodes by key value
     * @param keys - array of key values
     * @param extDataSet - external data set. If set, search nodes in this data set, not current dataSet
     */
    getNodes: (key: IKey | IKey[] | null | undefined, extDataSet?: TNode[]) => TNode[] | undefined;

    /**
     * Returns parent node
     * @param node - node or key
     * @param extDataSet - if not set, current data set will be used, if set, node will be searched in this data set
     */
    getParentNode: (node: IKey | TNode, extDataSet?: TNode[]) => TNode | undefined;

    /** Add node */
    /**
     *
     * @param node - node to add
     * @param target- target node or key
     * @param position - node position: below target, above target, insideTop - first position inside target, insideBottom -  last position inside target
     * @param opts - options {ensureVisible - if true, node will be visible after adding (expanded parent nodes), select - if true, node will be selected after adding}
     * @param extDataSet - if not set, node will be added to current data set. If set - to this data set, component will not be updated
     * @returns changed data set
     */
    addNode: (
        node: TNode,
        target?: IKey | TNode,
        position?: INodePosition,
        opts?: {
            ensureVisible?: boolean;
            select?: boolean;
            sortNodes?: boolean;
        },
        extDataSet?: TNode[]
    ) => TNode[] | undefined;

    /** Update node */
    /**
     *
     * @param node updated node
     * @param target node or key
     * @param opts
     * @param extDataSet - if not set, node will be updated in current data set. If set - in this data set, component will not be updated
     */
    updateNode: (
        node: TNode,
        target?: IKey | TNode,
        opts?: {
            ensureVisible?: boolean;
            select?: boolean;
            sortNodes?: boolean;
        },
        extDataSet?: TNode[]
    ) => TNode[] | undefined;

    /**
     * Move node to target node
     * @param source - node or key
     * @param target - target node or key
     * @param position - move position: below target, above target, insideTop - first position inside target, insideBottom -  last position inside target
     * @param opts - options
     * @param extDataSet - if not set, node will be moved in current data set. If set - in this data set, component will not be updated
     * @returns changed data set
     */
    moveNode: (
        source: IKey | TNode,
        target: IKey | TNode | undefined,
        position?: INodePosition,
        opts?: {
            ensureVisible?: boolean;
            select?: boolean;
            sortNodes?: boolean;
        },
        extDataSet?: TNode[]
    ) => TNode[] | undefined;

    /**
     * Remove node from data set
     * @param node - node or key
     * @param opts - options
     * @param extDataSet - if not set, node will be deleted in current data set. If set -  in this data set, component will not be updated
     * @returns changed data set
     */
    removeNode: (
        node: IKey | TNode,
        opts?: {
            select?: 'prev' | 'next';
        },
        extDataSet?: TNode[]
    ) => TNode[] | undefined;

    /**
     * Expand parent nodes
     * @param node - node pr key
     * @param extDataSet - if not set, node will be expanded in current data set. If set - in this data set, component will not be updated
     */
    expandParentNodes: (node: IKey | TNode, extDataSet?: TNode[]) => void;

    /**
     * Ensure node visible
     * @param node - node or key
     * @param externalDataset - if not set, node will be made visible in current data set. If set - in this data set, component will not be updated
     */
    ensureNodeVisible: (node: IKey | TNode, extDataSet?: TNode[]) => void;

    /**
     * Returns next node key
     * @param node - node or key
     * @param opts
     * @param extDataSet - if not set, search will be performed in current data set. If set - in this data set
     */
    getNextNodeKey: (key: IKey | Record<string, AnyType> | undefined, opts?: IFindNodeOptions, extDataSet?: TNode[]) => IKey | undefined;

    /**
     * Returns prev node key
     * @param node - node or key
     * @param opts
     * @param extDataSet - if not set, search will be performed in current data set. If set - in this data set
     */
    getPrevNodeKey: (node: IKey | Record<string, AnyType> | undefined, opts?: IFindNodeOptions, extDataSet?: TNode[]) => IKey | undefined;

    /**
     * Returns next node
     * @param key
     * @param opts
     * @param extDataSet - if not set, search will be performed in current data set. If set - in this data set
     */
    getNextNode: (node: TNode, opts?: IFindNodeOptions, extDataSet?: TNode[]) => TNode | undefined;

    /**
     * Returns prev node
     * @param key
     * @param opts
     * @param extDataSet - if not set, search will be performed in current data set. If set - in this data set
     */
    getPrevNode: (node: TNode, opts?: IFindNodeOptions, extDataSet?: TNode[]) => TNode | undefined;

    /** Check if data set is plain list (has no children) */
    isDataPlainList: () => boolean;
}
