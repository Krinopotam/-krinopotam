import {IButtonProps} from '@src/button/button';
import {ButtonsRowWrapper, IFormButton, IFormButtons, mergeButtons} from '@src/buttonsRow';
import {ButtonsRow} from '@src/buttonsRow/buttonsRow';
import {PopconfirmProps, Popover} from 'antd';
import React, {useEffect, useRef, useState} from 'react';

export interface IPopConfirmProps extends Omit<PopconfirmProps, 'okType' | 'okButtonProps' | 'cancelButtonProps'> {
    content?: React.ReactNode;
    colorType?: IButtonProps['color'];
    okButtonProps?: IFormButton;
    cancelButtonProps?: IFormButton;
}

export const PopConfirm = ({content, ...props}: IPopConfirmProps): React.JSX.Element => {
    //const [formId] = useState(GetNanoId());

    const buttons = useInitButtons(props);

    const buttonsRowRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (props.open) buttonsRowRef.current?.focus();
    }, [props.open]);

    const _content = (
        <>
            {content ?? null}
            <div ref={buttonsRowRef} tabIndex={-1}>
                <ButtonsRow buttons={buttons} />
            </div>
        </>
    );

    return (
        <Popover {...props} content={_content} title={props.title}>
            <ButtonsRowWrapper>{props.children}</ButtonsRowWrapper>
        </Popover>
    );
};

/**
 * Generate buttons
 */
const useInitButtons = ({okText, cancelText, onConfirm, onCancel, okButtonProps, cancelButtonProps}: IPopConfirmProps): IFormButtons => {
    const [formButtons, setFormButtons] = useState({});
    useEffect(() => {
        const defaultButtons: IFormButtons = {
            ok: {
                position: 'right',
                active: true,
                title: okText ?? 'ОК',
                hotKeys: [{key: 'enter', ctrl: true}],
                onClick: () => {
                    onConfirm?.();
                },
                size: 'small',
            },
            cancel: {
                position: 'right',
                title: cancelText ?? 'Отмена',
                hotKeys: [{key: 'escape'}],
                onClick: () => {
                    onCancel?.();
                },
                size: 'small',
            },
        };

        const resultButtons = mergeButtons(defaultButtons, {ok: okButtonProps, cancel: cancelButtonProps});
        setFormButtons(resultButtons);
    }, [okText, cancelText, onConfirm, onCancel, okButtonProps, cancelButtonProps]);

    return formButtons;
};
