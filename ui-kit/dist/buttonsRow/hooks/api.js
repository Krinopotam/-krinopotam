import { useMemo, useState } from 'react';
import { MergeObjects } from '@krinopotam/js-helpers';
import { changeActiveButton, prepareButtons, setActiveButton } from '../../buttonsRow/helpers/buttonMethods';
export const useApi = (props, curButtons, setCurButtons) => {
    var _a;
    const [api] = useState(((_a = props.apiRef) !== null && _a !== void 0 ? _a : {}));
    return useMemo(() => {
        api.buttons = buttons => {
            if (typeof buttons === 'undefined')
                return curButtons;
            setCurButtons(prepareButtons(buttons, props.colorType));
            return buttons;
        };
        api.updateButtons = buttons => {
            const updatedButtons = prepareButtons(MergeObjects(curButtons, buttons), props.colorType);
            setCurButtons(updatedButtons);
            return updatedButtons;
        };
        api.setNextActive = direction => {
            const changedButtons = changeActiveButton(curButtons, direction);
            setCurButtons(changedButtons);
        };
        api.setActive = (name, active) => {
            const changedButtons = setActiveButton(curButtons, name, active);
            setCurButtons(changedButtons);
        };
        api.loading = (name, loading) => {
            const buttons = Object.assign({}, curButtons);
            const button = buttons[name];
            if (!button)
                return false;
            if (typeof loading === 'undefined')
                return !!button.loading;
            button.loading = loading;
            setCurButtons(buttons);
            return loading;
        };
        api.disabled = (name, disabled) => {
            const buttons = Object.assign({}, curButtons);
            const button = buttons[name];
            if (!button)
                return false;
            if (typeof disabled === 'undefined')
                return !!button.disabled;
            button.disabled = disabled;
            setTimeout(() => {
                setCurButtons(buttons);
            }, 0);
            return disabled;
        };
        api.hidden = (name, hidden) => {
            const buttons = Object.assign({}, curButtons);
            const button = buttons[name];
            if (!button)
                return false;
            if (typeof hidden === 'undefined')
                return !!button.hidden;
            button.hidden = hidden;
            setCurButtons(Object.assign({}, buttons));
            return hidden;
        };
        api.triggerClick = (name) => {
            var _a;
            const button = curButtons[name];
            if (!button || button.disabled || button.loading || button.hidden)
                return;
            if (button.type === 'link' && button.href)
                window.open(button.href, (_a = button.target) !== null && _a !== void 0 ? _a : '_blank');
            else if ((!button.type || button.type === 'button') && button.onClick)
                button.onClick(name, button, props.context);
        };
        api.activeTriggerClick = () => {
            var _a;
            const activeButtonName = (_a = Object.keys(curButtons).find(name => {
                const button = curButtons[name];
                if (button === null || button === void 0 ? void 0 : button.active)
                    return name;
            })) !== null && _a !== void 0 ? _a : '';
            api.triggerClick(activeButtonName);
        };
        return api;
    }, [api, curButtons, setCurButtons, props.colorType, props.context]);
};
