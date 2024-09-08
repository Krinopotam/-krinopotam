import {IButtonRowProps, IFormButton, IFormButtons} from '@src/buttonsRow';

export const prepareButtons = (buttons: IFormButtons | undefined, props: IButtonRowProps) => {
    const clonedButtons = buttons ? {...buttons} : {};
    const leftButtons: IFormButtons = {};
    const centerButtons: IFormButtons = {};
    const rightButtons: IFormButtons = {};

    const buttonsKeys = getSortedButtonsKeys(clonedButtons);

    for (const key of buttonsKeys) {
        const button = clonedButtons[key];
        if (!button) continue;
        if (!button.type) button.type = 'button';
        if (!button.position) button.position = 'right';
        if (props.colorType) button.colorType = props.colorType;

        if (button.position === 'left') leftButtons[key] = button;
        else if (button.position === 'center') centerButtons[key] = button;
        else rightButtons[key] = button;
    }

    return {...leftButtons, ...centerButtons, ...rightButtons};
};

export const getSortedButtonsKeys = (buttons: IFormButtons | undefined) => {
    if (!buttons) return [] as string[];

    const buttonsKeys = Object.keys(buttons);
    buttonsKeys.sort((key1, key2) => {
        const btn1 = buttons[key1];
        const btn2 = buttons[key2];
        const btnWeight1 = btn1?.weight ?? 0;
        const btnWeight2 = btn2?.weight ?? 0;
        if (btnWeight1 === btnWeight2) return 0;
        return btnWeight1 < btnWeight2 ? -1 : 1;
    });

    return buttonsKeys;
};

export const getNextButtonName = (currentId: string, buttons: IFormButtons, direction: 'forward' | 'backward', props: IButtonRowProps) => {
    const keys = Object.keys(buttons);

    const currentIndex = keys.findIndex(id => id === currentId);

    if (direction === 'forward') {
        if (currentIndex >= keys.length) return currentId;
        for (let i = currentIndex + 1; i < keys.length; i++) if (isButtonCanBeActive(currentId, buttons[keys[i]], props)) return keys[i];

        return currentId;
    } else {
        if (currentIndex <= 0) return currentId;
        for (let i = currentIndex - 1; i >= 0; i--) if (isButtonCanBeActive(currentId, buttons[keys[i]], props)) return keys[i];
    }

    return currentId;
};

const isButtonCanBeActive = (_buttonId: string, button: IFormButton | undefined | null, props: IButtonRowProps) => {
    return (
        button &&
        !props.disableAll &&
        !button?.disabled &&
        !button?.hidden &&
        !button?.loading &&
        (!button.type || button.type === 'button' || button.type === 'link' || button.type === 'text')
    );
};

export const changeActiveButton = (buttons: IFormButtons, direction: 'backward' | 'forward', props: IButtonRowProps) => {
    const _buttons = {...buttons};
    const keys = Object.keys(_buttons);

    let activeIndex = keys.findIndex(name => {
        const button = _buttons[name];
        if (button?.active) return true;
    });

    if (activeIndex < 0) activeIndex = 0;

    const currentName = keys[activeIndex];
    const currentButton = _buttons[currentName];
    if (currentButton) currentButton.active = false;

    const nextName = getNextButtonName(currentName, buttons, direction, props);
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
