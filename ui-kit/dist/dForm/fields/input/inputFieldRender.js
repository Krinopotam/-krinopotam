import React, { useCallback, useEffect, useSyncExternalStore } from "react";
import { Input } from "antd";
export const InputFieldRender = ({ field }) => {
    useSyncExternalStore(field.subscribe.bind(field), field.getSnapshot.bind(field));
    const fieldName = field.getName();
    const fieldProps = field.getProps();
    const value = field.getValue();
    const onChange = useCallback((e) => {
        if (!field.isReady())
            return;
        field.setValue(e.target.value || null);
        field.setDirty(true);
    }, [field]);
    const onBlur = useCallback(() => {
        field.setTouched(true);
    }, [field]);
    useEffect(() => {
        field.setReady(true);
    }, [field]);
    return (React.createElement(Input, { autoFocus: fieldProps.autoFocus, disabled: field.isDisabled(), readOnly: field.isReadOnly(), maxLength: fieldProps.maxLength, name: fieldName, onBlur: onBlur, onChange: onChange, placeholder: fieldProps.placeholder, showCount: fieldProps.showCount, value: value, style: fieldProps.style, width: fieldProps.width }));
};
//# sourceMappingURL=inputFieldRender.js.map