import {DownOutlined} from '@ant-design/icons';
import {Dropdown, MenuProps, Space} from 'antd';
import React from 'react';
import {IFormButton} from '@src/buttonsRow';

export const ButtonDropdownLink = ({
    button,
    menuProps,
}: {
    button: IFormButton;
    menuProps: MenuProps;
}): React.JSX.Element => {
    const dropDownIcon = button.expandIcon ?? <DownOutlined />;

    return (
        <Dropdown menu={menuProps}>
            <a href={button.href} target={button.target} rel={button.rel}>
                {typeof button.title === 'string' ? (
                    <Space>
                        {button.icon}
                        {button.title}
                        {dropDownIcon}
                    </Space>
                ) : (
                    button.title
                )}
            </a>
        </Dropdown>
    );
};