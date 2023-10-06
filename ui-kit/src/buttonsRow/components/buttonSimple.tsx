import {IButtonRowProps, IFormButton} from "@src/buttonsRow";
import React, {useCallback, useEffect, useRef} from "react";
import {Button, ButtonType} from "@src/button";

export const ButtonSimple = ({id, button, context, componentProps}: { id: string, button: IFormButton, context: unknown, componentProps: IButtonRowProps }) => {
    const onClick = useCallback(() => {
        if (button.onClick) button.onClick(id, button, context);
    }, [button, context, id]);

    const btnRef = useRef<HTMLElement>(null)
    useEffect(() => {
        if (button.active) {
            if (componentProps.makeActivePrimary === false) btnRef.current?.focus();
        }
    }, [button.active, componentProps.makeActivePrimary])

    let type: ButtonType | undefined
    if (componentProps.makeActivePrimary !== false && button.active) type = 'primary';
    else if (button.type === 'dashed') type = 'dashed'
    else if (button.type === 'text') type = 'text'
    else if (button.type === 'link') type = 'link'

    return <Button
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
        icon={button.icon}
        {...button.props}
    >
        {button.title}
    </Button>
}
