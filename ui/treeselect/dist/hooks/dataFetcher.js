import { useCallback } from 'react';
export const useDataFetcher = (api) => {
    return useCallback((searchString) => {
        var _a, _b;
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
        const dataSource = (_b = (_a = treeProps.callbacks) === null || _a === void 0 ? void 0 : _a.onDataFetch) === null || _b === void 0 ? void 0 : _b.call(_a, searchString, api);
        if (!dataSource) {
            api.setIsAllFetched(true);
            return;
        }
        api.setIsFetching(true);
        if (!searchString)
            api.setDataSet(null);
        dataSource.then((result) => {
            var _a, _b, _c, _d, _e, _f;
            if (!api.isMounted())
                return;
            api.setDataSet(result.data);
            api.setIsAllFetched(api.getIsAllFetched() || !searchString);
            if (!api.getIsReady()) {
                api.setIsReady(true);
                (_b = (_a = treeProps === null || treeProps === void 0 ? void 0 : treeProps.callbacks) === null || _a === void 0 ? void 0 : _a.onReady) === null || _b === void 0 ? void 0 : _b.call(_a);
            }
            api.setIsFetching(false);
            (_d = (_c = treeProps.callbacks) === null || _c === void 0 ? void 0 : _c.onDataFetchSuccess) === null || _d === void 0 ? void 0 : _d.call(_c, result, api);
            (_f = (_e = treeProps.callbacks) === null || _e === void 0 ? void 0 : _e.onDataFetchComplete) === null || _f === void 0 ? void 0 : _f.call(_e, api);
        }, (error) => {
            if (!api.isMounted())
                return;
            api.setSetFetchError(error.message);
            api.setDataSet(undefined);
            api.setIsFetching(false);
        });
    }, [api]);
};
