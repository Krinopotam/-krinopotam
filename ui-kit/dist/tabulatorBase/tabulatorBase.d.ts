import 'tabulator-tables/dist/css/tabulator_simple.css';
import { ColumnComponent, ColumnDefinition, ColumnLookup, EmptyCallback, EventCallBackMethods, FilterType, RowComponent, TabulatorFull as Tabulator } from 'tabulator-tables';
import React, { MouseEvent } from 'react';
import { IActiveSelectionModuleRow, IActiveSelectionModuleTableEvents, IActiveSelectionTabulator } from './modules/activeSelectionModule';
import { IAdvancedHeaderFilterTabulator } from './modules/advancedHeaderFilterModule';
import { AnyType } from '@krinopotam/service-types';
type _ITabulator = IAdvancedHeaderFilterTabulator & IActiveSelectionTabulator & Tabulator;
export type ITabulatorFilterFunc = (headerValue: AnyType, rowValue: AnyType, rowData: Record<string, unknown>, filterParams: Record<string, unknown>) => boolean;
export interface IRequestProps extends Record<string, unknown> {
    page?: number;
    size?: number;
    sort?: {
        field: string;
        dir: 'asc' | 'desc';
    }[];
    filter?: {
        field: string;
        type: FilterType | ITabulatorFilterFunc;
        value: unknown;
    };
}
export interface IAjaxConfig extends Record<string, unknown> {
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
    mode?: string;
    credentials?: string;
    headers?: Record<string, string> & {
        Accept?: string;
        'X-Requested-With'?: string;
        'Content-type'?: string;
        'Access-Control-Allow-Origin'?: string;
    };
}
export interface ITabulator extends _ITabulator {
    updateColumnDefinition: (column: ColumnLookup, definition: Partial<ColumnDefinition>) => Promise<void>;
    ajaxRequestFunc?: (url: string, config: IAjaxConfig, params: IRequestProps) => Promise<{
        data: Record<string, unknown>[];
        last_page: number;
    }>;
}
export interface ITabulatorColumn extends Omit<ColumnDefinition, 'headerPopup'> {
    headerPopup?: ((e: MouseEvent, column: ColumnComponent, onRendered: EmptyCallback) => HTMLElement) | string | React.ReactNode;
}
export type ITabulatorRow = RowComponent & IActiveSelectionModuleRow;
export type ITabulatorEvents = Partial<EventCallBackMethods> & IActiveSelectionModuleTableEvents;
export interface ITabulatorProps extends Omit<ITabulator['options'], 'footerElement' | 'resizableRows' | 'columns'> {
    onTableRef?: (ref: React.MutableRefObject<ITabulator>) => void;
    gridId?: string;
    columns: ITabulatorColumn[];
    footerElement?: React.ReactNode;
    events?: Partial<EventCallBackMethods> & IActiveSelectionModuleTableEvents;
    containerClassName?: string;
    width?: string | number;
    minWidth?: string | number;
    maxWidth?: string | number;
    allowTextSelection?: boolean;
    resizableColumnFit?: boolean;
    ajaxRequestFunc?: ITabulator['ajaxRequestFunc'];
    updateColumnDefinition?: ITabulator['updateColumnDefinition'];
}
export declare const TabulatorBase: ({ onTableRef, gridId, events, containerClassName, width, minWidth, maxWidth, ...props }: ITabulatorProps) => React.JSX.Element;
export default TabulatorBase;
