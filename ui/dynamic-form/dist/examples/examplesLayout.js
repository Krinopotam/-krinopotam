import { FolderOutlined, HomeOutlined } from '@ant-design/icons';
import { Divider, Layout, Menu, Space, Switch, theme } from 'antd';
import { Link, Outlet } from 'react-router-dom';
import React, { useCallback } from 'react';
const { Sider, Content } = Layout;
function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}
const items = [
    getItem(React.createElement(Link, { to: "home" }, "\u041D\u0430\u0447\u0430\u043B\u043E"), 'home', React.createElement(HomeOutlined, null)),
    { type: 'divider', key: 'divider1' },
    getItem('DForm - Форма', 'dForm', React.createElement(FolderOutlined, null), [
        getItem(React.createElement(Link, { to: "FormSimple" }, "\u041F\u0440\u043E\u0441\u0442\u0430\u044F \u0444\u043E\u0440\u043C\u0430 (\u0432\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u044C\u043D\u0430\u044F)"), 'FormSimple'),
    ]),
    { type: 'divider', key: 'divider2' },
    getItem(React.createElement(Link, { to: "PlayGround" }, "\u041F\u0435\u0441\u043E\u0447\u043D\u0438\u0446\u0430"), 'PlayGround'),
];
export const ExamplesLayout = (props) => {
    const { token: { colorBgContainer }, } = theme.useToken();
    const onChange = useCallback((checked) => {
        props.setDarkMode(checked);
    }, [props]);
    return (React.createElement(Layout, null,
        React.createElement(Space, { style: { height: 50, background: '#222222', color: '#FFFFFF', padding: 10 }, align: "center", split: React.createElement(Divider, { type: "vertical" }) },
            React.createElement("div", null,
                React.createElement("h1", null, "\u041F\u0440\u0438\u043C\u0435\u0440\u044B \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u043E\u0432")),
            React.createElement("div", null,
                "\u0422\u0435\u043C\u0430: ",
                React.createElement(Switch, { onChange: onChange }))),
        React.createElement(Layout, null,
            React.createElement(Sider, { width: 400, style: { background: colorBgContainer } },
                React.createElement(Menu, { mode: "inline", defaultSelectedKeys: ['1'], defaultOpenKeys: ['baseExamples'], style: { height: '100%', borderRight: 0 }, items: items })),
            React.createElement(Layout, { style: { paddingLeft: 25, paddingRight: 24 } },
                React.createElement(Content, { style: {
                        padding: 24,
                        margin: 0,
                        minHeight: 280,
                        background: colorBgContainer,
                    } },
                    React.createElement(Outlet, null))))));
};
