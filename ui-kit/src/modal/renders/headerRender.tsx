/**
 * @HeaderRender
 * @version 0.0.1.58
 * @link omegatester@gmail.com
 * @author Maksim Zaytsev
 * @license MIT
 */

import {StopOutlined, ExclamationCircleOutlined, InfoCircleOutlined, CheckCircleOutlined} from '@ant-design/icons';

import React from 'react';
import {theme} from 'antd';
import {IColorType} from '@src/button/button';

const {useToken} = theme;

interface IHeaderRenderProps {
    title: string | React.ReactNode;
    colorType?: IColorType;
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
        icon = props.icon ?? <StopOutlined />;
    } else {
        icon = props.icon ?? undefined;
    }

    const defaultStyle: React.CSSProperties = {
        display: 'block',
        backgroundColor: backgroundColor,
        color: color,
        borderTopLeftRadius: token.borderRadius,
        borderTopRightRadius: token.borderRadius,
        minHeight: 27,
    };

    const style = {...defaultStyle, ...props.style};

    return (
        <span className="custom-antd-modal-header" style={style}>
            <Icon>{icon}</Icon> {props.title}
        </span>
    );
};

const Icon = ({children}: {children?: React.ReactNode}): React.JSX.Element | null => {
    return children ? <span style={{marginRight: 5}}>{children}</span> : null;
};
