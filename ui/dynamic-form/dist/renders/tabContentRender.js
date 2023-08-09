import React, { useSyncExternalStore } from 'react';
import { BaseComponent } from '../components/baseComponent';
import { FieldGroupRender } from './fieldGroupRender';
export const TabContentRender = ({ tabName, formApi }) => {
    useExternalRenderCall(formApi, tabName);
    const groupsProp = formApi.model.getGroupsProps(tabName);
    const formProps = formApi.getFormProps();
    return (React.createElement(React.Fragment, null, Object.keys(groupsProp).map((groupName) => {
        var _a;
        if (Object.keys(groupsProp[groupName]).length === 0)
            return null;
        if (Object.keys(groupsProp[groupName]).length > 1) {
            return React.createElement(FieldGroupRender, { key: groupName, formApi: formApi, tabName: tabName, groupName: groupName });
        }
        else {
            const fieldName = Object.keys(groupsProp[groupName])[0];
            const fieldProps = (_a = formProps === null || formProps === void 0 ? void 0 : formProps.fieldsProps) === null || _a === void 0 ? void 0 : _a[fieldName];
            if (!fieldProps)
                return null;
            return React.createElement(BaseComponent, { key: fieldName, formApi: formApi, fieldName: fieldName, fieldProps: fieldProps });
        }
    })));
};
const useExternalRenderCall = (formApi, tabName) => {
    const subscribe = formApi.model.subscribeRenderTab(tabName);
    const getSnapshot = () => {
        const snaps = formApi.model.getTabRenderSnapshots();
        if (!snaps[tabName])
            return undefined;
        return snaps[tabName];
    };
    return useSyncExternalStore(subscribe, getSnapshot);
};
