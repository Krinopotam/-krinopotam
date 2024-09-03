//region Types
import React, {Key} from "react";
import {GetProps, TreeSelect} from "antd";
import {IDFormModalProps} from "@src/dFormModal";
import {IButtonsRowApi, IFormButtons} from "@src/buttonsRow";
import {DefaultOptionType} from "rc-tree-select/es/TreeSelect";

interface ITreeSelectNodeBase extends Omit<DefaultOptionType, 'children'> {
    /** Node id */
    id?: Key;
    /** Leaf node or not */
    isLeaf?: boolean;
    /** Children nodes */
    children?: ITreeSelectNode[];
}

export type ITreeSelectNode<T = object> = ITreeSelectNodeBase & { payload?: T };
//export type ITreeSelectValue = ITreeSelectNode | ITreeSelectNode[] | undefined;

type IAntTreeSelectComponentProps = GetProps<typeof TreeSelect>
export type IAntTreeSelectProps = Omit<IAntTreeSelectComponentProps, 'labelInValue' | 'treeData'>;

export interface ITreeSelectBaseProps {
    /** A mutable object to merge with these controls api */
    apiRef?: ITreeSelectApi;

    /** Tree TreeSelect id */
    componentId?: string;

    /** Customize tree node title render */
    treeTitleRender?: (treeNode: ITreeSelectNode) => React.ReactNode;

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

    /** Edit item controls props. If not set then component not editable */
    editFormProps?: IDFormModalProps;

    /** Confirm message before node delete */
    nodeDeleteMessage?: React.ReactNode;


    /** Should confirm before delete */
    confirmDelete?: boolean;


    /** If true, the component is expected to contain a flat list (no children). In this case, the space for the expand/collapse icon will be hidden*/
    plainList?: boolean;

    /** Data mutator function (mutates original data) */
    dataMutator?: <T extends object>(node: T) => ITreeSelectNode;

    /**---unchecked -----*/

    /** Value */
    value?: ITreeSelectValues | string;

    /** Value ??????????? */
    defaultValueCallback?: (data: ITreeSelectNode[]) => ITreeSelectNode | ITreeSelectNode[];


    /**  Selected value abel renderer */
    //selectedLabelRender?: (treeNode: ITreeSelectNode | Record<string, unknown>) => React.ReactNode;


    /**  Loaded data without parameters (like searchString) will not be cached */
    noCacheFetchedData?: boolean;


    /** Edit buttons*/
    editButtons?: IFormButtons;


    /** --- Callbacks --------------- */

    /** Fires when the component is ready for use (when it fully downloaded all the data, if necessary) */
    onReady?: () => void;


    /** fires when the TreeSelect trying to fetch data */
    onDataFetch?: (search: string, api: ITreeSelectApi) => ITreeSelectSourcePromise | undefined;

    /** fires when the TreeSelect fetch success */
    onDataFetchSuccess?: (result: { data: ITreeSelectNode[] }, api: ITreeSelectApi) => boolean | void;

    /** fires when the TreeSelect fetch failed */
    onDataFetchError?: (message: string, code: number, api: ITreeSelectApi) => boolean | void;

    /** fires after the completion of fetching the data, regardless of the result */
    onDataFetchComplete?: (api: ITreeSelectApi) => boolean | void;

    /** Callback executed when selected node delete */
    onDelete?: (selectedNodes: ITreeSelectNode[], api: ITreeSelectApi) => ITreeSelectDeletePromise | void | undefined;
}

export type ITreeSelectProps = ITreeSelectBaseProps & IAntTreeSelectProps;
export type ITreeSelectSourcePromise = Promise<{ data: ITreeSelectNode[] }>;
export type ITreeSelectDeletePromise = Promise<{ data: Record<string, unknown> }>;
export type ITreeSelectPlainValue = string | number;

export type ITreeSelectValues = Key[] | undefined

export type IFieldNames = { value: string; label: string; children: string }

export interface ITreeSelectApi {
    /** Get the TreeSelect id */
    getId: () => string;

    /** Is component mounted status */
    isMounted: () => boolean;

    /** Edit mode buttons api */
    buttonsApi: IButtonsRowApi;

    /** Get node fields names */
    getFieldNames: () => IFieldNames;

    /** Get current TreeSelect props */
    getProps: () => ITreeSelectProps;

    /** Set current TreeSelect props */
    setProps: (props: ITreeSelectProps) => void;

    /** Partial update current TreeSelect props */
    updateProps: (props: Partial<Omit<ITreeSelectProps, 'fieldsProps'>>) => void;

    /** Get the TreeSelect selected nodes */
    getValues: () => ITreeSelectValues;

    /** Set the TreeSelect selected nodes*/
    setValues: (values: ITreeSelectValues) => void;

    /**
     * Get the TreeSelect node by key value
     * @param extDataSet - external data set. If set, search nodes in this data set, not current dataSet
     */
    getNode: (key: Key, extDataSet?: ITreeSelectNode[]) => ITreeSelectNode[] | undefined;

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

}