export const keyDownHandler = (e, propsRef, api, wrapperId) => {
    const target = e.target;
    if (!e.key || !(target === null || target === void 0 ? void 0 : target.closest('.buttons-row-wrapper-' + wrapperId)))
        return;
    const key = e.key.toLowerCase();
    if (key === 'f5' || (e.ctrlKey && e.shiftKey && key === 'r'))
        return;
    if (propsRef.current.arrowsSelection)
        processArrowKeys(e, api);
    processHotKeys(e, api);
};
const processArrowKeys = (e, api) => {
    var _a;
    const target = e.target;
    if (target.tagName.toLowerCase() === 'input' ||
        target.tagName.toLowerCase() === 'textarea' ||
        (target.tagName.toLowerCase() === 'button' && ((_a = target.getAttribute('role')) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === 'switch'))
        return;
    if (e.ctrlKey || e.altKey || e.shiftKey || e.metaKey)
        return;
    const key = e.key.toLowerCase();
    if (key === 'enter') {
        e.preventDefault();
        e.stopPropagation();
        api.activeTriggerClick();
    }
    else if (key === 'arrowleft') {
        e.preventDefault();
        e.stopPropagation();
        api.setNextActive('backward');
    }
    else if (key === 'arrowright') {
        e.preventDefault();
        e.stopPropagation();
        api.setNextActive('forward');
    }
};
const processHotKeys = (e, api) => {
    if (!e.key)
        return;
    const key = e.key.toLowerCase();
    const buttons = api.buttons();
    for (const name in buttons) {
        const button = buttons[name];
        if (!(button === null || button === void 0 ? void 0 : button.hotKeys) || button.disabled || button.hidden)
            continue;
        for (const hotKey of button.hotKeys) {
            if (!!hotKey.ctrl === e.ctrlKey && !!hotKey.alt === e.altKey && !!hotKey.shift === e.shiftKey && !!hotKey.meta === e.metaKey && hotKey.key.toLowerCase() === key) {
                e.stopPropagation();
                e.preventDefault();
                api.triggerClick(name);
            }
        }
    }
};
//# sourceMappingURL=keypressProcessing.js.map