import {AnyType} from '@krinopotam/service-types';
import {
    CellComponent,
    ColumnComponent,
    ColumnDefinition,
    ColumnLookup,
    CustomMutatorParams,
    EditorParams,
    EmptyCallback,
    EventCallBackMethods,
    FilterType,
    Formatter,
    FormatterParams,
    RowComponent,
} from 'tabulator-tables';

import React, {MouseEvent} from 'react';
import {IActiveSelectionModuleRow, IActiveSelectionModuleTableEvents, IActiveSelectionTabulator} from '@src/tabulatorBase/modules/activeSelectionModule';
import {IAdvancedHeaderFilterTabulator} from '@src/tabulatorBase/modules/advancedHeaderFilterModule';
import {ITabulatorCore} from '@src/tabulatorBase/types/tabulatorCoreTypes';

type _ITabulator = IAdvancedHeaderFilterTabulator & IActiveSelectionTabulator & ITabulatorCore;

export type ITabulatorFilterFunc = (
    headerValue: AnyType,
    rowValue: AnyType,
    rowData: Record<string, AnyType>,
    filterParams: Record<string, AnyType>
) => boolean;

export interface IRequestProps extends Record<string, AnyType> {
    page?: number;
    size?: number;
    sort?: {field: string; dir: 'asc' | 'desc'}[];
    filter?: {
        field: string;
        type: FilterType | ITabulatorFilterFunc;
        value: unknown;
    };
}

export interface IAjaxConfig extends Record<string, AnyType> {
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
    /** set request mode to cors */
    mode?: string;
    /** send cookies with the request from the matching origin */
    credentials?: string;
    headers?: Record<string, string> & {
        Accept?: string;
        'X-Requested-With'?: string;
        'Content-type'?: string;
        'Access-Control-Allow-Origin'?: string;
    };
}

export interface ITabulator extends _ITabulator {
    /**  Tabulator property type correction */
    updateColumnDefinition: (column: ColumnLookup, definition: Partial<ColumnDefinition>) => Promise<void>;

    /** Ajax request handler */
    //ajaxRequestFunc?: (url: string, config: IAjaxConfig, params: IRequestProps) => Promise<{data: Record<string, AnyType>[]; last_page: number}>;
}

export interface ITabulatorColumn<TColumns extends Record<string, AnyType> = Record<string, AnyType>> extends Omit<ColumnDefinition, 'headerPopup' | 'field'> {
    field?: keyof TColumns;
    /** type patches */
    headerFilterParams?: ColumnDefinition['headerFilterParams'] | Record<string, AnyType>;
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    formatter?: // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    | Exclude<Formatter, (cell: CellComponent, formatterParams: {}, onRendered: EmptyCallback) => string | HTMLElement>
        | ((
              cell: CellComponent,
              formatterParams: // eslint-disable-next-line @typescript-eslint/no-empty-object-type
              Exclude<FormatterParams, (cell: CellComponent) => {}> | ((cell: CellComponent) => AnyType) | AnyType,
              onRendered: EmptyCallback
          ) => string | HTMLElement);
    formatterParams?: FormatterParams | Record<string, AnyType>;
    sorterParams?: ColumnDefinition['sorterParams'] | Record<string, AnyType>;
    headerFilterFuncParams?: ColumnDefinition['headerFilterFuncParams'] | Record<string, AnyType>;
    editorParams?: EditorParams | Record<string, AnyType>;
    mutatorDataParams?: CustomMutatorParams | Record<string, AnyType>;
    mutatorEditParams?: CustomMutatorParams | Record<string, AnyType>;
    mutatorParams?: CustomMutatorParams | Record<string, AnyType>;
    titleFormatterParams?: FormatterParams | Record<string, AnyType>;
    topCalcFormatterParams?: FormatterParams | Record<string, AnyType>;

    headerPopup?: ((e: MouseEvent, column: ColumnComponent, onRendered: EmptyCallback) => HTMLElement) | string | React.ReactNode;
}

export type ITabulatorRow = RowComponent & IActiveSelectionModuleRow;

export type ITabulatorEvents = Partial<EventCallBackMethods> & IActiveSelectionModuleTableEvents;

/**
 * resizableRows works unstable. There are problems with scrolling due to the rearrangement of virtual lines of different sizes
 */
export interface ITabulatorProps extends Omit<ITabulator['options'], 'footerElement' | 'resizableRows' | 'columns'> {
    /** On the tableRef ready callback */
    onTableRef?: (ref: React.MutableRefObject<ITabulator>) => void;

    /** Grid ID*/
    id?: string;

    /** Grid columns */
    columns: ITabulatorColumn[];

    /** Grid footer element*/
    footerElement?: React.ReactNode;

    /** Grid events*/
    events?: Partial<EventCallBackMethods> & IActiveSelectionModuleTableEvents;

    /** Grid container class name*/
    containerClassName?: string;

    /** Grid container width*/
    width?: string | number;

    /** Grid container max width*/
    minWidth?: string | number;

    /** Grid container max width*/
    maxWidth?: string | number;

    /** by default user text selection is disabled (CSS user-select='none') */
    allowTextSelection?: boolean;

    //--- The tabulator types correction (The Tabulator has property but has no type for it) ---
    /** If set to true, then when you resize a column its neighbouring column has the opposite resize applied to keep to total width of columns the same */
    resizableColumnFit?: boolean;

    /** Ajax request handler */
    ajaxRequestFunc?: ITabulator['options']['ajaxRequestFunc'];

    updateColumnDefinition?: ITabulator['updateColumnDefinition'];
}
