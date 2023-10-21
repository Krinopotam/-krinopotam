import React, { useCallback, useEffect, useSyncExternalStore } from 'react';
import { QuillEditor } from '../../../quillEditor/quillEditor';
export const QuillEditorFieldRender = ({ field }) => {
    useSyncExternalStore(field.subscribe.bind(field), field.getSnapshot.bind(field));
    const fieldProps = field.getProps();
    const value = field.getValue();
    const onChange = useCallback(function (value, delta, source, editor) {
        var _a;
        if (!field.isReady())
            return;
        field.setValue(value || undefined);
        field.setDirty(true);
        (_a = fieldProps.onChange) === null || _a === void 0 ? void 0 : _a.call(fieldProps, value, delta, source, editor, field);
    }, [field, fieldProps]);
    const onBlur = useCallback((previousSelection, source, editor) => {
        var _a;
        field.setTouched(true);
        (_a = fieldProps.onBlur) === null || _a === void 0 ? void 0 : _a.call(fieldProps, previousSelection, source, editor, field);
    }, [field, fieldProps]);
    useEffect(() => {
        field.setReady(true);
    }, [field]);
    let defStyle = {};
    if (fieldProps.width) {
        defStyle = { width: fieldProps.width };
    }
    const style = Object.assign(Object.assign({}, defStyle), fieldProps.style);
    return (React.createElement(QuillEditor, { theme: fieldProps.theme, value: value, formats: fieldProps.formats, toolbar: fieldProps.toolbar, className: fieldProps.className, preserveWhitespace: fieldProps.preserveWhitespace, tabIndex: fieldProps.tabIndex, bounds: fieldProps.bounds, scrollingContainer: fieldProps.scrollingContainer, style: style, disabled: field.isDisabled(), readOnly: field.isReadOnly(), placeholder: fieldProps.placeholder, onChange: onChange, onBlur: onBlur, onChangeSelection: (selection, source, editor) => { var _a; return (_a = fieldProps.onChangeSelection) === null || _a === void 0 ? void 0 : _a.call(fieldProps, selection, source, editor, field); }, onFocus: (selection, source, editor) => { var _a; return (_a = fieldProps.onFocus) === null || _a === void 0 ? void 0 : _a.call(fieldProps, selection, source, editor, field); }, onKeyDown: e => { var _a; return (_a = fieldProps.onKeyDown) === null || _a === void 0 ? void 0 : _a.call(fieldProps, e, field); }, onKeyPress: e => { var _a; return (_a = fieldProps.onKeyPress) === null || _a === void 0 ? void 0 : _a.call(fieldProps, e, field); }, onKeyUp: e => { var _a; return (_a = fieldProps.onKeyUp) === null || _a === void 0 ? void 0 : _a.call(fieldProps, e, field); } }));
};
