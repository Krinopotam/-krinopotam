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
import React, { useState } from 'react';
import { FooterRender } from './renders/footerRender';
import { HeaderRender } from './renders/headerRender';
import { ModalRender } from './renders/modalRender';
import classNames from 'classnames';
import { useInitFormDispatcher } from './hooks/useInitFormDispatcher';
import { useResize } from './hooks/useResize';
export const Modal = (_a) => {
    var _b, _c, _d, _e, _f, _g;
    var { resizable = true } = _a, props = __rest(_a, ["resizable"]);
    useInitFormDispatcher(props.dispatcherFormId, !!props.open);
    const [formSize, setFormSize] = useState({ width: (_b = props.width) !== null && _b !== void 0 ? _b : 0, bodyHeight: (_c = props.bodyHeight) !== null && _c !== void 0 ? _c : 0 });
    const onMouseResize = useResize(formSize.width, formSize.bodyHeight, setFormSize, (_d = props.minWidth) !== null && _d !== void 0 ? _d : 200, (_e = props.maxWidth) !== null && _e !== void 0 ? _e : 5000, (_f = props.bodyMinHeight) !== null && _f !== void 0 ? _f : 50, (_g = props.bodyMaxHeight) !== null && _g !== void 0 ? _g : 5000);
    const bodyStyleVal = useGetBodyStyle({
        bodyStyle: props.bodyStyle,
        bodyHeight: formSize.bodyHeight,
        bodyMaxHeight: props.bodyMaxHeight,
        bodyMinHeight: props.bodyMinHeight,
        notScrollable: props.notScrollable,
    });
    const paddingLeft = 24;
    const paddingRight = 24;
    return (React.createElement(AntModal, Object.assign({}, props, { width: formSize.width || undefined, bodyStyle: bodyStyleVal, className: classNames('custom-antd-modal', props.className), modalRender: ModalRender, title: React.createElement(HeaderRender, { title: props.title, style: { paddingLeft: paddingLeft, paddingRight: paddingRight, paddingTop: 5, paddingBottom: 5 } }), footer: React.createElement(FooterRender, { onMouseResize: onMouseResize, resizable: resizable, containerStyle: { paddingTop: 20, paddingLeft: paddingLeft, paddingRight: paddingRight, paddingBottom: 20 } }, props.footer) })));
};
const useGetBodyStyle = ({ bodyStyle, bodyHeight, bodyMaxHeight, bodyMinHeight, notScrollable, }) => {
    const newStyle = bodyStyle !== null && bodyStyle !== void 0 ? bodyStyle : {};
    newStyle.padding = '0 24px 0 24px';
    if (bodyHeight)
        newStyle.height = bodyHeight;
    if (bodyMaxHeight)
        newStyle.maxHeight = bodyMaxHeight;
    if (bodyMinHeight)
        newStyle.minHeight = bodyMinHeight;
    if (!notScrollable)
        newStyle.overflowY = 'auto';
    else
        newStyle.overflowY = 'hidden';
    return newStyle;
};
