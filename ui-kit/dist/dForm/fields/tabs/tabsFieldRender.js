import React, { useCallback, useEffect, useSyncExternalStore } from 'react';
import { Tabs, theme } from 'antd';
import { FieldsRender } from '../../../dForm/renders/fieldsRender';
import StickyBox from 'react-sticky-box';
const { useToken } = theme;
export const TabsFieldRender = ({ field }) => {
    var _a, _b;
    useEffect(() => {
        field.setReady(true);
    }, [field]);
    const fieldProps = field.getProps();
    const tabsRootFields = field.getTabsRootFields();
    useSyncExternalStore(field.subscribe.bind(field), field.getSnapshot.bind(field));
    let activeTab = field.getActiveTab();
    const onChange = useOnChange(field);
    if (!field.hasVisibleChildren())
        return React.createElement(React.Fragment, null, " ");
    const items = [];
    for (const tabName in tabsRootFields) {
        if (!activeTab)
            activeTab = tabName;
        if (!field.tabHasVisibleChildren(tabName))
            continue;
        const childrenFields = tabsRootFields[tabName];
        items.push({
            key: tabName,
            tabKey: tabName,
            label: tabName,
            forceRender: true,
            disabled: field.isDisabled(),
            style: fieldProps.tabsStyle,
            children: React.createElement(FieldsRender, { fields: childrenFields, subscribe: field.tabSubscribe(tabName), getSnapshot: field.getTabSnapshot(tabName) }),
            active: activeTab === tabName,
        });
    }
    const tabBarRender = (props, DefaultTabBar) => TabBarRender(props, DefaultTabBar, field);
    let defStyle = {};
    if (fieldProps.width) {
        defStyle = { width: fieldProps.width };
    }
    const style = Object.assign(Object.assign({}, defStyle), fieldProps.style);
    return (React.createElement(Tabs, { type: (_a = fieldProps.type) !== null && _a !== void 0 ? _a : 'card', tabBarStyle: fieldProps.tabBarStyle, size: (_b = fieldProps.size) !== null && _b !== void 0 ? _b : 'small', items: items, style: style, renderTabBar: tabBarRender, onChange: onChange }));
};
const useOnChange = (field) => {
    return useCallback((activeKey) => {
        field.setActiveTab(activeKey);
    }, [field]);
};
const TabBarRender = (props, DefaultTabBar, field) => {
    const { token } = useToken();
    const formProps = field.getFormProps();
    const style = Object.assign({}, props.style);
    style.backgroundColor = token.colorBgElevated;
    style.height = (formProps === null || formProps === void 0 ? void 0 : formProps.tabsHeight) || 35;
    const indent = formProps.contentIndent || 0;
    const indentStyle = { height: indent, backgroundColor: style.backgroundColor };
    if (field.getParent()) {
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { style: indentStyle }),
            React.createElement(DefaultTabBar, Object.assign({}, props, { style: style }))));
    }
    return (React.createElement(StickyBox, { style: { zIndex: 15 } },
        React.createElement("div", { style: indentStyle }),
        React.createElement(DefaultTabBar, Object.assign({}, props, { style: style }))));
};
