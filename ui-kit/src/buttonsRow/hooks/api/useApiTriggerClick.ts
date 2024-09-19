import {IButtonsRowApi} from '@src/buttonsRow';

export const useApiTriggerClick = (api: IButtonsRowApi): IButtonsRowApi['triggerClick'] => {
    return (buttonId: string) => {
        const button = api.buttons()?.[buttonId];
        const props = api.getProps();

        if (!button || props.disableAll || button?.disabled || button?.loading || button?.hidden) return;

        if (button.type === 'link' && button.href) window.open(button.href, button.target ?? '_blank');
        else if ((!button.type || button.type === 'button' || button.type === 'hotkey') && button.onClick) button.onClick(buttonId, button, props.context);
    };
};
