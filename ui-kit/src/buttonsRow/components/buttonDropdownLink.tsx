import {DownOutlined} from '@ant-design/icons';
import {Dropdown, MenuProps, Space} from 'antd';
import React, {CSSProperties, useState} from 'react';
import {IButtonRowProps, IFormButton} from '@src/buttonsRow';
import {useResponsive} from "@krinopotam/common-hooks";

export const ButtonDropdownLink = ({
    button,
    menuProps,
    componentProps
}: {
    button: IFormButton;
    menuProps: MenuProps;
    componentProps: IButtonRowProps;
}): React.JSX.Element => {
    const dropDownIcon = button.expandIcon ?? <DownOutlined />;

    const style: CSSProperties = {...button.style};
    if (typeof button.width !== 'undefined') style.width = button.width;

    const [collapseMode, setCollapseMode] = useState(false);
    useResponsive(componentProps.responsiveBreakpoint, broken => setCollapseMode(broken));
    const  title =(componentProps.responsiveBreakpoint && collapseMode && button.icon) ? undefined :  button.title

    return (
        <Dropdown menu={menuProps}>
            <a href={button.href} target={button.target} rel={button.rel} style={style}>
                {typeof button.title === 'string' ? (
                    <Space>
                        {button.icon}
                        {title}
                        {dropDownIcon}
                    </Space>
                ) : (
                    button.title
                )}
            </a>
        </Dropdown>
    );
};