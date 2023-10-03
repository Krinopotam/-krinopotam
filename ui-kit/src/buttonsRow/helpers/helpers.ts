import {IButtonRowProps, IButtonsRowApi, IFormButtons} from "@src/buttonsRow";
import {IFormType} from "@src/buttonsRow/buttonsRow";
import React from "react";
import dispatcher from "@src/formsDispatcher";

export const prepareButtons = (buttons: IFormButtons | undefined, formType?: IFormType) => {
    const clonedButtons = buttons ? {...buttons} : {};
    const leftButtons: IFormButtons = {};
    const centerButtons: IFormButtons = {};
    const rightButtons: IFormButtons = {};
    for (const key in clonedButtons) {
        const button = clonedButtons[key];
        if (!button) continue;
        if (!button.type) button.type = 'default';
        if (!button.position) button.position = 'right';
        if (typeof button.danger === 'undefined' && formType === 'error') button.danger = true;
        if (button.position === 'left') leftButtons[key] = button;
        else if (button.position === 'center') centerButtons[key] = button;
        else rightButtons[key] = button;
    }

    return {...leftButtons, ...centerButtons, ...rightButtons};
};


export const getNextButtonName = (currentName: string, buttons: IFormButtons, direction: 'forward' | 'backward', onlyVisible: boolean) => {
    const keys = Object.keys(buttons);

    const currentIndex = keys.findIndex(name => name === currentName);

    if (direction === 'forward') {
        if (currentIndex >= keys.length) return currentName;
        for (let i = currentIndex + 1; i < keys.length; i++) {
            const name = keys[i];
            const button = buttons[name];
            if (!button) continue;
            if (!button.disabled && (!onlyVisible || !button.hidden)) return keys[i];
        }
    } else {
        if (currentIndex <= 0) return currentName;
        for (let i = currentIndex - 1; i >= 0; i--) {
            const name = keys[i];
            const button = buttons[name];
            if (!button) continue;
            if (!button.disabled && (!onlyVisible || !button.hidden)) return keys[i];
        }
    }

    return currentName;
};

export const changeActiveButton = (buttons: IFormButtons, direction: 'backward' | 'forward') => {
    const _buttons = {...buttons};
    const keys = Object.keys(_buttons);

    let activeIndex = keys.findIndex((name) => {
        const button = _buttons[name];
        if (button?.active) return true;
    });

    if (activeIndex < 0) activeIndex = 0;

    const currentName = keys[activeIndex];
    const currentButton = _buttons[currentName];
    if (currentButton) currentButton.active = false;

    const nextName = getNextButtonName(currentName, buttons, direction, true);
    const nextButton = _buttons[nextName];
    if (nextButton) nextButton.active = true;

    return _buttons;
};

export const setActiveButton = (buttons: IFormButtons, name: string, active?: boolean) => {
    const _buttons = {...buttons};
    for (const btnName in _buttons) {
        const button = _buttons[btnName];
        if (!button) continue;
        if (typeof active === 'boolean' && !active) {
            button.active = false;
            continue;
        }

        button.active = btnName === name;
    }
    return _buttons;
};

export const keyDownHandler = (e: KeyboardEvent, props: React.MutableRefObject<IButtonRowProps>, api: IButtonsRowApi, wrapperId: string) => {
    console.log('keyDownHandler')
    //if (props.current.formId && !dispatcher?.isActive(props.current.formId)) return;

    if (!e.key) return;

    const key = e.key.toLowerCase();
    if (key === 'f5' || (e.ctrlKey && e.shiftKey && key === 'r')) return; //F5 or ctrl+shift+r pressed - When user press the page refresh buttons, we simply exit

    processArrowKeys(e, props, api, wrapperId);
    processHotKeys(e, api);
};

const processArrowKeys = (e: KeyboardEvent, props: React.MutableRefObject<IButtonRowProps>, api: IButtonsRowApi, wrapperId: string) => {
    const target = e.target as HTMLElement;

    target.style.borderColor = getRandomColor()

    if (!props.current.arrowsSelection) return;

    if (
        !target?.closest('.buttons-row-wrapper-' + wrapperId) ||
        target.tagName.toLowerCase() === 'input' ||
        target.tagName.toLowerCase() === 'textarea' ||
        (target.tagName.toLowerCase() === 'button' && target.getAttribute('role')?.toLowerCase() === 'switch')
    ) return;

    if (e.ctrlKey || e.altKey || e.shiftKey || e.metaKey) return; //no control/alt keys

    const key = e.key.toLowerCase();
    if (key === 'enter') {
        e.preventDefault();
        e.stopPropagation();
        api.activeTriggerClick();
    } else if (key === 'arrowleft') {
        e.preventDefault();
        e.stopPropagation();
        api.setNextActive('backward');
    } else if (key === 'arrowright') {
        e.preventDefault();
        e.stopPropagation();
        api.setNextActive('forward');
    }
}

const processHotKeys = (e: KeyboardEvent, api: IButtonsRowApi) => {
    if (!e.key) return;
    const key = e.key.toLowerCase();

    const buttons = api.buttons();

    for (const name in buttons) {
        const button = buttons[name];

        if (!button?.hotKeys || button.disabled || button.hidden) continue;

        for (const hotKey of button.hotKeys) {
            if (
                !!hotKey.ctrl === e.ctrlKey &&
                !!hotKey.alt === e.altKey &&
                !!hotKey.shift === e.shiftKey &&
                !!hotKey.meta === e.metaKey &&
                hotKey.key.toLowerCase() === key
            ) {
                e.stopPropagation();
                e.preventDefault();
                api.setActive(name);
                api.triggerClick(name);
            }
        }
    }
}


function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}