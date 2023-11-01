import React, { useSyncExternalStore } from 'react';
export const FieldsRender = ({ fields, subscribe, getSnapshot, containerStyle, }) => {
    if (!subscribe)
        subscribe = () => () => void 0;
    if (!getSnapshot)
        getSnapshot = () => 0;
    const style = Object.assign({ height: '100%', display: 'flex', flexDirection: 'column' }, containerStyle);
    useSyncExternalStore(subscribe, getSnapshot);
    return (React.createElement("div", { className: 'dform-fields-container', style: style }, Object.keys(fields).map(fieldName => {
        const field = fields[fieldName];
        const fieldStyle = {};
        const fieldProps = field.getProps();
        const autoHeightClass = fieldProps.autoHeightResize ? ' auto-height' : '';
        return (React.createElement("div", { key: 'field_' + field.getName(), className: 'dform-field-container' + autoHeightClass, style: fieldStyle },
            field.renderField(),
            ' '));
    })));
};
