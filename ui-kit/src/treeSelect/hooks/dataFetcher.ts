import {ITreeSelectApi, ITreeSelectNode} from '@src/treeSelect';
import {useCallback} from 'react';

export const useDataFetcher = (api: ITreeSelectApi) => {
    return useCallback(
        (searchString: string) => {
            if (!api.getIsMounted()) return;
            const treeProps = api.getProps();

            if (!treeProps.noCacheFetchedData && api.getIsAllFetched()) return;

            if (treeProps.minSearchLength && searchString.length < treeProps.minSearchLength) {
                api.setSetMynSymbols(treeProps.minSearchLength);
                api.setDataSet(undefined);
                return;
            }

            api.setSetMynSymbols(0);
            api.setSetFetchError(null);

            const dataSource = treeProps?.onDataFetch?.(searchString, api);
            if (!dataSource) {
                api.setIsAllFetched(true);
                return;
            }

            api.setIsFetching(true);
            if (!searchString) api.setDataSet(undefined);

            dataSource.then(
                (result: {data: ITreeSelectNode[]}) => {
                    if (!api.getIsMounted()) return;

                    api.setDataSet(result.data);
                    api.setIsAllFetched(api.getIsAllFetched() || !searchString);

                    if (!api.getIsReady()) {
                        api.setIsReady(true);
                        treeProps?.onReady?.();
                    }

                    api.setIsFetching(false);

                    treeProps?.onDataFetchSuccess?.(result, api);
                    treeProps?.onDataFetchComplete?.(api);
                },
                (error: {message: string}) => {
                    if (!api.getIsMounted()) return;
                    api.setSetFetchError(error.message);
                    api.setDataSet(undefined);
                    api.setIsFetching(false);
                }
            );
        },
        [api]
    );
};
