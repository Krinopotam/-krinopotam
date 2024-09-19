import {IButtonRowProps, IButtonsRowApi, IFormButton, IFormButtons} from '@src/buttonsRow';

export const useApiDisabled = (
    curButtons: IFormButtons,
    setCurButtons: (buttons: IFormButtons) => void,
    props: IButtonRowProps
): IButtonsRowApi['disabled'] => {
    return (buttonId: string, disabled?: IFormButton['disabled']): boolean => {
        if (typeof disabled === 'undefined') return props.disableAll || !!curButtons[buttonId]?.disabled;
        const buttons = {...curButtons};
        const button = buttons[buttonId];
        if (!button) return false;

        button.disabled = disabled;
        setCurButtons({...buttons});

        return props.disableAll || button.disabled;
    };
};
