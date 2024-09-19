import {useState} from 'react';
import {IButtonsRowApi} from '@src/buttonsRow';

export const useApiGetButtonsApi = <T extends IButtonsRowApi>(buttonsApi?: T) => {
    const [currentButtonsApi] = useState(buttonsApi ?? ({} as T));
    return () => {
        return currentButtonsApi;
    };
};
