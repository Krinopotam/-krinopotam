import React, { useCallback, useEffect } from 'react';
import { Switch } from 'antd';
export const SwitchComponent = ({ formApi, fieldName, fieldProps }) => {
    const value = formApi.model.getFieldValue(fieldName);
    const onChange = useCallback((checked) => {
        formApi.model.setFieldValue(fieldName, checked || false);
        formApi.model.setFieldDirty(fieldName, true);
        formApi.model.setFieldTouched(fieldName, true);
    }, [fieldName, formApi.model]);
    useEffect(() => {
        formApi.model.setFieldReady(fieldName, true);
    }, [fieldName, formApi.model]);
    return (React.createElement(Switch, { autoFocus: fieldProps.autoFocus, checked: value, checkedChildren: fieldProps.checkedChildren, disabled: formApi.model.isFieldDisabled(fieldName) || formApi.model.isFieldReadOnly(fieldName), loading: fieldProps.loading, onChange: onChange, unCheckedChildren: fieldProps.unCheckedChildren }));
};
