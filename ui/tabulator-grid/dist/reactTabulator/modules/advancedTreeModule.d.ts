import { TabulatorFull as Tabulator, Module, Options } from 'tabulator-tables';
export interface IAdvancedTreeTabulator extends Tabulator, IAdvancedTreeModuleTable {
    options: Options & IAdvancedTreeModuleTableOptions;
}
export interface IAdvancedTreeModuleTableOptions {
    dataTreeParentField?: string | number;
}
type AnyType = any;
export type IFilterFunction = (filterVal: AnyType, rowValue: AnyType, rowData: AnyType, filterParams: AnyType) => boolean;
export interface IAdvancedTreeModuleTable {
    getBaseTreeDataFilter: (matchFunction: IFilterFunction | undefined) => IFilterFunction;
}
export declare class AdvancedTreeModule extends Module {
    private table;
    private curHeaderFilterValues;
    private filteredCacheMap;
    private lastFilteredField;
    constructor(table: Tabulator);
    initialize(): void;
    private prepareDefaultFilters;
    getBaseTreeDataFilter(matchFunction: IFilterFunction | undefined): ((filterVal: AnyType, rowValue: AnyType, rowData: AnyType, filterParams: AnyType, force?: boolean) => boolean) | undefined;
    private getFilterFieldName;
    private getFilterCache;
    private setFilterCache;
    private onFilterChanged;
    private getLastFilterField;
}
export {};
