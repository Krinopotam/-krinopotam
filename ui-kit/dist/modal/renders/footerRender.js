import React from 'react';
import { theme } from 'antd';
const { useToken } = theme;
export const FooterRender = ({ onMouseResize, resizable, children, style, colorType }) => {
    const { token } = useToken();
    const color = useGetColor(token, colorType);
    return (React.createElement("div", null,
        React.createElement("div", { style: Object.assign({ borderTopWidth: 1, borderTopStyle: 'solid', borderTopColor: color }, style) }, children),
        resizable ? React.createElement(ResizeHandle, { onMouseDown: onMouseResize }) : null));
};
const ResizeHandle = (props) => (React.createElement("div", Object.assign({ className: "resize-handle" }, props),
    React.createElement("div", { className: "resize-handle-inner" })));
const useGetColor = (token, colorType) => {
    let color = token.colorFillSecondary;
    if (colorType === 'info')
        color = token.colorInfoHover;
    else if (colorType === 'success')
        color = token.colorSuccessHover;
    else if (colorType === 'warning')
        color = token.colorWarningHover;
    else if (colorType === 'danger')
        color = token.colorErrorHover;
    return color;
};
//# sourceMappingURL=footerRender.js.map