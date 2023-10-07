import {ButtonType} from '@src/button';
import React, {useCallback} from 'react';
import {Dropdown, MenuProps} from 'antd';
import {IButtonRowProps, IFormButton} from '@src/buttonsRow';

export const ButtonDropdownClickable = ({
    id,
    button,
    context,
    menuProps,
    componentProps,
}: {
    id: string;
    button: IFormButton;
    context: unknown;
    menuProps: MenuProps;
    componentProps: IButtonRowProps;
}): React.JSX.Element => {
    let type: ButtonType = 'default';
    if (componentProps.makeActivePrimary !== false && button.active) type = 'primary';
    else if (button.type === 'text') type = 'text';
    else if (button.type === 'link') type = 'link';
    else if (button.dashed) type= 'dashed'

    const onClick = useCallback(() => {
        button.onClick?.(id, button, context);
    }, [button, context, id]);

    return (
        <Dropdown.Button
            type={type}
            href={button.href}
            disabled={button.disabled}
            loading={button.loading}
            danger={button.colorType==='danger'}
            onClick={onClick}
            size={button.size}
            style={button.style}
            className={button.className}
            icon={button.expandIcon}
            menu={menuProps}
        >
            {button.title}
        </Dropdown.Button>
    );
};
