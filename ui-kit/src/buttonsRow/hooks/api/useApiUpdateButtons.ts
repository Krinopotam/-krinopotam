import {mergeButtons} from "@src/buttonsRow/tools/mergeButtons";
import {prepareButtons} from '@src/buttonsRow/helpers/buttonMethods';
import {IButtonsRowApi} from '@src/buttonsRow/types/types';

export const useApiUpdateButtons = (api: IButtonsRowApi): IButtonsRowApi['updateButtons'] => {
    return buttons => {
        const updatedButtons = prepareButtons(mergeButtons(api.buttons(), buttons), api.getProps());
        api.buttons(updatedButtons);
        return updatedButtons;
    };
};
