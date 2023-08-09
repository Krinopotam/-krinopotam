import React, { useCallback, useEffect } from 'react';
import { InputNumber } from 'antd';
export const NumberComponent = ({ formApi, fieldName, fieldProps }) => {
    const value = formApi.model.getFieldValue(fieldName);
    const onChange = useCallback((val) => {
        formApi.model.setFieldValue(fieldName, val !== null && val !== void 0 ? val : 0);
        formApi.model.setFieldDirty(fieldName, true);
    }, [fieldName, formApi.model]);
    const onBlur = useCallback(() => {
        formApi.model.setFieldTouched(fieldName, true);
    }, [fieldName, formApi.model]);
    useEffect(() => {
        formApi.model.setFieldReady(fieldName, true);
    }, [fieldName, formApi.model]);
    return (React.createElement(InputNumber, { addonAfter: fieldProps.addonAfter, addonBefore: fieldProps.addonBefore, autoFocus: fieldProps.autoFocus, className: fieldProps.className, controls: fieldProps.controls, decimalSeparator: fieldProps.decimalSeparator, disabled: formApi.model.isFieldDisabled(fieldName), downHandler: fieldProps.downHandler, formatter: fieldProps.formatter, keyboard: fieldProps.keyboard, max: fieldProps.max, maxLength: fieldProps.maxLength, min: fieldProps.min, name: fieldName, onBlur: onBlur, onChange: onChange, parser: fieldProps.parser, placeholder: fieldProps.placeholder, precision: fieldProps.precision, prefix: fieldProps.prefix, prefixCls: fieldProps.prefixCls, readOnly: formApi.model.isFieldReadOnly(fieldName), step: fieldProps.step, stringMode: fieldProps.stringMode, style: { width: '100%' }, upHandler: fieldProps.upHandler, value: value }));
};
