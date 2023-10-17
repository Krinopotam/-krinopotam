import React, { useCallback } from 'react';
import { Dropdown } from 'antd';
export const ButtonDropdownClickable = ({ id, button, context, menuProps, componentProps, }) => {
    let type = 'default';
    if (componentProps.makeActivePrimary !== false && button.active)
        type = 'primary';
    else if (button.type === 'text')
        type = 'text';
    else if (button.type === 'link')
        type = 'link';
    else if (button.dashed)
        type = 'dashed';
    const onClick = useCallback(() => {
        var _a;
        (_a = button.onClick) === null || _a === void 0 ? void 0 : _a.call(button, id, button, context);
    }, [button, context, id]);
    return (React.createElement(Dropdown.Button, { type: type, href: button.href, disabled: button.disabled, loading: button.loading, danger: button.colorType === 'danger', onClick: onClick, size: button.size, style: button.style, className: button.className, icon: button.expandIcon, menu: menuProps }, button.title));
};
