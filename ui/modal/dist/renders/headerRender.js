import { CloseCircleOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import React from 'react';
import { HelpersObjects } from '@krinopotam/js-helpers';
import { theme } from 'antd';
const { useToken } = theme;
export const HeaderRender = ({ title, type, style, icon }) => {
    const { token } = useToken();
    let backgroundColor = token.colorPrimary;
    let color = token.colorPrimaryBg;
    let finalIcon = icon !== null && icon !== void 0 ? icon : React.createElement(ExclamationCircleOutlined, null);
    if (type === 'info') {
        backgroundColor = token.colorInfo;
        color = token.colorInfoBg;
    }
    else if (type === 'success') {
        backgroundColor = token.colorSuccess;
        color = token.colorSuccessBg;
    }
    else if (type === 'warning') {
        backgroundColor = token.colorWarning;
        color = token.colorWarningBg;
    }
    else if (type === 'error') {
        backgroundColor = token.colorError;
        color = token.colorErrorBg;
        finalIcon = icon !== null && icon !== void 0 ? icon : React.createElement(CloseCircleOutlined, null);
    }
    else {
        finalIcon = icon !== null && icon !== void 0 ? icon : undefined;
    }
    if (icon === null)
        finalIcon = undefined;
    const defaultStyle = {
        display: 'block',
        backgroundColor: backgroundColor,
        color: color,
        borderTopLeftRadius: token.borderRadius,
        borderTopRightRadius: token.borderRadius,
        minHeight: 24,
    };
    const finalStyle = HelpersObjects.mergeObjects(defaultStyle, style);
    return (React.createElement("span", { className: "custom-antd-modal-header", style: finalStyle },
        React.createElement(Icon, null, finalIcon),
        " ",
        title));
};
const Icon = ({ children }) => {
    return children ? React.createElement("span", { style: { marginRight: 5 } }, children) : null;
};
