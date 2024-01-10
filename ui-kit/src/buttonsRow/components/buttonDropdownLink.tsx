import {DownOutlined} from '@ant-design/icons';
import {Dropdown, MenuProps, Space} from 'antd';
import React, {CSSProperties} from 'react';
import {IFormButton} from '@src/buttonsRow';

export const ButtonDropdownLink = ({
    button,
    menuProps,
}: {
    button: IFormButton;
    menuProps: MenuProps;
}): React.JSX.Element => {
    const dropDownIcon = button.expandIcon ?? <DownOutlined />;

    const style: CSSProperties = {...button.style};
    if (typeof button.width !== 'undefined') style.width = button.width;

    return (
        <Dropdown menu={menuProps}>
            <a href={button.href} target={button.target} rel={button.rel} style={style}>
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