import { Col, Row } from 'antd';
import React, { useContext, useEffect, useRef, useState } from 'react';
import RenderButtonGroup from '../buttonsRow/components/renderButtonGroup';
import { useApi } from '../buttonsRow/hooks/api';
import { prepareButtons } from '../buttonsRow/helpers/buttonMethods';
import { ButtonRowWrapperContext } from '../buttonsRow/components/buttonsRowWrapper';
import { keyDownHandler } from '../buttonsRow/helpers/keypressProcessing';
export const ButtonsRow = (props) => {
    const [curButtons, setCurButtons] = usePrepareButtons(props);
    const api = useApi(props, curButtons, setCurButtons);
    useSubscribeToKeyDownEvent(props, api);
    if (!curButtons)
        return React.createElement(React.Fragment, null);
    return (React.createElement("div", { style: Object.assign({ display: 'block' }, props.style), className: 'controls-buttons-dynamic-row ' + props.className },
        React.createElement(Row, { wrap: false },
            React.createElement(Col, { flex: "auto", style: { textAlign: 'left' } },
                React.createElement(RenderButtonGroup, { key: "leftButtons", buttons: curButtons, position: "left", context: props.context, componentProps: props })),
            React.createElement(Col, { flex: "auto", style: { textAlign: 'center' } },
                React.createElement(RenderButtonGroup, { key: "centerButtons", buttons: curButtons, position: "center", context: props.context, componentProps: props })),
            React.createElement(Col, { flex: "auto", style: { textAlign: 'right' } },
                React.createElement(RenderButtonGroup, { key: "rightButtons", buttons: curButtons, position: "right", context: props.context, componentProps: props })))));
};
export default ButtonsRow;
const useSubscribeToKeyDownEvent = (props, api) => {
    const propsRef = useRef(props);
    propsRef.current = props;
    const wrapperContext = useContext(ButtonRowWrapperContext);
    useEffect(() => {
        var _a;
        if (!((_a = wrapperContext.wrapperRef) === null || _a === void 0 ? void 0 : _a.current))
            return;
        const wrapperElement = wrapperContext.wrapperRef.current;
        const onKeyDown = (e) => keyDownHandler(e, propsRef, api, wrapperContext.wrapperId);
        wrapperElement.addEventListener('keydown', onKeyDown);
        return () => wrapperElement.removeEventListener('keydown', onKeyDown);
    }, []);
};
const usePrepareButtons = (props) => {
    const [curButtons, setCurButtons] = useState(prepareButtons(props.buttons, props.colorType));
    const setTimeoutCurButtons = (buttons) => {
        setTimeout(() => {
            setCurButtons(buttons);
        }, 0);
    };
    useEffect(() => {
        const _buttons = prepareButtons(props.buttons, props.colorType);
        setCurButtons(_buttons);
    }, [props.buttons, props.colorType]);
    return [curButtons, setTimeoutCurButtons];
};
//# sourceMappingURL=buttonsRow.js.map