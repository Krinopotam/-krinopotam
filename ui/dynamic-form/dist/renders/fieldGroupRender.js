import React, { useSyncExternalStore } from 'react';
import Animate from 'rc-animate';
import { BaseComponent } from '../components/baseComponent';
import { Form } from 'antd';
export const FieldGroupRender = ({ tabName, groupName, formApi }) => {
    var _a;
    useExternalRenderCall(formApi, tabName, groupName);
    const formProps = formApi.getFormProps();
    const fields = formApi.model.getGroupsProps(tabName)[groupName];
    const firstField = formApi.model.getFirstVisibleFieldInGroup(tabName, groupName);
    const groupHidden = !firstField;
    let groupLabel = '';
    if (formProps.layout === 'horizontal')
        groupLabel = (_a = firstField === null || firstField === void 0 ? void 0 : firstField.label) !== null && _a !== void 0 ? _a : groupName;
    let isFirst = true;
    return (React.createElement(Animate, { component: "", transitionName: "zoom" }, !groupHidden ? (React.createElement(Form.Item, { label: groupLabel, style: { margin: 0 } },
        React.createElement("div", { style: { display: 'inline-flex', gap: '24px', alignItems: 'center', width: '100%' } }, Object.keys(fields).map((fieldName) => {
            var _a;
            const fieldProps = (_a = formProps === null || formProps === void 0 ? void 0 : formProps.fieldsProps) === null || _a === void 0 ? void 0 : _a[fieldName];
            if (!fieldProps)
                return null;
            const noLabel = formProps.layout === 'horizontal' && !!groupLabel && isFirst;
            isFirst = false;
            return React.createElement(BaseComponent, { key: fieldName, formApi: formApi, fieldName: fieldName, fieldProps: fieldProps, noLabel: noLabel });
        })))) : null));
};
const useExternalRenderCall = (formApi, tabName, groupName) => {
    const subscribe = formApi.model.subscribeRenderGroup(tabName, groupName);
    const snaps = formApi.model.getGroupRenderSnapshots();
    const getSnapshot = () => {
        var _a;
        if (!((_a = snaps === null || snaps === void 0 ? void 0 : snaps[tabName]) === null || _a === void 0 ? void 0 : _a[groupName]))
            return undefined;
        return snaps[tabName][groupName];
    };
    return useSyncExternalStore(subscribe, getSnapshot);
};
