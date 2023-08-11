import { Button } from '@krinopotam/ui-button';
import { Col, Row, Space, Tooltip } from 'antd';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import dispatcher from '@krinopotam/ui-forms-dispatcher';
import { HelpersObjects } from '@krinopotam/js-helpers';
export const ButtonsRow = (props) => {
    const [curButtons, setCurButtons] = usePrepareButtons(props);
    const api = useApi(props, curButtons, setCurButtons);
    useSubscribeToKeyDownEvent(props, api);
    if (!curButtons)
        return React.createElement(React.Fragment, null);
    return (React.createElement("div", { style: Object.assign({ display: 'block' }, props.style), className: 'controls-buttons-dynamic-row ' + props.className },
        React.createElement(Row, { wrap: false },
            React.createElement(Col, { flex: "auto", style: { textAlign: 'left' } },
                React.createElement(ButtonsGroup, { key: "leftButtons", buttons: curButtons, position: 'left', context: props.context })),
            React.createElement(Col, { flex: "auto", style: { textAlign: 'center' } },
                React.createElement(ButtonsGroup, { key: "centerButtons", buttons: curButtons, position: 'center', context: props.context })),
            React.createElement(Col, { flex: "auto", style: { textAlign: 'right' } },
                React.createElement(ButtonsGroup, { key: "rightButtons", buttons: curButtons, position: "right", context: props.context })))));
};
export const ButtonsGroup = ({ buttons, position, context, }) => {
    if (!buttons)
        return null;
    return (React.createElement(Space, { wrap: true }, Object.keys(buttons).map((name) => {
        const button = buttons === null || buttons === void 0 ? void 0 : buttons[name];
        if (!button)
            return null;
        return React.createElement(ButtonComponent, { key: name, name: name, button: button, position: position, context: context });
    })));
};
const ButtonComponent = ({ name, button, position, context, }) => {
    const onClick = useCallback(() => {
        if (button.onClick)
            button.onClick(name, button, context);
    }, [button, name, context]);
    if (!button || button.hidden)
        return null;
    if (position && button.position !== position)
        return null;
    if (button.type === 'element') {
        if (button.tooltip) {
            return React.createElement(Tooltip, { title: button.tooltip }, "button.title");
        }
        else
            return React.createElement(React.Fragment, null, "button.title");
    }
    if (button.tooltip) {
        return (React.createElement(Tooltip, { title: button.tooltip },
            React.createElement(Button, Object.assign({ key: name, type: (button.active ? 'primary' : button.type), disabled: button.disabled, ghost: button.ghost, loading: button.loading, danger: button.danger, onClick: onClick, size: button.size, icon: button.icon }, button.props), button.title)));
    }
    else {
        return (React.createElement(Button, Object.assign({ key: name, type: (button.active ? 'primary' : button.type), disabled: button.disabled, ghost: button.ghost, loading: button.loading, danger: button.danger, onClick: onClick, size: button.size, icon: button.icon }, button.props), button.title));
    }
};
const useApi = (props, curButtons, setCurButtons) => {
    var _a;
    const [api] = useState(((_a = props.apiRef) !== null && _a !== void 0 ? _a : {}));
    return useMemo(() => {
        api.buttons = (buttons) => {
            if (typeof buttons === 'undefined')
                return curButtons;
            setCurButtons(prepareButtons(buttons, props.formType));
            return buttons;
        };
        api.updateButtons = (buttons) => {
            const updatedButtons = prepareButtons(HelpersObjects.mergeObjects(curButtons, buttons));
            setCurButtons(updatedButtons);
            return updatedButtons;
        };
        api.setNextActive = (direction) => {
            const changedButtons = changeActiveButton(curButtons, direction);
            setCurButtons(changedButtons);
        };
        api.setActive = (name, active) => {
            const changedButtons = setActiveButton(curButtons, name, active);
            setCurButtons(changedButtons);
        };
        api.loading = (name, loading) => {
            const buttons = Object.assign({}, curButtons);
            const button = buttons[name];
            if (!button)
                return false;
            if (typeof loading === 'undefined')
                return !!button.loading;
            button.loading = loading;
            setCurButtons(buttons);
            return loading;
        };
        api.disabled = (name, disabled) => {
            const buttons = Object.assign({}, curButtons);
            const button = buttons[name];
            if (!button)
                return false;
            if (typeof disabled === 'undefined')
                return !!button.disabled;
            button.disabled = disabled;
            setTimeout(() => {
                setCurButtons(buttons);
            }, 0);
            return disabled;
        };
        api.hidden = (name, hidden) => {
            const buttons = Object.assign({}, curButtons);
            const button = buttons[name];
            if (!button)
                return false;
            if (typeof hidden === 'undefined')
                return !!button.hidden;
            button.hidden = hidden;
            setCurButtons(Object.assign({}, buttons));
            return hidden;
        };
        api.triggerClick = (name) => {
            const button = curButtons[name];
            if (!button)
                return;
            if (button.onClick && !button.disabled && !button.loading && !button.hidden)
                button.onClick(name, button, props.context);
        };
        api.activeTriggerClick = () => {
            var _a;
            const activeButtonName = (_a = Object.keys(curButtons).find((name) => {
                const button = curButtons[name];
                if (button === null || button === void 0 ? void 0 : button.active)
                    return name;
            })) !== null && _a !== void 0 ? _a : '';
            api.triggerClick(activeButtonName);
        };
        return api;
    }, [api, curButtons, setCurButtons, props.formType, props.context]);
};
const usePrepareButtons = (props) => {
    const [curButtons, setCurButtons] = useState(prepareButtons(props.buttons, props.formType));
    const setTimeoutCurButtons = (buttons) => {
        setTimeout(() => {
            setCurButtons(buttons);
        }, 0);
    };
    useEffect(() => {
        const _buttons = prepareButtons(props.buttons, props.formType);
        setCurButtons(_buttons);
    }, [props.buttons, props.formType]);
    return [curButtons, setTimeoutCurButtons];
};
const useSubscribeToKeyDownEvent = (props, api) => {
    const propsRef = useRef(props);
    propsRef.current = props;
    useEffect(() => {
        const onKeyDown = (e) => keyDownHandler(e, propsRef, api);
        document.addEventListener('keydown', onKeyDown);
        return () => document.removeEventListener('keydown', onKeyDown);
    }, []);
};
const prepareButtons = (buttons, formType) => {
    const clonedButtons = buttons ? Object.assign({}, buttons) : {};
    const leftButtons = {};
    const centerButtons = {};
    const rightButtons = {};
    for (const key in clonedButtons) {
        const button = clonedButtons[key];
        if (!button)
            continue;
        if (!button.type)
            button.type = 'default';
        if (!button.position)
            button.position = 'right';
        if (typeof button.danger === 'undefined' && formType === 'error')
            button.danger = true;
        if (button.position === 'left')
            leftButtons[key] = button;
        else if (button.position === 'center')
            centerButtons[key] = button;
        else
            rightButtons[key] = button;
    }
    return Object.assign(Object.assign(Object.assign({}, leftButtons), centerButtons), rightButtons);
};
const keyDownHandler = (e, props, api) => {
    if (props.current.formId && !(dispatcher === null || dispatcher === void 0 ? void 0 : dispatcher.isActive(props.current.formId)))
        return;
    const target = e.target;
    if (!e.key)
        return;
    const key = e.key.toLowerCase();
    if (key === 'f5' || (e.ctrlKey && e.shiftKey && key === 'r'))
        return;
    if (props.current.arrowsSelection || typeof props.current.arrowsSelection === 'undefined') {
        if ((target === null || target === void 0 ? void 0 : target.closest('.managed-dynamic-buttons-row')) &&
            target.tagName.toLocaleUpperCase() !== 'INPUT' &&
            target.tagName.toLocaleUpperCase() !== 'TEXTAREA' &&
            !(target.tagName.toLocaleUpperCase() === 'BUTTON' && target.getAttribute('role') === 'switch')) {
            if (!e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey) {
                if (key === 'enter') {
                    e.stopPropagation();
                    api.activeTriggerClick();
                }
                else if (key === 'arrowleft') {
                    e.stopPropagation();
                    api.setNextActive('backward');
                }
                else if (key === 'arrowright') {
                    e.stopPropagation();
                    api.setNextActive('forward');
                }
            }
        }
    }
    const buttons = api.buttons();
    for (const name in buttons) {
        const button = buttons[name];
        if (!(button === null || button === void 0 ? void 0 : button.hotKeys) || button.disabled || button.hidden)
            continue;
        for (const hotKey of button.hotKeys) {
            if (!!hotKey.ctrl === e.ctrlKey &&
                !!hotKey.alt === e.altKey &&
                !!hotKey.shift === e.shiftKey &&
                !!hotKey.meta === e.metaKey &&
                hotKey.key.toLowerCase() === key) {
                e.stopPropagation();
                e.preventDefault();
                api.setActive(name);
                api.triggerClick(name);
            }
        }
    }
};
const getNextButtonName = (currentName, buttons, direction, onlyVisible) => {
    const keys = Object.keys(buttons);
    const currentIndex = keys.findIndex((name) => {
        return name === currentName;
    });
    if (direction === 'forward') {
        if (currentIndex >= keys.length)
            return currentName;
        for (let i = currentIndex + 1; i < keys.length; i++) {
            const name = keys[i];
            const button = buttons[name];
            if (!button)
                continue;
            if (!button.disabled && (!onlyVisible || !button.hidden))
                return keys[i];
        }
    }
    else {
        if (currentIndex <= 0)
            return currentName;
        for (let i = currentIndex - 1; i >= 0; i--) {
            const name = keys[i];
            const button = buttons[name];
            if (!button)
                continue;
            if (!button.disabled && (!onlyVisible || !button.hidden))
                return keys[i];
        }
    }
    return currentName;
};
const changeActiveButton = (buttons, direction) => {
    const _buttons = Object.assign({}, buttons);
    const keys = Object.keys(_buttons);
    let activeIndex = keys.findIndex((name) => {
        const button = _buttons[name];
        if (button === null || button === void 0 ? void 0 : button.active)
            return true;
    });
    if (activeIndex < 0)
        activeIndex = 0;
    const currentName = keys[activeIndex];
    const currentButton = _buttons[currentName];
    if (currentButton)
        currentButton.active = false;
    const nextName = getNextButtonName(currentName, buttons, direction, true);
    const nextButton = _buttons[nextName];
    if (nextButton)
        nextButton.active = true;
    return _buttons;
};
const setActiveButton = (buttons, name, active) => {
    const _buttons = Object.assign({}, buttons);
    for (const btnName in _buttons) {
        const button = _buttons[btnName];
        if (!button)
            continue;
        if (typeof active === 'boolean' && !active) {
            button.active = false;
            continue;
        }
        button.active = btnName === name;
    }
    return _buttons;
};
