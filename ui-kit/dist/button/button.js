var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { Button as AntButton, ConfigProvider, theme } from 'antd';
import React from 'react';
const { useToken } = theme;
export const Button = React.forwardRef((_a, ref) => {
    var { colorType, children, squareSize } = _a, props = __rest(_a, ["colorType", "children", "squareSize"]);
    const { token } = useToken();
    let colorPrimary = token.colorPrimary;
    if (colorType === 'neutral' || colorType === 'info')
        colorPrimary = token.colorPrimary;
    else if (colorType === 'success')
        colorPrimary = token.colorSuccess;
    else if (colorType === 'warning')
        colorPrimary = token.colorWarning;
    else if (colorType === 'danger')
        colorPrimary = token.colorError;
    let emptyWidth = 32;
    if (props.size === 'small')
        emptyWidth = 24;
    else if (props.size === 'large')
        emptyWidth = 40;
    const style = !squareSize
        ? props.style
        : Object.assign({ width: emptyWidth, padding: 0 }, props.style);
    return (React.createElement(ConfigProvider, { theme: { token: { colorPrimary: colorPrimary } } },
        React.createElement(AntButton, Object.assign({}, props, { style: style, ref: ref }), children)));
});
Button.displayName = 'Button';
//# sourceMappingURL=button.js.map