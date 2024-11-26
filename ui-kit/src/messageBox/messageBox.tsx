/**
 * @MessageBox
 * @description Static message box instance.
 * @version 0.0.1.99
 * @link omegatester@gmail.com
 * @author Maksim Zaytsev
 * @license MIT
 */

import './css/messageBox.css';

import {Modal, ModalFuncProps, Spin} from 'antd';

import {ModalRender} from '@src/modal/renders/modalRender';
import {HeaderRender} from '@src/modal/renders/headerRender';
import {ContentRender} from './renders/contentRender';
import {MessageBoxApi} from './messageBoxApi';
import React from 'react';
import {GetNanoId} from '@krinopotam/js-helpers/helpersString/getNanoId';
import {QuestionCircleOutlined} from '@ant-design/icons';
import {
    IModalAlertConfig,
    IModalBaseConfig,
    IModalConfig,
    IModalConfirmConfig,
    IModalConfirmWaiterConfig,
    ModalType,
} from '@src/messageBox/types/messageBoxTypes';
import {translations} from '@src/messageBox/translations/translations';
import {ButtonsRow, IFormButton, IFormButtons, mergeButtons} from '@src/buttonsRow';

class MessageBox {
    private static _instance: MessageBox; //singleton instance

    private _themedModalInstance?: ModalType = undefined;

    /** singleton implementation  */
    public static get Instance() {
        return this._instance || (this._instance = new this()); // Do you need arguments? Make it a regular static method instead.
    }

    /** Destroy all message boxes */
    public destroyAll() {
        Modal.destroyAll();
    }

    public alert({okText, onOk, ...props}: IModalAlertConfig): MessageBoxApi {
        const t = this.getTranslator(props.language, props.translation);

        const defaultButtons: IFormButtons = {
            ok: {
                position: 'right',
                active: true,
                title: okText ?? t('ok'),
                hotKeys: [{key: 'escape'}, {key: 'enter', ctrl: true}],
                onClick: () => {
                    if (onOk?.(messageBox) === false) return;
                    messageBox.destroy();
                },
            },
        };

        const config: IModalConfirmConfig = {...props};
        const buttons = mergeButtons(defaultButtons, config.buttons);

        if (!config.onCrossClose) config.onCrossClose = () => this.triggerButtonClick('ok', buttons.ok);

        const messageBox = this.modalBase({...config, buttons});
        return messageBox;
    }

    public confirm({okText, cancelText, onOk, onCancel, ...otherProps}: IModalConfirmConfig): MessageBoxApi {
        const t = this.getTranslator(otherProps.language, otherProps.translation);

        const defaultButtons: IFormButtons = {
            ok: {
                position: 'right',
                active: true,
                title: okText ?? t('ok'),
                hotKeys: [{key: 'enter', ctrl: true}],
                onClick: () => {
                    if (onOk?.(messageBox) === false) return;
                    messageBox.destroy();
                },
            },
            cancel: {
                position: 'right',
                title: cancelText ?? t('cancel'),
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
        const buttons = mergeButtons(defaultButtons, props.buttons);

        if (!props.onCrossClose) props.onCrossClose = () => this.triggerButtonClick('cancel', buttons.cancel);

        if (typeof props.closable === 'undefined') props.closable = false;
        if (typeof props.maskClosable === 'undefined') props.maskClosable = false;

        const messageBox = this.modalBase({...props, buttons});
        return messageBox;
    }

    public confirmWaiter({okText, cancelText, onOk, onCancel, waitTitle, waitContent, ...otherProps}: IModalConfirmWaiterConfig): MessageBoxApi {
        const t = this.getTranslator(otherProps.language, otherProps.translation);

        waitTitle = waitTitle ?? t('processing');
        if (typeof waitTitle === 'string') {
            waitContent = (
                <div style={{height: 22}}>
                    <Spin key={'waitSpinner'} /> {waitContent ?? t('pleaseWait')}
                </div>
            );
        }
        const defaultButtons: IFormButtons = {
            ok: {
                position: 'right',
                active: true,
                title: okText ?? t('ok'),
                hotKeys: [{key: 'enter', ctrl: true}],
                onClick: () => {
                    if (onOk?.(messageBox) === false) return;
                    messageBox.update({
                        title: waitTitle,
                        content: waitContent,
                        buttons: {ok: {disabled: true}, cancel: {disabled: true}},
                    });
                },
            },
            cancel: {
                position: 'right',
                title: cancelText ?? t('cancel'),
                hotKeys: [{key: 'escape'}],
                onClick: () => {
                    if (onCancel?.(messageBox) === false) return;
                    messageBox.destroy();
                },
            },
        };

        const props: IModalConfirmConfig = {...otherProps};

        // noinspection DuplicatedCode
        const buttons = mergeButtons(defaultButtons, props.buttons);

        if (!props.onCrossClose) props.onCrossClose = () => this.triggerButtonClick('cancel', buttons.cancel);

        if (typeof props.closable === 'undefined') props.closable = false;
        if (typeof props.maskClosable === 'undefined') props.maskClosable = false;

        const messageBox = this.modalBase({...props, buttons});
        return messageBox;
    }

    private modalBase(cfg: IModalConfig): MessageBoxApi {
        const t = this.getTranslator(cfg.language, cfg.translation);
        const title = cfg.title ?? t('attention');
        const formId = GetNanoId();
        const config: IModalBaseConfig = {...cfg, formId, title};

        const prevFocused = document.activeElement;
        config.onAfterClose = () => {
            (prevFocused as HTMLElement)?.focus();
            cfg.onAfterClose?.();
        };

        const draggableId = 'draggable-' + GetNanoId();
        let modal: ModalType = Modal;
        if (this._themedModalInstance && Object.keys(this._themedModalInstance).length > 0) modal = this._themedModalInstance;
        const modalInst = modal.info(this.generateModalConfig(config, draggableId));

        return new MessageBoxApi(formId, draggableId, modalInst, config, this.generateModalConfig, document.activeElement);
    }

    private triggerButtonClick(buttonId: string, button: IFormButton | undefined | null) {
        if (!button?.onClick || button?.disabled || button?.hidden || button?.loading) return;
        button.onClick(buttonId, button, this);
    }

    private generateModalConfig(
        {title, icon, content, onAfterClose, buttons, centered = true, closable = true, maskClosable = true, colorType, onCrossClose}: IModalBaseConfig,
        draggableId: string
    ): ModalFuncProps {
        const paddingBottom = 20;
        const paddingLeft = 24;
        const paddingRight = 24;

        return {
            className: 'custom-antd-message-box',

            icon: null,
            title: (
                <HeaderRender
                    draggableId={draggableId}
                    icon={icon}
                    title={title}
                    colorType={colorType}
                    style={{
                        paddingLeft: 24,
                        paddingRight: paddingRight,
                        paddingTop: 3,
                        paddingBottom: 3,
                    }}
                />
            ),
            content: (
                <ContentRender paddingLeft={paddingLeft} paddingRight={paddingRight}>
                    {content}
                </ContentRender>
            ),

            footer: (
                <ButtonsRow
                    buttons={buttons}
                    color={colorType}
                    arrowsSelection={true}
                    style={{
                        marginTop: '32px',
                        marginLeft: paddingLeft,
                        marginRight: paddingRight,
                        marginBottom: paddingBottom,
                    }}
                />
            ),

            centered: !!centered,
            closable: closable, //Is it possible to close the form with a close cross
            keyboard: false, //close by keyboard
            maskClosable: maskClosable, //the form will close when you click on the mask layout
            onCancel: () => onCrossClose, // fires when you click on the cross to close the form
            modalRender: node => {
                return ModalRender(node, draggableId);
            },
            afterClose: () => onAfterClose?.(),
        };
    }

    public updateThemedModal(modal: ModalType) {
        this._themedModalInstance = modal;
    }

    private getTranslator(language: IModalConfig['language'], extTranslation: IModalConfig['translation']) {
        return (val: keyof typeof translations.en) => {
            const lang = language ?? 'en';
            const builtInTranslation = translations[lang] ?? translations.en;
            const translation = {...builtInTranslation, ...extTranslation};
            return translation[val] ?? translations.en[val] ?? val;
        };
    }
}

const messageBox = MessageBox.Instance;
export default messageBox;
