//region Types
import React from 'react';
import {GetProps, GetRef, TreeSelect} from 'antd';
import {IDFormModalApi, IDFormModalProps} from '@src/dFormModal';
import {IButtonRowProps, IButtonsRowApi, IFormButton} from '@src/buttonsRow';
import {IFieldNames, ITreeComponentApi} from '@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes';
import {translations} from '@src/treeSelect/translations/translations';
import {AnyType, IKey} from '@krinopotam/service-types';
import {DataNode} from "rc-tree-select/lib/interface";

interface ITreeSelectNodeBase extends Omit<DataNode, 'children'> {
    /** Node id */
    id?: IKey;
    /** Node disabled status */
    disabled?: boolean;
    /** Leaf node or not */
    isLeaf?: boolean;
    /** Node selectable status */
    selectable?: boolean;
    /** Node group or not */
    isGroup?: boolean;
    /** Children nodes */
    children?: ITreeSelectNode[];
}

export type ITreeSelectNode<T = Record<string, unknown>> = ITreeSelectNodeBase & T;

type IAntTreeSelectComponentProps = GetProps<typeof TreeSelect>;
export type IAntTreeSelectProps = Omit<
    IAntTreeSelectComponentProps,
    'labelInValue' | 'treeData' | 'fieldNames' | 'treeDefaultExpandAll' | 'treeDefaultExpandedKeys' | 'treeExpandedKeys' | 'onChange' | 'treeTitleRender'
>;

export interface ITreeSelectButton extends IFormButton {
    /** if no node is selected in the tree, disable the button */
    checkDisabled?: boolean;

    /** if no item is selected in the treeSelect, hide the button */
    checkHidden?: boolean;
}

export type ITreeSelectButtons = Record<string, ITreeSelectButton | null>;

export interface ITreeSelectOwnProps {
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
    selectedRender?: (treeNode: ITreeSelectNode) => React.ReactNode;

    /** Groups only has children. Group is node which has no isLeaf:true property */
    groupsMode?: boolean;

    /** Should select new node after create, clone or delete node */
    selectNewNode?:boolean

    /** Sort nodes on change (create new or update) */
    sortOnChange?: boolean;

    /** Sort comparator */
    sortComparator?:(keyof ITreeSelectNode)[] | ((a: ITreeSelectNode, b: ITreeSelectNode) => number);

    /** Value */
    value?: ITreeSelectValue;

    /** Is TreeSelect read only  */
    readOnly?: boolean;

    /**  Custom filter */
    filterTreeNode?: boolean | ((inputValue: string, treeNode: ITreeSelectNode) => boolean);

    /** Local data set */
    dataSet?: ITreeSelectNode[] | (() => ITreeSelectNode[] | undefined);

    /**  Start fetching remote data on load control or on use control (example, open dropdown). Default OnLoad */
    fetchMode?: 'onLoad' | 'onUse' | 'onUseForce';

    /**  Minimum length of search string before fetch data */
    minSearchLength?: number;

    /**  debounce in ms */
    debounce?: number;

    /** Data mutator function (mutates original data) */
    dataMutator?: <T extends object>(node: T) => ITreeSelectNode;

    /** Expand all nodes by default (default true) */
    defaultExpandAll?: boolean;

    /** Default expanded keys */
    defaultExpandedKeys?: IKey[];

    /** Expanded keys */
    expandedKeys?: IKey[];

    /** Language */
    language?: keyof typeof translations;

    /** Custom translation */
    translation?: Partial<typeof translations.en_GB>;

    //region Edit module
    /** Label in header buttons row */
    headerLabel?: React.ReactNode;

    /** Header editor buttons */
    buttons?:
        | Record<'view' | 'create' | 'createGroup' | 'clone' | 'update' | 'delete' | 'arrowUp' | 'arrowDown', ITreeSelectButton | null>
        | ITreeSelectButtons;

    /** Header buttons size. Default: 'small'*/
    buttonsSize?: ITreeSelectButton['size'];

    /** If true, only button icons will be displayed, without title (default true) */
    buttonsIconsOnly?: boolean;

    /** Header buttons size. Default: 'right'*/
    buttonsPosition?: ITreeSelectButton['position'];

    /** Buttons row wrapper style */
    buttonsRowWrapperStyle?: React.CSSProperties;

    /** Buttons row style */
    buttonsRowStyle?: React.CSSProperties;

    /** Buttons row styles for each block (left, center, right) */
    buttonsRowStyles?: IButtonRowProps['styles']

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

    /** Fires when the TreeSelect value is changed */
    onChange?: (valueType: ILabeledValue | ILabeledValue[] | null, keys: IKey[], nodes: ITreeSelectNode[]) => void;

    /** Fires when the TreeSelect dataSet is changed */
    onDataSetChanged?: (dataSet: ITreeSelectNode[] | undefined) => void;

    /** fires when the TreeSelect trying to fetch data */
    onDataFetch?: (search: string, api: ITreeSelectApi) => ITreeSelectSourcePromise | undefined;

    /** fires when the TreeSelect fetch success */
    onDataFetchSuccess?: (result: {data: ITreeSelectNode[]}, api: ITreeSelectApi) => boolean | void;

    /** fires when the TreeSelect fetch failed */
    onDataFetchError?: (message: string, code: number, api: ITreeSelectApi) => boolean | void;

    /** fires after the completion of fetching the data, regardless of the result */
    onDataFetchComplete?: (api: ITreeSelectApi) => boolean | void;

    /** Callback executed when selected node delete */
    onDelete?: (node: ITreeSelectNode, api: ITreeSelectApi) => ITreeSelectDeletePromise | void | undefined;

    /** Callback to get the label of the node's set value. Called when the value set in the TreeSelect is changed */
    onGetLabelCallback?: (key: IKey, dataSet: ITreeSelectNode[] | undefined) => React.ReactNode;
}

export type ITreeSelectProps = ITreeSelectOwnProps & IAntTreeSelectProps;
export type ITreeSelectSourcePromise = Promise<{data: ITreeSelectNode[]}>;
export type ITreeSelectDeletePromise = Promise<{data: Record<string, AnyType>}>;

export interface ILabeledValue {
    value: IKey;
    label?: React.ReactNode;
}

export type ITreeSelectValue = IKey | IKey[] | ILabeledValue | ILabeledValue[] | Record<string, AnyType> | Record<string, AnyType>[] | null;

export interface ITreeSelectApi extends Omit<ITreeComponentApi<ITreeSelectNode, ITreeSelectProps>, 'setSelectedKeys' | 'getSelectedKeys' | 'getSelectedNodes'> {
    /** Tree ref */
    treeSelectRef: React.RefObject<GetRef<typeof TreeSelect>>;

    /** Get translation */
    t: (str: keyof (typeof translations)['en_GB']) => string;

    /** Get values (values always in IBaseValueWithLabel array) */
    getValues: () => ILabeledValue[] | null;

    /** Set values (values may be  as Key or IBaseValueWithLabel or array) */
    setValues: (value: ITreeSelectValue) => void;

    /** Returns selected keys
     * @param extValue - if not set, current value will be used, if set, node will be searched by this value
     */
    getSelectedKeys: (extValue?: ILabeledValue | ILabeledValue[]) => IKey[] | undefined;

    /** Returns selected nodes
     * @param extDataset - if not set, current data set will be used, if set, node will be searched in this data set
     * @param extValue - if not set, current value will be used, if set, node will be searched by this value
     * */
    getSelectedNodes: (extDataset?: ITreeSelectNode[], extValue?: ILabeledValue | ILabeledValue[]) => ITreeSelectNode[] | undefined;

    /** Get edit form api */
    getEditFormApi: () => IDFormModalApi;

    /** Get edit group form api */
    getEditGroupFormApi: () => IDFormModalApi;

    /** Get edit mode buttons row api */
    getButtonsApi: () => IButtonsRowApi & {refreshButtons: () => void};

    /** Get the TreeSelect ready to user input status (data is fetched) */
    getIsReady: () => boolean;

    /** Set the TreeSelect ready to user input status (data is fetched) */
    setIsReady: (value: boolean) => void;

    /** Get Dropdown list open/close status */
    getIsOpen: () => boolean | undefined;

    /** Set Dropdown list open/close status */
    setIsOpen: (state: React.SetStateAction<boolean | undefined>) => void;

    /** Get the TreeSelect fetching status (is fetching now) */
    getIsFetching: () => boolean;

    /** Set the TreeSelect fetching status (is fetching now) */
    setIsFetching: (value: boolean) => void;

    /** Get the TreeSelect fetch error */
    getFetchError: () => string | undefined;

    /** Set the TreeSelect fetch error */
    setFetchError: (value: string | undefined) => void;

    /** Get the TreeSelect all fetched status (full data set completely fetched) */
    getIsAllFetched: () => boolean;

    /** Set the TreeSelect all fetched status (full data set completely fetched) */
    setIsAllFetched: (value: boolean) => void;

    /** Get the TreeSelect min symbols input length status to show/hide error */
    getMinSymbols: () => number;

    /** Set the TreeSelect min symbols input status to show/hide error */
    setMinSymbols: (value: number) => void;

    /** Fetch data
     * @param search - search string
     * @param debounce - should debounce
     */
    fetchData: (search?: string, debounce?: boolean) => void;
}
