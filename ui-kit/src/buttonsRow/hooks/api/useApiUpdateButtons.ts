import {prepareButtons} from '@src/buttonsRow/helpers/buttonMethods';
import {MergeObjects} from '@krinopotam/js-helpers/helpersObjects/mergeObjects';
import {IButtonsRowApi} from '@src/buttonsRow';

export const useApiUpdateButtons = (api: IButtonsRowApi): IButtonsRowApi['updateButtons'] => {
    return buttons => {
        const updatedButtons = prepareButtons(MergeObjects(api.buttons(), buttons), api.getProps());
        api.buttons(updatedButtons);
        return updatedButtons;
    };
};
