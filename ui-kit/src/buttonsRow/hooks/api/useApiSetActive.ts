import {setActiveButton} from '@src/buttonsRow/helpers/buttonMethods';
import {IButtonsRowApi} from '@src/buttonsRow/types/types';

export const useApiSetActive = (api: IButtonsRowApi): IButtonsRowApi['setActive'] => {
    return (buttonId, active) => {
        const changedButtons = setActiveButton(api.buttons(), buttonId, active);
        api.buttons(changedButtons);
    };
};
