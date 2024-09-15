import {ITreeSelectApi} from '@src/treeSelect';
import runDebounce from 'lodash.debounce';

export const useApiFetchData = (dataFetcher: (searchString: string) => void, api: ITreeSelectApi): ITreeSelectApi['fetchData'] => {
    return (search = '', debounce?: boolean) => {
        const debounceFetcher = runDebounce(dataFetcher, api.getProps().debounce ?? 0);
        if (!debounce) dataFetcher(search);
        else debounceFetcher(search);
    };
};
