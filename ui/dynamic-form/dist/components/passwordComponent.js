import React, { useCallback, useEffect } from 'react';
import { Input } from 'antd';
export const PasswordComponent = ({ formApi, fieldName, fieldProps }) => {
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
    return (React.createElement(Input.Password, { autoFocus: fieldProps.autoFocus, disabled: formApi.model.isFieldDisabled(fieldName), iconRender: fieldProps.iconRender, maxLength: fieldProps.maxLength, name: fieldName, onBlur: onBlur, onChange: onChange, placeholder: fieldProps.placeholder, readOnly: formApi.model.isFieldReadOnly(fieldName), showCount: fieldProps.showCount, value: value }));
};
