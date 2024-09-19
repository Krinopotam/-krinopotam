import {IButtonsRowApi, IFormButtons} from '@src/buttonsRow';

export const useApiActiveTriggerClick = (curButtons: IFormButtons, api: IButtonsRowApi): IButtonsRowApi['activeTriggerClick'] => {
    return () => {
        const activeButtonName =
            Object.keys(curButtons).find(name => {
                const button = curButtons[name];
                if (button?.active) return name;
            }) ?? '';
        api.triggerClick(activeButtonName);
    };
};
