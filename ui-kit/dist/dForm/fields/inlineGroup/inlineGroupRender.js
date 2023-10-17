import React, { useEffect, useSyncExternalStore } from 'react';
import { Form } from 'antd';
import Animate from 'rc-animate';
export const InlineGroupRender = ({ field }) => {
    useSyncExternalStore(field.subscribe.bind(field), field.getSnapshot.bind(field));
    useEffect(() => {
        field.setReady(true);
    }, [field]);
    if (!field.hasVisibleChildren())
        return React.createElement(React.Fragment, null, " ");
    const model = field.getModel();
    const formProps = model.getFormProps();
    const fieldProps = field.getProps();
    const childFields = field.getRootFields();
    let firstField;
    for (const fieldName in childFields) {
        const childrenField = childFields[fieldName];
        if (!childrenField.isHidden()) {
            firstField = childrenField;
            break;
        }
    }
    const isHidden = field.isHidden() || !firstField;
    const groupName = field.getLabel();
    let groupLabel = '';
    if (formProps.layout === 'horizontal')
        groupLabel = groupName !== null && groupName !== void 0 ? groupName : firstField === null || firstField === void 0 ? void 0 : firstField.getLabel();
    let defStyle = {};
    if (fieldProps.width) {
        defStyle = { width: fieldProps.width, margin: 0 };
    }
    const groupStyle = Object.assign(Object.assign({}, defStyle), fieldProps.style);
    return (React.createElement(Animate, { component: "", transitionName: "zoom" }, !isHidden ? (React.createElement(Form.Item, { label: groupLabel, style: groupStyle },
        React.createElement("div", { style: { display: 'inline-flex', gap: '24px', alignItems: 'center', width: '100%' } }, Object.keys(childFields).map(fieldName => {
            const childField = childFields[fieldName];
            const childProps = childField.getProps();
            if (childField.isHidden())
                return null;
            const style = {
                flexGrow: childProps.width ? 0 : 1,
                flexShrink: childProps.width ? 0 : 1,
                flexBasis: childProps.width ? undefined : 0,
            };
            const altLabel = formProps.layout === 'horizontal' && childField === firstField ? null : undefined;
            return (React.createElement("div", { key: 'item_' + childField.getName(), style: style }, childField.renderField(altLabel)));
        })))) : null));
};
