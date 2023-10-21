import { TabulatorFull as Tabulator, Module, Options } from 'tabulator-tables';
import { AnyType } from "@krinopotam/service-types";
import { ITabulatorFilterFunc } from "../../tabulatorBase/tabulatorBase";
export interface IAdvancedHeaderFilterTabulator extends Tabulator {
    options: Options & {
        dataTreeParentField?: string | number;
        showHeaderFilter?: boolean;
    };
    getBaseTreeDataFilter: (matchFunction: ITabulatorFilterFunc | undefined) => ITabulatorFilterFunc;
    toggleHeaderFilter: (show?: boolean) => boolean;
    isHeaderFilterVisible: () => boolean;
    isHeaderFilterAvailable: () => boolean;
}
export declare class AdvancedHeaderFilterModule extends Module {
    private table;
    private headerFilterStatus;
    private curHeaderFilterValues;
    private filteredCacheMap;
    private lastFilteredField;
    constructor(table: Tabulator);
    initialize(): void;
    onTableBuiltHandler(): void;
    private wrapDefaultFilters;
    private wrapUserFilters;
    getBaseTreeDataFilter(matchFunction: ITabulatorFilterFunc | undefined): ((filterVal: AnyType, rowValue: AnyType, rowData: AnyType, filterParams: AnyType, force?: boolean) => boolean) | undefined;
    private getFilterFieldName;
    private getFilterCache;
    private setFilterCache;
    private onFilterChanged;
    private getLastFilterField;
    toggleHeaderFilter(show?: boolean, firstInit?: boolean): boolean;
    private parseHeight;
    isHeaderFilterVisible(): boolean;
    isHeaderFilterAvailable(): boolean;
}
