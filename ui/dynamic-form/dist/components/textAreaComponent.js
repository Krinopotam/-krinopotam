import React, { useCallback, useEffect } from 'react';
import { Input } from 'antd';
const { TextArea } = Input;
export const TextAreaComponent = ({ formApi, fieldName, fieldProps }) => {
    const value = formApi.model.getFieldValue(fieldName);
    const onChange = useCallback((e) => {
        formApi.model.setFieldValue(fieldName, e.target.value || null);
        formApi.model.setFieldDirty(fieldName, true);
    }, [fieldName, formApi.model]);
    const onBlur = useCallback(() => {
        formApi.model.setFieldTouched(fieldName, true);
    }, [fieldName, formApi.model]);
    useEffect(() => {
        formApi.model.setFieldReady(fieldName, true);
    }, [fieldName, formApi.model]);
    return (React.createElement(TextArea, { autoFocus: fieldProps.autoFocus, autoSize: fieldProps.autoSize, cols: fieldProps.cols, disabled: formApi.model.isFieldDisabled(fieldName), maxLength: fieldProps.maxLength, name: fieldName, onBlur: onBlur, onChange: onChange, placeholder: fieldProps.placeholder, readOnly: formApi.model.isFieldReadOnly(fieldName), rows: fieldProps.rows, showCount: fieldProps.showCount, value: value, wrap: fieldProps.wrap }));
};
