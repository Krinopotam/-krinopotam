import {ColumnComponent, ColumnDefinition, RowComponent, TabulatorFull as Tabulator} from 'tabulator-tables';

import {AnyType} from '@krinopotam/service-types';

export interface ITabulatorCore extends Tabulator {
    columnManager: IColumnManager;
    rowManager: IRowManager;
    modules: IModules;
}

export interface IColumnManager {
    verticalAlignHeaders: () => void;
    columns: IColumnComponent[];
}

export interface IRowManager {
    adjustTableSize: () => void;
    element: HTMLElement;
}

export interface IColumnComponent extends ColumnComponent {
    definition: ColumnDefinition;
}

//region Modules
export interface IModules {
    filter: IFilterModule;
    page: IPageModule;
    ajax: IAjaxModule;
}

export interface IFilterModule {
    headerFilterColumns: IColumnComponent[];
}

export interface IPageModule {
    /** flag to check if data is being changed by Page module */
    dataChanging: boolean;

    /** handle the footer element being redrawn */
    footerRedraw: () => void;
}

export interface IAjaxModule {
    setUrl: (utl: string) => void;

    loaderPromise: ((url: string, config: AnyType, params: AnyType) => Promise<AnyType>) | undefined;
}

//endregion

export interface IRow {
    cells: unknown[];
    component: unknown;
    created: boolean;
    data: Record<string | 'id', AnyType>;
    element: HTMLElement;
    height: number;
    heightInitialized: boolean;
    heightStyled: string;
    initialized: boolean;
    manualHeight: boolean;
    modules: Record<string, AnyType>;
    outerHeight: number;
    parent: unknown;
    position: number;
    positionWatchers: never[];
    table: ITabulatorCore;
    type: 'row';
    getComponent: () => RowComponent;
    getHeight: () => number;
}

/** Module class type */
export interface IModule {
    initialize: () => void;
    registerTableOption: (key: string, value: unknown) => void;
    registerColumnOption: (key: string, value: string) => void;
    registerTableFunction: (name: string, func: (...args: AnyType[]) => unknown) => void;
    registerComponentFunction: (component: 'row' | 'column' | 'cell' | 'group' | 'calc', func: string, handler: (...args: AnyType[]) => unknown) => void;
    registerDataHandler: (handler: (...args: AnyType[]) => unknown, priority: number) => void;
    registerDisplayHandler: (handler: (...args: AnyType[]) => unknown, priority: number) => void;
    refreshData: (renderInPosition: boolean, handler: (...args: AnyType[]) => void) => void;
    footerAppend: (element: HTMLElement) => HTMLElement;
    footerPrepend: (element: HTMLElement) => HTMLElement;
    footerRemove: (element: HTMLElement) => HTMLElement;
    clearAlert: () => void;
    subscribe: (eventName: string, handler: (...args: AnyType[]) => void) => void;
    unsubscribe: (eventName: string) => void;
    subscribed: (eventName: string) => boolean;
    dispatch: (eventName: string, ...args: AnyType[]) => void;
    chain: (eventName: string, ...args: AnyType[]) => void;
    dispatchExternal: (eventName: string, ...args: AnyType[]) => void;
    subscribedExternal: (eventName: string) => boolean;
}
