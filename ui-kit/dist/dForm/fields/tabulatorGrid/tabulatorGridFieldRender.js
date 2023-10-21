import React, { useCallback, useMemo, useRef, useState, useSyncExternalStore } from 'react';
import { TabulatorGrid } from '../../../tabulatorGrid';
import { HelpersObjects } from '@krinopotam/js-helpers';
export const TabulatorGridFieldRender = ({ field }) => {
    useSyncExternalStore(field.subscribe.bind(field), field.getSnapshot.bind(field));
    const [gridApi] = useState({});
    const fieldProps = field.getProps();
    const tabulatorProps = useSplitTabulatorProps(fieldProps);
    const value = field.getValue();
    const prevDataSetRef = useRef();
    const prevValueRef = useRef();
    if (prevValueRef.current !== value) {
        prevDataSetRef.current = value;
        prevValueRef.current = value;
    }
    const curDataSet = prevDataSetRef.current;
    const onDataSetChange = useCallback((dataSet, gridApi, field) => {
        var _a;
        if (field.isReady()) {
            prevValueRef.current = dataSet;
            field.setValue(dataSet !== null && dataSet !== void 0 ? dataSet : undefined);
            field.setDirty(true);
            field.setTouched(true);
        }
        return (_a = fieldProps.onDataSetChange) === null || _a === void 0 ? void 0 : _a.call(fieldProps, dataSet, gridApi, field);
    }, [fieldProps]);
    const onDataFetch = useCallback((gridApi, params, field) => {
        var _a;
        field.setReady(false);
        return (_a = fieldProps.onDataFetch) === null || _a === void 0 ? void 0 : _a.call(fieldProps, gridApi, params, field);
    }, [fieldProps]);
    const onDataLoaded = useCallback((dataSet, gridApi, field) => {
        var _a;
        field.setReady(true);
        return (_a = fieldProps.onDataLoaded) === null || _a === void 0 ? void 0 : _a.call(fieldProps, dataSet, gridApi, field);
    }, [fieldProps]);
    const onDataFetchError = useCallback((message, code, gridApi, field) => {
        var _a;
        field.setReady(false);
        return (_a = fieldProps.onDataFetchError) === null || _a === void 0 ? void 0 : _a.call(fieldProps, message, code, gridApi, field);
    }, [fieldProps]);
    const onDataFetchCompleted = useCallback((gridApi, field) => {
        var _a;
        field.setReady(true);
        return (_a = fieldProps.onDataFetchCompleted) === null || _a === void 0 ? void 0 : _a.call(fieldProps, gridApi, field);
    }, [fieldProps]);
    return useMemo(() => {
        return (React.createElement(TabulatorGrid, Object.assign({}, tabulatorProps, { apiRef: gridApi, dataSet: curDataSet, readOnly: fieldProps.readOnly, placeholder: fieldProps.placeholder, width: fieldProps.width, resizeHeightWithParent: fieldProps.resizeHeightWithForm ? '#' + field.getModel().getFormId() : fieldProps.resizeHeightWithParent, onMenuVisibilityChanged: (isVisible, gridApi) => { var _a; return (_a = fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.onMenuVisibilityChanged) === null || _a === void 0 ? void 0 : _a.call(fieldProps, isVisible, gridApi, field); }, onDataLoaded: (dataSet, gridApi) => onDataLoaded === null || onDataLoaded === void 0 ? void 0 : onDataLoaded(dataSet, gridApi, field), onDataSetChange: (dataSet, gridApi) => onDataSetChange === null || onDataSetChange === void 0 ? void 0 : onDataSetChange(dataSet, gridApi, field), onDataFetch: (gridApi, params) => onDataFetch === null || onDataFetch === void 0 ? void 0 : onDataFetch(gridApi, params, field), onDataFetchSuccess: (dataSet, gridApi) => { var _a; return (_a = fieldProps.onDataFetchSuccess) === null || _a === void 0 ? void 0 : _a.call(fieldProps, dataSet, gridApi, field); }, onDataFetchError: (message, code, gridApi) => onDataFetchError === null || onDataFetchError === void 0 ? void 0 : onDataFetchError(message, code, gridApi, field), onDataFetchCompleted: gridApi => onDataFetchCompleted === null || onDataFetchCompleted === void 0 ? void 0 : onDataFetchCompleted(gridApi, field), onSelectionChange: (keys, selectedRows, gridApi) => { var _a; return (_a = fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.onSelectionChange) === null || _a === void 0 ? void 0 : _a.call(fieldProps, keys, selectedRows, gridApi, field); }, onDelete: (selectedRows, gridApi) => { var _a; return (_a = fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.onDelete) === null || _a === void 0 ? void 0 : _a.call(fieldProps, selectedRows, gridApi, field); } })));
    }, [tabulatorProps, gridApi, curDataSet, fieldProps, field, onDataLoaded, onDataSetChange, onDataFetch, onDataFetchError, onDataFetchCompleted]);
};
const useSplitTabulatorProps = (props) => {
    return useMemo(() => {
        const result = HelpersObjects.splitObject(props, {
            value: true,
            onMenuVisibilityChanged: true,
            onDataLoaded: true,
            onDataSetChange: true,
            onDataFetch: true,
            onDataFetchSuccess: true,
            onDataFetchError: true,
            onDataFetchCompleted: true,
            onSelectionChange: true,
            onDelete: true,
            readOnly: true,
            onValueChanged: true,
            width: true,
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
