import { useMemo } from "react";
export const useColumnDef = (columnDef, gridApi) => {
    return useMemo(() => {
        var _a;
        const colDef = {
            resizable: 'header',
            headerFilter: true,
            headerFilterFunc: 'like',
        };
        const userColDef = columnDef !== null && columnDef !== void 0 ? columnDef : {};
        const resultColDef = Object.assign(Object.assign({}, colDef), userColDef);
        if (typeof userColDef.headerFilterFunc === 'function') {
            resultColDef.headerFilterFunc = (_a = gridApi.tableApi) === null || _a === void 0 ? void 0 : _a.getBaseTreeDataFilter(userColDef.headerFilterFunc);
        }
        return resultColDef;
    }, [columnDef, gridApi]);
};
export const usePrepareColumns = (columns, dataTree, gridApi) => {
    return useMemo(() => {
        if (!columns || !dataTree)
            return columns;
        const resultColumns = [];
        for (const column of columns) {
            const colClone = Object.assign({}, column);
            if (typeof column.headerFilterFunc === 'function') {
                colClone.headerFilterFunc = (filterVal, rowValue, rowData, filterParams) => {
                    var _a;
                    const filter = (_a = gridApi.tableApi) === null || _a === void 0 ? void 0 : _a.getBaseTreeDataFilter(column.headerFilterFunc);
                    if (!filter)
                        return true;
                    return filter(filterVal, rowValue, rowData, filterParams);
                };
            }
            resultColumns.push(colClone);
        }
        return resultColumns;
    }, [columns, dataTree, gridApi]);
};
