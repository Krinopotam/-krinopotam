import { StopOutlined, ExclamationCircleOutlined, InfoCircleOutlined, CheckCircleOutlined } from '@ant-design/icons';
import React from 'react';
import { Space, theme } from 'antd';
const { useToken } = theme;
export const HeaderRender = (props) => {
    var _a, _b, _c, _d, _e;
    const { token } = useToken();
    let backgroundColor = token.colorFillSecondary;
    let color = token.colorText;
    let icon;
    if (props.colorType === 'info') {
        backgroundColor = token.colorInfoHover;
        color = token.colorWhite;
        icon = (_a = props.icon) !== null && _a !== void 0 ? _a : React.createElement(InfoCircleOutlined, null);
    }
    else if (props.colorType === 'success') {
        backgroundColor = token.colorSuccessHover;
        color = token.colorWhite;
        icon = (_b = props.icon) !== null && _b !== void 0 ? _b : React.createElement(CheckCircleOutlined, null);
    }
    else if (props.colorType === 'warning') {
        backgroundColor = token.colorWarningHover;
        color = token.colorWhite;
        icon = (_c = props.icon) !== null && _c !== void 0 ? _c : React.createElement(ExclamationCircleOutlined, null);
    }
    else if (props.colorType === 'danger') {
        backgroundColor = token.colorErrorHover;
        color = token.colorWhite;
        icon = (_d = props.icon) !== null && _d !== void 0 ? _d : React.createElement(StopOutlined, null);
    }
    else {
        icon = (_e = props.icon) !== null && _e !== void 0 ? _e : undefined;
    }
    const defaultStyle = {
        display: 'block',
        backgroundColor: backgroundColor,
        color: color,
        borderTopLeftRadius: token.borderRadius,
        borderTopRightRadius: token.borderRadius,
        minHeight: 27,
    };
    const style = Object.assign(Object.assign({}, defaultStyle), props.style);
    return (React.createElement("div", { id: props.draggableId, style: style },
        React.createElement(Space, null,
            icon,
            props.title)));
};
//# sourceMappingURL=headerRender.js.map