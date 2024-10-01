import {GetRef, Tree as AntdTree, type TreeDataNode} from 'antd';
import {translations} from '@src/tree/translations/translations';
import {IDFormModalApi, IDFormModalProps} from '@src/dFormModal/types/dFormModalTypes';
import React from 'react';
import {IButtonsRowApi, IFormButton} from '@src/buttonsRow/types/types';
import {IBreakpoints} from '@krinopotam/common-hooks/useResponsive';
import {TreeProps} from 'antd/es/tree/Tree';
import {ITreeComponentApi} from '@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes';
import {AnyType, IKey} from '@krinopotam/service-types';

export interface IOwnExtTreeProps {
    /** A mutable object to merge with these controls api */
    apiRef?: unknown;

    /** Component id */
    id?: string;

    fieldNames?: {key?: string; title?: string; children?: string; isGroup?: string};

    /** Grid label in header buttons row */
    headerLabel?: React.ReactNode;

    /** Grid header buttons */
    buttons?: Record<'view' | 'create' | 'createGroup' | 'clone' | 'update' | 'delete' | 'arrowUp' | 'arrowDown', IExtTreeButton | null> | IExtTreeButtons;

    /** Grid header buttons size. Default: 'small'*/
    buttonsSize?: IExtTreeButton['size'];

    /** If true, only button icons will be displayed, without title */
    buttonsIconsOnly?: boolean;

    /** Grid header buttons size. Default: 'right'*/
    buttonsPosition?: IExtTreeButton['position'];

    /** Table can't be edited */
    readOnly?: boolean;

    /** Edit DFormModal parameters */
    editFormProps?: IDFormModalProps;

    /** Edit group DFormModal parameters */
    editGroupFormProps?: IDFormModalProps;

    /** Confirm message before node delete */
    nodeDeleteMessage?: React.ReactNode;

    /** Default expanded keys */
    defaultExpandedKeys?: IKey[];

    /** Expanded keys */
    expandedKeys?: IKey[];

    /** Default selected keys */
    defaultSelectedKeys?: IKey[];

    /** Selected keys */
    selectedKeys?: IKey | IKey[];

    /** Default checked keys */
    checkedKeys?:
        | IKey[]
        | {
              checked: IKey[];
              halfChecked: IKey[];
          };

    /** Checked keys */
    defaultCheckedKeys?: IKey[];

    /** Groups only has children. Group is node which has no isLeaf:true property */
    groupsMode?: boolean;

    /** Confirm message before node delete */
    deleteMessage?: React.ReactNode;

    /** Should confirm before delete */
    confirmDelete?: boolean;

    /** Should select new node after create or clone node */
    selectNewNode?:boolean

    /** Language */
    language?: keyof typeof translations;

    /** Custom translation */
    translation?: Partial<typeof translations.en>;

    /** Breakpoint for responsive design */
    responsiveBreakpoint?: IBreakpoints;

    /** Menu row style */
    buttonsRowStyle?: React.CSSProperties;

    /** Buttons row wrapper style */
    buttonsRowWrapperStyle?: React.CSSProperties;

    /**  Data set */
    dataSet?: IExtTreeNode[];

    /** You cannot remove the node selection, you can only change it to another selection */
    noDeselect?: boolean;

    /** Data mutator function (mutates original data) */
    dataMutator?: (node: IExtTreeNode) => IExtTreeNode;

    /** Fires when the Tree dataSet is changed */
    onDataSetChanged?: (dataSet: IExtTreeNode[] | undefined) => void;

    /** Callback executed when selected node delete */
    onDelete?: (node: IExtTreeNode, api: IExtTreeApi) => ITreeDeletePromise | void | undefined;
}

export type IExtTreeProps = Omit<
    TreeProps<IExtTreeNode>,
    'expandedKeys' | 'defaultExpandedKeys' | 'selectedKeys' | 'defaultSelectedKeys' | 'checkedKeys' | 'defaultCheckedKeys'
> &
    IOwnExtTreeProps;

export interface IExtTreeButton extends IFormButton {
    /** if no row is selected in the grid, disable the button */
    checkDisabled?: boolean;

    /** if no row is selected in the grid, hide the button */
    checkHidden?: boolean;
}

export type IExtTreeButtons = Record<string, IExtTreeButton | null>;

export type ITreeDeletePromise = Promise<{data: Record<string, AnyType>}>;

interface IExtTreeNodeBase extends Omit<TreeDataNode, 'key' | 'children'> {
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
    children?: IExtTreeNode[];

    [key: string]: AnyType;
}

export type IExtTreeNode<T = Record<string, AnyType>> = IExtTreeNodeBase & T;

export interface IExtTreeApi extends ITreeComponentApi<IExtTreeNode, IExtTreeProps> {
    /** Tree ref */
    treeRef: React.RefObject<GetRef<typeof AntdTree>>;

    /** Get translation */
    t: (str: keyof (typeof translations)['en']) => string;

    /** Get current loading state */
    getIsLoading: () => boolean;

    /** Set current loading state */
    setIsLoading: (isLoading: boolean) => void;

    /** Get edit form api */
    getEditFormApi: () => IDFormModalApi;

    /** Get edit group form api */
    getEditGroupFormApi: () => IDFormModalApi;

    /** Get edit mode buttons row api */
    getButtonsApi: () => IButtonsRowApi & {refreshButtons: () => void};

    /** Get the Tree ready to user input status (data is fetched) */
    getIsReady: () => boolean;

    /** Set the Tree ready to user input status (data is fetched) */
    setIsReady: (value: boolean) => void;
}