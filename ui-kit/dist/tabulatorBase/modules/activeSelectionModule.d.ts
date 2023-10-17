import { TabulatorFull as Tabulator, Module, ScrollToRowPosition, Options, RowComponent } from 'tabulator-tables';
import { IRow } from './innerTypes';
export interface IActiveSelectionTabulator extends Tabulator {
    options: Options & {
        multiSelect?: boolean;
    };
    setActiveRow: (row: RowComponent | undefined | null, clearSelection?: boolean, scrollPosition?: ScrollToRowPosition) => void;
    setActiveRowByKey: (key: string | number | undefined | null, clearSelection?: boolean, scrollPosition?: ScrollToRowPosition) => void;
    getActiveRowKey: () => string | number | undefined;
    getActiveRow: () => RowComponent | undefined;
    getActiveRowData: () => Record<string, unknown> | undefined;
    getFirstRow: () => RowComponent | undefined;
    getLastRow: () => RowComponent | undefined;
    setTableBodyFocus: () => void;
}
export interface IActiveSelectionModuleTableEvents {
    activeRowChanged?: (row: RowComponent) => void;
    keyUp?: (e: KeyboardEvent) => void | boolean;
    keyDown?: (e: KeyboardEvent) => void | boolean;
}
export interface IActiveSelectionModuleRow {
    isActive: () => boolean;
    setActive: (clearSelection?: boolean, scrollPosition?: ScrollToRowPosition) => void;
}
export interface IRowComponent extends RowComponent, IActiveSelectionModuleRow {
    _row: IRow;
}
export declare class ActiveSelectionModule extends Module {
    table: IActiveSelectionTabulator;
    private activeRow;
    constructor(table: Tabulator);
    initialize(): void;
    rowClickHandler(e: PointerEvent, row: IRow): void;
    setActiveRow(row: RowComponent | undefined | null, clearSelection?: boolean, scrollPosition?: ScrollToRowPosition): void;
    setActiveRowByKey(key: string | number | undefined | null, clearSelection?: boolean, scrollPosition?: ScrollToRowPosition): void;
    getActiveRowKey(): any;
    getActiveRow(): RowComponent | undefined;
    getActiveRowData(): any;
    isRowActive(row: RowComponent): boolean;
    setRowActive(row: RowComponent, clearSelection?: boolean, scrollPosition?: ScrollToRowPosition): void;
    getFirstRow(): RowComponent | undefined;
    getLastRow(): RowComponent | undefined;
    getNextPageRow(row: IRowComponent | false | undefined): RowComponent | undefined;
    getPrevPageRow(row: IRowComponent | false | undefined): RowComponent | undefined;
    private findNewActiveRowInSelection;
    private selectRowsFromTo;
    private recursiveSelectNode;
    private selectNode;
    private bindEvents;
    private unbindEvents;
    private onKeyDownHandler;
    private onKeyUpHandler;
    private onKeyPressArrowUp;
    private onKeyPressArrowDown;
    private onKeyPressArrowLeft;
    private onKeyPressArrowRight;
    private onKeyPressPageDown;
    private onKeyPressPageUp;
    private onKeyPressHome;
    private onKeyPressEnd;
    private onKeyPressA;
    private onShiftKeyDown;
    private onShiftKeyUp;
    setTableBodyFocus(): void;
}
