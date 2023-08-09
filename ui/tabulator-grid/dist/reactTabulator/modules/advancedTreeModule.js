import { TabulatorFull as Tabulator, Module } from 'tabulator-tables';
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
export class AdvancedTreeModule extends Module {
    constructor(table) {
        super(table);
        this.curHeaderFilterValues = {};
        this.filteredCacheMap = {};
        this.table = table;
        const _this = this;
        const filterFunctions = this.prepareDefaultFilters();
        Tabulator.extendModule('filter', 'filters', filterFunctions);
        _this.registerTableOption('dataTreeParentField', undefined);
        _this.registerTableFunction('getBaseTreeDataFilter', this.getBaseTreeDataFilter.bind(this));
    }
    initialize() {
        if (!this.table.options.dataTree)
            return;
        const _this = this;
        _this.subscribe('filter-changed', this.onFilterChanged.bind(this));
    }
    prepareDefaultFilters() {
        const newDefFilters = {};
        for (const key in defaultFilters) {
            if (this.table.options.dataTree)
                newDefFilters[key] = defaultFilters[key];
            else
                newDefFilters[key] = this.getBaseTreeDataFilter(defaultFilters[key]);
        }
        return newDefFilters;
    }
    getBaseTreeDataFilter(matchFunction) {
        if (!matchFunction)
            return undefined;
        const filter = (filterVal, rowValue, rowData, filterParams, force) => {
            const fieldName = this.getFilterFieldName(filterVal, rowValue, rowData, filterParams);
            const indexField = this.table.options.index || 'id';
            const childrenField = this.table.options.dataTreeChildField || 'children';
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
        return this.lastFilteredField || '';
    }
}
AdvancedTreeModule.moduleName = 'advancedTree';
