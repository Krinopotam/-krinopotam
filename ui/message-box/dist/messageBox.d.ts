import './css/messageBox.css';
import { IFormButtons } from '@krinopotam/ui-buttons-row';
import { IFormType } from '@krinopotam/ui-modal';
import { MessageBoxApi } from './messageBoxApi';
import { ModalStaticFunctions } from 'antd/es/modal/confirm';
import React from 'react';
export interface IModalBaseConfig {
    formId: string;
    title?: React.ReactNode;
    content?: React.ReactNode;
    type?: IFormType;
    buttons?: IFormButtons;
    centered?: boolean;
    closable?: boolean;
    maskClosable?: boolean;
    afterClose?: () => void;
    onClose?: () => void;
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
    alert({ okText, onOk, ...otherProps }: IModalAlertConfig): MessageBoxApi;
    confirm({ okText, cancelText, onOk, onCancel, ...otherProps }: IModalConfirmConfig): MessageBoxApi;
    confirmWaiter({ okText, cancelText, onOk, onCancel, waitTitle, waitContent, ...otherProps }: IModalConfirmWaiterConfig): MessageBoxApi;
    private modalBase;
    private triggerButtonClick;
    private generateModalConfig;
    updateThemedModal(modal: ModalType): void;
}
declare const messageBox: MessageBox;
export default messageBox;
