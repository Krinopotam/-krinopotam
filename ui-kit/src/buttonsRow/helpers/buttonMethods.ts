import {IFormButton, IFormButtons} from "@src/buttonsRow";
import {IFormType} from "@src/buttonsRow/buttonsRow";

export const prepareButtons = (buttons: IFormButtons | undefined, formType?: IFormType) => {
    const clonedButtons = buttons ? {...buttons} : {};
    const leftButtons: IFormButtons = {};
    const centerButtons: IFormButtons = {};
    const rightButtons: IFormButtons = {};
    for (const key in clonedButtons) {
        const button = clonedButtons[key];
        if (!button) continue;
        if (!button.type) button.type = 'button';
        if (!button.position) button.position = 'right';
        if (typeof button.danger === 'undefined' && formType === 'error') button.danger = true;
        if (button.position === 'left') leftButtons[key] = button;
        else if (button.position === 'center') centerButtons[key] = button;
        else rightButtons[key] = button;
    }

    return {...leftButtons, ...centerButtons, ...rightButtons};
};


export const getNextButtonName = (currentName: string, buttons: IFormButtons, direction: 'forward' | 'backward') => {
    const keys = Object.keys(buttons);

    const currentIndex = keys.findIndex(name => name === currentName);

    if (direction === 'forward') {
        if (currentIndex >= keys.length) return currentName;
        for (let i = currentIndex + 1; i < keys.length; i++) if (isButtonCanBeActive(buttons[keys[i]])) return keys[i];

        return currentName;
    } else {
        if (currentIndex <= 0) return currentName;
        for (let i = currentIndex - 1; i >= 0; i--) if (isButtonCanBeActive(buttons[keys[i]])) return keys[i];
    }

    return currentName;
};

const isButtonCanBeActive = (button: IFormButton | undefined | null) => {
    return button
        && !button.disabled
        && !button.hidden
        && (!button.type || button.type === 'button' || button.type === 'link')
}

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

    const nextName = getNextButtonName(currentName, buttons, direction);
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
