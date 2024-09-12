import {useCallback} from 'react';
import {ITreeSelectApi} from '@src/treeSelect';

export const useApiSetFetchError = (setFetchError: (value: string | undefined) => void): ITreeSelectApi['setFetchError'] => {
    return useCallback(
        fetchError => {
            setFetchError(fetchError);
        },
        [setFetchError]
    );
};
