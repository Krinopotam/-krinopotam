import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import { TabulatorBase } from '../../tabulatorBase';
import dispatcher from '../../formsDispatcher';
import { useEvents } from '../hooks/events';
import { GenerateAjaxRequestFunc } from '../../tabulatorGrid/helpers/fetchHelpers';
const GridRender_ = ({ tableRef, gridApi, gridProps, tabulatorProps, }) => {
    var _a, _b, _c;
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
    const ajaxRequestFunc = useMemo(() => GenerateAjaxRequestFunc(gridApi, gridProps === null || gridProps === void 0 ? void 0 : gridProps.onDataFetch), [gridApi, gridProps]);
    return (React.createElement(TabulatorBase, Object.assign({}, tabulatorProps, { layout: (_a = tabulatorProps.layout) !== null && _a !== void 0 ? _a : 'fitData', movableColumns: tabulatorProps.movableColumns !== false, height: '100%', dataLoader: false, onTableRef: onTableRef, gridId: gridApi.getGridId(), dataTreeFilter: true, data: gridProps.onDataFetch ? undefined : (_b = gridApi.getDataSet()) !== null && _b !== void 0 ? _b : [], ajaxURL: (gridProps === null || gridProps === void 0 ? void 0 : gridProps.onDataFetch) ? '-' : undefined, ajaxRequestFunc: !gridProps.onDataFetch ? undefined : ajaxRequestFunc, ajaxResponse: !gridProps.onDataFetchResponse ? undefined : (_url, params, response) => { var _a; return (_a = gridProps.onDataFetchResponse) === null || _a === void 0 ? void 0 : _a.call(gridProps, response, params, gridApi); }, containerClassName: gridProps.className, placeholder: (_c = gridProps.placeholder) !== null && _c !== void 0 ? _c : 'Строки отсутствуют', events: events })));
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
