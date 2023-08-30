import React from 'react';
import { TabContentRender } from './tabContentRender';
import { TabsRender } from './tabsRender';
import { theme } from 'antd';
const { useToken } = theme;
export const FormBodyRender = ({ formApi }) => {
    var _a;
    const formProps = formApi.getFormProps();
    const { token } = useToken();
    const tabs = formApi.model.getTabsProps();
    if (Object.keys(tabs).length === 0)
        return null;
    const indentStyle = { height: (_a = formProps.contentIndent) !== null && _a !== void 0 ? _a : 12, background: token.colorBgElevated };
    if (Object.keys(tabs).length === 1) {
        const firstTab = Object.keys(tabs)[0];
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { style: indentStyle }),
            React.createElement(TabContentRender, { formApi: formApi, tabName: firstTab })));
    }
    else {
        return React.createElement(TabsRender, { formApi: formApi });
    }
};
