import React, { useMemo, useRef, useState, useSyncExternalStore } from 'react';
import { TabulatorGrid } from '../../../tabulatorGrid';
import { SplitObject } from '@krinopotam/js-helpers';
export const TabulatorGridFieldRender = ({ field }) => {
    useSyncExternalStore(field.subscribe.bind(field), field.getSnapshot.bind(field));
    const [gridApi] = useState({});
    const fieldProps = field.getProps();
    const tabulatorProps = useSplitTabulatorProps(fieldProps);
    const value = field.getValue();
    const curDataSetRef = useRef(fieldProps.dataSet);
    const curValueRef = useRef();
    let curDataSet = undefined;
    if (!fieldProps.selectionMode) {
        if (curValueRef.current !== value) {
            curDataSetRef.current = value;
            curValueRef.current = value;
        }
        curDataSet = curDataSetRef.current;
    }
    else {
        curDataSet = curDataSetRef.current;
    }
    const callbacks = usePrepareCallbacks(field, fieldProps, curValueRef, curDataSetRef);
    let height = fieldProps.height;
    if (fieldProps.autoHeightResize)
        height = '100%';
    const containerStyle = useMemo(() => {
        return fieldProps.autoHeightResize
            ? {
                position: 'absolute',
                inset: 0,
            }
            : {};
    }, [fieldProps.autoHeightResize]);
    return useMemo(() => {
        return (React.createElement("div", { style: containerStyle },
            React.createElement(TabulatorGrid, Object.assign({}, tabulatorProps, callbacks, { apiRef: gridApi, dataSet: curDataSet, readOnly: fieldProps.readOnly, placeholder: fieldProps.placeholder, width: fieldProps.width, height: height, resizeHeightWithParent: fieldProps.resizeHeightWithForm ? '#' + field.getModel().getFormId() : fieldProps.resizeHeightWithParent }))));
    }, [
        containerStyle,
        tabulatorProps,
        callbacks,
        gridApi,
        curDataSet,
        fieldProps.readOnly,
        fieldProps.placeholder,
        fieldProps.width,
        fieldProps.resizeHeightWithForm,
        fieldProps.resizeHeightWithParent,
        height,
        field,
    ]);
};
const useSplitTabulatorProps = (props) => {
    return useMemo(() => {
        const result = SplitObject(props, {
            value: true,
            dataSet: true,
            onMenuVisibilityChanged: true,
            onDataLoading: true,
            onDataLoaded: true,
            onDataLoadError: true,
            onDataChanged: true,
            onDataFetchHandler: true,
            onDataFetchResponse: true,
            onSelectionChange: true,
            onDelete: true,
            readOnly: true,
            onValueChanged: true,
            width: true,
            autoHeightResize: true,
            component: true,
            rules: true,
            onReadyStateChanged: true,
            autoFocus: true,
            dependsOn: true,
            disabled: true,
            helpClass: true,
            hidden: true,
            label: true,
            inlineGroup: true,
            onDirtyStateChanged: true,
            onDisabledStateChanged: true,
            onErrorChanged: true,
            onHiddenStateChanged: true,
            onLabelChanged: true,
            onReadOnlyStateChanged: true,
            placeholder: true,
            onTouchedStateChanged: true,
            onValidated: true,
            requiredMark: true,
            rowStyle: true,
            style: true,
            tooltip: true,
            resizeHeightWithForm: true,
        });
        return result[1];
    }, [props]);
};
const usePrepareCallbacks = (field, fieldProps, curValueRef, curDataSetRef) => {
    return useMemo(() => {
        return {
            onDataChanged: (dataSet, gridApi) => {
                var _a;
                if (field.isReady()) {
                    if (!fieldProps.selectionMode) {
                        curValueRef.current = dataSet;
                        curDataSetRef.current = dataSet;
                        field.setValue(dataSet !== null && dataSet !== void 0 ? dataSet : undefined);
                        field.setDirty(true);
                    }
                }
                return (_a = fieldProps.onDataChanged) === null || _a === void 0 ? void 0 : _a.call(fieldProps, dataSet, gridApi, field);
            },
            onSelectionChange: (selectedData, rows, selectedRows, deselectedRows, gridApi) => {
                var _a;
                if (field.isReady()) {
                    if (fieldProps.selectionMode) {
                        curValueRef.current = selectedData;
                        field.setValue(selectedData !== null && selectedData !== void 0 ? selectedData : undefined);
                        field.setDirty(true);
                    }
                    field.setTouched(true);
                }
                return (_a = fieldProps.onSelectionChange) === null || _a === void 0 ? void 0 : _a.call(fieldProps, selectedData, rows, selectedRows, deselectedRows, gridApi, field);
            },
            onDataLoading: (dataSet, gridApi) => {
                var _a;
                field.setReady(false);
                return (_a = fieldProps.onDataLoading) === null || _a === void 0 ? void 0 : _a.call(fieldProps, dataSet, gridApi, field);
            },
            onDataLoaded: (dataSet, gridApi) => {
                var _a;
                field.setReady(true);
                const fieldProps = field.getProps();
                return (_a = fieldProps.onDataLoaded) === null || _a === void 0 ? void 0 : _a.call(fieldProps, dataSet, gridApi, field);
            },
            onDataProcessed: (dataSet, gridApi) => {
                var _a;
                const fieldProps = field.getProps();
                if (fieldProps.selectionMode)
                    gridApi.setSelectedRows(field.getValue());
                return (_a = fieldProps.onDataProcessed) === null || _a === void 0 ? void 0 : _a.call(fieldProps, dataSet, gridApi, field);
            },
            onDataLoadError: (message, code, gridApi) => {
                var _a;
                field.setReady(false);
                return (_a = fieldProps.onDataLoadError) === null || _a === void 0 ? void 0 : _a.call(fieldProps, message, code, gridApi, field);
            },
            onDataFetch: !fieldProps.onDataFetch
                ? undefined
                : (params, gridApi) => {
                    return fieldProps.onDataFetch(params, gridApi, field);
                },
            onDataFetchResponse: (dataSet, params, gridApi) => { var _a, _b; return (_b = (_a = fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.onDataFetchResponse) === null || _a === void 0 ? void 0 : _a.call(fieldProps, dataSet, params, gridApi, field)) !== null && _b !== void 0 ? _b : dataSet; },
            onMenuVisibilityChanged: (isVisible, gridApi) => { var _a; return (_a = fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.onMenuVisibilityChanged) === null || _a === void 0 ? void 0 : _a.call(fieldProps, isVisible, gridApi, field); },
            onDelete: (selectedRows, gridApi) => { var _a; return (_a = fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.onDelete) === null || _a === void 0 ? void 0 : _a.call(fieldProps, selectedRows, gridApi, field); },
        };
    }, [fieldProps, field, curValueRef, curDataSetRef]);
};
