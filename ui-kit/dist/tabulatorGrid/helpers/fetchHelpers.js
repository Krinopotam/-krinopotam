import { isPromise } from '@krinopotam/js-helpers';
export const GenerateAjaxRequestFunc = (gridApi, onDataFetch, extraParams) => {
    if (!onDataFetch)
        return undefined;
    const gridProps = gridApi.gridProps;
    gridApi.setCurrentDataFetchHandler(onDataFetch, extraParams);
    return (_url, _config, params) => {
        return new Promise((resolve, reject) => {
            const totalParams = Object.assign(Object.assign({}, params), extraParams);
            const fetchPromise = onDataFetch(totalParams, gridApi);
            if (!isPromise(fetchPromise))
                reject(new Error());
            fetchPromise.then(result => {
                var _a;
                if (!gridApi.getIsMounted())
                    return;
                if (gridProps.pagination || gridProps.progressiveLoad)
                    resolve({ data: result.data, last_page: (_a = result.last_page) !== null && _a !== void 0 ? _a : 1 });
                else
                    resolve(result.data);
            }, error => {
                reject(error);
            });
        });
    };
};
//# sourceMappingURL=fetchHelpers.js.map