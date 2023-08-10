import React, { useCallback, useEffect } from 'react';
import ReactTabulator from '@krinopotam/ui-tabulator-react';
import dispatcher from '@krinopotam/ui-forms-dispatcher';
import { useEvents } from '../hooks/events';
import { useColumnDef, usePrepareColumns } from '../hooks/columns';
const GridRender_ = ({ tableRef, gridApi, gridProps, }) => {
    var _a, _b, _c, _d, _e;
    const columnDef = useColumnDef(gridProps.columnDefaults, gridApi);
    const columns = usePrepareColumns(gridProps.columns, gridProps.dataTree, gridApi);
    const events = useEvents(gridApi);
    const onTableRef = useCallback((tabulatorRef) => {
        tableRef.current = tabulatorRef.current;
        gridApi.tableApi = tabulatorRef.current;
    }, [gridApi, tableRef]);
    useEffect(() => {
        dispatcher.pushToStack(gridApi.getGridId());
    }, [gridApi]);
    return (React.createElement(ReactTabulator, { onTableRef: onTableRef, gridId: gridApi.getGridId(), dataTree: gridProps.dataTree, dataTreeChildField: (_a = gridProps.dataTreeChildField) !== null && _a !== void 0 ? _a : 'children', dataTreeParentField: (_b = gridProps.dataTreeParentField) !== null && _b !== void 0 ? _b : 'parent', dataTreeChildIndent: (_c = gridProps.dataTreeChildIndent) !== null && _c !== void 0 ? _c : 22, dataTreeFilter: true, data: gridApi.getDataSet(), columns: columns, containerClassName: gridProps.className, placeholder: (_d = gridProps.placeholder) !== null && _d !== void 0 ? _d : 'Строки отсутствуют', layout: (_e = gridProps.layout) !== null && _e !== void 0 ? _e : 'fitData', layoutColumnsOnNewData: gridProps.layoutColumnsOnNewData, width: gridProps.width, maxWidth: gridProps.maxWidth, minWidth: gridProps.minWidth, height: gridProps.height, maxHeight: gridProps.maxHeight, minHeight: gridProps.minHeight, selectable: false, multiSelect: gridProps.multiSelect, resizableColumnFit: gridProps.resizableColumnFit, rowHeight: gridProps.rowHeight, resizableRows: gridProps.resizableRows, movableColumns: gridProps.movableColumns !== false, movableRows: gridProps.movableRows, groupBy: gridProps.groupBy, persistence: gridProps.persistence, persistenceID: gridProps.persistenceID, persistentLayout: gridProps.persistentLayout, persistentFilter: gridProps.persistentFilter, persistentSort: gridProps.persistentSort, frozenRows: gridProps.frozenRows, frozenRowsField: gridProps.frozenRowsField, initialFilter: gridProps.initialFilter, initialSort: gridProps.initialSort, headerVisible: gridProps.headerVisible !== false, columnDefaults: columnDef, sortMode: gridProps.gridMode, filterMode: gridProps.gridMode, dataTreeBranchElement: false, events: events }));
};
export const GridRender = React.memo(GridRender_);
