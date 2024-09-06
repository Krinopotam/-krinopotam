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

export interface ITreeComponentApi<
    TNode extends Record<string, unknown> = Record<string, unknown>,
    TProps extends object = object,
> extends IBaseComponentApi<TProps> {
    /** Get node fields names */
    getFieldNames: () => {key: string; children: string; title: string};

    /** Get data set */
    getDataSet: () => TNode[] | undefined;

    /** Set data set */
    setDataSet: (dataSet: TNode[] | undefined) => void;

    /** Get selected keys */
    getSelectedKeys: () => Key[] | undefined;

    /** Set selected keys */
    setSelectedKeys: (keys: Key | Key[] | null| undefined) => void;

    /** Get selected nodes
     * @param externalDataset - if not set, current data set will be used, if set, node will be searched in this data set
     * */
    getSelectedNodes: (externalDataset?: TNode[]) => TNode[] | undefined;

    /**
     * Select node
     * @param key - node key
     * @param select - if true, node will be selected (default true)
     */
    selectNode: (key: Key, select?: boolean) => void;

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
    isNodeExpanded: (key: Key) => boolean;

    /** Expand node */
    expandNode: (key: Key) => void;

    /** Collapse node */
    collapseNode: (key: Key) => void;

    /** Toggle node (expand if collapsed, collapse if expanded) */
    toggleNode: (key: Key) => void;

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
     * @param key - node key
     * @param externalDataset - if not set, current data set will be used, if set, node will be searched in this data set
     */
    getParentNode: (key: Key, externalDataset?: TNode[]) => TNode | undefined;

    /** Add node */
    /**
     *
     * @param node - node to add
     * @param targetKey - target node key
     * @param position - node position: below target, above target, insideTop - first position inside target, insideBottom -  last position inside target
     * @param opts - options {ensureVisible - if true, node will be visible after adding (expanded parent nodes), select - if true, node will be selected after adding}
     * @param externalDataset - if not set, node will be added to current data set. If set - to this data set, component will not be updated
     * @returns changed data set
     */
    addNode: (
        node: TNode,
        targetKey?: Key,
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
     * @param node
     * @param targetKey
     * @param opts
     * @param externalDataset - if not set, node will be updated in current data set. If set - in this data set, component will not be updated
     */
    updateNode: (
        node: TNode,
        targetKey?: Key,
        opts?: {
            ensureVisible?: boolean;
            select?: boolean;
        },
        externalDataset?: TNode[]
    ) => TNode[] | undefined;

    /**
     * Move node to target node
     * @param key - node key
     * @param targetKey - target node key
     * @param position - move position: below target, above target, insideTop - first position inside target, insideBottom -  last position inside target
     * @param opts - options
     * @param externalDataset - if not set, node will be moved in current data set. If set - in this data set, component will not be updated
     * @returns changed data set
     */
    moveNode: (
        key: Key,
        targetKey: Key,
        position?: INodePosition,
        opts?: {
            ensureVisible?: boolean;
            select?: boolean;
        },
        externalDataset?: TNode[]
    ) => TNode[] | undefined;

    /**
     * Remove node from data set
     * @param key - node key
     * @param opts - options
     * @param externalDataset - if not set, node will be deleted in current data set. If set -  in this data set, component will not be updated
     * @returns changed data set
     */
    removeNode: (key: Key, opts?: {select?: 'prev' | 'next'}, externalDataset?: TNode[]) => TNode[] | undefined;

    /**
     * Delete node from database and  data set
     * @param key - node key
     * @param opts  - options
     * @param externalDataset - if not set, node will be deleted in current data set. If set -  in this data set, component will not be updated
     */
    deleteNode: (key: Key, opts?: {select?: 'prev' | 'next'}, externalDataset?: TNode[]) => TNode[] | undefined;

    /**
     * Expand parent nodes
     * @param key - node key
     * @param externalDataset - if not set, node will be expanded in current data set. If set - in this data set, component will not be updated
     */
    expandParentNodes: (key: Key, externalDataset?: TNode[]) => void;

    /**
     * Ensure node visible
     * @param key - node key
     * @param externalDataset - if not set, node will be made visible in current data set. If set - in this data set, component will not be updated
     */
    ensureNodeVisible: (key: Key, externalDataset?: TNode[]) => void;

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

    /** Mutate node supplementing it with the necessary properties specified in the component parameters */
    prepareNode: (node: TNode) => TNode;

    /** Check if data set is plain list (has no children) */
    isDataPlainList: () => boolean;
}