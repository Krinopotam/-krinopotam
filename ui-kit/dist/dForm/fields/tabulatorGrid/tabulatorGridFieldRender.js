import React, { useMemo, useRef, useState, useSyncExternalStore } from 'react';
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
    const callbacks = usePrepareCallbacks(field, fieldProps, prevValueRef);
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
        const result = HelpersObjects.splitObject(props, {
            value: true,
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
const usePrepareCallbacks = (field, fieldProps, prevValueRef) => {
    return useMemo(() => {
        return {
            onDataChanged: (dataSet, gridApi) => {
                var _a;
                if (field.isReady()) {
                    prevValueRef.current = dataSet;
                    field.setValue(dataSet !== null && dataSet !== void 0 ? dataSet : undefined);
                    field.setDirty(true);
                    field.setTouched(true);
                }
                return (_a = fieldProps.onDataChanged) === null || _a === void 0 ? void 0 : _a.call(fieldProps, dataSet, gridApi, field);
            },
            onDataLoading: (dataSet, gridApi) => {
                var _a;
                field.setReady(false);
                return (_a = fieldProps.onDataLoading) === null || _a === void 0 ? void 0 : _a.call(fieldProps, dataSet, gridApi, field);
            },
            onDataLoaded: (dataSet, gridApi) => {
                var _a;
                field.setReady(true);
                return (_a = fieldProps.onDataLoaded) === null || _a === void 0 ? void 0 : _a.call(fieldProps, dataSet, gridApi, field);
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
            onSelectionChange: (keys, selectedRows, gridApi) => { var _a; return (_a = fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.onSelectionChange) === null || _a === void 0 ? void 0 : _a.call(fieldProps, keys, selectedRows, gridApi, field); },
            onMenuVisibilityChanged: (isVisible, gridApi) => { var _a; return (_a = fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.onMenuVisibilityChanged) === null || _a === void 0 ? void 0 : _a.call(fieldProps, isVisible, gridApi, field); },
            onDelete: (selectedRows, gridApi) => { var _a; return (_a = fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.onDelete) === null || _a === void 0 ? void 0 : _a.call(fieldProps, selectedRows, gridApi, field); },
        };
    }, [field, fieldProps, prevValueRef]);
};
