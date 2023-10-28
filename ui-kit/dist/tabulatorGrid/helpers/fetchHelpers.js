export const GenerateAjaxRequestFunc = (gridApi, dataFetchCallback, extraParams) => {
    if (!dataFetchCallback)
        return undefined;
    const gridProps = gridApi.gridProps;
    gridApi.setCurrentDataFetchHandler(dataFetchCallback, extraParams);
    return (url, config, params) => {
        return new Promise((resolve, reject) => {
            const totalParams = Object.assign(Object.assign({}, params), extraParams);
            dataFetchCallback(totalParams, gridApi).then(result => {
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
