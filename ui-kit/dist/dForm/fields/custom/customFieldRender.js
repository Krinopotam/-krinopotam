import React, { useEffect, useSyncExternalStore } from 'react';
export const CustomFieldRender = ({ field }) => {
    var _a, _b, _c;
    useSyncExternalStore(field.subscribe.bind(field), field.getSnapshot.bind(field));
    const fieldProps = field.getProps();
    const value = field.getValue();
    const curValue = (_b = (_a = fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.onRender) === null || _a === void 0 ? void 0 : _a.call(fieldProps, value, field)) !== null && _b !== void 0 ? _b : value;
    useEffect(() => {
        field.setReady(true);
    }, [field]);
    const defStyle = { width: (_c = fieldProps.width) !== null && _c !== void 0 ? _c : '100%' };
    const style = Object.assign(Object.assign({}, defStyle), fieldProps.style);
    return React.createElement("div", { style: style }, curValue);
};
