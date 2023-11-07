import { useCallback } from 'react';
export const useDataFetcher = (api) => {
    return useCallback((searchString) => {
        var _a;
        if (!api.isMounted())
            return;
        const treeProps = api.getProps();
        if (!treeProps.noCacheFetchedData && api.getIsAllFetched())
            return;
        if (treeProps.minSearchLength && searchString.length < treeProps.minSearchLength) {
            api.setSetMynSymbols(treeProps.minSearchLength);
            api.setDataSet(undefined);
            return;
        }
        api.setSetMynSymbols(0);
        api.setSetFetchError(null);
        const dataSource = (_a = treeProps === null || treeProps === void 0 ? void 0 : treeProps.onDataFetch) === null || _a === void 0 ? void 0 : _a.call(treeProps, searchString, api);
        if (!dataSource) {
            api.setIsAllFetched(true);
            return;
        }
        api.setIsFetching(true);
        if (!searchString)
            api.setDataSet(null);
        dataSource.then((result) => {
            var _a, _b, _c;
            if (!api.isMounted())
                return;
            api.setDataSet(result.data);
            api.setIsAllFetched(api.getIsAllFetched() || !searchString);
            if (!api.getIsReady()) {
                api.setIsReady(true);
                (_a = treeProps === null || treeProps === void 0 ? void 0 : treeProps.onReady) === null || _a === void 0 ? void 0 : _a.call(treeProps);
            }
            api.setIsFetching(false);
            (_b = treeProps === null || treeProps === void 0 ? void 0 : treeProps.onDataFetchSuccess) === null || _b === void 0 ? void 0 : _b.call(treeProps, result, api);
            (_c = treeProps === null || treeProps === void 0 ? void 0 : treeProps.onDataFetchComplete) === null || _c === void 0 ? void 0 : _c.call(treeProps, api);
        }, (error) => {
            if (!api.isMounted())
                return;
            api.setSetFetchError(error.message);
            api.setDataSet(undefined);
            api.setIsFetching(false);
        });
    }, [api]);
};
