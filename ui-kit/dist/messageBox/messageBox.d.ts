import './css/messageBox.css';
import { IFormButtons } from '../buttonsRow/buttonsRow';
import { MessageBoxApi } from './messageBoxApi';
import { ModalStaticFunctions } from 'antd/es/modal/confirm';
import React from 'react';
import { IColorType } from '../button/button';
export interface IModalBaseConfig {
    formId: string;
    title?: React.ReactNode;
    icon?: React.ReactNode;
    content?: React.ReactNode;
    colorType?: IColorType;
    buttons?: IFormButtons;
    centered?: boolean;
    closable?: boolean;
    maskClosable?: boolean;
    onAfterClose?: () => void;
    onCrossClose?: () => void;
}
type IModalConfig = Omit<IModalBaseConfig, 'formId'>;
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
type ModalType = Omit<ModalStaticFunctions, 'warn'>;
declare class MessageBox {
    private static _instance;
    private _themedModalInstance?;
    static get Instance(): MessageBox;
    alert({ okText, onOk, ...props }: IModalAlertConfig): MessageBoxApi;
    confirm({ okText, cancelText, onOk, onCancel, ...otherProps }: IModalConfirmConfig): MessageBoxApi;
    confirmWaiter({ okText, cancelText, onOk, onCancel, waitTitle, waitContent, ...otherProps }: IModalConfirmWaiterConfig): MessageBoxApi;
    private modalBase;
    private triggerButtonClick;
    private generateModalConfig;
    updateThemedModal(modal: ModalType): void;
}
declare const messageBox: MessageBox;
export default messageBox;
