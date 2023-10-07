import {IButtonRowProps, IFormButton} from '@src/buttonsRow';
import {MenuProps} from 'antd';
import React from 'react';
import {ItemType, MenuDividerType, MenuItemGroupType} from 'antd/es/menu/hooks/useItems';
import {ButtonDropdownClickable} from '@src/buttonsRow/components/buttonDropdownClickable';
import {ButtonDropdownLink} from '@src/buttonsRow/components/buttonDropdownLink';
import {ButtonDropdown} from '@src/buttonsRow/components/buttonDropdown';

export const RenderDropdown = ({id, button, context, componentProps}: {id: string; button: IFormButton; context: unknown; componentProps: IButtonRowProps}) => {
    const items: MenuProps['items'] = prepareDropdownItems(button.children, id, context);

    const menuProps: MenuProps = {items};

    /** Dropdown link */
    if (button.type === 'link') return <ButtonDropdownLink button={button} menuProps={menuProps} />;

    /** Clickable dropdown button */
    if (button.onClick) return <ButtonDropdownClickable id={id} button={button} context={context} menuProps={menuProps} componentProps={componentProps} />;

    /** Not clickable dropdown button */
    return <ButtonDropdown id={id} button={button} context={context} menuProps={menuProps} componentProps={componentProps} />;
};

const prepareDropdownItems = (buttons: IFormButton['children'], parentId: string, context: unknown) => {
    const result: MenuProps['items'] = [];
    if (!buttons) return result;

    for (const id in buttons) {
        const button = buttons[id];
        if (!button) continue;

        let children: MenuProps['items'] | undefined;
        if (button.children && Object.keys(button.children).length) children = prepareDropdownItems(button.children, id, context);

        const key = parentId + '_' + id;

        let item: ItemType;

        if (button.type === 'divider') {
            item = {
                key: key,
                type: 'divider',
                dashed: button.dashed,
                style: button.style,
                className: button.className,
            } satisfies MenuDividerType;
        } else if (button.type === 'group') {
            item = {
                key: key,
                type: 'group',
                label: button.title,
                style: button.style,
                className: button.className,
                children: children,
            } satisfies MenuItemGroupType;
        } else {
            item = {
                key: key,
                label:
                    button.type !== 'link' ? (
                        button.title
                    ) : (
                        <a href={button.href} target={button.target} rel={button.rel} style={button.style}>
                            {button.title}
                        </a>
                    ),
                icon: button.icon,
                children: children,
                disabled: button.disabled,
                danger: button.danger,
                expandIcon: button.expandIcon,
                style: button.type !== 'link' ? button.style : undefined,
                className: button.className,
                onClick: () => {
                    button.onClick?.(id, button, context);
                },
            };
        }

        result.push(item);
    }

    return result;
};