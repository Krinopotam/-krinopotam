import React, { useCallback, useEffect, useRef } from 'react';
import ReactTabulator from '../../tabulatorBase';
import dispatcher from '../../formsDispatcher';
import { useEvents } from '../hooks/events';
const GridRender_ = ({ tableRef, gridApi, gridProps, tabulatorProps, }) => {
    var _a, _b;
    const events = useEvents(gridApi, gridProps.events);
    const resizeObserverRef = useRef(undefined);
    const onTableRef = useCallback((tabulatorRef) => {
        tableRef.current = tabulatorRef.current;
        gridApi.tableApi = tabulatorRef.current;
        if (gridProps.resizeHeightWithParent)
            resizeObserverRef.current = resizeObserver(tableRef, gridProps.resizeHeightWithParent);
    }, [gridApi, gridProps.resizeHeightWithParent, tableRef]);
    useEffect(() => {
        return () => {
            var _a;
            (_a = resizeObserverRef.current) === null || _a === void 0 ? void 0 : _a.disconnect();
        };
    }, []);
    useEffect(() => {
        dispatcher.pushToStack(gridApi.getGridId());
    }, [gridApi]);
    return (React.createElement(ReactTabulator, Object.assign({}, tabulatorProps, { height: '100%', onTableRef: onTableRef, gridId: gridApi.getGridId(), dataTreeFilter: true, data: gridApi.getDataSet(), containerClassName: gridProps.className, placeholder: (_a = gridProps.placeholder) !== null && _a !== void 0 ? _a : 'Строки отсутствуют', layout: (_b = gridProps.layout) !== null && _b !== void 0 ? _b : 'fitData', movableColumns: gridProps.movableColumns !== false, headerVisible: gridProps.headerVisible !== false, sortMode: gridProps.gridMode, filterMode: gridProps.gridMode, events: events })));
};
export const GridRender = React.memo(GridRender_);
const resizeObserver = (tableRef, parentClassName) => {
    var _a, _b;
    const gridContainer = (_b = (_a = tableRef.current) === null || _a === void 0 ? void 0 : _a.element) === null || _b === void 0 ? void 0 : _b.closest('.tabulator-grid-container');
    const observableElement = gridContainer === null || gridContainer === void 0 ? void 0 : gridContainer.closest(parentClassName);
    if (!gridContainer || !observableElement || gridContainer.style.height.endsWith('%'))
        return;
    let curGridHeight = parseInt(gridContainer.style.height);
    let curParentHeight = observableElement.getBoundingClientRect().height;
    const outputSize = () => {
        if (!tableRef.current)
            return;
        const newParentHeight = observableElement.getBoundingClientRect().height;
        curGridHeight = curGridHeight + (newParentHeight - curParentHeight);
        gridContainer.style.height = (curGridHeight > 0 ? curGridHeight : 0) + 'px';
        curParentHeight = observableElement.getBoundingClientRect().height;
    };
    const observer = new ResizeObserver(outputSize);
    observer.observe(observableElement);
    return observer;
};
