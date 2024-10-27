import {IButtonsRowApi} from '@src/buttonsRow/types/types';

export const useApiDisableAll = (api: IButtonsRowApi): IButtonsRowApi['disableAll'] => {
    return (state: boolean) => {
        api.updateProps({disableAll: state});
    };
};
