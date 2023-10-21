import { TreeSelect as AntdTreeSelect } from 'antd';
import { IDFormModalProps } from '../dFormModal';
import React, { ComponentProps } from 'react';
import { ITreeSelectApi } from '../treeSelect/hooks/api';
import { TPromise } from '@krinopotam/service-types';
import { IFormButtons } from '../buttonsRow/buttonsRow';
export interface ITreeSelectNode extends Record<string, unknown> {
    id?: string | number;
    value?: string | number;
    title?: string | React.ReactNode;
    label?: string | React.ReactNode;
    children?: ITreeSelectNode[];
    selectable?: boolean;
    disabled?: boolean;
    checkable?: boolean;
    disableCheckbox?: boolean;
    isLeaf?: boolean;
    __title?: string | React.ReactNode;
    __label?: string | React.ReactNode;
}
export type ITreeSelectValue = ITreeSelectNode | ITreeSelectNode[] | null;
interface ITeeSelectFieldNames {
    title?: string;
    value?: string;
    children?: string;
}
export type IAntTreeSelectProps = Omit<ComponentProps<typeof AntdTreeSelect>, 'treeNodeLabelProp' | 'treeData' | 'loadData' | 'onClear' | 'onChange'>;
export interface ITreeSelectBaseProps {
    apiRef?: ITreeSelectApi;
    treeSelectId?: string;
    readOnly?: boolean;
    value?: ITreeSelectValue | string;
    defaultValueCallback?: (data: ITreeSelectNode[]) => ITreeSelectNode | ITreeSelectNode[];
    titleRender?: (treeNode: ITreeSelectNode | Record<string, unknown>) => React.ReactNode;
    labelRender?: (treeNode: ITreeSelectNode | Record<string, unknown>) => React.ReactNode;
    filterTreeNode?: boolean | ((inputValue: string, treeNode: ITreeSelectNode | Record<string, unknown>) => boolean);
    dataSet?: ITreeSelectNode[];
    fetchMode?: 'onLoad' | 'onUse' | 'onUseForce';
    noCacheFetchedData?: boolean;
    minSearchLength?: number;
    debounce?: number;
    selectedLabelProp?: string;
    fieldNames?: ITeeSelectFieldNames;
    editFormProps?: IDFormModalProps;
    nodeDeleteMessage?: React.ReactNode;
    confirmDelete?: boolean;
    editButtons?: IFormButtons;
    onReady?: () => void;
    onChange?: (value: ITreeSelectValue) => void;
    onClear?: () => void;
    onDataFetch?: (search: string, api: ITreeSelectApi) => ITreeSelectSourcePromise | undefined;
    onDataFetchSuccess?: (result: {
        data: ITreeSelectNode[];
    }, api: ITreeSelectApi) => boolean | void;
    onDataFetchError?: (message: string, code: number, api: ITreeSelectApi) => boolean | void;
    onDataFetchComplete?: (api: ITreeSelectApi) => boolean | void;
    onDelete?: (selectedNodes: ITreeSelectNode[], api: ITreeSelectApi) => ITreeSelectDeletePromise | void | undefined;
}
export type ITreeSelectProps = ITreeSelectBaseProps & IAntTreeSelectProps;
export type ITreeSelectSourcePromise = TPromise<{
    data: ITreeSelectNode[];
}, {
    message: string;
    code: number;
}>;
export type ITreeSelectDeletePromise = TPromise<{
    data: Record<string, unknown>;
}, {
    message: string;
    code: number;
}>;
export type ITreeSelectPlainValue = string | number;
export declare const TreeSelect: (props: ITreeSelectProps) => React.JSX.Element;
export {};
