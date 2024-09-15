import {ITreeSelectApi} from '@src/treeSelect';

export const useApiSetFetchError = (setFetchError: (value: string | undefined) => void): ITreeSelectApi['setFetchError'] => {
    return fetchError => {
        setFetchError(fetchError);
    };
};
