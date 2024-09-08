import React from 'react';
import {IButtonRowProps, IButtonsRowApi} from '@src/buttonsRow';

export const keyDownHandler = (
    e: KeyboardEvent,
    propsRef: React.MutableRefObject<IButtonRowProps>,
    api: IButtonsRowApi,
    wrapperId: string,
    props: IButtonRowProps
) => {
    const target = e.target as HTMLElement;
    //target.style.borderColor = GetRandomColor() //DEBUG: -----

    if (!e.key || !target?.closest('.buttons-row-wrapper-' + wrapperId)) return;

    const key = e.key.toLowerCase();
    if (key === 'f5' || (e.ctrlKey && e.shiftKey && key === 'r')) return; //F5 or ctrl+shift+r pressed - When user press the page refresh buttons, we simply exit

    if (propsRef.current.arrowsSelection) processArrowKeys(e, api);
    processHotKeys(e, api, props);
};

const processArrowKeys = (e: KeyboardEvent, api: IButtonsRowApi) => {
    const target = e.target as HTMLElement;

    if (
        target.tagName.toLowerCase() === 'input' ||
        target.tagName.toLowerCase() === 'textarea' ||
        (target.tagName.toLowerCase() === 'button' && target.getAttribute('role')?.toLowerCase() === 'switch')
    )
        return;

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
};

const processHotKeys = (e: KeyboardEvent, api: IButtonsRowApi, props: IButtonRowProps) => {
    if (!e.key) return;
    const key = e.key.toLowerCase();

    const buttons = api.buttons();

    for (const id in buttons) {
        const button = buttons[id];

        if (!button?.hotKeys || props.disableAll || button?.disabled || button?.hidden) continue;

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
                //api.setActive(id);
                api.triggerClick(id);
            }
        }
    }
};
