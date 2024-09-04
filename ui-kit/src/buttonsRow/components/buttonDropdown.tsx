import React from 'react';
import {Dropdown, MenuProps, Space} from 'antd';
import {IButtonRowProps, IFormButton} from '@src/buttonsRow';
import {DownOutlined} from '@ant-design/icons';
import {ButtonSimple} from '@src/buttonsRow/components/buttonSimple';

export const ButtonDropdown = ({
    id,
    button,
    context,
    menuProps,
    rowProps,
    iconOnly,
}: {
    id: string;
    button: IFormButton;
    context: unknown;
    menuProps: MenuProps;
    rowProps: IButtonRowProps;
    iconOnly?: boolean;
}): React.JSX.Element => {
    const dropDownIcon = button.expandIcon ?? <DownOutlined />;
    const disabled = typeof button.disabled === 'function' ? button.disabled(id, button, context) : button.disabled;

    return (
        <Dropdown menu={menuProps} disabled={disabled}>
            <div>
                {/** WORKAROUND: without DIV Dropdown with custom component instead of Button does not work*/}
                <ButtonSimple id={id} button={button} context={context} rowProps={rowProps} iconOnly={iconOnly}>
                    <Space>
                        {!iconOnly ? button.title : ''}
                        {dropDownIcon}
                    </Space>
                </ButtonSimple>
            </div>
        </Dropdown>
    );
};
