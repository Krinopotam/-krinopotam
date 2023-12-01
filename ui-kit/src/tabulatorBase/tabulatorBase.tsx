import 'tabulator-tables/dist/css/tabulator_simple.css';
import {
    ColumnComponent,
    ColumnDefinition,
    ColumnLookup,
    EmptyCallback,
    EventCallBackMethods,
    FilterType,
    RowComponent,
    TabulatorFull as Tabulator,
} from 'tabulator-tables';
import React, {MouseEvent} from 'react';
import {useInit} from './hooks/init';
import {IActiveSelectionModuleRow, IActiveSelectionModuleTableEvents, IActiveSelectionTabulator} from './modules/activeSelectionModule';
import {IAdvancedHeaderFilterTabulator} from './modules/advancedHeaderFilterModule';
import {GetUuid} from '@krinopotam/js-helpers';
import {Stylization} from '@src/tabulatorBase/stylization';
import {AnyType} from '@krinopotam/service-types';

type _ITabulator = IAdvancedHeaderFilterTabulator & IActiveSelectionTabulator & Tabulator;

//region Tabulator types corrections
export type ITabulatorFilterFunc = (
    headerValue: AnyType,
    rowValue: AnyType,
    rowData: Record<string, unknown>,
    filterParams: Record<string, unknown>
) => boolean;

export interface IRequestProps extends Record<string, unknown> {
    page?: number;
    size?: number;
    sort?: {field: string; dir: 'asc' | 'desc'}[];
    filter?: {
        field: string;
        type: FilterType | ITabulatorFilterFunc;
        value: unknown;
    };
}

export interface IAjaxConfig extends Record<string, unknown> {
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
    //ajaxRequestFunc?: (url: string, config: IAjaxConfig, params: IRequestProps) => Promise<{data: Record<string, unknown>[]; last_page: number}>;
}

export interface ITabulatorColumn extends Omit<ColumnDefinition, 'headerPopup'> {
    headerPopup?: ((e: MouseEvent, column: ColumnComponent, onRendered: EmptyCallback) => HTMLElement) | string | React.ReactNode;
}

//endregion

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

export const TabulatorBase = ({onTableRef, events, containerClassName, width, minWidth, maxWidth, ...props}: ITabulatorProps): React.JSX.Element => {
    const containerRef = React.useRef<HTMLDivElement>(null as unknown as HTMLDivElement);
    const tableRef = React.useRef<ITabulator>();

    const [newId] = React.useState(GetUuid());

    useInit({props, events, containerRef, tableRef, onTableRef});

    const containerStyle: React.CSSProperties = {
        width: width,
        maxWidth: maxWidth,
        minWidth: minWidth,
        userSelect: !props.allowTextSelection ? 'none' : undefined,
    };

    return (
        <>
            <Stylization striped={true} />
            <div ref={containerRef} id={props.id ?? newId} data-instance={props.id ?? newId} className={containerClassName} style={containerStyle} />
        </>
    );
};

export default TabulatorBase;
