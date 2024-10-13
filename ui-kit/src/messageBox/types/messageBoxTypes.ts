import {IButtonProps} from '@src/button';
import {IFormButtons} from '@src/buttonsRow';
import {MessageBoxApi} from '@src/messageBox';
import {translations} from '@src/messageBox/translations/translations';
import {ModalStaticFunctions} from 'antd/es/modal/confirm';
import React from 'react';

export interface IModalBaseConfig {
    /** Form id */
    formId: string;
    /**  Form title */
    title?: React.ReactNode;
    /** Form icon */
    icon?: React.ReactNode;
    /** Form content */
    content?: React.ReactNode;
    /** Form type */
    colorType?: IButtonProps['color'];
    /** Form buttons */
    buttons?: IFormButtons;
    /** Center modal */
    centered?: boolean;
    /** Whether a close (x) button is visible on top right of the modal dialog or not */
    closable?: boolean;
    /** Whether to close the modal dialog when the mask (area outside the modal) is clicked */
    maskClosable?: boolean;
    /** After controls close callback */
    onAfterClose?: () => void;
    /** On form close by close cross pressed callback */
    onCrossClose?: () => void;
    /** Language */
    language?: keyof typeof translations;
    /** Custom translation */
    translation?: Partial<typeof translations.en>;
}

export type IModalConfig = Omit<IModalBaseConfig, 'formId'>;

export interface IModalAlertConfig extends IModalConfig {
    okText?: string;
    onOk?: (messageBox: MessageBoxApi) => boolean | void;
}

export interface IModalConfirmConfig extends IModalConfig {
    okText?: string;
    onOk?: (messageBox: MessageBoxApi) => boolean | void;
    cancelText?: string;
    onCancel?: (messageBox: MessageBoxApi) => boolean | void;
}

export interface IModalConfirmWaiterConfig extends IModalConfirmConfig {
    waitTitle?: React.ReactNode;
    waitContent?: React.ReactNode;
}

export type IAnyModalConfig = IModalAlertConfig | IModalConfirmConfig | IModalConfirmWaiterConfig;

export type ModalType = Omit<ModalStaticFunctions, 'warn'>;