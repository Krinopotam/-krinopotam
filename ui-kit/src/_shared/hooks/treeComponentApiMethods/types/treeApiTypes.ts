import {Key} from 'react';
import {IBaseComponentApi} from '@src/_shared/hooks/componentApiMethods/types/apiTypes';

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

export type IFieldNames = {key: string; title: string; children: string};

export type INodePosition = 'below' | 'above' | 'insideTop' | 'insideBottom';

export interface ITreeComponentApi<TNode extends Record<string, unknown> = Record<string, unknown>, TProps extends object = object>
    extends IBaseComponentApi<TProps> {
    /** Get node fields names */
    getFieldNames: () => {key: string; children: string; title: string};

    /** Get data set */
    getDataSet: () => TNode[] | undefined;

    /** Set data set */
    setDataSet: (dataSet: TNode[] | undefined) => void;

    /** Get selected keys */
    getSelectedKeys: () => Key[] | undefined;

    /** Set selected keys */
    setSelectedKeys: (keys: Key | Key[] | null | undefined) => void;

    /** Get selected nodes
     * @param externalDataset - if not set, current data set will be used, if set, node will be searched in this data set
     * */
    getSelectedNodes: (externalDataset?: TNode[]) => TNode[] | undefined;

    /** Get node selected status
     * @param externalDataset - if not set, current data set will be used, if set, node will be searched in this data set
     * */
    isNodeSelected: (node:Key | TNode | undefined) => boolean;

    /**
     * Select node
     * @param node - node or key
     * @param select - if true, node will be selected (default true)
     */
    selectNode: (node: Key | TNode, select?: boolean) => void;

    /**
     * Get active node
     * By default, active node is last selected node.
     * @param singleOnly - component have active node if only one node is selected
     * @param externalDataset - if not set, current data set will be used, if set, node will be searched in this data set
     */
    getActiveNode: (singleOnly?: boolean, externalDataset?: TNode[]) => TNode | undefined;

    /** Get active node key (last selected) */
    getActiveNodeKey: (singleOnly?: boolean) => Key | undefined;

    /** Get expanded keys */
    getExpandedKeys: () => Key[] | undefined;

    /** Set expanded keys */
    setExpandedKeys: (keys: Key[] | undefined) => void;

    /** Get expanded nodes */
    getExpandedNodes: () => TNode[] | undefined;

    /** Check if node is expanded */
    isNodeExpanded: (key: Key | TNode) => boolean;

    /** Expand node */
    expandNode: (key: Key | TNode) => void;

    /** Collapse node */
    collapseNode: (key: Key | TNode) => void;

    /** Toggle node (expand if collapsed, collapse if expanded) */
    toggleNode: (key: Key | TNode) => void;

    /**
     * Get node
     * @param key - node key
     * @param externalDataset - if not set, current data set will be used, if set, node will be searched in this data set
     */
    getNode: (key: Key | undefined, externalDataset?: TNode[]) => TNode | undefined;

    /**
     * Get the nodes by key value
     * @param keys - array of key values
     * @param extDataSet - external data set. If set, search nodes in this data set, not current dataSet
     */
    getNodes: (key: Key | Key[] | null | undefined, extDataSet?: TNode[]) => TNode[] | undefined;

    /**
     * Get parent node
     * @param node - node or key
     * @param externalDataset - if not set, current data set will be used, if set, node will be searched in this data set
     */
    getParentNode: (node: Key | TNode, externalDataset?: TNode[]) => TNode | undefined;

    /** Add node */
    /**
     *
     * @param node - node to add
     * @param target- target node or key
     * @param position - node position: below target, above target, insideTop - first position inside target, insideBottom -  last position inside target
     * @param opts - options {ensureVisible - if true, node will be visible after adding (expanded parent nodes), select - if true, node will be selected after adding}
     * @param externalDataset - if not set, node will be added to current data set. If set - to this data set, component will not be updated
     * @returns changed data set
     */
    addNode: (
        node: TNode,
        target?: Key | TNode,
        position?: INodePosition,
        opts?: {
            ensureVisible?: boolean;
            select?: boolean;
        },
        externalDataset?: TNode[]
    ) => TNode[] | undefined;

    /** Update node */
    /**
     *
     * @param node updated node
     * @param target node or key
     * @param opts
     * @param externalDataset - if not set, node will be updated in current data set. If set - in this data set, component will not be updated
     */
    updateNode: (
        node: TNode,
        target?: Key | TNode,
        opts?: {
            ensureVisible?: boolean;
            select?: boolean;
        },
        externalDataset?: TNode[]
    ) => TNode[] | undefined;

    /**
     * Move node to target node
     * @param source - node or key
     * @param target - target node or key
     * @param position - move position: below target, above target, insideTop - first position inside target, insideBottom -  last position inside target
     * @param opts - options
     * @param externalDataset - if not set, node will be moved in current data set. If set - in this data set, component will not be updated
     * @returns changed data set
     */
    moveNode: (
        source: Key | TNode,
        target: Key | TNode,
        position?: INodePosition,
        opts?: {
            ensureVisible?: boolean;
            select?: boolean;
        },
        externalDataset?: TNode[]
    ) => TNode[] | undefined;

    /**
     * Remove node from data set
     * @param node - node or key
     * @param opts - options
     * @param externalDataset - if not set, node will be deleted in current data set. If set -  in this data set, component will not be updated
     * @returns changed data set
     */
    removeNode: (
        node: Key | TNode,
        opts?: {
            select?: 'prev' | 'next';
        },
        externalDataset?: TNode[]
    ) => TNode[] | undefined;

    /**
     * Expand parent nodes
     * @param node - node pr key
     * @param externalDataset - if not set, node will be expanded in current data set. If set - in this data set, component will not be updated
     */
    expandParentNodes: (node: Key | TNode, externalDataset?: TNode[]) => void;

    /**
     * Ensure node visible
     * @param node - node or key
     * @param externalDataset - if not set, node will be made visible in current data set. If set - in this data set, component will not be updated
     */
    ensureNodeVisible: (node: Key | TNode, externalDataset?: TNode[]) => void;

    /**
     * Get next node key
     * @param key
     * @param opts
     * @param externalDataset - if not set, search will be performed in current data set. If set - in this data set
     */
    getNextNodeKey: (key: Key | undefined, opts?: IFindNodeOptions, externalDataset?: TNode[]) => Key | undefined;

    /**
     * Get prev node key
     * @param key
     * @param opts
     * @param externalDataset - if not set, search will be performed in current data set. If set - in this data set
     */
    getPrevNodeKey: (key: Key | undefined, opts?: IFindNodeOptions, externalDataset?: TNode[]) => Key | undefined;

    /**
     * Get next node
     * @param key
     * @param opts
     * @param externalDataset - if not set, search will be performed in current data set. If set - in this data set
     */
    getNextNode: (node: TNode, opts?: IFindNodeOptions, externalDataset?: TNode[]) => TNode | undefined;

    /**
     * Get prev node
     * @param key
     * @param opts
     * @param externalDataset - if not set, search will be performed in current data set. If set - in this data set
     */
    getPrevNode: (node: TNode, opts?: IFindNodeOptions, externalDataset?: TNode[]) => TNode | undefined;

    /** Check if data set is plain list (has no children) */
    isDataPlainList: () => boolean;
}
