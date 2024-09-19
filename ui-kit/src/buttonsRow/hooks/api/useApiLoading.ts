import {IButtonsRowApi, IFormButtons} from '@src/buttonsRow';

export const useApiLoading = (curButtons: IFormButtons, setCurButtons: (buttons: IFormButtons) => void): IButtonsRowApi['loading'] => {
    return (buttonId: string, loading?: boolean): boolean => {
        if (typeof loading === 'undefined') return !!curButtons[buttonId]?.loading;
        const buttons = {...curButtons};
        const button = buttons[buttonId];
        if (!button) return false;

        button.loading = loading;
        setCurButtons({...buttons});
        return button.loading;
    };
};