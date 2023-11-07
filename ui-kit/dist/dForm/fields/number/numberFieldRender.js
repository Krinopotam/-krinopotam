import React, { useCallback, useEffect, useSyncExternalStore } from 'react';
import { InputNumber } from 'antd';
export const NumberFieldRender = ({ field }) => {
    useSyncExternalStore(field.subscribe.bind(field), field.getSnapshot.bind(field));
    const fieldName = field.getName();
    const fieldProps = field.getProps();
    const value = field.getValue();
    const onChange = useCallback((val) => {
        if (!field.isReady())
            return;
        field.setValue(val !== null && val !== void 0 ? val : 0);
        field.setDirty(true);
    }, [field]);
    const onBlur = useCallback(() => {
        field.setTouched(true);
    }, [field]);
    useEffect(() => {
        field.setReady(true);
    }, [field]);
    const style = Object.assign({ width: '100%' }, fieldProps.style);
    return (React.createElement(InputNumber, { addonAfter: fieldProps.addonAfter, addonBefore: fieldProps.addonBefore, autoFocus: fieldProps.autoFocus, className: fieldProps.className, controls: fieldProps.controls, decimalSeparator: fieldProps.decimalSeparator, disabled: field.isDisabled(), downHandler: fieldProps.downHandler, formatter: fieldProps.formatter, keyboard: fieldProps.keyboard, max: fieldProps.max, maxLength: fieldProps.maxLength, min: fieldProps.min, name: fieldName, onBlur: onBlur, onChange: onChange, parser: fieldProps.parser, placeholder: fieldProps.placeholder, precision: fieldProps.precision, prefix: fieldProps.prefix, prefixCls: fieldProps.prefixCls, readOnly: field.isReadOnly(), step: fieldProps.step, stringMode: fieldProps.stringMode, style: style, upHandler: fieldProps.upHandler, value: value, width: fieldProps.width }));
};
