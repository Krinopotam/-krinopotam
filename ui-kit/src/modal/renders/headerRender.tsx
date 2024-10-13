/**
 * @HeaderRender
 * @version 0.0.1.58
 * @link omegatester@gmail.com
 * @author Maksim Zaytsev
 * @license MIT
 */

import {CheckCircleOutlined, ExclamationCircleOutlined, InfoCircleOutlined, WarningOutlined} from '@ant-design/icons';
import {IButtonProps} from '@src/button/button';
import {Space, theme} from 'antd';

import React from 'react';

const {useToken} = theme;

interface IHeaderRenderProps {
    draggableId: string;
    title: string | React.ReactNode;
    colorType?: IButtonProps['color'];
    style?: React.CSSProperties;
    icon?: React.ReactNode;
}

export const HeaderRender = (props: IHeaderRenderProps): React.JSX.Element => {
    const {token} = useToken();

    let backgroundColor = token.colorFillSecondary;
    let color = token.colorText;

    let icon: React.ReactNode;
    if (props.colorType === 'info') {
        backgroundColor = token.colorInfoHover;
        color = token.colorWhite;
        icon = props.icon ?? <InfoCircleOutlined />;
    } else if (props.colorType === 'success') {
        backgroundColor = token.colorSuccessHover;
        color = token.colorWhite;
        icon = props.icon ?? <CheckCircleOutlined />;
    } else if (props.colorType === 'warning') {
        backgroundColor = token.colorWarningHover;
        color = token.colorWhite;
        icon = props.icon ?? <ExclamationCircleOutlined />;
    } else if (props.colorType === 'danger') {
        backgroundColor = token.colorErrorHover;
        color = token.colorWhite;
        icon = props.icon ?? <WarningOutlined />;
    } else {
        icon = props.icon ?? undefined;
    }

    const defaultStyle: React.CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: backgroundColor,
        color: color,
        borderTopLeftRadius: token.borderRadius,
        borderTopRightRadius: token.borderRadius,
        minHeight: 33,
        padding:'3px 24px 3px 24px',
    };

    const style = {...defaultStyle, ...props.style};

    return (
        <div id={props.draggableId} style={style}>
            <Space>
                {icon}
                {props.title}
            </Space>
        </div>
    );
};
