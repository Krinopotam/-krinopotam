import {setActiveButton} from '@src/buttonsRow/helpers/buttonMethods';
import {IButtonsRowApi, IFormButtons} from '@src/buttonsRow';

export const useApiSetActive = (curButtons: IFormButtons, setCurButtons: (buttons: IFormButtons) => void): IButtonsRowApi['setActive'] => {
    return (buttonId, active) => {
        const changedButtons = setActiveButton(curButtons, buttonId, active);
        setCurButtons(changedButtons);
    };
};