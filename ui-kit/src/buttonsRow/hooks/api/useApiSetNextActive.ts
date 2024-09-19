import {changeActiveButton} from '@src/buttonsRow/helpers/buttonMethods';
import {IButtonsRowApi} from '@src/buttonsRow';

export const useApiSetNextActive = (api: IButtonsRowApi): IButtonsRowApi['setNextActive'] => {
    return direction => {
        const changedButtons = changeActiveButton(api.buttons(), direction, api.getProps());
        api.buttons(changedButtons);
    };
};
