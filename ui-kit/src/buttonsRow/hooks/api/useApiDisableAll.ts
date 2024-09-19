import {IButtonsRowApi} from '@src/buttonsRow';

export const useApiDisableAll = (api: IButtonsRowApi): IButtonsRowApi['disableAll'] => {
    return (state: boolean) => {
        api.updateProps({disableAll: state});
    };
};
