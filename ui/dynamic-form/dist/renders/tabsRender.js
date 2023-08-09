import React from 'react';
import { Tabs, theme } from 'antd';
import StickyBox from 'react-sticky-box';
import { TabContentRender } from './tabContentRender';
const { useToken } = theme;
export const TabsRender = ({ formApi }) => {
    const formProps = formApi.getFormProps();
    const tabs = formApi.model.getTabsProps();
    const items = [];
    for (const tabName in tabs) {
        items.push({
            key: tabName,
            label: tabName,
            forceRender: true,
            children: React.createElement(TabContentRender, { tabName: tabName, formApi: formApi }),
        });
    }
    const tabBarRender = (props, DefaultTabBar) => TabBarRender(props, DefaultTabBar, formProps);
    return React.createElement(Tabs, { type: "card", size: "small", renderTabBar: tabBarRender, items: items });
};
const TabBarRender = (props, DefaultTabBar, formProps) => {
    var _a;
    const { token } = useToken();
    const style = Object.assign({}, props.style);
    style.backgroundColor = token.colorBgElevated;
    style.height = ((_a = formProps === null || formProps === void 0 ? void 0 : formProps.tabsProps) === null || _a === void 0 ? void 0 : _a.height) || 35;
    const indent = formProps.contentIndent || 12;
    const indentStyle = { height: indent, backgroundColor: style.backgroundColor };
    return (React.createElement(StickyBox, { style: { zIndex: 15 } },
        React.createElement("div", { style: indentStyle }),
        React.createElement(DefaultTabBar, Object.assign({}, props, { style: style }))));
};
