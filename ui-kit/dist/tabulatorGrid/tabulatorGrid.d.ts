import React from 'react';
import { ITabulatorProps, IRequestProps } from '../tabulatorBase';
import { IFormButton, IFormButtons } from '../buttonsRow/buttonsRow';
import { IDFormModalProps } from '../dFormModal';
import { TPromise } from '@krinopotam/service-types';
import { IGridApi } from './hooks/api';
import { RowComponent } from 'tabulator-tables';
export interface IGridRowData extends Record<string, unknown> {
    id: string | number;
    children?: IGridRowData[];
}
export interface IGridPropsBase {
    apiRef?: unknown;
    id?: string;
    gridMode?: 'local' | 'remote';
    dataSet?: IGridRowData[];
    className?: string;
    buttons?: Record<'view' | 'create' | 'clone' | 'update' | 'delete' | 'select' | 'filterToggle' | 'system', IFormButton | null> | IFormButtons;
    buttonsSize?: IFormButton['size'];
    buttonsIconsOnly?: boolean;
    buttonsPosition?: IFormButton['position'];
    readOnly?: boolean;
    editFormProps?: IDFormModalProps;
    selectionFormProps?: IDFormModalProps;
    appendSelection?: boolean;
    noHover?: boolean;
    rowDeleteMessage?: React.ReactNode;
    confirmDelete?: boolean;
    placeholder?: string;
    resizeHeightWithParent?: string;
}
export interface IGridPropsCallbacks {
    onMenuVisibilityChanged?: (isVisible: boolean, gridApi: IGridApi) => void;
    onDataFetch?: (params: IRequestProps, gridApi: IGridApi) => IGridDataSourcePromise;
    onDataFetchResponse?: (dataSet: IGridRowData[], params: IRequestProps, gridApi: IGridApi) => IGridRowData[];
    onDataLoading?: (dataSet: IGridRowData[] | undefined, gridApi: IGridApi) => void;
    onDataLoaded?: (dataSet: IGridRowData[] | undefined, gridApi: IGridApi) => void;
    onDataProcessed?: (dataSet: IGridRowData[] | undefined, gridApi: IGridApi) => void;
    onDataLoadError?: (message: string, code: number, gridApi: IGridApi) => void;
    onDataChanged?: (dataSet: IGridRowData[] | undefined, gridApi: IGridApi) => void;
    onSelectionChange?: (data: IGridRowData[], rows: RowComponent[], selectedRows: RowComponent[], deselectedRows: RowComponent[], gridApi: IGridApi) => void;
    onDelete?: (selectedRows: IGridRowData[], gridApi: IGridApi) => IGridDeletePromise | void | undefined;
}
export type IGridProps = IGridPropsBase & IGridPropsCallbacks & Omit<ITabulatorProps, 'data' | 'ajaxURL' | 'ajaxRequestFunc' | 'ajaxResponse'>;
export type IGridDataSourcePromise = TPromise<{
    data: IGridRowData[];
    last_page?: number;
}, {
    message: string;
    code: number;
}>;
export type IGridDeletePromise = TPromise<{
    data: IGridRowData[];
    last_page?: number;
}, {
    message: string;
    code: number;
}>;
export declare const TabulatorGrid: (props: IGridProps) => React.JSX.Element;
export default TabulatorGrid;
