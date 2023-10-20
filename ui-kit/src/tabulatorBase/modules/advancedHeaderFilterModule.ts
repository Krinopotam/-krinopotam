import {TabulatorFull as Tabulator, Module, Options, ColumnDefinition} from 'tabulator-tables';
import {IModule} from './innerTypes';
import {AnyType} from "@krinopotam/service-types";
import {ITabulatorFilterFunc} from "@src/tabulatorBase/tabulatorBase";

//region Interfaces
export interface IAdvancedHeaderFilterTabulator extends Tabulator {
    options: Options & {
        /** The parent key field name */
        dataTreeParentField?: string | number;

        /** Hide HeaderFilter when grid is initialized */
        showHeaderFilter?: boolean
    };

    getBaseTreeDataFilter: (matchFunction: ITabulatorFilterFunc | undefined) => ITabulatorFilterFunc;

    /** Show/hide inline filter */
    toggleHeaderFilter: (show?: boolean) => boolean

    /** Return header filter visible status */
    isHeaderFilterVisible: () => boolean

    /** Return header filter available (if there is at least one column with headerFilter) */
    isHeaderFilterAvailable: () => boolean
}

//endregion

export class AdvancedHeaderFilterModule extends Module {
    private table: IAdvancedHeaderFilterTabulator;

    private headerFilterStatus: boolean = false;
    private curHeaderFilterValues: Record<string, unknown> = {};
    private filteredCacheMap: Record<string, Record<string | number, boolean>> = {};

    /** The field that was last filtered by the user */
    private lastFilteredField: string | undefined;

    constructor(table: Tabulator) {
        super(table);

        this.table = table as IAdvancedHeaderFilterTabulator;
        const _this = this as unknown as IModule;


        /** for debug
        const viewPort = document.createElement("button");
        viewPort.innerHTML = "Toggle header"
        document.body.appendChild(viewPort);
        viewPort.onclick = () => {
            this.toggleHeaderFilter()
        }
        */

        _this.registerTableOption('dataTreeParentField', undefined);
        _this.registerTableOption('showHeaderFilter', undefined);
        _this.registerTableFunction('getBaseTreeDataFilter', this.getBaseTreeDataFilter.bind(this));
        _this.registerTableFunction('toggleHeaderFilter', this.toggleHeaderFilter.bind(this));
        _this.registerTableFunction('isHeaderFilterVisible', this.isHeaderFilterVisible.bind(this));
        _this.registerTableFunction('isHeaderFilterAvailable', this.isHeaderFilterAvailable.bind(this));
    }

    // noinspection JSUnusedGlobalSymbols
    initialize() {
        const _this = this as unknown as IModule;
        _this.subscribe('filter-changed', this.onFilterChanged.bind(this));

        if (this.table.options.dataTree) {
            const filterFunctions = this.wrapDefaultFilters();
            Tabulator.extendModule('filter', 'filters', filterFunctions);
        }

        this.table.on('tableBuilt', this.onTableBuiltHandler.bind(this))
    }

    public onTableBuiltHandler() {
        if (this.table.options.dataTree) this.wrapUserFilters()

        if (!this.table.options.showHeaderFilter) this.toggleHeaderFilter(false, true);
        else this.headerFilterStatus = true;
    }

    /** Wrap default filters to treeData filter */
    private wrapDefaultFilters() {
        const newDefFilters: typeof defaultFilters = {};
        for (const key in defaultFilters) {
            newDefFilters[key] = this.getBaseTreeDataFilter(defaultFilters[key]);
        }

        return newDefFilters;
    }

    private wrapUserFilters() {
        const filterColumns = this.table.modules.filter.headerFilterColumns
        for (const column of filterColumns) {
            if (typeof column.definition?.headerFilterFunc !== 'function') continue
            column.definition.headerFilterFunc = this.getBaseTreeDataFilter(column.definition.headerFilterFunc)
        }
    }

    public getBaseTreeDataFilter(matchFunction: ITabulatorFilterFunc | undefined) {
        if (!matchFunction) return undefined;
        const filter = (filterVal: AnyType, rowValue: AnyType, rowData: AnyType, filterParams: AnyType, force?: boolean) => {
            const fieldName = this.getFilterFieldName(filterVal, rowValue, rowData, filterParams);
            const indexField = this.table.options.index ?? 'id';
            const childrenField = this.table.options.dataTreeChildField ?? 'children';

            if (force === true) {
                this.setFilterCache(fieldName, rowData[indexField], true);
                for (const childRow of rowData[childrenField] || []) filter(filterVal, childRow[fieldName], childRow, filterParams, true);
                return true;
            }

            // We check if we've already walked through that node (and therefore subtree).
            if (this.getFilterCache(fieldName, rowData[indexField])) return true;

            if (matchFunction(filterVal, rowValue, rowData, filterParams)) {
                this.setFilterCache(fieldName, rowData[indexField], true);
                //force set children visible if parent is visible
                for (const childRow of rowData[childrenField] || []) filter(filterVal, childRow[fieldName], childRow, filterParams, true);
                return true;
            }

            let anyChildMatch = false;
            for (const childRow of rowData[childrenField] || []) {
                // We walk down the tree recursively
                const match = filter(filterVal, childRow[fieldName], childRow, filterParams);
                if (match) anyChildMatch = true;
            }

            if (anyChildMatch) {
                this.setFilterCache(fieldName, rowData[indexField], true);
                return true;
            }

            return false;
        };

        return filter;
    }

    /** Get field name by filter value and row value
     * This is a workaround, because during filtering, Tabulator will not pass the name of the field that is currently being filtered, but you need to know it for correct filtering
     */
    private getFilterFieldName(filterVal: AnyType, rowValue: AnyType, rowData: AnyType, filterParams: AnyType): string {
        if (filterParams?.fieldName) return filterParams?.fieldName;

        const filters = this.table.getHeaderFilters();
        for (const filter of filters) {
            if (filterVal === filter.value && rowValue === rowData[filter.field]) return filter.field;
        }

        return this.getLastFilterField();
    }

    private getFilterCache(fieldName: string, key: string | number) {
        return this.filteredCacheMap[fieldName]?.[key];
    }

    private setFilterCache(fieldName: string, key: string, val: boolean) {
        let fieldMap = this.filteredCacheMap[fieldName];

        if (!fieldMap) {
            fieldMap = {};
            this.filteredCacheMap[fieldName] = fieldMap;
        }
        fieldMap[key] = val;
    }

    private onFilterChanged() {
        const headerFilters = this.table.getHeaderFilters();
        const curHeaderFilterValues: Record<string, unknown> = {};
        for (const filter of headerFilters) {
            if (this.curHeaderFilterValues[filter.field] !== filter.value) {
                //the filter value for this field has changed
                this.filteredCacheMap[filter.field] = {}; //clear filtered cache
                this.lastFilteredField = filter.field;
            }

            curHeaderFilterValues[filter.field] = filter.value;
        }
        this.curHeaderFilterValues = curHeaderFilterValues;
    }

    private getLastFilterField() {
        return this.lastFilteredField ?? '';
    }

    /** Show/hide filters */
    public toggleHeaderFilter(show?: boolean, firstInit?:boolean) {
        // *Workaround:
        // Tabulator allows to show/hide headerFilter only via updateColumnDefinition, which is very slow and leads to glitches and regenerates all columns.
        // Let's use a workaround. We include headerFilter on grid initialization and hide it in CSS. When necessary, we display it, but this requires additional style calculations.

        if (!show && !firstInit) this.table.clearHeaderFilter();

        const tableHolder = this.table.element.querySelector<HTMLElement>('.tabulator-tableholder');
        const tabulatorHeader = this.table.element.querySelector<HTMLElement>('.tabulator-headers');
        const headerElements = this.table.element.querySelectorAll<HTMLElement>('.tabulator-col');
        const filterElements = this.table.element.querySelectorAll<HTMLElement>('.tabulator-header-filter');
        if (!tableHolder || !tabulatorHeader || !headerElements || !filterElements) return this.headerFilterStatus;
        const resizeElements = tabulatorHeader.querySelectorAll('.tabulator-col-resize-handle')

        if (typeof show === 'undefined') show = !this.headerFilterStatus
        this.headerFilterStatus = show;

        let filterHeight = 0;
        filterElements.forEach((elem) => {
            if (filterHeight < elem.offsetHeight) filterHeight = elem.offsetHeight;
            elem.style.display = !show ? 'none' : 'block';
        });

        let headerHeight = 0;
        headerElements.forEach((elem) => {
            if (headerHeight < elem.offsetHeight) headerHeight = elem.offsetHeight;
            elem.style.height = elem.offsetHeight + filterHeight * (show ? 1 : -1) + 'px';
        });

        resizeElements.forEach((elem) => {
            (elem as HTMLElement).style.height = (elem as HTMLElement).offsetHeight + filterHeight * (show ? 1 : -1) + 'px';
        });

        tabulatorHeader.style.height = tabulatorHeader.offsetHeight + filterHeight * (show ? 1 : -1) + 'px'

        const tableHolderHeight = this.parseHeight(tableHolder.style.height);
        if (tableHolderHeight) {
            tableHolder.style.minHeight = 'calc(100% - ' + (tableHolderHeight + filterHeight * (show ? 1 : -1)) + 'px)';
            tableHolder.style.height = 'calc(100% - ' + (tableHolderHeight + filterHeight * (show ? 1 : -1)) + 'px)';
            tableHolder.style.maxHeight = 'calc(100% - ' + (tableHolderHeight + filterHeight * (show ? 1 : -1)) + 'px)';
            return this.headerFilterStatus
        }

        const tableHolderOffset = headerHeight + filterHeight * (show ? 1 : -1);
        tableHolder.style.minHeight = 'calc(100% - ' + tableHolderOffset + 'px)';
        tableHolder.style.height = 'calc(100% - ' + tableHolderOffset + 'px)';
        tableHolder.style.maxHeight = 'calc(100% - ' + tableHolderOffset + 'px)';

        return this.headerFilterStatus
    }

    private parseHeight(height: string) {
        const parts = height.split('-')
        if (!parts[1]) return 0;
        const result = parseInt(parts[1].trim(), 10)
        return isNaN(result) ? 0 : result;
    }

    public isHeaderFilterVisible() {
        if (!this.isHeaderFilterAvailable()) return false;
        return this.headerFilterStatus;
    }

    public isHeaderFilterAvailable() {
        const filterCols = this.table.columnManager.columns.filter((column: { definition: ColumnDefinition }) => !!column?.definition?.headerFilter)
        return filterCols.length > 0;
    }
}

AdvancedHeaderFilterModule.moduleName = 'advancedHeaderFilter';


const defaultFilters: Record<string, ITabulatorFilterFunc | undefined> = {
    //equal to
    '=': function (filterVal, rowVal) {
        return rowVal == filterVal;
    },

    //less than
    '<': function (filterVal, rowVal) {
        return rowVal < filterVal;
    },

    //less than or equal to
    '<=': function (filterVal, rowVal) {
        return rowVal <= filterVal;
    },

    //greater than
    '>': function (filterVal, rowVal) {
        return rowVal > filterVal;
    },

    //greater than or equal to
    '>=': function (filterVal, rowVal) {
        return rowVal >= filterVal;
    },

    //not equal to
    '!=': function (filterVal, rowVal) {
        return rowVal != filterVal;
    },

    regex: function (filterVal, rowVal) {
        if (typeof filterVal == 'string') filterVal = new RegExp(filterVal);

        return filterVal.test(rowVal);
    },

    //contains the string
    like: function (filterVal, rowVal) {
        if (filterVal === null || typeof filterVal === 'undefined') {
            return rowVal === filterVal;
        } else {
            if (typeof rowVal !== 'undefined' && rowVal !== null) {
                return String(rowVal).toLowerCase().indexOf(filterVal.toLowerCase()) > -1;
            } else {
                return false;
            }
        }
    },

    //contains the keywords
    keywords: function (filterVal, rowVal, _rowData, filterParams) {
        const keywords = filterVal.toLowerCase().split(typeof filterParams.separator === 'undefined' ? ' ' : filterParams.separator),
            value = String(rowVal === null || typeof rowVal === 'undefined' ? '' : rowVal).toLowerCase(),
            matches = [];

        keywords.forEach((keyword: string) => {
            if (value.includes(keyword)) {
                matches.push(true);
            }
        });

        return filterParams.matchAll ? matches.length === keywords.length : !!matches.length;
    },

    //starts with the string
    starts: function (filterVal, rowVal) {
        if (filterVal === null || typeof filterVal === 'undefined') {
            return rowVal === filterVal;
        } else {
            if (typeof rowVal !== 'undefined' && rowVal !== null) {
                return String(rowVal).toLowerCase().startsWith(filterVal.toLowerCase());
            } else {
                return false;
            }
        }
    },

    //ends with the string
    ends: function (filterVal, rowVal) {
        if (filterVal === null || typeof filterVal === 'undefined') {
            return rowVal === filterVal;
        } else {
            if (typeof rowVal !== 'undefined' && rowVal !== null) {
                return String(rowVal).toLowerCase().endsWith(filterVal.toLowerCase());
            } else {
                return false;
            }
        }
    },

    //in array
    in: function (filterVal, rowVal) {
        if (Array.isArray(filterVal)) {
            return filterVal.length ? filterVal.indexOf(rowVal) > -1 : true;
        } else {
            console.warn('Filter Error - filter value is not an array:', filterVal);
            return false;
        }
    },
};