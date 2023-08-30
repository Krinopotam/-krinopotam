import React, { useMemo, useSyncExternalStore } from 'react';
import Animate from 'rc-animate';
import { Form } from 'antd';
export const BaseComponent = ({ fieldName, fieldProps, formApi, noLabel }) => {
    useExternalRenderCall(formApi, fieldName);
    const error = formApi.model.getFieldError(fieldName);
    const fieldHidden = formApi.model.isFieldHidden(fieldName);
    const Component = fieldProps.component;
    const style = useMemo(() => {
        const baseStyle = {
            width: fieldProps.width,
            flexGrow: fieldProps.width ? 0 : 1,
            flexShrink: fieldProps.width ? 0 : 1,
            flexBasis: fieldProps.width ? undefined : 0,
        };
        return Object.assign(Object.assign({}, baseStyle), fieldProps.style);
    }, [fieldProps.style, fieldProps.width]);
    return (React.createElement(Animate, { component: "", transitionName: "zoom" }, !fieldHidden ? (React.createElement(Form.Item, { key: 'item_' + fieldName, label: !noLabel ? fieldProps.label : undefined, help: error || undefined, validateStatus: error ? 'error' : undefined, required: !!fieldProps.requiredMark, style: style },
        React.createElement(Component, { fieldName: fieldName, fieldProps: fieldProps, formApi: formApi }))) : null));
};
const useExternalRenderCall = (formApi, fieldName) => {
    const subscribe = formApi.model.subscribeRenderField(fieldName);
    const getSnapshot = () => {
        const snaps = formApi.model.getFieldRenderSnapshots();
        if (!snaps[fieldName])
            return undefined;
        return snaps[fieldName];
    };
    return useSyncExternalStore(subscribe, getSnapshot);
};
