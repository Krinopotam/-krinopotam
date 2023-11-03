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
import { ButtonsRow } from '../buttonsRow/buttonsRow';
import { Popover } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { getUuid, mergeObjects } from '@krinopotam/js-helpers';
import { useInitFormDispatcher } from '../modal/hooks/useInitFormDispatcher';
import { ButtonsRowWrapper } from "../buttonsRow";
export const PopConfirm = (_a) => {
    var { content } = _a, props = __rest(_a, ["content"]);
    const [formId] = useState(getUuid());
    useInitFormDispatcher(formId, !!props.open);
    const buttons = useInitButtons(props);
    const buttonsRowRef = useRef(null);
    useEffect(() => {
        var _a;
        if (props.open)
            (_a = buttonsRowRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    }, [props.open]);
    const _content = (React.createElement(React.Fragment, null, content !== null && content !== void 0 ? content : null,
        React.createElement("div", { ref: buttonsRowRef, tabIndex: -1 },
            React.createElement(ButtonsRow, { buttons: buttons }))));
    return (React.createElement(Popover, Object.assign({}, props, { content: _content, title: props.title }),
        React.createElement(ButtonsRowWrapper, null, props.children)));
};
const useInitButtons = ({ okText, cancelText, onConfirm, onCancel, okButtonProps, cancelButtonProps }) => {
    const [formButtons, setFormButtons] = useState({});
    useEffect(() => {
        const defaultButtons = {
            ok: {
                position: 'right',
                active: true,
                title: okText !== null && okText !== void 0 ? okText : 'ОК',
                hotKeys: [{ key: 'enter', ctrl: true }],
                onClick: () => {
                    onConfirm === null || onConfirm === void 0 ? void 0 : onConfirm();
                },
                size: 'small',
            },
            cancel: {
                position: 'right',
                title: cancelText !== null && cancelText !== void 0 ? cancelText : 'Отмена',
                hotKeys: [{ key: 'escape' }],
                onClick: () => {
                    onCancel === null || onCancel === void 0 ? void 0 : onCancel();
                },
                size: 'small',
            },
        };
        const resultButtons = mergeObjects(defaultButtons, { ok: okButtonProps, cancel: cancelButtonProps });
        setFormButtons(resultButtons);
    }, [okText, cancelText, onConfirm, onCancel, okButtonProps, cancelButtonProps]);
    return formButtons;
};
