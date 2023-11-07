import { TabulatorFull as Tabulator, Module } from 'tabulator-tables';
export class AdvancedHeaderFilterModule extends Module {
    constructor(table) {
        super(table);
        this.headerFilterStatus = false;
        this.curHeaderFilterValues = {};
        this.filteredCacheMap = {};
        this.table = table;
        const _this = this;
        _this.registerTableOption('dataTreeParentField', undefined);
        _this.registerTableOption('showHeaderFilter', undefined);
        _this.registerTableFunction('getBaseTreeDataFilter', this.getBaseTreeDataFilter.bind(this));
        _this.registerTableFunction('toggleHeaderFilter', this.toggleHeaderFilter.bind(this));
        _this.registerTableFunction('isHeaderFilterVisible', this.isHeaderFilterVisible.bind(this));
        _this.registerTableFunction('isHeaderFilterAvailable', this.isHeaderFilterAvailable.bind(this));
    }
    initialize() {
        const _this = this;
        _this.subscribe('filter-changed', this.onFilterChanged.bind(this));
        if (this.table.options.dataTree) {
            const filterFunctions = this.wrapDefaultFilters();
            Tabulator.extendModule('filter', 'filters', filterFunctions);
        }
        this.table.on('tableBuilt', this.onTableBuiltHandler.bind(this));
    }
    onTableBuiltHandler() {
        if (this.table.options.dataTree)
            this.wrapUserFilters();
        if (!this.table.options.showHeaderFilter)
            this.toggleHeaderFilter(false, true);
        else
            this.headerFilterStatus = true;
    }
    wrapDefaultFilters() {
        const newDefFilters = {};
        for (const key in defaultFilters) {
            newDefFilters[key] = this.getBaseTreeDataFilter(defaultFilters[key]);
        }
        return newDefFilters;
    }
    wrapUserFilters() {
        var _a;
        const filterColumns = this.table.modules.filter.headerFilterColumns;
        for (const column of filterColumns) {
            if (typeof ((_a = column.definition) === null || _a === void 0 ? void 0 : _a.headerFilterFunc) !== 'function')
                continue;
            column.definition.headerFilterFunc = this.getBaseTreeDataFilter(column.definition.headerFilterFunc);
        }
    }
    getBaseTreeDataFilter(matchFunction) {
        if (!matchFunction)
            return undefined;
        const filter = (filterVal, rowValue, rowData, filterParams, force) => {
            var _a, _b;
            const fieldName = this.getFilterFieldName(filterVal, rowValue, rowData, filterParams);
            const indexField = (_a = this.table.options.index) !== null && _a !== void 0 ? _a : 'id';
            const childrenField = (_b = this.table.options.dataTreeChildField) !== null && _b !== void 0 ? _b : 'children';
            if (force === true) {
                this.setFilterCache(fieldName, rowData[indexField], true);
                for (const childRow of rowData[childrenField] || [])
                    filter(filterVal, childRow[fieldName], childRow, filterParams, true);
                return true;
            }
            if (this.getFilterCache(fieldName, rowData[indexField]))
                return true;
            if (matchFunction(filterVal, rowValue, rowData, filterParams)) {
                this.setFilterCache(fieldName, rowData[indexField], true);
                for (const childRow of rowData[childrenField] || [])
                    filter(filterVal, childRow[fieldName], childRow, filterParams, true);
                return true;
            }
            let anyChildMatch = false;
            for (const childRow of rowData[childrenField] || []) {
                const match = filter(filterVal, childRow[fieldName], childRow, filterParams);
                if (match)
                    anyChildMatch = true;
            }
            if (anyChildMatch) {
                this.setFilterCache(fieldName, rowData[indexField], true);
                return true;
            }
            return false;
        };
        return filter;
    }
    getFilterFieldName(filterVal, rowValue, rowData, filterParams) {
        if (filterParams === null || filterParams === void 0 ? void 0 : filterParams.fieldName)
            return filterParams === null || filterParams === void 0 ? void 0 : filterParams.fieldName;
        const filters = this.table.getHeaderFilters();
        for (const filter of filters) {
            if (filterVal === filter.value && rowValue === rowData[filter.field])
                return filter.field;
        }
        return this.getLastFilterField();
    }
    getFilterCache(fieldName, key) {
        var _a;
        return (_a = this.filteredCacheMap[fieldName]) === null || _a === void 0 ? void 0 : _a[key];
    }
    setFilterCache(fieldName, key, val) {
        let fieldMap = this.filteredCacheMap[fieldName];
        if (!fieldMap) {
            fieldMap = {};
            this.filteredCacheMap[fieldName] = fieldMap;
        }
        fieldMap[key] = val;
    }
    onFilterChanged() {
        const headerFilters = this.table.getHeaderFilters();
        const curHeaderFilterValues = {};
        for (const filter of headerFilters) {
            if (this.curHeaderFilterValues[filter.field] !== filter.value) {
                this.filteredCacheMap[filter.field] = {};
                this.lastFilteredField = filter.field;
            }
            curHeaderFilterValues[filter.field] = filter.value;
        }
        this.curHeaderFilterValues = curHeaderFilterValues;
    }
    getLastFilterField() {
        var _a;
        return (_a = this.lastFilteredField) !== null && _a !== void 0 ? _a : '';
    }
    toggleHeaderFilter(show, firstInit) {
        var _a;
        if (!show && !firstInit && ((_a = this.table.getData()) === null || _a === void 0 ? void 0 : _a.length))
            this.table.clearHeaderFilter();
        const tableHolder = this.table.element.querySelector('.tabulator-tableholder');
        const tabulatorHeader = this.table.element.querySelector('.tabulator-headers');
        const headerElements = this.table.element.querySelectorAll('.tabulator-col');
        const filterElements = this.table.element.querySelectorAll('.tabulator-header-filter');
        if (!tableHolder || !tabulatorHeader || !headerElements || !filterElements)
            return this.headerFilterStatus;
        const resizeElements = tabulatorHeader.querySelectorAll('.tabulator-col-resize-handle');
        if (typeof show === 'undefined')
            show = !this.headerFilterStatus;
        this.headerFilterStatus = show;
        let filterHeight = 0;
        filterElements.forEach((elem) => {
            if (filterHeight < elem.offsetHeight)
                filterHeight = elem.offsetHeight;
            elem.style.display = !show ? 'none' : 'block';
        });
        let headerHeight = 0;
        headerElements.forEach((elem) => {
            if (headerHeight < elem.offsetHeight)
                headerHeight = elem.offsetHeight;
            elem.style.height = elem.offsetHeight + filterHeight * (show ? 1 : -1) + 'px';
        });
        resizeElements.forEach((elem) => {
            elem.style.height = elem.offsetHeight + filterHeight * (show ? 1 : -1) + 'px';
        });
        tabulatorHeader.style.height = tabulatorHeader.offsetHeight + filterHeight * (show ? 1 : -1) + 'px';
        const tableHolderHeight = this.parseHeight(tableHolder.style.height);
        if (tableHolderHeight) {
            tableHolder.style.minHeight = 'calc(100% - ' + (tableHolderHeight + filterHeight * (show ? 1 : -1)) + 'px)';
            tableHolder.style.height = 'calc(100% - ' + (tableHolderHeight + filterHeight * (show ? 1 : -1)) + 'px)';
            tableHolder.style.maxHeight = 'calc(100% - ' + (tableHolderHeight + filterHeight * (show ? 1 : -1)) + 'px)';
            return this.headerFilterStatus;
        }
        const tableHolderOffset = headerHeight + filterHeight * (show ? 1 : -1);
        tableHolder.style.minHeight = 'calc(100% - ' + tableHolderOffset + 'px)';
        tableHolder.style.height = 'calc(100% - ' + tableHolderOffset + 'px)';
        tableHolder.style.maxHeight = 'calc(100% - ' + tableHolderOffset + 'px)';
        return this.headerFilterStatus;
    }
    parseHeight(height) {
        const parts = height.split('-');
        if (!parts[1])
            return 0;
        const result = parseInt(parts[1].trim(), 10);
        return isNaN(result) ? 0 : result;
    }
    isHeaderFilterVisible() {
        if (!this.isHeaderFilterAvailable())
            return false;
        return this.headerFilterStatus;
    }
    isHeaderFilterAvailable() {
        const filterCols = this.table.columnManager.columns.filter((column) => { var _a; return !!((_a = column === null || column === void 0 ? void 0 : column.definition) === null || _a === void 0 ? void 0 : _a.headerFilter); });
        return filterCols.length > 0;
    }
}
AdvancedHeaderFilterModule.moduleName = 'advancedHeaderFilter';
const defaultFilters = {
    '=': function (filterVal, rowVal) {
        return rowVal == filterVal;
    },
    '<': function (filterVal, rowVal) {
        return rowVal < filterVal;
    },
    '<=': function (filterVal, rowVal) {
        return rowVal <= filterVal;
    },
    '>': function (filterVal, rowVal) {
        return rowVal > filterVal;
    },
    '>=': function (filterVal, rowVal) {
        return rowVal >= filterVal;
    },
    '!=': function (filterVal, rowVal) {
        return rowVal != filterVal;
    },
    regex: function (filterVal, rowVal) {
        if (typeof filterVal == 'string')
            filterVal = new RegExp(filterVal);
        return filterVal.test(rowVal);
    },
    like: function (filterVal, rowVal) {
        if (filterVal === null || typeof filterVal === 'undefined') {
            return rowVal === filterVal;
        }
        else {
            if (typeof rowVal !== 'undefined' && rowVal !== null) {
                return String(rowVal).toLowerCase().indexOf(filterVal.toLowerCase()) > -1;
            }
            else {
                return false;
            }
        }
    },
    keywords: function (filterVal, rowVal, _rowData, filterParams) {
        const keywords = filterVal.toLowerCase().split(typeof filterParams.separator === 'undefined' ? ' ' : filterParams.separator), value = String(rowVal === null || typeof rowVal === 'undefined' ? '' : rowVal).toLowerCase(), matches = [];
        keywords.forEach((keyword) => {
            if (value.includes(keyword)) {
                matches.push(true);
            }
        });
        return filterParams.matchAll ? matches.length === keywords.length : !!matches.length;
    },
    starts: function (filterVal, rowVal) {
        if (filterVal === null || typeof filterVal === 'undefined') {
            return rowVal === filterVal;
        }
        else {
            if (typeof rowVal !== 'undefined' && rowVal !== null) {
                return String(rowVal).toLowerCase().startsWith(filterVal.toLowerCase());
            }
            else {
                return false;
            }
        }
    },
    ends: function (filterVal, rowVal) {
        if (filterVal === null || typeof filterVal === 'undefined') {
            return rowVal === filterVal;
        }
        else {
            if (typeof rowVal !== 'undefined' && rowVal !== null) {
                return String(rowVal).toLowerCase().endsWith(filterVal.toLowerCase());
            }
            else {
                return false;
            }
        }
    },
    in: function (filterVal, rowVal) {
        if (Array.isArray(filterVal)) {
            return filterVal.length ? filterVal.indexOf(rowVal) > -1 : true;
        }
        else {
            console.warn('Filter Error - filter value is not an array:', filterVal);
            return false;
        }
    },
};
