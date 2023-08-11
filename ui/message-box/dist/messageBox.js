var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import './css/messageBox.css';
import { Modal, Spin } from 'antd';
import { ButtonsRender, HeaderRender, ModalRender } from '@krinopotam/ui-modal';
import { ContentRender } from './renders/contentRender';
import { MessageBoxApi } from './messageBoxApi';
import React from 'react';
import dispatcher from '@krinopotam/ui-forms-dispatcher';
import { HelpersStrings, HelpersObjects } from "@krinopotam/js-helpers";
class MessageBox {
    constructor() {
        this._themedModalInstance = undefined;
    }
    static get Instance() {
        return this._instance || (this._instance = new this());
    }
    alert(_a) {
        var { okText, onOk } = _a, otherProps = __rest(_a, ["okText", "onOk"]);
        const defaultButtons = {
            ok: {
                position: 'right',
                active: true,
                title: okText !== null && okText !== void 0 ? okText : 'ОК',
                hotKeys: [{ key: 'escape' }, { key: 'enter', ctrl: true }],
                onClick: () => {
                    const callbackResult = onOk ? onOk(messageBox) : undefined;
                    if (typeof callbackResult === 'boolean' && !callbackResult)
                        return;
                    messageBox.destroy();
                },
            },
        };
        const props = Object.assign({}, otherProps);
        const buttons = HelpersObjects.mergeObjects(defaultButtons, props.buttons);
        if (!props.onClose)
            props.onClose = () => this.triggerButtonClick('ok', buttons.ok);
        const messageBox = this.modalBase(Object.assign(Object.assign({}, props), { buttons }));
        return messageBox;
    }
    confirm(_a) {
        var { okText, cancelText, onOk, onCancel } = _a, otherProps = __rest(_a, ["okText", "cancelText", "onOk", "onCancel"]);
        const defaultButtons = {
            ok: {
                position: 'right',
                active: true,
                title: okText !== null && okText !== void 0 ? okText : 'ОК',
                hotKeys: [{ key: 'enter', ctrl: true }],
                onClick: () => {
                    const callbackResult = onOk ? onOk(messageBox) : undefined;
                    if (typeof callbackResult === 'boolean' && !callbackResult)
                        return;
                    messageBox.destroy();
                },
            },
            cancel: {
                position: 'right',
                title: cancelText !== null && cancelText !== void 0 ? cancelText : 'Отмена',
                hotKeys: [{ key: 'escape' }],
                onClick: () => {
                    const callbackResult = onCancel ? onCancel(messageBox) : undefined;
                    if (typeof callbackResult === 'boolean' && !callbackResult)
                        return;
                    messageBox.destroy();
                },
            },
        };
        const props = Object.assign({}, otherProps);
        const buttons = HelpersObjects.mergeObjects(defaultButtons, props.buttons);
        if (!props.onClose)
            props.onClose = () => this.triggerButtonClick('cancel', buttons.cancel);
        if (typeof props.closable === 'undefined')
            props.closable = false;
        if (typeof props.maskClosable === 'undefined')
            props.maskClosable = false;
        const messageBox = this.modalBase(Object.assign(Object.assign({}, props), { buttons }));
        return messageBox;
    }
    confirmWaiter(_a) {
        var { okText, cancelText, onOk, onCancel, waitTitle, waitContent } = _a, otherProps = __rest(_a, ["okText", "cancelText", "onOk", "onCancel", "waitTitle", "waitContent"]);
        waitTitle = waitTitle !== null && waitTitle !== void 0 ? waitTitle : 'Обработка';
        if (typeof waitTitle === 'string') {
            waitContent = (React.createElement("div", { style: { height: 22 } },
                React.createElement(Spin, { key: 'waitSpinner' }),
                " ", waitContent !== null && waitContent !== void 0 ? waitContent : 'Пожалуйста, подождите...'));
        }
        const defaultButtons = {
            ok: {
                position: 'right',
                active: true,
                title: okText !== null && okText !== void 0 ? okText : 'ОК',
                hotKeys: [{ key: 'enter', ctrl: true }],
                onClick: () => {
                    const callbackResult = onOk ? onOk(messageBox) : undefined;
                    if (typeof callbackResult === 'boolean' && !callbackResult)
                        return;
                    messageBox.update({ title: waitTitle, content: waitContent, buttons: { ok: { disabled: true }, cancel: { disabled: true } } });
                },
            },
            cancel: {
                position: 'right',
                title: cancelText !== null && cancelText !== void 0 ? cancelText : 'Отмена',
                hotKeys: [{ key: 'escape' }],
                onClick: () => {
                    const callbackResult = onCancel ? onCancel(messageBox) : undefined;
                    if (typeof callbackResult === 'boolean' && !callbackResult)
                        return;
                    messageBox.destroy();
                },
            },
        };
        const props = Object.assign({}, otherProps);
        const buttons = HelpersObjects.mergeObjects(defaultButtons, props.buttons);
        if (!props.onClose)
            props.onClose = () => this.triggerButtonClick('cancel', buttons.cancel);
        if (typeof props.closable === 'undefined')
            props.closable = false;
        if (typeof props.maskClosable === 'undefined')
            props.maskClosable = false;
        const messageBox = this.modalBase(Object.assign(Object.assign({}, props), { buttons }));
        return messageBox;
    }
    modalBase(_a) {
        var { type = 'primary' } = _a, otherProps = __rest(_a, ["type"]);
        const props = Object.assign({}, otherProps);
        const formType = !type || type === 'primary' ? 'confirm' : type;
        const formId = HelpersStrings.getUuid();
        const config = Object.assign(Object.assign({}, props), { type: formType, formId: formId });
        let modal = Modal;
        if (this._themedModalInstance && Object.keys(this._themedModalInstance).length > 0)
            modal = this._themedModalInstance;
        const modalInst = modal[formType](this.generateModalConfig(config));
        const messageBoxApi = new MessageBoxApi(formId, modalInst, config, this.generateModalConfig);
        dispatcher.pushToStack(messageBoxApi.id);
        return messageBoxApi;
    }
    triggerButtonClick(buttonName, button) {
        if ((button === null || button === void 0 ? void 0 : button.onClick) && !button.disabled && !button.hidden)
            button.onClick(buttonName, button);
    }
    generateModalConfig({ formId, title, content, afterClose, buttons, centered = true, closable = true, maskClosable = true, type, onClose, }) {
        const paddingBottom = 20;
        const paddingLeft = 24;
        const paddingRight = 24;
        return {
            className: 'custom-antd-message-box',
            icon: null,
            title: (React.createElement(HeaderRender, { title: title !== null && title !== void 0 ? title : (type === 'error' ? 'Ошибка' : 'Внимание'), type: type, style: { paddingLeft: 24, paddingRight: paddingRight, paddingTop: 3, paddingBottom: 3 } })),
            content: (React.createElement(ContentRender, { paddingLeft: paddingLeft, paddingRight: paddingRight }, content)),
            footer: (React.createElement(ButtonsRender, { formId: formId, buttons: buttons, formType: type, containerStyle: { marginTop: '32px', marginLeft: paddingLeft, marginRight: paddingRight, marginBottom: paddingBottom } })),
            centered: !!centered,
            closable: closable,
            keyboard: false,
            maskClosable: maskClosable,
            wrapClassName: 'managed-dynamic-buttons-row',
            onCancel: onClose,
            modalRender: ModalRender,
            afterClose: () => afterClose === null || afterClose === void 0 ? void 0 : afterClose(),
        };
    }
    updateThemedModal(modal) {
        this._themedModalInstance = modal;
    }
}
const messageBox = MessageBox.Instance;
export default messageBox;
