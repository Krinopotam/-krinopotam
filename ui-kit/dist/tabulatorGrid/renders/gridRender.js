import React, { useCallback, useEffect, useRef } from 'react';
import { TabulatorBase } from '../../tabulatorBase';
import dispatcher from '../../formsDispatcher';
import { useEvents } from '../hooks/events';
import { BaseFetchHandler } from '../../tabulatorGrid/helpers/fetchHelpers';
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
    const ajaxRequestFunc = useCallback((url, config, params) => {
        return new Promise((resolve, reject) => {
            var _a, _b;
            const dataSource = (_a = gridProps === null || gridProps === void 0 ? void 0 : gridProps.onDataFetch) === null || _a === void 0 ? void 0 : _a.call(gridProps, gridApi, params);
            (_b = BaseFetchHandler(gridApi, dataSource, params)) === null || _b === void 0 ? void 0 : _b.then(result => {
                var _a;
                if (!gridApi.getIsMounted())
                    return;
                if (gridProps.pagination)
                    resolve({ data: result.data, last_page: (_a = result.last_page) !== null && _a !== void 0 ? _a : 1 });
                else
                    resolve(result.data);
            }, () => {
                reject();
            });
        });
    }, [gridApi, gridProps]);
    return (React.createElement(TabulatorBase, Object.assign({}, tabulatorProps, { layout: (_a = tabulatorProps.layout) !== null && _a !== void 0 ? _a : 'fitData', movableColumns: tabulatorProps.movableColumns !== false, ajaxRequestFunc: !gridProps.onDataFetch ? undefined : ajaxRequestFunc, height: '100%', dataLoader: false, onTableRef: onTableRef, gridId: gridApi.getGridId(), dataTreeFilter: true, data: gridApi.getDataSet(), ajaxURL: !gridProps.onDataFetch ? undefined : '-', containerClassName: gridProps.className, placeholder: (_b = gridProps.placeholder) !== null && _b !== void 0 ? _b : 'Строки отсутствуют', events: events })));
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
