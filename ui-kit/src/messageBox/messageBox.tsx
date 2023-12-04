/**
 * @MessageBox
 * @description Static message box instance.
 * @version 0.0.1.99
 * @link omegatester@gmail.com
 * @author Maksim Zaytsev
 * @license MIT
 */

import './css/messageBox.css';

import {IFormButton, IFormButtons} from '@src/buttonsRow/buttonsRow';
import {Modal, ModalFuncProps, Spin} from 'antd';

import {ButtonsRender, HeaderRender, ModalRender} from '../modal';
import {ContentRender} from './renders/contentRender';
import {MessageBoxApi} from './messageBoxApi';
import React from 'react';
import dispatcher from '../formsDispatcher';
import {GetUuid, MergeObjects} from '@krinopotam/js-helpers';
import {QuestionCircleOutlined} from '@ant-design/icons';
import {IModalAlertConfig, IModalBaseConfig, IModalConfig, IModalConfirmConfig, IModalConfirmWaiterConfig, ModalType} from "@src/messageBox/types/messageBoxTypes";

class MessageBox {
    private static _instance: MessageBox; //singleton instance

    private _themedModalInstance?: ModalType = undefined;

    /** singleton implementation  */
    public static get Instance() {
        return this._instance || (this._instance = new this()); // Do you need arguments? Make it a regular static method instead.
    }

    public alert({okText, onOk, ...props}: IModalAlertConfig): MessageBoxApi {
        const defaultButtons: IFormButtons = {
            ok: {
                position: 'right',
                active: true,
                title: okText ?? 'ОК',
                hotKeys: [{key: 'escape'}, {key: 'enter', ctrl: true}],
                onClick: () => {
                    if (onOk?.(messageBox) === false) return;
                    messageBox.destroy();
                },
            },
        };

        const config: IModalConfirmConfig = {...props};
        const buttons = MergeObjects(defaultButtons, config.buttons);

        if (!props.onCrossClose) props.onCrossClose = () => this.triggerButtonClick('ok', buttons.ok);

        const messageBox = this.modalBase({...config, buttons});
        return messageBox;
    }

    public confirm({okText, cancelText, onOk, onCancel, ...otherProps}: IModalConfirmConfig): MessageBoxApi {
        const defaultButtons: IFormButtons = {
            ok: {
                position: 'right',
                active: true,
                title: okText ?? 'ОК',
                hotKeys: [{key: 'enter', ctrl: true}],
                onClick: () => {
                    if (onOk?.(messageBox) === false) return;
                    messageBox.destroy();
                },
            },
            cancel: {
                position: 'right',
                title: cancelText ?? 'Отмена',
                hotKeys: [{key: 'escape'}],
                onClick: () => {
                    if (onCancel?.(messageBox) === false) return;
                    messageBox.destroy();
                },
            },
        };

        const props: IModalConfirmConfig = {
            icon: <QuestionCircleOutlined />,
            ...otherProps,
        };

        // noinspection DuplicatedCode
        const buttons = MergeObjects(defaultButtons, props.buttons);

        if (!props.onCrossClose) props.onCrossClose = () => this.triggerButtonClick('cancel', buttons.cancel);

        if (typeof props.closable === 'undefined') props.closable = false;
        if (typeof props.maskClosable === 'undefined') props.maskClosable = false;

        const messageBox = this.modalBase({...props, buttons});
        return messageBox;
    }

    public confirmWaiter({okText, cancelText, onOk, onCancel, waitTitle, waitContent, ...otherProps}: IModalConfirmWaiterConfig): MessageBoxApi {
        waitTitle = waitTitle ?? 'Обработка';
        if (typeof waitTitle === 'string') {
            waitContent = (
                <div style={{height: 22}}>
                    <Spin key={'waitSpinner'} /> {waitContent ?? 'Пожалуйста, подождите...'}
                </div>
            );
        }
        const defaultButtons: IFormButtons = {
            ok: {
                position: 'right',
                active: true,
                title: okText ?? 'ОК',
                hotKeys: [{key: 'enter', ctrl: true}],
                onClick: () => {
                    if (onOk?.(messageBox) === false) return;
                    messageBox.update({title: waitTitle, content: waitContent, buttons: {ok: {disabled: true}, cancel: {disabled: true}}});
                },
            },
            cancel: {
                position: 'right',
                title: cancelText ?? 'Отмена',
                hotKeys: [{key: 'escape'}],
                onClick: () => {
                    if (onCancel?.(messageBox) === false) return;
                    messageBox.destroy();
                },
            },
        };

        const props: IModalConfirmConfig = {...otherProps};

        // noinspection DuplicatedCode
        const buttons = MergeObjects(defaultButtons, props.buttons);

        if (!props.onCrossClose) props.onCrossClose = () => this.triggerButtonClick('cancel', buttons.cancel);

        if (typeof props.closable === 'undefined') props.closable = false;
        if (typeof props.maskClosable === 'undefined') props.maskClosable = false;

        const messageBox = this.modalBase({...props, buttons});
        return messageBox;
    }

    private modalBase({...otherProps}: IModalConfig): MessageBoxApi {
        const props: IModalConfig = {...otherProps};

        const formId = GetUuid();
        const config: IModalBaseConfig = {...props, formId: formId};

        const prevFocused = document.activeElement;
        config.onAfterClose = () => {
            (prevFocused as HTMLElement)?.focus();
            props.onAfterClose?.();
        };

        const draggableId = 'draggable-' + GetUuid();
        let modal: ModalType = Modal;
        if (this._themedModalInstance && Object.keys(this._themedModalInstance).length > 0) modal = this._themedModalInstance;
        const modalInst = modal.info(this.generateModalConfig(config, draggableId));

        const messageBoxApi = new MessageBoxApi(formId, draggableId, modalInst, config, this.generateModalConfig, document.activeElement);

        dispatcher.pushToStack(messageBoxApi.id);
        return messageBoxApi;
    }

    private triggerButtonClick(buttonName: string, button: IFormButton | undefined | null) {
        if (button?.onClick && !button.disabled && !button.hidden) button.onClick(buttonName, button);
    }

    private generateModalConfig({title, icon, content, onAfterClose, buttons, centered = true, closable = true, maskClosable = true, colorType, onCrossClose}: IModalBaseConfig, draggableId:string): ModalFuncProps {
        const paddingBottom = 20;
        const paddingLeft = 24;
        const paddingRight = 24;
        return {
            className: 'custom-antd-message-box',

            icon: null,
            title: <HeaderRender draggableId={draggableId} icon={icon} title={title ?? 'Внимание'} colorType={colorType} style={{paddingLeft: 24, paddingRight: paddingRight, paddingTop: 3, paddingBottom: 3}} />,
            content: (
                <ContentRender paddingLeft={paddingLeft} paddingRight={paddingRight}>
                    {content}
                </ContentRender>
            ),

            footer: (
                <ButtonsRender
                    buttons={buttons}
                    colorType={colorType}
                    arrowsSelection={true}
                    containerStyle={{marginTop: '32px', marginLeft: paddingLeft, marginRight: paddingRight, marginBottom: paddingBottom}}
                />
            ),

            centered: !!centered,
            closable: closable, //Is it possible to close the form with a close cross
            keyboard: false, //close by keyboard
            maskClosable: maskClosable, //the form will close when you click on the mask layout
            onCancel: () => onCrossClose, // fires when you click on the cross to close the form
            modalRender: (node)=>{return ModalRender(node, draggableId)},
            afterClose: () => onAfterClose?.(),
        };
    }

    public updateThemedModal(modal: ModalType) {
        this._themedModalInstance = modal;
    }
}

const messageBox = MessageBox.Instance;
export default messageBox;
