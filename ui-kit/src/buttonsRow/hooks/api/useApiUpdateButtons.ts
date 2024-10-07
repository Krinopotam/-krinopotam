import {prepareButtons} from '@src/buttonsRow/helpers/buttonMethods';
import {IButtonsRowApi, mergeButtons} from '@src/buttonsRow';

export const useApiUpdateButtons = (api: IButtonsRowApi): IButtonsRowApi['updateButtons'] => {
    return buttons => {
        const updatedButtons = prepareButtons(mergeButtons(api.buttons(), buttons), api.getProps());
        api.buttons(updatedButtons);
        return updatedButtons;
    };
};
