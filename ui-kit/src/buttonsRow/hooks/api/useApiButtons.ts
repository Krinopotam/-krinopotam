import {prepareButtons} from '@src/buttonsRow/helpers/buttonMethods';
import {IButtonRowProps, IButtonsRowApi, IFormButtons} from '@src/buttonsRow/types/types';

export const useApiButtons = (curButtons: IFormButtons, setCurButtons: (buttons: IFormButtons) => void, props: IButtonRowProps,): IButtonsRowApi['buttons'] => {
    return buttons => {
        if (typeof buttons === 'undefined') return curButtons;
        setCurButtons(prepareButtons(buttons, props));
        return buttons;
    };
};
