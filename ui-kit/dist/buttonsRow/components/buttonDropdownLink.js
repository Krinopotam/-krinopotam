import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import React from 'react';
export const ButtonDropdownLink = ({ button, menuProps, }) => {
    var _a;
    const dropDownIcon = (_a = button.expandIcon) !== null && _a !== void 0 ? _a : React.createElement(DownOutlined, null);
    return (React.createElement(Dropdown, { menu: menuProps },
        React.createElement("a", { href: button.href, target: button.target, rel: button.rel }, typeof button.title === 'string' ? (React.createElement(Space, null,
            button.icon,
            button.title,
            dropDownIcon)) : (button.title))));
};
//# sourceMappingURL=buttonDropdownLink.js.map