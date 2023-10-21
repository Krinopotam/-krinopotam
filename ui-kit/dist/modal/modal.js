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
import './css/modal.css';
import { Modal as AntModal } from 'antd';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { FooterRender } from './renders/footerRender';
import { HeaderRender } from './renders/headerRender';
import { ModalRender } from './renders/modalRender';
import classNames from 'classnames';
import { useInitFormDispatcher } from './hooks/useInitFormDispatcher';
import { useResize } from './hooks/useResize';
import { HelpersStrings } from '@krinopotam/js-helpers';
export const Modal = (_a) => {
    var _b, _c, _d, _e, _f, _g, _h;
    var { resizable = true, headerStyle, footerStyle } = _a, props = __rest(_a, ["resizable", "headerStyle", "footerStyle"]);
    const [modalId] = useState((_b = props.modalId) !== null && _b !== void 0 ? _b : 'modal-' + HelpersStrings.getUuid());
    useInitFormDispatcher(modalId, !!props.open);
    const wrapperRemoteCallbacksRef = useRef({});
    const prevFocusedRef = useRef();
    useEffect(() => {
        if (props.open)
            prevFocusedRef.current = document.activeElement;
    }, [props.open]);
    const onAfterOpenChange = useCallback((open) => {
        var _a, _b, _c, _d;
        if (open)
            (_b = (_a = wrapperRemoteCallbacksRef.current) === null || _a === void 0 ? void 0 : _a.onParentComponentRendered) === null || _b === void 0 ? void 0 : _b.call(_a);
        else
            (_c = prevFocusedRef.current) === null || _c === void 0 ? void 0 : _c.focus();
        (_d = props.onAfterOpenChange) === null || _d === void 0 ? void 0 : _d.call(props, open);
    }, [props]);
    const [formSize, setFormSize] = useState({ width: (_c = props.width) !== null && _c !== void 0 ? _c : 0, bodyHeight: (_d = props.bodyHeight) !== null && _d !== void 0 ? _d : 0 });
    const onMouseResize = useResize(formSize.width, formSize.bodyHeight, setFormSize, (_e = props.minWidth) !== null && _e !== void 0 ? _e : 200, (_f = props.maxWidth) !== null && _f !== void 0 ? _f : 5000, (_g = props.bodyMinHeight) !== null && _g !== void 0 ? _g : 50, (_h = props.bodyMaxHeight) !== null && _h !== void 0 ? _h : 5000);
    const bodyStyleVal = useGetBodyStyle({
        bodyStyle: props.bodyStyle,
        bodyHeight: formSize.bodyHeight,
        bodyMaxHeight: props.bodyMaxHeight,
        bodyMinHeight: props.bodyMinHeight,
        notScrollable: props.notScrollable,
    });
    const paddingLeft = 24;
    const paddingRight = 24;
    const _headerStyle = Object.assign({ paddingLeft: paddingLeft, paddingRight: paddingRight, paddingTop: 5, paddingBottom: 5 }, headerStyle);
    const _footerStyle = Object.assign({ paddingTop: 20, paddingLeft: paddingLeft, paddingRight: paddingRight, paddingBottom: 20 }, footerStyle);
    const [draggableId] = useState('draggable-' + HelpersStrings.getUuid());
    return (React.createElement(AntModal, Object.assign({}, props, { width: formSize.width || undefined, styles: { body: bodyStyleVal, footer: { margin: 0 } }, className: classNames('custom-antd-modal', props.className), modalRender: node => {
            return ModalRender(node, draggableId, wrapperRemoteCallbacksRef);
        }, title: React.createElement(HeaderRender, { draggableId: draggableId, icon: props.headerIcon, title: props.title, colorType: props.colorType, style: _headerStyle }), footer: React.createElement(FooterRender, { onMouseResize: onMouseResize, resizable: resizable, style: _footerStyle, colorType: props.colorType }, props.footer), afterOpenChange: onAfterOpenChange })));
};
const useGetBodyStyle = ({ bodyStyle, bodyHeight, bodyMaxHeight, bodyMinHeight, notScrollable, }) => {
    const newStyle = Object.assign(Object.assign({}, bodyStyle), { padding: '0 24px 0 24px', overflowY: notScrollable ? 'hidden' : 'auto' });
    if (bodyHeight)
        newStyle.height = bodyHeight;
    if (bodyMaxHeight)
        newStyle.maxHeight = bodyMaxHeight;
    if (bodyMinHeight)
        newStyle.minHeight = bodyMinHeight;
    return newStyle;
};
