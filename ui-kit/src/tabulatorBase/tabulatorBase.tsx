import 'tabulator-tables/dist/css/tabulator_simple.css';
import {EventCallBackMethods, RowComponent, TabulatorFull as Tabulator} from 'tabulator-tables';
import React from 'react';
import {useInit} from './hooks/init';
import {
    IActiveSelectionModuleRow,
    IActiveSelectionModuleTableEvents,
    IActiveSelectionTabulator,
} from './modules/activeSelectionModule';
import {IAdvancedTreeTabulator} from './modules/advancedTreeModule';
import {HelpersStrings} from "@krinopotam/js-helpers";
import {Stylization} from "@src/tabulatorBase/stylization";

export type ITabulator = IAdvancedTreeTabulator & IActiveSelectionTabulator & Tabulator

export type ITabulatorRow = RowComponent & IActiveSelectionModuleRow;

export type ITabulatorEvents = Partial<EventCallBackMethods> & IActiveSelectionModuleTableEvents;

export interface ITabulatorProps extends Omit<ITabulator['options'], 'footerElement'> {
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
}

const TabulatorBase = ({onTableRef, gridId, events, containerClassName, width, minWidth, maxWidth, ...props}: ITabulatorProps): React.JSX.Element => {
    const containerRef = React.useRef<HTMLDivElement>(null as unknown as HTMLDivElement);
    const tableRef = React.useRef<ITabulator>();

    const [newId] = React.useState(HelpersStrings.getUuid());

    useInit({props, events, containerRef, tableRef, onTableRef});

    const containerStyle: React.CSSProperties = {width: width, maxWidth: maxWidth, minWidth: minWidth};

    return (
        <>
            <Stylization/>
            <div ref={containerRef} id={gridId ?? newId} data-instance={gridId ?? newId} className={containerClassName} style={containerStyle}/>
        </>
    );
};

export default TabulatorBase;
