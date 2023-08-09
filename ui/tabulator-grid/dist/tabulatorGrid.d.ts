import 'tabulator-tables/dist/css/tabulator_simple.css';
import React from 'react';
import { IReactTabulatorProps } from './reactTabulator/reactTabulator';
import { IFormButton, IFormButtons } from '@krinopotam/ui-buttons-row';
import { IDFormModalProps } from '@krinopotam/ui-dynamic-form-modal';
import { TPromise } from '@krinopotam/service-types';
import { IGridApi } from './hooks/api';
export interface IGridRowData extends Record<string, unknown> {
    id: string | number;
    children?: IGridRowData[];
}
export interface IGridProps {
    apiRef?: unknown;
    id?: string;
    gridMode?: 'local' | 'remote';
    dataTree?: boolean;
    dataTreeChildField?: string;
    dataTreeParentField?: string;
    dataTreeChildIndent?: number;
    columns: IReactTabulatorProps['columns'];
    dataSet?: IGridRowData[];
    className?: string;
    buttons?: Record<'view' | 'create' | 'clone' | 'update' | 'delete' | 'filterToggle', IFormButton | null> | IFormButtons;
    readOnly?: boolean;
    editFormProps?: IDFormModalProps;
    noHover?: boolean;
    callbacks?: IGridCallbacks;
    rowDeleteMessage?: React.ReactNode;
    confirmDelete?: boolean;
    placeholder?: string;
    layout?: IReactTabulatorProps['layout'];
    layoutColumnsOnNewData?: IReactTabulatorProps['layoutColumnsOnNewData'];
    width?: IReactTabulatorProps['width'];
    maxWidth?: IReactTabulatorProps['maxWidth'];
    minWidth?: IReactTabulatorProps['minWidth'];
    height?: IReactTabulatorProps['height'];
    minHeight?: IReactTabulatorProps['minHeight'];
    maxHeight?: IReactTabulatorProps['maxHeight'];
    multiSelect?: IReactTabulatorProps['multiSelect'];
    resizableColumnFit?: IReactTabulatorProps['resizableColumnFit'];
    rowHeight?: IReactTabulatorProps['rowHeight'];
    resizableRows?: IReactTabulatorProps['resizableRows'];
    movableColumns?: IReactTabulatorProps['movableColumns'];
    movableRows?: IReactTabulatorProps['movableRows'];
    groupBy?: IReactTabulatorProps['groupBy'];
    persistence?: IReactTabulatorProps['persistence'];
    persistenceID?: IReactTabulatorProps['persistenceID'];
    persistentLayout?: IReactTabulatorProps['persistentLayout'];
    persistentFilter?: IReactTabulatorProps['persistentFilter'];
    persistentSort?: IReactTabulatorProps['persistentSort'];
    frozenRows?: IReactTabulatorProps['frozenRows'];
    frozenRowsField?: IReactTabulatorProps['frozenRowsField'];
    initialFilter?: IReactTabulatorProps['initialFilter'];
    initialSort?: IReactTabulatorProps['initialSort'];
    initialHeaderFilter?: IReactTabulatorProps['initialHeaderFilter'];
    headerVisible?: IReactTabulatorProps['headerVisible'];
    columnDefaults?: IReactTabulatorProps['columnDefaults'];
}
export interface IGridCallbacks {
    onMenuVisibilityChanged?: (isVisible: boolean, gridApi: IGridApi) => void;
    onDataSetChange?: (dataSet: IGridRowData[] | undefined, gridApi: IGridApi) => IGridRowData[] | void;
    onDataFetch?: (gridApi: IGridApi) => IGridDataSourcePromise | undefined | void;
    onDataFetchSuccess?: (dataSet: IGridRowData[] | undefined, gridApi: IGridApi) => void;
    onDataFetchError?: (message: string, code: number, gridApi: IGridApi) => void;
    onDataFetchCompleted?: (gridApi: IGridApi) => void;
    onSelectionChange?: (keys: string[], selectedRows: IGridRowData[], gridApi: IGridApi) => void;
    onDelete?: (selectedRows: IGridRowData[], gridApi: IGridApi) => IGridDeletePromise | void | undefined;
}
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
