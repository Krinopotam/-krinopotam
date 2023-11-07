import React, { useCallback, useEffect, useRef } from 'react';
import { Button } from '../../button';
export const ButtonSimple = ({ id, button, context, componentProps, children, }) => {
    const onClick = useCallback(() => {
        var _a;
        (_a = button.onClick) === null || _a === void 0 ? void 0 : _a.call(button, id, button, context);
    }, [button, context, id]);
    const btnRef = useRef(null);
    useEffect(() => {
        var _a;
        if (button.active && componentProps.makeActivePrimary === false)
            (_a = btnRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    }, [button.active, componentProps.makeActivePrimary]);
    let type;
    if (componentProps.makeActivePrimary !== false && button.active)
        type = 'primary';
    else if (button.type === 'text')
        type = 'text';
    else if (button.type === 'link')
        type = 'link';
    else if (button.dashed)
        type = 'dashed';
    return (React.createElement(Button, { ref: btnRef, type: type, href: button.href, target: button.target, disabled: button.disabled, ghost: button.ghost, loading: button.loading, colorType: button.colorType, onClick: onClick, size: button.size, rel: button.rel, style: button.style, className: button.className, icon: button.icon, shape: button.shape, squareSize: !button.title && ((!!button.icon && !button.expandIcon) || (!button.icon && !!button.expandIcon)) }, children !== null && children !== void 0 ? children : button.title));
};
