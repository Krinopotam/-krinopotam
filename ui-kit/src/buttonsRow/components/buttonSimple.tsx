import {IButtonRowProps, IFormButton} from '@src/buttonsRow';
import React, {CSSProperties, useCallback, useEffect, useRef} from 'react';
import {Button, IButtonType} from '@src/button';

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

    const btnRef = useRef<HTMLElement>(null);
    useEffect(() => {
        if (button.active && componentProps.makeActivePrimary === false) btnRef.current?.focus();
    }, [button.active, componentProps.makeActivePrimary]);

    let type: IButtonType | undefined;
    if (componentProps.makeActivePrimary !== false && button.active) type = 'primary';
    else if (button.type === 'text') type = 'text';
    else if (button.type === 'link') type = 'link';
    else if (button.dashed) type = 'dashed';

    const style: CSSProperties = {...button.style};
    if (typeof button.width !== 'undefined') style.width = button.width;

    return (
        <Button
            ref={btnRef}
            type={type}
            href={button.href}
            target={button.target}
            disabled={button.disabled}
            ghost={button.ghost}
            loading={button.loading}
            colorType={button.colorType}
            onClick={onClick}
            size={button.size}
            rel={button.rel}
            style={style}
            className={button.className}
            icon={button.icon}
            shape={button.shape}
            squareSize={!button.title && ((!!button.icon && !button.expandIcon) || (!button.icon && !!button.expandIcon))}
        >
            {children ?? button.title}
        </Button>
    );
};
