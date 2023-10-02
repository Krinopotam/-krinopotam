import  {useMemo, useState} from "react";
import {HelpersObjects} from "@krinopotam/js-helpers";
import {IButtonRowProps, IButtonsRowApi, IFormButtons} from "@src/buttonsRow";
import {changeActiveButton, prepareButtons, setActiveButton} from "@src/buttonsRow/helpers/helpers";

export const useApi = (props: IButtonRowProps, curButtons: IFormButtons, setCurButtons: (buttons: IFormButtons) => void): IButtonsRowApi => {
    const [api] = useState((props.apiRef ?? {}) as IButtonsRowApi);
    return useMemo(() => {
        api.buttons = (buttons) => {
            if (typeof buttons === 'undefined') return curButtons;
            setCurButtons(prepareButtons(buttons, props.formType));
            return buttons;
        };

        api.updateButtons = (buttons) => {
            const updatedButtons = prepareButtons(HelpersObjects.mergeObjects(curButtons, buttons));
            setCurButtons(updatedButtons);
            return updatedButtons;
        };

        api.setNextActive = (direction) => {
            const changedButtons = changeActiveButton(curButtons, direction);
            setCurButtons(changedButtons);
        };

        api.setActive = (name, active) => {
            const changedButtons = setActiveButton(curButtons, name, active);
            setCurButtons(changedButtons);
        };

        api.loading = (name: string, loading?: boolean): boolean => {
            const buttons = {...curButtons};
            const button = buttons[name];
            if (!button) return false;

            if (typeof loading === 'undefined') return !!button.loading;

            button.loading = loading;
            setCurButtons(buttons);
            return loading;
        };

        api.disabled = (name: string, disabled?: boolean): boolean => {
            const buttons = {...curButtons};
            const button = buttons[name];
            if (!button) return false;

            if (typeof disabled === 'undefined') return !!button.disabled;

            button.disabled = disabled;

            setTimeout(() => {
                //Workaround to avoid error: Cannot update a component while rendering a different component.
                setCurButtons(buttons);
            }, 0);

            return disabled;
        };

        api.hidden = (name: string, hidden?: boolean): boolean => {
            const buttons = {...curButtons};
            const button = buttons[name];
            if (!button) return false;

            if (typeof hidden === 'undefined') return !!button.hidden;

            button.hidden = hidden;
            setCurButtons({...buttons});

            return hidden;
        };

        api.triggerClick = (name: string) => {
            const button = curButtons[name];
            if (!button) return;
            if (button.onClick && !button.disabled && !button.loading && !button.hidden) button.onClick(name, button, props.context);
        };

        api.activeTriggerClick = () => {
            const activeButtonName =
                Object.keys(curButtons).find((name) => {
                    const button = curButtons[name];
                    if (button?.active) return name;
                }) ?? '';
            api.triggerClick(activeButtonName);
        };

        return api;
    }, [api, curButtons, setCurButtons, props.formType, props.context]);
};

