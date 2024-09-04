//region Types
import React, {Key} from 'react';
import {GetProps, GetRef, TreeSelect} from 'antd';
import {IDFormModalApi, IDFormModalProps} from '@src/dFormModal';
import {IButtonsRowApi, IFormButton} from '@src/buttonsRow';
import {DefaultOptionType} from 'rc-tree-select/es/TreeSelect';
import {translations} from '@src/tabulatorGrid/translations/translations';
import {IFindNodeOptions} from "@src/_shared/tools/nodesMethods/findeNextNodeKey";

interface ITreeSelectNodeBase extends Omit<DefaultOptionType, 'children'> {
    /** Node id */
    id?: Key;
    /** Leaf node or not */
    isLeaf?: boolean;
    /** Children nodes */
    children?: ITreeSelectNode[];
}

export type ITreeSelectNode<T = object> = ITreeSelectNodeBase & {originalData?: T};

type IAntTreeSelectComponentProps = GetProps<typeof TreeSelect>;
export type IAntTreeSelectProps = Omit<IAntTreeSelectComponentProps, 'labelInValue' | 'treeData' | 'fieldNames'>;

export interface ITreeSelectButton extends IFormButton {
    /** if no node is selected in the tree, disable the button */
    checkDisabled?: boolean;

    /** if no item is selected in the treeSelect, hide the button */
    checkHidden?: boolean;
}

export type ITreeSelectButtons = Record<string, ITreeSelectButton | null>;

export interface ITreeSelectBaseProps {
    /** A mutable object to merge with these controls api */
    apiRef?: ITreeSelectApi;

    /** Tree TreeSelect id */
    componentId?: string;

    /** TreeSelect field names
     * There is confusion in the Antd treeSelect props between label and title.
     * For clarity, we mean title is the name of the node, and label is a display of the selected node
     **/
    fieldNames?: Partial<IFieldNames>;

    /** Customize tree node title render
     * You can use the built-in treeNodeLabelProp method, but it has a significant drawback:
     * - one render used for renders nodes list and selected value together. This behavior cannot be changed
     * If you want different renders, use labelRender and titleRender
     */
    titleRender?: (treeNode: ITreeSelectNode) => React.ReactNode;

    /** Customize selected node label render */
    labelRender?: (treeNode: ITreeSelectNode) => React.ReactNode;

    /** Value */
    value?: ITreeSelectValue;

    /** Is TreeSelect read only  */
    readOnly?: boolean; //TODO: Make readonly

    /**  Custom filter */
    filterTreeNode?: boolean | ((inputValue: string, treeNode: ITreeSelectNode) => boolean);

    /** Local data set */
    dataSet?: ITreeSelectNode[];

    /**  Start fetching remote data on load control or on use control (example, open dropdown). Default OnLoad */
    fetchMode?: 'onLoad' | 'onUse' | 'onUseForce';

    /**  Minimum length of search string before fetch data */
    minSearchLength?: number;

    /**  debounce in ms */
    debounce?: number;

    /** Data mutator function (mutates original data) */
    dataMutator?: <T extends object>(node: T) => ITreeSelectNode;

    /** Language */
    language?: keyof typeof translations;

    /** Custom translation */
    translation?: Partial<typeof translations.en>;

    //region Edit module
    /** Label in header buttons row */
    headerLabel?: React.ReactNode;

    /** Header editor buttons */
    editButtons?:
        | Record<'view' | 'create' | 'createGroup' | 'clone' | 'update' | 'delete' | 'arrowUp' | 'arrowDown', ITreeSelectButton | null>
        | ITreeSelectButtons;

    /** Header buttons size. Default: 'small'*/
    buttonsSize?: ITreeSelectButton['size'];

    /** If true, only button icons will be displayed, without title */
    buttonsIconsOnly?: boolean;

    /** Header buttons size. Default: 'right'*/
    buttonsPosition?: ITreeSelectButton['position'];

    /** Buttons row wrapper style */
    buttonsRowWrapperStyle?: React.CSSProperties;

    /** Buttons row style */
    buttonsRowStyle?: React.CSSProperties;

    /** Edit item controls props. If not set then component not editable */
    editFormProps?: IDFormModalProps;

    /** Edit item group controls props. If not set then component not editable */
    editGroupFormProps?: IDFormModalProps;

    /** Confirm message before node delete */
    nodeDeleteMessage?: React.ReactNode;

    /** Should confirm before delete */
    confirmDelete?: boolean;
    //endregion

    /**---unchecked -----*/

    /**  Loaded data without parameters (like searchString) will not be cached */
    noCacheFetchedData?: boolean;

    /** --- Callbacks --------------- */

    /** Fires when the component is ready for use (when it fully downloaded all the data, if necessary) */
    onReady?: () => void;

    /** fires when the TreeSelect trying to fetch data */
    onDataFetch?: (search: string, api: ITreeSelectApi) => ITreeSelectSourcePromise | undefined;

    /** fires when the TreeSelect fetch success */
    onDataFetchSuccess?: (result: {data: ITreeSelectNode[]}, api: ITreeSelectApi) => boolean | void;

    /** fires when the TreeSelect fetch failed */
    onDataFetchError?: (message: string, code: number, api: ITreeSelectApi) => boolean | void;

    /** fires after the completion of fetching the data, regardless of the result */
    onDataFetchComplete?: (api: ITreeSelectApi) => boolean | void;

    /** Callback executed when selected node delete */
    onDelete?: (selectedNodes: ITreeSelectNode[], api: ITreeSelectApi) => ITreeSelectDeletePromise | void | undefined;
}

export type ITreeSelectProps = ITreeSelectBaseProps & IAntTreeSelectProps;
export type ITreeSelectSourcePromise = Promise<{data: ITreeSelectNode[]}>;
export type ITreeSelectDeletePromise = Promise<{data: Record<string, unknown>}>;
export type ITreeSelectPlainValue = string | number;

export type ITreeSelectValue = Key | Key[] | null;

export type IFieldNames = {key: string; title: string; children: string};

export interface ITreeSelectApi {
    /** Tree ref */
    treeSelectRef: React.RefObject<GetRef<typeof TreeSelect>>;

    /** Get the TreeSelect id */
    getId: () => string;

    /** Is component mounted status */
    isMounted: () => boolean;

    /** Get edit form api */
    getEditFormApi: () => IDFormModalApi;

    /** Get edit group form api */
    getEditGroupFormApi: () => IDFormModalApi;

    /** Get edit mode buttons row api */
    getButtonsApi: () => IButtonsRowApi & {refreshButtons: () => void};

    /** Get node fields names */
    getFieldNames: () => IFieldNames;

    /** Get current TreeSelect props */
    getProps: () => ITreeSelectProps;

    /** Set current TreeSelect props */
    setProps: (props: ITreeSelectProps) => void;

    /** Partial update current TreeSelect props */
    updateProps: (props: Partial<Omit<ITreeSelectProps, 'fieldsProps'>>) => void;

    /** Get the TreeSelect selected nodes */
    getValue: () => ITreeSelectValue;

    /** Set the TreeSelect selected nodes*/
    setValue: (value: ITreeSelectValue) => void;

    /** Get expanded keys */
    getExpandedKeys: () => ITreeSelectProps['treeExpandedKeys'] | undefined;

    /** Set expanded keys */
    setExpandedKeys: (keys: ITreeSelectProps['treeExpandedKeys']) => void;

    /** Get expanded nodes */
    getExpandedNodes: () => ITreeSelectNode[] | undefined;

    /** Check if node is expanded */
    isNodeExpanded: (key: Key) => boolean;

    /** Expand node */
    expandNode: (key: Key) => void;

    /** Collapse node */
    collapseNode: (key: Key) => void;

    /** Toggle node (expand if collapsed, collapse if expanded) */
    toggleNode: (key: Key) => void;

    /**
     * Expand parent nodes
     * @param key - node key
     * @param externalDataset - if not set, node will be expanded in current data set. If set - in this data set, component will not be updated
     */
    expandParentNodes: (key: Key, externalDataset?: ITreeSelectProps['dataSet']) => void

    /**
     * Get the TreeSelect node by key value
     * @param extDataSet - external data set. If set, search nodes in this data set, not current dataSet
     */
    getNode: (key: Key, extDataSet?: ITreeSelectNode[]) => ITreeSelectNode | undefined;

    /**
     * Get the TreeSelect node by key value
     * @param keys - array of key values
     * @param extDataSet - external data set. If set, search nodes in this data set, not current dataSet
     */
    getNodes: (key: ITreeSelectValue, extDataSet?: ITreeSelectNode[]) => ITreeSelectNode[] | undefined;

    /**
     * Get the TreeSelect selected nodes
     * @param extDataSet - external data set. If set, search nodes in this data set, not current dataSet
     */
    getSelectedNodes: (extDataSet?: ITreeSelectNode[]) => ITreeSelectNode[] | undefined;

    /** Get current data set */
    getDataSet: () => ITreeSelectNode[] | undefined;

    /** Update data set*/
    setDataSet: (dataSet: ITreeSelectNode[] | undefined | null) => void;

    /** Get the TreeSelect ready to user input status (data is fetched) */
    getIsReady: () => boolean;

    /** Set the TreeSelect ready to user input status (data is fetched) */
    setIsReady: (value: boolean) => void;

    /** Get the TreeSelect fetching status (is fetching now) */
    getIsFetching: () => boolean;

    /** Set the TreeSelect fetching status (is fetching now) */
    setIsFetching: (value: boolean) => void;

    /** Get the TreeSelect fetch error */
    getFetchError: () => string;

    /** Set the TreeSelect fetch error */
    setSetFetchError: (value: string | null) => void;

    /** Get the TreeSelect all fetched status (full data set completely fetched) */
    getIsAllFetched: () => boolean;

    /** Set the TreeSelect all fetched status (full data set completely fetched) */
    setIsAllFetched: (value: boolean) => void;

    /** Get the TreeSelect min symbols input length status to show/hide error */
    getMinSymbols: () => number;

    /** Set the TreeSelect min symbols input status to show/hide error */
    setSetMynSymbols: (value: number) => void;

    /** Fetch data
     * @param search - search string
     * @param debounce - should debounce
     */
    fetchData: (search: string, debounce?: boolean) => void;

    /** Add nodes to current dataset*/
    addNodes: (parentNode: ITreeSelectNode | undefined, newNodes: ITreeSelectNode | ITreeSelectNode[]) => void;

    /** Update nodes content in dataset */
    updateNodes: (nodes: ITreeSelectNode | ITreeSelectNode[]) => void;

    /** Delete node from dataSet */
    deleteNodes: (nodes: ITreeSelectNode | ITreeSelectNode[]) => void;

    /** Mutate node supplementing it with the necessary properties specified in the component parameters */
    prepareNode: (node: ITreeSelectNode) => ITreeSelectNode;

    /** Check if data set is plain list (has no children) */
    isDataPlainList: () => boolean;

    /**
     * Get next node key
     * @param key
     * @param opts
     * @param externalDataset - if not set, search will be performed in current data set. If set - in this data set
     */
    getNextNodeKey: (key: Key | undefined, opts?: IFindNodeOptions, externalDataset?: ITreeSelectNode[]) => Key | undefined;

    /**
     * Get prev node key
     * @param key
     * @param opts
     * @param externalDataset - if not set, search will be performed in current data set. If set - in this data set
     */
    getPrevNodeKey: (key: Key | undefined, opts?: IFindNodeOptions, externalDataset?: ITreeSelectNode[]) => Key | undefined;

    /**
     * Get next node
     * @param key
     * @param opts
     * @param externalDataset - if not set, search will be performed in current data set. If set - in this data set
     */
    getNextNode: (node: ITreeSelectNode, opts?: IFindNodeOptions, externalDataset?: ITreeSelectNode[]) => ITreeSelectNode | undefined;

    /**
     * Get prev node
     * @param key
     * @param opts
     * @param externalDataset - if not set, search will be performed in current data set. If set - in this data set
     */
    getPrevNode: (node: ITreeSelectNode, opts?: IFindNodeOptions, externalDataset?: ITreeSelectNode[]) => ITreeSelectNode | undefined;
}
