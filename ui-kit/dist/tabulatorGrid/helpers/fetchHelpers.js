import { MessageBox } from '../../messageBox';
import React from 'react';
export const BaseFetchHandler = (gridApi, dataSource, params) => {
    var _a;
    const props = gridApi.gridProps;
    if (!dataSource) {
        (_a = props === null || props === void 0 ? void 0 : props.onDataFetchCompleted) === null || _a === void 0 ? void 0 : _a.call(props, gridApi);
        return;
    }
    gridApi.setIsLoading(true);
    dataSource.then(result => {
        var _a, _b;
        if (!gridApi.getIsMounted())
            return;
        (_a = props === null || props === void 0 ? void 0 : props.onDataFetchCompleted) === null || _a === void 0 ? void 0 : _a.call(props, gridApi);
        (_b = props === null || props === void 0 ? void 0 : props.onDataFetchSuccess) === null || _b === void 0 ? void 0 : _b.call(props, result.data, gridApi);
        gridApi.setIsLoading(false);
    }, error => {
        var _a, _b;
        if (!gridApi.getIsMounted())
            return;
        (_a = props === null || props === void 0 ? void 0 : props.onDataFetchCompleted) === null || _a === void 0 ? void 0 : _a.call(props, gridApi);
        (_b = props === null || props === void 0 ? void 0 : props.onDataFetchError) === null || _b === void 0 ? void 0 : _b.call(props, error.message, error.code, gridApi);
        gridApi.setIsLoading(false);
        const message = MessageBox.confirm({
            content: (React.createElement(React.Fragment, null,
                ' ',
                React.createElement("p", null, error.message),
                " ",
                React.createElement("p", null, 'Попробовать снова?'),
                ' ')),
            colorType: 'danger',
            buttons: {
                ok: {
                    onClick: () => {
                        message.destroy();
                        gridApi.fetchData(params);
                    },
                },
            },
        });
    });
    return dataSource;
};
