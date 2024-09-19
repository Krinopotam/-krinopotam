import {IButtonsRowApi, IFormButton, IFormButtons} from '@src/buttonsRow';

export const useApiHidden = (curButtons: IFormButtons, setCurButtons: (buttons: IFormButtons) => void): IButtonsRowApi['hidden'] => {
    return (buttonId: string, hidden?: IFormButton['hidden']): boolean => {
        if (typeof hidden === 'undefined') return !!curButtons[buttonId]?.hidden;

        const buttons = {...curButtons};
        const button = buttons[buttonId];
        if (!button) return false;

        button.hidden = hidden;
        setCurButtons({...buttons});
        return button.hidden;
    };
};
