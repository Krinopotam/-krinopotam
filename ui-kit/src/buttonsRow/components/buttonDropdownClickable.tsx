import {IButtonType} from '@src/button';
import React, {CSSProperties, useCallback} from 'react';
import {Dropdown, MenuProps} from 'antd';
import {IButtonRowProps, IFormButton} from '@src/buttonsRow';

export const ButtonDropdownClickable = ({
                                            id,
                                            button,
                                            context,
                                            menuProps,
                                            rowProps,
                                        }: {
    id: string;
    button: IFormButton;
    context: unknown;
    menuProps: MenuProps;
    rowProps: IButtonRowProps;
}): React.JSX.Element => {
    let type: IButtonType = 'default';
    if (rowProps.makeActivePrimary !== false && button.active) type = 'primary';
    else if (button.type === 'text') type = 'text';
    else if (button.type === 'link') type = 'link';
    else if (button.dashed) type = 'dashed';

    const onClick = useCallback(() => {
        button.onClick?.(id, button, context);
    }, [button, context, id]);

    const style: CSSProperties = {...button.style};
    if (typeof button.width !== 'undefined') style.width = button.width;

    const disabled = rowProps.disableAll || button.disabled;

    return (
        <Dropdown.Button
            type={type}
            href={button.href}
            disabled={disabled}
            loading={button.loading}
            danger={button.colorType === 'danger'}
            onClick={onClick}
            size={button.size}
            style={style}
            className={button.className}
            icon={button.expandIcon}
            menu={menuProps}
        >
            {button.title}
        </Dropdown.Button>
    );
};
