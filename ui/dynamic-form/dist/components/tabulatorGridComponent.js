import React, { useMemo, useRef, useState } from 'react';
import TabulatorGrid from '@krinopotam/ui-tabulator-grid';
export const TabulatorGridComponent = ({ formApi, fieldName, fieldProps }) => {
    const value = formApi.model.getFieldValue(fieldName);
    const prevDataSetRef = useRef();
    const prevValueRef = useRef();
    if (prevValueRef.current !== value) {
        prevDataSetRef.current = value;
        prevValueRef.current = value;
    }
    const curDataSet = prevDataSetRef.current;
    const [gridApi] = useState({});
    const callbacks = useMemo(() => {
        var _a, _b, _c, _d;
        const _onDataSetChange = (_a = fieldProps.callbacks) === null || _a === void 0 ? void 0 : _a.onDataSetChange;
        const updatedCallbacks = (_b = fieldProps.callbacks) !== null && _b !== void 0 ? _b : {};
        updatedCallbacks.onDataSetChange = (dataSet, gridApi) => {
            prevValueRef.current = dataSet;
            formApi.model.setFieldValue(fieldName, dataSet !== null && dataSet !== void 0 ? dataSet : undefined);
            if (formApi.model.isFieldReady(fieldName)) {
                formApi.model.setFieldDirty(fieldName, true);
                formApi.model.setFieldTouched(fieldName, true);
            }
            _onDataSetChange === null || _onDataSetChange === void 0 ? void 0 : _onDataSetChange(dataSet, gridApi);
        };
        const _onDataFetch = (_c = fieldProps.callbacks) === null || _c === void 0 ? void 0 : _c.onDataFetch;
        const _onDataFetchSuccess = (_d = fieldProps.callbacks) === null || _d === void 0 ? void 0 : _d.onDataFetchSuccess;
        updatedCallbacks.onDataFetch = (gridApi) => {
            formApi.model.setFieldReady(fieldName, false);
            return _onDataFetch === null || _onDataFetch === void 0 ? void 0 : _onDataFetch(gridApi);
        };
        updatedCallbacks.onDataFetchSuccess = (dataSet, gridApi) => {
            formApi.model.setFieldReady(fieldName, true);
            return _onDataFetchSuccess === null || _onDataFetchSuccess === void 0 ? void 0 : _onDataFetchSuccess(dataSet, gridApi);
        };
        return updatedCallbacks;
    }, [fieldName, fieldProps.callbacks, formApi.model]);
    return useMemo(() => {
        return (React.createElement(TabulatorGrid, { id: fieldProps.id, apiRef: gridApi, gridMode: fieldProps.gridMode, dataTree: fieldProps.dataTree, dataTreeChildField: fieldProps.dataTreeChildField, dataTreeParentField: fieldProps.dataTreeParentField, dataTreeChildIndent: fieldProps.dataTreeChildIndent, columns: fieldProps.columns, dataSet: curDataSet, className: fieldProps.className, buttons: fieldProps.buttons, readOnly: fieldProps.readOnly, editFormProps: fieldProps.editFormProps, noHover: fieldProps.noHover, rowDeleteMessage: fieldProps.rowDeleteMessage, confirmDelete: fieldProps.confirmDelete, placeholder: fieldProps.placeholder, layout: fieldProps.layout, layoutColumnsOnNewData: fieldProps.layoutColumnsOnNewData, width: fieldProps.width, maxWidth: fieldProps.maxWidth, minWidth: fieldProps.minWidth, height: fieldProps.height, minHeight: fieldProps.minHeight, maxHeight: fieldProps.maxHeight, multiSelect: fieldProps.multiSelect, resizableColumnFit: fieldProps.resizableColumnFit, rowHeight: fieldProps.rowHeight, resizableRows: fieldProps.resizableRows, movableColumns: fieldProps.movableColumns, movableRows: fieldProps.movableRows, groupBy: fieldProps.groupBy, persistence: fieldProps.persistence, persistenceID: fieldProps.persistenceID, persistentLayout: fieldProps.persistentLayout, persistentFilter: fieldProps.persistentFilter, persistentSort: fieldProps.persistentSort, frozenRows: fieldProps.frozenRows, frozenRowsField: fieldProps.frozenRowsField, initialFilter: fieldProps.initialFilter, initialSort: fieldProps.initialSort, initialHeaderFilter: fieldProps.initialHeaderFilter, headerVisible: fieldProps.headerVisible, columnDefaults: fieldProps.columnDefaults, callbacks: callbacks }));
    }, [
        callbacks,
        fieldProps.buttons,
        fieldProps.className,
        fieldProps.columnDefaults,
        fieldProps.columns,
        fieldProps.confirmDelete,
        fieldProps.dataTree,
        fieldProps.dataTreeChildField,
        fieldProps.dataTreeChildIndent,
        fieldProps.dataTreeParentField,
        fieldProps.editFormProps,
        fieldProps.frozenRows,
        fieldProps.frozenRowsField,
        fieldProps.gridMode,
        fieldProps.groupBy,
        fieldProps.headerVisible,
        fieldProps.height,
        fieldProps.id,
        fieldProps.initialFilter,
        fieldProps.initialHeaderFilter,
        fieldProps.initialSort,
        fieldProps.layout,
        fieldProps.layoutColumnsOnNewData,
        fieldProps.maxHeight,
        fieldProps.maxWidth,
        fieldProps.minHeight,
        fieldProps.minWidth,
        fieldProps.movableColumns,
        fieldProps.movableRows,
        fieldProps.multiSelect,
        fieldProps.noHover,
        fieldProps.persistence,
        fieldProps.persistenceID,
        fieldProps.persistentFilter,
        fieldProps.persistentLayout,
        fieldProps.persistentSort,
        fieldProps.placeholder,
        fieldProps.readOnly,
        fieldProps.resizableColumnFit,
        fieldProps.resizableRows,
        fieldProps.rowDeleteMessage,
        fieldProps.rowHeight,
        fieldProps.width,
        gridApi,
        curDataSet,
    ]);
};
