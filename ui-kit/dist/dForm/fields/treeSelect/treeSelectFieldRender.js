import React, { useCallback, useEffect, useMemo, useSyncExternalStore } from 'react';
import { TreeSelect } from '../../../treeSelect';
import { SplitObject } from '@krinopotam/js-helpers';
export const TreeSelectFieldRender = ({ field }) => {
    var _a, _b;
    useSyncExternalStore(field.subscribe.bind(field), field.getSnapshot.bind(field));
    const fieldProps = field.getProps();
    const value = field.getValue();
    const treeProps = useSplitTreeSelectProps(fieldProps);
    const onChange = useCallback((value) => {
        var _a;
        if (field.isReady()) {
            field.setValue(value !== null && value !== void 0 ? value : null);
            field.setDirty(true);
        }
        (_a = fieldProps.onChange) === null || _a === void 0 ? void 0 : _a.call(fieldProps, value);
    }, [field, fieldProps]);
    const onBlur = useCallback(() => {
        field.setTouched(true);
    }, [field]);
    const onClear = useCallback(() => {
        var _a;
        field.setDirty(true);
        field.setTouched(true);
        (_a = fieldProps.onClear) === null || _a === void 0 ? void 0 : _a.call(fieldProps);
    }, [field, fieldProps]);
    useEffect(() => {
        field.setReady(true);
    }, [field]);
    const style = Object.assign({ width: (_a = fieldProps.width) !== null && _a !== void 0 ? _a : '100%' }, fieldProps.style);
    return (React.createElement(TreeSelect, Object.assign({ style: style }, treeProps, { autoFocus: fieldProps.autoFocus, defaultValueCallback: fieldProps.defaultValueCallback, disabled: field.isDisabled(), readOnly: field.isReadOnly(), value: value, placeholder: (_b = fieldProps.placeholder) !== null && _b !== void 0 ? _b : 'Choose', allowClear: fieldProps.allowClear !== false, onChange: onChange, onClear: onClear, onBlur: onBlur, onDataFetch: fieldProps.onDataFetch, onDataFetchComplete: fieldProps.onDataFetchComplete, onDataFetchError: fieldProps.onDataFetchError, onDataFetchSuccess: fieldProps.onDataFetchSuccess, onDelete: fieldProps.onDelete, onReady: () => { var _a; return (_a = fieldProps.onReady) === null || _a === void 0 ? void 0 : _a.call(fieldProps, field); }, onKeyUp: fieldProps.onKeyUp, onKeyDown: fieldProps.onKeyDown, onClick: fieldProps.onClick, onSelect: fieldProps.onSelect, onMouseLeave: fieldProps.onMouseLeave, onMouseEnter: fieldProps.onMouseEnter, onMouseDown: fieldProps.onMouseDown, onFocus: fieldProps.onFocus, onDeselect: fieldProps.onDeselect, onDropdownVisibleChange: fieldProps.onDropdownVisibleChange, onInputKeyDown: fieldProps.onInputKeyDown, onTreeExpand: fieldProps.onTreeExpand, onPopupScroll: fieldProps.onPopupScroll, onSearch: fieldProps.onSearch, onTreeLoad: fieldProps.onTreeLoad })));
};
const useSplitTreeSelectProps = (props) => {
    return useMemo(() => {
        const result = SplitObject(props, {
            component: true,
            helpClass: true,
            label: true,
            placeholder: true,
            tab: true,
            inlineGroup: true,
            value: true,
            hidden: true,
            dependsOn: true,
            width: true,
            autoFocus: true,
            style: true,
            tooltip: true,
            disabled: true,
            requiredMark: true,
            readOnly: true,
            rowStyle: true,
            autoHeightResize: true,
            onDirtyStateChanged: true,
            onReady: true,
            onDisabledStateChanged: true,
            onErrorChanged: true,
            onHiddenStateChanged: true,
            onLabelChanged: true,
            onReadOnlyStateChanged: true,
            onTouchedStateChanged: true,
            onValidated: true,
            onValueChanged: true,
            onReadyStateChanged: true,
            rules: true,
        });
        return result[1];
    }, [props]);
};
