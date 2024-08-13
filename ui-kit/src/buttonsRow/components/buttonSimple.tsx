import {IButtonRowProps, IFormButton} from '@src/buttonsRow';
import React, {CSSProperties, useCallback, useEffect, useRef, useState} from 'react';
import {Button, IButtonType} from '@src/button';
import {useResponsive} from "@krinopotam/common-hooks";

export const ButtonSimple = ({
    id,
    button,
    context,
    componentProps,
    children,
}: {
    id: string;
    button: IFormButton;
    context: unknown;
    componentProps: IButtonRowProps;
    children?: React.ReactNode;
}) => {
    const onClick = useCallback(() => {
        button.onClick?.(id, button, context);
    }, [button, context, id]);

    const btnRef = useRef<HTMLButtonElement>(null);
    useEffect(() => {
        if (button.active && componentProps.makeActivePrimary === false) btnRef.current?.focus();
    }, [button.active, componentProps.makeActivePrimary]);

    const [collapseMode, setCollapseMode] = useState(false);
    useResponsive(componentProps.responsiveBreakpoint, broken => setCollapseMode(broken));
    const  title =(componentProps.responsiveBreakpoint && collapseMode && button.icon) ? undefined :  button.title

    let type: IButtonType | undefined;
    if (componentProps.makeActivePrimary !== false && button.active) type = 'primary';
    else if (button.type === 'text') type = 'text';
    else if (button.type === 'link') type = 'link';
    else if (button.dashed) type = 'dashed';

    const style: CSSProperties = {...button.style};
    if (typeof button.width !== 'undefined') style.width = button.width;

    const disabled = (typeof button.disabled === 'function') ? button.disabled(id, button, context) : button.disabled;
    const loading = (typeof button.loading === 'function') ? button.loading(id, button, context) : button.loading;

    return (
        <Button
            ref={btnRef}
            type={type}
            href={button.href}
            target={button.target}
            disabled={disabled}
            ghost={button.ghost}
            loading={loading}
            colorType={button.colorType}
            onClick={onClick}
            size={button.size}
            rel={button.rel}
            style={style}
            className={button.className}
            icon={button.icon}
            shape={button.shape}

            squareSize={!title && ((!!button.icon && !button.expandIcon) || (!button.icon && !!button.expandIcon))}
        >
            {children ?? title}
        </Button>
    );
};
