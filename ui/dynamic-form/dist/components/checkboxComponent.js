import React, { useCallback, useEffect } from 'react';
import { Checkbox } from 'antd';
export const CheckboxComponent = ({ formApi, fieldName, fieldProps }) => {
    const value = formApi.model.getFieldValue(fieldName);
    const onChange = useCallback((e) => {
        formApi.model.setFieldValue(fieldName, e.target.checked || false);
        formApi.model.setFieldTouched(fieldName, true);
        formApi.model.setFieldDirty(fieldName, true);
    }, [fieldName, formApi.model]);
    useEffect(() => {
        formApi.model.setFieldReady(fieldName, true);
    }, [fieldName, formApi.model]);
    return (React.createElement(Checkbox, { checked: value, disabled: formApi.model.isFieldDisabled(fieldName) || formApi.model.isFieldReadOnly(fieldName), onChange: onChange, autoFocus: fieldProps.autoFocus, indeterminate: fieldProps.indeterminate }));
};
