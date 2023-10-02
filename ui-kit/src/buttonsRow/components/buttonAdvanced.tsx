import React, {useCallback} from "react";
import {Dropdown, MenuProps, Space, Tooltip} from "antd";
import {Button, ButtonType} from "@src/button";
import {IFormButton} from "@src/buttonsRow";
import {DownOutlined} from "@ant-design/icons";
import {ItemType} from "antd/es/menu/hooks/useItems";

export const ButtonAdvanced = ({
                                   id,
                                   button,
                                   context,
                               }: {
    id: string;
    button: IFormButton;
    context?: unknown;
}): React.JSX.Element | null => {
    if (!button || button.hidden) return null;

    if (button.type === 'element') {
        if (button.tooltip) return <Tooltip title={button.tooltip}>button.title</Tooltip>
        else return <>button.title</>;
    }

    if (button.children) {
        return <DropDownButton id={id} button={button} context={context}/>
    }

    if (!button.tooltip) return <SimpleButton id={id} button={button} context={context}/>;

    return (
        <Tooltip title={button.tooltip}>
            <>
                {/*Popover and tooltip has a bug: they are not displayed for custom components if they are not in a frame (<></>) */}
                <SimpleButton id={id} button={button} context={context}/>
            </>
        </Tooltip>
    );

};


const SimpleButton = ({id, button, context}: { id: string, button: IFormButton, context: unknown }) => {
    const onClick = useCallback(() => {
        if (button.onClick) button.onClick(id, button, context);
    }, [button, context, id]);

    return <Button
        type={(button.active ? 'primary' : button.type) as ButtonType}
        disabled={button.disabled}
        ghost={button.ghost}
        loading={button.loading}
        danger={button.danger}
        onClick={onClick}
        size={button.size}
        icon={button.icon}
        {...button.props}
    >
        {button.title}
    </Button>
}

const prepareDropdownItems = (buttons: IFormButton['children'], parentId: string, context: unknown) => {
    const result: MenuProps['items'] = [];
    if (!buttons) return result;

    for (const id in buttons) {
        const btn = buttons[id];
        if (!btn) continue;

        let children: MenuProps['items'] | undefined;
        if (btn.children) children = prepareDropdownItems(btn.children, id, context)
        const item: ItemType = {
            key: parentId + '_' + id,
            label: btn.title,
            icon: btn.icon,
            children: children,
            disabled: btn.disabled,
            danger: btn.danger,
            onClick: () => {btn.onClick?.(id, btn, context)}
        }

        result.push(item);
    }

    return result;
}

const DropDownButton = ({id, button, context}: { id: string, button: IFormButton, context: unknown }) => {
    const items: MenuProps['items'] = prepareDropdownItems(button.children, id, context)

    const menuProps: MenuProps = {
        items,
    };

    /** Clickable dropdown button */
    if (button.onClick) {
        return (
            <Dropdown.Button menu={menuProps} onClick={()=>button.onClick?.(id, button, context)}>
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