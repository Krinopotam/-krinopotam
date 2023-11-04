import React, { useCallback, useEffect, useSyncExternalStore } from 'react';
import { DatePicker } from '../../../datePicker';
import { GetDatePickerFormat } from '../../../datePicker/datePicker';
import dayjs from "dayjs";
export const DateTimeFieldRender = ({ field }) => {
    var _a;
    useSyncExternalStore(field.subscribe.bind(field), field.getSnapshot.bind(field));
    const fieldName = field.getName();
    const fieldProps = field.getProps();
    let value = field.getValue();
    const fieldFormat = GetDatePickerFormat(fieldProps.mode, fieldProps.timeMode, fieldProps.format);
    if (!value && !field.isDirty() && !field.isTouched()) {
        value = dayjs(new Date());
        field.setValue(value.format(fieldFormat), true);
    }
    const onChange = useCallback((e) => {
        if (!field.isReady())
            return;
        field.setDirty(true);
        field.setValue(e === null || e === void 0 ? void 0 : e.format(fieldFormat));
    }, [field, fieldFormat]);
    const onBlur = useCallback(() => {
        field.setTouched(true);
    }, [field]);
    useEffect(() => {
        field.setReady(true);
    }, [field]);
    const defStyle = { width: (_a = fieldProps.width) !== null && _a !== void 0 ? _a : '100%' };
    const style = Object.assign(Object.assign({}, defStyle), fieldProps.style);
    return (React.createElement(DatePicker, Object.assign({}, fieldProps, { disabled: field.isDisabled(), readOnly: field.isDisabled(), format: fieldFormat, name: fieldName, value: value, style: style, onBlur: onBlur, onChange: onChange, onOk: value => { var _a; return (_a = fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.onOk) === null || _a === void 0 ? void 0 : _a.call(fieldProps, value, field); }, onOpenChange: open => { var _a; return (_a = fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.onOpenChange) === null || _a === void 0 ? void 0 : _a.call(fieldProps, open, field); }, onSelect: value => { var _a; return (_a = fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.onSelect) === null || _a === void 0 ? void 0 : _a.call(fieldProps, value, field); }, onPanelChange: (value, mode) => { var _a; return (_a = fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.onPanelChange) === null || _a === void 0 ? void 0 : _a.call(fieldProps, value, mode, field); }, onMouseDown: e => { var _a; return (_a = fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.onMouseDown) === null || _a === void 0 ? void 0 : _a.call(fieldProps, e, field); } })));
};
//# sourceMappingURL=dateTimeFieldRender.js.map