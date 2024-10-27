import {IButtonsRowApi} from '@src/buttonsRow/types/types';

export const useApiLoading = (api: IButtonsRowApi): IButtonsRowApi['loading'] => {
    return (buttonId: string, loading?: boolean): boolean => {
        if (typeof loading === 'undefined') return !!api.buttons()?.[buttonId]?.loading;
        const buttons = {...api.buttons()};
        const button = buttons[buttonId];
        if (!button) return false;

        button.loading = loading;
        api.buttons({...buttons});
        return button.loading;
    };
};