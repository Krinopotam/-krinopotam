import {ButtonsRow, IFormButton, IFormButtons} from '@src/buttonsRow/buttonsRow';
import {PopconfirmProps, Popover} from 'antd';
import React, {useEffect, useRef, useState} from 'react';

import {IFormType} from '../modal';
import {HelpersStrings, HelpersObjects} from '@krinopotam/js-helpers';
import {useInitFormDispatcher} from '../modal/hooks/useInitFormDispatcher';
import {ButtonsRowWrapper} from "@src/buttonsRow";

export interface IPopConfirmProps extends Omit<PopconfirmProps, 'okType' | 'okButtonProps' | 'cancelButtonProps'> {
    content?: React.ReactNode;
    formType?: IFormType;
    okButtonProps?: IFormButton;
    cancelButtonProps?: IFormButton;
}

export const PopConfirm = ({content, ...props}: IPopConfirmProps): React.JSX.Element => {
    const [formId] = useState(HelpersStrings.getUuid);

    useInitFormDispatcher(formId, !!props.open);

    const buttons = useInitButtons(props);

    const buttonsRowRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (props.open) buttonsRowRef.current?.focus();
    }, [props.open]);

    const _content = (
        <>
            {content ?? null}
            <div ref={buttonsRowRef} tabIndex={-1}>
                <ButtonsRow formId={formId} buttons={buttons}/>
            </div>
        </>
    );

    return (
        <Popover {...props} content={_content} title={props.title}>
            <ButtonsRowWrapper>
                {props.children}
            </ButtonsRowWrapper>
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

        const resultButtons = HelpersObjects.mergeObjects(defaultButtons, {ok: okButtonProps, cancel: cancelButtonProps});
        setFormButtons(resultButtons);
    }, [okText, cancelText, onConfirm, onCancel, okButtonProps, cancelButtonProps]);

    return formButtons;
};
