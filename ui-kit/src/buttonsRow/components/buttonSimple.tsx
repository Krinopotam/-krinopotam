import {IButtonRowProps, IFormButton} from '@src/buttonsRow';
import React, {CSSProperties, useCallback, useEffect, useRef} from 'react';
import {Button, IButtonType} from '@src/button';

export const ButtonSimple = ({
    id,
    button,
    context,
    rowProps,
    children,
    iconOnly,
}: {
    id: string;
    button: IFormButton;
    context: unknown;
    rowProps: IButtonRowProps;
    children?: React.ReactNode;
    iconOnly?: boolean;
}) => {
    const onClick = useCallback(() => {
        button.onClick?.(id, button, context);
    }, [button, context, id]);

    const btnRef = useRef<HTMLButtonElement>(null);
    useEffect(() => {
        if (button.active && rowProps.makeActivePrimary === false) btnRef.current?.focus();
    }, [button.active, rowProps.makeActivePrimary]);

    let type: IButtonType | undefined;
    if (rowProps.makeActivePrimary !== false && button.active) type = 'primary';
    else if (button.type === 'text') type = 'text';
    else if (button.type === 'link') type = 'link';
    else if (button.dashed) type = 'dashed';

    const style: CSSProperties = {...button.style};
    if (typeof button.width !== 'undefined') style.width = button.width;

    const title = !iconOnly ?  button.title : '';
    const disabled = rowProps.disableAll || button.disabled;

    return (
        <Button
            ref={btnRef}
            type={type}
            href={button.href}
            target={button.target}
            disabled={disabled}
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
            squareSize={!title && ((!!button.icon && !button.expandIcon) || (!button.icon && !!button.expandIcon))}
        >
            {children ?? title}
        </Button>
    );
};
