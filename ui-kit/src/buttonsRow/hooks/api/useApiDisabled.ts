import {IButtonsRowApi, IFormButton} from '@src/buttonsRow';

export const useApiDisabled = (api: IButtonsRowApi): IButtonsRowApi['disabled'] => {
    return (buttonId: string, disabled?: IFormButton['disabled']): boolean => {
        if (typeof disabled === 'undefined') return api.getProps().disableAll || !!api.buttons()?.[buttonId]?.disabled;
        const buttons = {...api.buttons()};
        const button = buttons[buttonId];
        if (!button) return false;

        button.disabled = disabled;
        api.buttons({...buttons});

        return api.getProps().disableAll || button.disabled;
    };
};
