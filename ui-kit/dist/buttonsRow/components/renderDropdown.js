import React from 'react';
import { ButtonDropdownClickable } from '../../buttonsRow/components/buttonDropdownClickable';
import { ButtonDropdownLink } from '../../buttonsRow/components/buttonDropdownLink';
import { ButtonDropdown } from '../../buttonsRow/components/buttonDropdown';
import { getSortedButtonsKeys } from '../../buttonsRow/helpers/buttonMethods';
export const RenderDropdown = ({ id, button, context, componentProps }) => {
    const items = prepareDropdownItems(button.children, id, context);
    const menuProps = { items };
    if (button.type === 'link')
        return React.createElement(ButtonDropdownLink, { button: button, menuProps: menuProps });
    if (button.onClick)
        return React.createElement(ButtonDropdownClickable, { id: id, button: button, context: context, menuProps: menuProps, componentProps: componentProps });
    return React.createElement(ButtonDropdown, { id: id, button: button, context: context, menuProps: menuProps, componentProps: componentProps });
};
const prepareDropdownItems = (buttons, parentId, context) => {
    const result = [];
    if (!buttons)
        return result;
    const buttonsKeys = getSortedButtonsKeys(buttons);
    for (const id of buttonsKeys) {
        const button = buttons[id];
        if (!button)
            continue;
        let children;
        if (button.children && Object.keys(button.children).length)
            children = prepareDropdownItems(button.children, id, context);
        const key = parentId + '_' + id;
        let item;
        if (button.type === 'divider') {
            item = {
                key: key,
                type: 'divider',
                dashed: button.dashed,
                style: button.style,
                className: button.className,
            };
        }
        else if (button.type === 'group') {
            item = {
                key: key,
                type: 'group',
                label: button.title,
                style: button.style,
                className: button.className,
                children: children,
            };
        }
        else {
            item = {
                key: key,
                label: button.type !== 'link' ? (button.title) : (React.createElement("a", { href: button.href, target: button.target, rel: button.rel, style: button.style }, button.title)),
                icon: button.icon,
                children: children,
                disabled: button.disabled,
                danger: button.colorType === 'danger',
                expandIcon: button.expandIcon,
                style: button.type !== 'link' ? button.style : undefined,
                className: button.className,
                onClick: () => {
                    var _a;
                    (_a = button.onClick) === null || _a === void 0 ? void 0 : _a.call(button, id, button, context);
                },
            };
        }
        result.push(item);
    }
    return result;
};
