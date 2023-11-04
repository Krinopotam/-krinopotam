import React from 'react';
import { Dropdown, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { ButtonSimple } from '../../buttonsRow/components/buttonSimple';
export const ButtonDropdown = ({ id, button, context, menuProps, componentProps, }) => {
    var _a;
    const dropDownIcon = (_a = button.expandIcon) !== null && _a !== void 0 ? _a : React.createElement(DownOutlined, null);
    return (React.createElement(Dropdown, { menu: menuProps, disabled: button.disabled },
        React.createElement("div", null,
            React.createElement(ButtonSimple, { id: id, button: button, context: context, componentProps: componentProps },
                React.createElement(Space, null,
                    button.title,
                    dropDownIcon)))));
};
//# sourceMappingURL=buttonDropdown.js.map