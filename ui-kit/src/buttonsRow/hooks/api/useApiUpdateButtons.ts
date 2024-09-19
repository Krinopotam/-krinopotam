import {prepareButtons} from '@src/buttonsRow/helpers/buttonMethods';
import {MergeObjects} from '@krinopotam/js-helpers/helpersObjects/mergeObjects';
import {IButtonRowProps, IButtonsRowApi, IFormButtons} from '@src/buttonsRow';

export const useApiUpdateButtons = (
    curButtons: IFormButtons,
    setCurButtons: (buttons: IFormButtons) => void,
    props: IButtonRowProps
): IButtonsRowApi['updateButtons'] => {
    return buttons => {
        const updatedButtons = prepareButtons(MergeObjects(curButtons, buttons), props);
        setCurButtons(updatedButtons);
        return updatedButtons;
    };
};
