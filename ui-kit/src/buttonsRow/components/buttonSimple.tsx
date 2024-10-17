import {IButtonRowProps, IFormButton} from '@src/buttonsRow';
import React, {CSSProperties, useCallback, useEffect, useRef} from 'react';
import {Button, IButtonColorType, IButtonVariantType} from '@src/button';

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

    let forceVariant: IButtonVariantType | undefined;
    let forceColor: IButtonColorType | undefined;
    if (rowProps.makeActivePrimary !== false && button.active) {
        forceVariant = 'solid';
        forceColor =!button.color || button.color === 'default' ? 'primary' : undefined;
    }

    const style: CSSProperties = {...button.style};
    if (typeof button.width !== 'undefined') style.width = button.width;

    const title = !iconOnly ? button.title : '';
    const disabled = rowProps.disableAll || button.disabled;
    return (
        <Button
            ref={btnRef}
            href={button.href}
            target={button.target}
            disabled={disabled}
            ghost={button.ghost}
            loading={button.loading}
            onClick={onClick}
            color={forceColor ?? button.color ?? 'default'}
            variant={forceVariant ?? button.variant}
            size={button.size}
            rel={button.rel}
            style={style}
            className={button.className}
            icon={button.icon}
            iconPosition={button.iconPosition}
            shape={button.shape}
            squareSize={!title && ((!!button.icon && !button.expandIcon) || (!button.icon && !!button.expandIcon))}
        >
            {children ?? title}
        </Button>
    );
};
