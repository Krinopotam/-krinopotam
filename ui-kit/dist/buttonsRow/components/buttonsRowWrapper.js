import React, { useMemo, useRef, useState } from 'react';
import { GetUuid, IsDescendant } from '@krinopotam/js-helpers';
export const ButtonRowWrapperContext = React.createContext({ wrapperId: '', wrapperRef: undefined });
export const ButtonsRowWrapper = (props) => {
    var _a, _b;
    const [wrapperId] = useState(GetUuid());
    const defStyle = {
        outline: 'none',
        height: '100%',
    };
    if (((_a = props.remoteCallbacksRef) === null || _a === void 0 ? void 0 : _a.current) && typeof ((_b = props.remoteCallbacksRef) === null || _b === void 0 ? void 0 : _b.current) === 'object') {
        props.remoteCallbacksRef.current.onParentComponentRendered = () => ensureWrapperFocus(wrapperRef.current);
    }
    setTimeout(() => {
        ensureWrapperFocus(wrapperRef.current);
    }, 0);
    const wrapperRef = useRef(null);
    const style = Object.assign(Object.assign({}, defStyle), props === null || props === void 0 ? void 0 : props.style);
    const wrapperContext = useMemo(() => {
        return {
            wrapperId: wrapperId,
            wrapperRef: wrapperRef
        };
    }, [wrapperId]);
    return React.createElement("div", { ref: wrapperRef, className: 'buttons-row-wrapper-' + wrapperId, tabIndex: -1, style: style },
        React.createElement(ButtonRowWrapperContext.Provider, { value: wrapperContext }, props.children));
};
export default ButtonsRowWrapper;
const ensureWrapperFocus = (wrapper) => {
    if (!wrapper)
        return;
    if (IsDescendant(wrapper, document.activeElement))
        return;
    wrapper.focus();
};
