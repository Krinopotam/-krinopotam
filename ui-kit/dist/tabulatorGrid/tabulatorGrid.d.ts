import React from 'react';
import { ITabulatorProps } from '../tabulatorBase';
import { IFormButton, IFormButtons } from '../buttonsRow/buttonsRow';
import { IDFormModalProps } from '../dFormModal';
import { TPromise } from '@krinopotam/service-types';
import { IGridApi } from './hooks/api';
export interface IGridRowData extends Record<string, unknown> {
    id: string | number;
    children?: IGridRowData[];
}
export interface IGridProps_ {
    apiRef?: unknown;
    id?: string;
    gridMode?: 'local' | 'remote';
    dataSet?: IGridRowData[];
    className?: string;
    buttons?: Record<'view' | 'create' | 'clone' | 'update' | 'delete' | 'filterToggle', IFormButton | null> | IFormButtons;
    readOnly?: boolean;
    editFormProps?: IDFormModalProps;
    noHover?: boolean;
    rowDeleteMessage?: React.ReactNode;
    confirmDelete?: boolean;
    placeholder?: string;
    resizeHeightWithParent?: string;
    onMenuVisibilityChanged?: (isVisible: boolean, gridApi: IGridApi) => void;
    onDataSetChange?: (dataSet: IGridRowData[] | undefined, gridApi: IGridApi) => IGridRowData[] | void;
    onDataFetch?: (gridApi: IGridApi) => IGridDataSourcePromise | undefined | void;
    onDataFetchSuccess?: (dataSet: IGridRowData[] | undefined, gridApi: IGridApi) => void;
    onDataFetchError?: (message: string, code: number, gridApi: IGridApi) => void;
    onDataFetchCompleted?: (gridApi: IGridApi) => void;
    onSelectionChange?: (keys: string[], selectedRows: IGridRowData[], gridApi: IGridApi) => void;
    onDelete?: (selectedRows: IGridRowData[], gridApi: IGridApi) => IGridDeletePromise | void | undefined;
}
export type IGridProps = IGridProps_ & ITabulatorProps;
export type IGridDataSourcePromise = TPromise<{
    data: Record<string, unknown>[];
}, {
    message: string;
    code: number;
}>;
export type IGridDeletePromise = TPromise<{
    data: Record<string, unknown>;
}, {
    message: string;
    code: number;
}>;
declare const TabulatorGrid: (props: IGridProps) => React.JSX.Element;
export default TabulatorGrid;
