import React, { useCallback, useEffect, useSyncExternalStore } from "react";
import { Checkbox } from "antd";
export const CheckboxFieldRender = ({ field }) => {
    useSyncExternalStore(field.subscribe.bind(field), field.getSnapshot.bind(field));
    const fieldName = field.getName();
    const fieldProps = field.getProps();
    const value = field.getValue();
    const onChange = useCallback((e) => {
        field.setValue(e.target.checked || false);
        field.setTouched(true);
        field.setDirty(true);
    }, [field]);
    useEffect(() => {
        field.setReady(true);
    }, [field, fieldName]);
    let defStyle = {};
    if (fieldProps.width) {
        defStyle = { width: fieldProps.width };
    }
    const style = Object.assign(Object.assign({}, defStyle), fieldProps.style);
    return (React.createElement(Checkbox, { checked: value, disabled: field.isDisabled() || field.isReadOnly(), onChange: onChange, autoFocus: fieldProps.autoFocus, indeterminate: fieldProps.indeterminate, style: style }));
};
