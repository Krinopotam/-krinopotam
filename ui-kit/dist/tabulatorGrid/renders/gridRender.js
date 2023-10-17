import React, { useCallback, useEffect } from 'react';
import ReactTabulator from '../../tabulatorBase';
import dispatcher from '../../formsDispatcher';
import { useEvents } from '../hooks/events';
const GridRender_ = ({ tableRef, gridApi, gridProps, tabulatorProps, }) => {
    var _a, _b;
    const events = useEvents(gridApi, gridProps.events);
    const onTableRef = useCallback((tabulatorRef) => {
        tableRef.current = tabulatorRef.current;
        gridApi.tableApi = tabulatorRef.current;
    }, [gridApi, tableRef]);
    useEffect(() => {
        dispatcher.pushToStack(gridApi.getGridId());
    }, [gridApi]);
    return (React.createElement(ReactTabulator, Object.assign({}, tabulatorProps, { onTableRef: onTableRef, gridId: gridApi.getGridId(), dataTreeFilter: true, data: gridApi.getDataSet(), containerClassName: gridProps.className, placeholder: (_a = gridProps.placeholder) !== null && _a !== void 0 ? _a : 'Строки отсутствуют', layout: (_b = gridProps.layout) !== null && _b !== void 0 ? _b : 'fitData', movableColumns: gridProps.movableColumns !== false, headerVisible: gridProps.headerVisible !== false, sortMode: gridProps.gridMode, filterMode: gridProps.gridMode, events: events })));
};
export const GridRender = React.memo(GridRender_);
