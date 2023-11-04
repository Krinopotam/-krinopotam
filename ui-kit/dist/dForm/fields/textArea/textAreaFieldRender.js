import React, { useCallback, useEffect } from 'react';
import { Input } from 'antd';
const { TextArea } = Input;
export const TextAreaFieldRender = ({ field }) => {
    const fieldName = field.getName();
    const fieldProps = field.getProps();
    const value = field.getValue();
    const onChange = useCallback((e) => {
        if (field.isReady()) {
            field.setValue(e.target.value || null);
            field.setDirty(true);
        }
    }, [field]);
    const onBlur = useCallback(() => {
        field.setTouched(true);
    }, [field]);
    useEffect(() => {
        field.setReady(true);
    }, [field]);
    let defStyle = {};
    if (fieldProps.width) {
        defStyle = { width: fieldProps.width };
    }
    const style = Object.assign(Object.assign({}, defStyle), fieldProps.style);
    return (React.createElement(TextArea, { autoFocus: fieldProps.autoFocus, autoSize: fieldProps.autoSize, cols: fieldProps.cols, disabled: field.isDisabled(), maxLength: fieldProps.maxLength, name: fieldName, onBlur: onBlur, onChange: onChange, placeholder: fieldProps.placeholder, readOnly: field.isReadOnly(), rows: fieldProps.rows, showCount: fieldProps.showCount, value: value, wrap: fieldProps.wrap, style: style }));
};
//# sourceMappingURL=textAreaFieldRender.js.map