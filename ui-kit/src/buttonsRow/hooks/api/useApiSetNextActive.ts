import {changeActiveButton} from '@src/buttonsRow/helpers/buttonMethods';
import {IButtonRowProps, IButtonsRowApi, IFormButtons} from '@src/buttonsRow';

export const useApiSetNextActive = (
    curButtons: IFormButtons,
    setCurButtons: (buttons: IFormButtons) => void,
    props: IButtonRowProps
): IButtonsRowApi['setNextActive'] => {
    return direction => {
        const changedButtons = changeActiveButton(curButtons, direction, props);
        setCurButtons(changedButtons);
    };
};
