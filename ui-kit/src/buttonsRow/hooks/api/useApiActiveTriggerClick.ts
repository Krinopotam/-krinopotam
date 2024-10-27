import {IButtonsRowApi} from '@src/buttonsRow/types/types';

export const useApiActiveTriggerClick = (api: IButtonsRowApi): IButtonsRowApi['activeTriggerClick'] => {
    return () => {
        const curButtons = api.buttons();
        const activeButtonName =
            Object.keys(curButtons).find(name => {
                const button = curButtons[name];
                if (button?.active) return name;
            }) ?? '';
        api.triggerClick(activeButtonName);
    };
};
