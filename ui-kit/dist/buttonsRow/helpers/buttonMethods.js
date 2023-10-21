export const prepareButtons = (buttons, rowColorType) => {
    const clonedButtons = buttons ? Object.assign({}, buttons) : {};
    const leftButtons = {};
    const centerButtons = {};
    const rightButtons = {};
    const buttonsKeys = getSortedButtonsKeys(clonedButtons);
    for (const key of buttonsKeys) {
        const button = clonedButtons[key];
        if (!button)
            continue;
        if (!button.title && !button.icon)
            button.title = key;
        if (!button.type)
            button.type = 'button';
        if (!button.position)
            button.position = 'right';
        if (rowColorType)
            button.colorType = rowColorType;
        if (button.position === 'left')
            leftButtons[key] = button;
        else if (button.position === 'center')
            centerButtons[key] = button;
        else
            rightButtons[key] = button;
    }
    return Object.assign(Object.assign(Object.assign({}, leftButtons), centerButtons), rightButtons);
};
export const getSortedButtonsKeys = (buttons) => {
    if (!buttons)
        return [];
    const buttonsKeys = Object.keys(buttons);
    buttonsKeys.sort((key1, key2) => {
        var _a, _b;
        const btn1 = buttons[key1];
        const btn2 = buttons[key2];
        const btnWeight1 = (_a = btn1 === null || btn1 === void 0 ? void 0 : btn1.weight) !== null && _a !== void 0 ? _a : 0;
        const btnWeight2 = (_b = btn2 === null || btn2 === void 0 ? void 0 : btn2.weight) !== null && _b !== void 0 ? _b : 0;
        if (btnWeight1 === btnWeight2)
            return 0;
        return btnWeight1 < btnWeight2 ? -1 : 1;
    });
    return buttonsKeys;
};
export const getNextButtonName = (currentName, buttons, direction) => {
    const keys = Object.keys(buttons);
    const currentIndex = keys.findIndex(name => name === currentName);
    if (direction === 'forward') {
        if (currentIndex >= keys.length)
            return currentName;
        for (let i = currentIndex + 1; i < keys.length; i++)
            if (isButtonCanBeActive(buttons[keys[i]]))
                return keys[i];
        return currentName;
    }
    else {
        if (currentIndex <= 0)
            return currentName;
        for (let i = currentIndex - 1; i >= 0; i--)
            if (isButtonCanBeActive(buttons[keys[i]]))
                return keys[i];
    }
    return currentName;
};
const isButtonCanBeActive = (button) => {
    return button && !button.disabled && !button.hidden && (!button.type || button.type === 'button' || button.type === 'link' || button.type === 'text');
};
export const changeActiveButton = (buttons, direction) => {
    const _buttons = Object.assign({}, buttons);
    const keys = Object.keys(_buttons);
    let activeIndex = keys.findIndex(name => {
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
    const nextName = getNextButtonName(currentName, buttons, direction);
    const nextButton = _buttons[nextName];
    if (nextButton)
        nextButton.active = true;
    return _buttons;
};
export const setActiveButton = (buttons, name, active) => {
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
