import {useMemo, useState} from 'react';
import {GetNanoId, MergeObjects} from '@krinopotam/js-helpers';
import {IButtonRowProps, IButtonsRowApi, IFormButton, IFormButtons} from '@src/buttonsRow';
import {changeActiveButton, prepareButtons, setActiveButton} from '@src/buttonsRow/helpers/buttonMethods';
import {useApiGetId} from '@src/_shared/hooks/componentApiMethods/useApiGetId';
import {useApiGetProps} from '@src/_shared/hooks/componentApiMethods/useApiGetProps';
import {useApiSetProps} from '@src/_shared/hooks/componentApiMethods/useApiSetProps';
import {useApiUpdateProps} from '@src/_shared/hooks/componentApiMethods/useApiUpdateProps';
import {useApiIsMounted} from '@src/_shared/hooks/componentApiMethods/useApiIsMointed';

export const useApi = (
    props: IButtonRowProps,
    setProps: (props: IButtonRowProps | ((prevValue: IButtonRowProps) => IButtonRowProps)) => void,
    curButtons: IFormButtons,
    setCurButtons: (buttons: IFormButtons) => void
): IButtonsRowApi => {
    const [api] = useState((props.apiRef ?? {}) as IButtonsRowApi);
    api.getId = useApiGetId(props.componentId ?? 'buttons-row-' + GetNanoId());
    api.getProps = useApiGetProps(props);
    api.setProps = useApiSetProps(setProps);
    api.updateProps = useApiUpdateProps(props, setProps);
    api.getIsMounted = useApiIsMounted();

    return useMemo(() => {
        api.buttons = buttons => {
            if (typeof buttons === 'undefined') return curButtons;
            setCurButtons(prepareButtons(buttons, props));
            return buttons;
        };

        api.updateButtons = buttons => {
            const updatedButtons = prepareButtons(MergeObjects(curButtons, buttons), props);
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
            if (typeof loading === 'undefined') return !!curButtons[buttonId]?.loading;
            const buttons = {...curButtons};
            const button = buttons[buttonId];
            if (!button) return false;

            button.loading = loading;
            setCurButtons({...buttons});
            return button.loading;
        };

        api.disabled = (buttonId: string, disabled?: IFormButton['disabled']): boolean => {
            if (typeof disabled === 'undefined') return props.disableAll || !!curButtons[buttonId]?.disabled;
            const buttons = {...curButtons};
            const button = buttons[buttonId];
            if (!button) return false;

            button.disabled = disabled;
            setCurButtons({...buttons});

            return props.disableAll || button.disabled;
        };

        //todo rework
        api.disableAll = (state: boolean) => {
            api.updateProps({disableAll: state});
        };

        api.hidden = (buttonId: string, hidden?: IFormButton['hidden']): boolean => {
            if (typeof hidden === 'undefined') return !!curButtons[buttonId]?.hidden;

            const buttons = {...curButtons};
            const button = buttons[buttonId];
            if (!button) return false;

            button.hidden = hidden;
            setCurButtons({...buttons});
            return button.hidden;
        };

        api.triggerClick = (buttonId: string) => {
            const button = curButtons[buttonId];

            if (!button || props.disableAll || button?.disabled || button?.loading || button?.hidden) return;

            if (button.type === 'link' && button.href) window.open(button.href, button.target ?? '_blank');
            else if ((!button.type || button.type === 'button' || button.type === 'hotkey') && button.onClick) button.onClick(buttonId, button, props.context);
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
