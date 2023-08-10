import { EventCallBackMethods, RowComponent, TabulatorFull as Tabulator } from 'tabulator-tables';
import React from 'react';
import { IActiveSelectionModuleRow, IActiveSelectionModuleTableEvents, IActiveSelectionTabulator } from './modules/activeSelectionModule';
import { IAdvancedTreeTabulator } from './modules/advancedTreeModule';
type _ITabulator = IAdvancedTreeTabulator & IActiveSelectionTabulator & Tabulator;
export interface ITabulator extends _ITabulator {
    initialized: boolean;
}
export type ITabulatorRow = RowComponent & IActiveSelectionModuleRow;
export interface IReactTabulatorProps extends Omit<ITabulator['options'], 'footerElement'> {
    onTableRef?: (ref: React.MutableRefObject<ITabulator | undefined>) => void;
    gridId?: string;
    footerElement?: React.JSX.Element;
    events?: Partial<EventCallBackMethods> & IActiveSelectionModuleTableEvents;
    containerClassName?: string;
    width?: string | number;
    minWidth?: string | number;
    maxWidth?: string | number;
    resizableColumnFit?: boolean;
}
declare const TabulatorReact: ({ onTableRef, gridId, events, containerClassName, width, minWidth, maxWidth, ...props }: IReactTabulatorProps) => React.JSX.Element;
export default TabulatorReact;
