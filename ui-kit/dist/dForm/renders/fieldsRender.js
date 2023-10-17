import React, { useSyncExternalStore } from 'react';
export const FieldsRender = ({ fields, subscribe, getSnapshot, containerStyle, }) => {
    if (!subscribe)
        subscribe = () => () => void 0;
    if (!getSnapshot)
        getSnapshot = () => 0;
    useSyncExternalStore(subscribe, getSnapshot);
    return (React.createElement("div", { style: containerStyle }, Object.keys(fields).map(fieldName => {
        const field = fields[fieldName];
        return React.createElement("div", { key: 'field_' + field.getName() },
            field.renderField(),
            " ");
    })));
};
