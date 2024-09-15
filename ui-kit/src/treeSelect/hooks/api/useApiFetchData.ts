import {ITreeSelectApi} from '@src/treeSelect';
import {useCallback} from 'react';
import runDebounce from 'lodash.debounce';

export const useApiFetchData = (dataFetcher: (searchString: string) => void, api: ITreeSelectApi):ITreeSelectApi['fetchData'] => {
    return useCallback(
        (search = '', debounce?: boolean) => {
            const debounceFetcher = runDebounce(dataFetcher, api.getProps().debounce ?? 0);
            if (!debounce) dataFetcher(search);
            else debounceFetcher(search);
        },
        [api, dataFetcher]
    );
};