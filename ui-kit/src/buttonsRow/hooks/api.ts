import {useMemo, useState} from 'react';
import {MergeObjects} from '@krinopotam/js-helpers';
import {IButtonRowProps, IButtonsRowApi, IFormButton, IFormButtons} from '@src/buttonsRow';
import {changeActiveButton, prepareButtons, setActiveButton} from '@src/buttonsRow/helpers/buttonMethods';

export const useApi = (props: IButtonRowProps, curButtons: IFormButtons, setCurButtons: (buttons: IFormButtons) => void): IButtonsRowApi => {
    const [api] = useState((props.apiRef ?? {}) as IButtonsRowApi);
    return useMemo(() => {
        api.buttons = buttons => {
            if (typeof buttons === 'undefined') return curButtons;
            setCurButtons(prepareButtons(buttons, props.colorType));
            return buttons;
        };

        api.updateButtons = buttons => {
            const updatedButtons = prepareButtons(MergeObjects(curButtons, buttons), props.colorType);
            setCurButtons(updatedButtons);
            return updatedButtons;
        };

        api.setNextActive = direction => {
            const changedButtons = changeActiveButton(curButtons, direction, props);
            setCurButtons(changedButtons);
        };

        api.setActive = (buttonId, active) => {
            const changedButtons = setActiveButton(curButtons, buttonId, active);
            setCurButtons(changedButtons);
        };

        api.loading = (buttonId: string, loading?: boolean): boolean => {
            const buttons = {...curButtons};
            const button = buttons[buttonId];
            if (!button) return false;

            if (typeof loading !== 'undefined') {
                button.loading = loading;
                setCurButtons({...buttons}); //Workaround to avoid error: Cannot update a component while rendering a different component.
            }

            return (typeof button.loading === 'function') ? button.loading(buttonId, button, props.context) : !!button.loading;
        };

        api.disabled = (buttonId: string, disabled?: IFormButton['disabled']): boolean => {
            const buttons = {...curButtons};
            const button = buttons[buttonId];
            if (!button) return false;

            if (typeof disabled !== 'undefined') {
                button.disabled = disabled;
                setCurButtons({...buttons}); //Workaround to avoid error: Cannot update a component while rendering a different component.
            }

            return (typeof button?.disabled === 'function') ? button.disabled(buttonId, button, props.context) : !!button.disabled;
        };

        api.hidden = (buttonId: string, hidden?: IFormButton['hidden']): boolean => {
            const buttons = {...curButtons};
            const button = buttons[buttonId];
            if (!button) return false;

            if (typeof hidden !== 'undefined') {
                button.hidden = hidden;
                setCurButtons({...buttons}); //Workaround to avoid error: Cannot update a component while rendering a different component.
            }

            return (typeof button.hidden === 'function') ? button.hidden(buttonId, button, props.context) : !!button.hidden;
        };

        api.triggerClick = (buttonId: string) => {
            const button = curButtons[buttonId];
            const disabled = (typeof button?.disabled === 'function') ? button.disabled(buttonId, button, props.context) : !!button?.disabled;
            const loading = (typeof button?.loading === 'function') ? button.loading(buttonId, button, props.context) : !!button?.loading;
            const hidden = (typeof button?.hidden === 'function') ? button.hidden(buttonId, button, props.context) : !!button?.hidden;

            if (!button || disabled || loading || hidden) return;

            if (button.type === 'link' && button.href) window.open(button.href, button.target ?? '_blank');
            else if ((!button.type || button.type === 'button' || button.type==='hotkey') && button.onClick) button.onClick(buttonId, button, props.context);
        };

        api.activeTriggerClick = () => {
            const activeButtonName =
                Object.keys(curButtons).find(name => {
                    const button = curButtons[name];
                    if (button?.active) return name;
                }) ?? '';
            api.triggerClick(activeButtonName);
        };

        api.getProps = () => props;

        return api;
    }, [api, curButtons, setCurButtons, props]);
};

