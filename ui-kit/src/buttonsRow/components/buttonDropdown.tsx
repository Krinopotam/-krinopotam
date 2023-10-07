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
    componentProps,
}: {
    id: string;
    button: IFormButton;
    context: unknown;
    menuProps: MenuProps;
    componentProps: IButtonRowProps;
}): React.JSX.Element => {
    const dropDownIcon = button.expandIcon ?? <DownOutlined />;
    return (
        <Dropdown menu={menuProps} disabled={button.disabled}>
            <div>
                {/** WORKAROUND: without DIV Dropdown with custom component instead of Button does not work*/}
                <ButtonSimple id={id} button={button} context={context} componentProps={componentProps}>
                    <Space>
                        {button.title}
                        {dropDownIcon}
                    </Space>
                </ButtonSimple>
            </div>
        </Dropdown>
    );
};
