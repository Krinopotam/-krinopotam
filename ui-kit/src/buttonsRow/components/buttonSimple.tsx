import {IButtonRowProps, IFormButton} from '@src/buttonsRow';
import React, {CSSProperties, useCallback, useEffect, useRef} from 'react';
import {Button, ButtonType} from '@src/button';

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
        if (button.onClick) button.onClick(id, button, context);
    }, [button, context, id]);

    const btnRef = useRef<HTMLElement>(null);
    useEffect(() => {
        if (button.active && componentProps.makeActivePrimary === false) btnRef.current?.focus();
    }, [button.active, componentProps.makeActivePrimary]);

    let type: ButtonType | undefined;
    if (componentProps.makeActivePrimary !== false && button.active) type = 'primary';
    else if (button.type === 'text') type = 'text';
    else if (button.type === 'link') type = 'link';
    else if (button.dashed) type= 'dashed'

    const iconOnlyStyle: CSSProperties =
        !button.title && !children
            ? {
                  paddingLeft: 10,
                  paddingRight: 10,
              }
            : {};
    const style = {...iconOnlyStyle, ...button.style};

    return (
        <Button
            ref={btnRef}
            type={type}
            href={button.href}
            target={button.target}
            disabled={button.disabled}
            ghost={button.ghost}
            loading={button.loading}
            danger={button.danger}
            onClick={onClick}
            size={button.size}
            rel={button.rel}
            style={style}
            className={button.className}
            icon={button.icon}
        >
            {children ?? button.title}
        </Button>
    );
};
