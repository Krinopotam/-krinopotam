import {IButtonRowProps, IFormButton} from "@src/buttonsRow";
import {Dropdown, MenuProps} from "antd";
import {Button} from "@src/button";
import {DownOutlined} from "@ant-design/icons";
import React from "react";
import {ItemType, MenuDividerType, MenuItemGroupType} from "antd/es/menu/hooks/useItems";

export const ButtonDropdown = ({id, button, context, componentProps,}: { id: string, button: IFormButton, context: unknown, componentProps: IButtonRowProps }) => {
    const items: MenuProps['items'] = prepareDropdownItems(button.children, id, context)

    const menuProps: MenuProps = {
        items,
    };

    /** Clickable dropdown button */
    if (button.onClick) {
        return (
            <Dropdown.Button menu={menuProps} onClick={() => button.onClick?.(id, button, context)}>
                {button.title}
            </Dropdown.Button>
        )
    }

    /** Not clickable dropdown button */
    return (
        <>
            <Dropdown menu={menuProps}>
                <Button icon={button.icon ?? <DownOutlined/>}>
                    {button.title}
                </Button>
            </Dropdown>
        </>
    )
}

const prepareDropdownItems = (buttons: IFormButton['children'], parentId: string, context: unknown) => {
    const result: MenuProps['items'] = [];
    if (!buttons) return result;

    for (const id in buttons) {
        const button = buttons[id];
        if (!button) continue;

        let children: MenuProps['items'] | undefined;
        if (button.children && Object.keys(button.children).length) children = prepareDropdownItems(button.children, id, context)

        const key = parentId + '_' + id;

        let item: ItemType

        if (button.type === 'divider') {
            item = {
                key: key,
                type: 'divider',
            } satisfies MenuDividerType
        }
        else if (button.type === 'group') {
            item = {
                key: key,
                type:'group',
                label:button.title,
                children: children,
            } satisfies MenuItemGroupType
        }
        else {
            item = {
                key: key,
                label: button.title,
                icon: button.icon,
                children: children,
                disabled: button.disabled,
                danger: button.danger,
                onClick: () => {button.onClick?.(id, button, context)}
            }
        }

        result.push(item);
    }

    return result;
}

