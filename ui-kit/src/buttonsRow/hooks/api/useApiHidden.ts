import {IButtonsRowApi, IFormButton} from '@src/buttonsRow';

export const useApiHidden = (api: IButtonsRowApi): IButtonsRowApi['hidden'] => {
    return (buttonId: string, hidden?: IFormButton['hidden']): boolean => {
        if (typeof hidden === 'undefined') return !!api.buttons()?.[buttonId]?.hidden;

        const buttons = {...api.buttons()};
        const button = buttons[buttonId];
        if (!button) return false;

        button.hidden = hidden;
        api.buttons({...buttons});
        return button.hidden;
    };
};
