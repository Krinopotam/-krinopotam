import 'tabulator-tables/dist/css/tabulator_simple.css';
import {ColumnDefinition, ColumnLookup, EventCallBackMethods, RowComponent, TabulatorFull as Tabulator} from 'tabulator-tables';
import React from 'react';
import {useInit} from './hooks/init';
import {
    IActiveSelectionModuleRow,
    IActiveSelectionModuleTableEvents,
    IActiveSelectionTabulator,
} from './modules/activeSelectionModule';
import {IAdvancedHeaderFilterTabulator} from './modules/advancedHeaderFilterModule';
import {HelpersStrings} from "@krinopotam/js-helpers";
import {Stylization} from "@src/tabulatorBase/stylization";
import {AnyType} from "@krinopotam/service-types";

type _ITabulator = IAdvancedHeaderFilterTabulator & IActiveSelectionTabulator & Tabulator

//region Tabulator types corrections
export type ITabulatorFilterFunc  = (headerValue: AnyType, rowValue: AnyType, rowData: Record<string, unknown>, filterParams: Record<string, unknown>) => boolean;

export interface IRequestProps extends Record<string, unknown> {
    page: number,
    size: number,
    sort?: { field: string, dir: 'asc' | 'desc' }[],
    filter?: {
        field: string,
        type: "=" | "!=" | "like" | "<" | ">" | "<=" | ">=" | "in" | "regex" | "starts" | "ends" | ITabulatorFilterFunc,
        value: unknown
    }
}

export interface IAjaxConfig extends Record<string, unknown> {
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE',
    /** set request mode to cors */
    mode?: string,
    /** send cookies with the request from the matching origin */
    credentials?: string,
    headers?: Record<string, string> & {
        "Accept"?: string,
        "X-Requested-With"?: string,
        "Content-type"?: string,
        "Access-Control-Allow-Origin"?: string
    },
}

export interface ITabulator extends _ITabulator {
    /**  Tabulator property type correction */
    updateColumnDefinition: (column: ColumnLookup, definition: Partial<ColumnDefinition>) => Promise<void>

    ajaxRequestFunc?: ((url: string, config: IAjaxConfig, params: IRequestProps) => Promise<{ data: Record<string, unknown>[], last_page: number }>) | undefined;
}

//endregion

export type ITabulatorColumns = ITabulator['options']['columns'];

export type ITabulatorRow = RowComponent & IActiveSelectionModuleRow;

export type ITabulatorEvents = Partial<EventCallBackMethods> & IActiveSelectionModuleTableEvents;

/**
 * resizableRows works unstable. There are problems with scrolling due to the rearrangement of virtual lines of different sizes
 */

export interface ITabulatorProps extends Omit<ITabulator['options'], 'footerElement' | 'resizableRows'> {
    /** On the tableRef ready callback */
    onTableRef?: (ref: React.MutableRefObject<ITabulator>) => void;

    /** Grid ID*/
    gridId?: string;

    /** Grid footer element*/
    footerElement?: React.JSX.Element;

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

    //--- The tabulator types correction (The Tabulator has property but has no type for it) ---
    /** If set to true, then when you resize a column its neighbouring column has the opposite resize applied to keep to total width of columns the same */
    resizableColumnFit?: boolean;

    ajaxRequestFunc?: ITabulator['ajaxRequestFunc'];

    updateColumnDefinition?: ITabulator['updateColumnDefinition'];
}

const TabulatorBase = ({onTableRef, gridId, events, containerClassName, width, minWidth, maxWidth, ...props}: ITabulatorProps): React.JSX.Element => {
    const containerRef = React.useRef<HTMLDivElement>(null as unknown as HTMLDivElement);
    const tableRef = React.useRef<ITabulator>();

    const [newId] = React.useState(HelpersStrings.getUuid());

    useInit({props, events, containerRef, tableRef, onTableRef});

    const containerStyle: React.CSSProperties = {width: width, maxWidth: maxWidth, minWidth: minWidth};

    return (
        <>
            <Stylization striped={true}/>
            <div ref={containerRef} id={gridId ?? newId} data-instance={gridId ?? newId} className={containerClassName} style={containerStyle}/>
        </>
    );
};

export default TabulatorBase;
