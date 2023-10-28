import React, { useMemo } from 'react';
import { MessageBox } from '../../messageBox';
export const useEvents = (gridApi, events) => {
    return useMemo(() => {
        return {
            tableBuilt: () => {
                var _a;
                (_a = events === null || events === void 0 ? void 0 : events.tableBuilt) === null || _a === void 0 ? void 0 : _a.call(events);
                gridApi.buttonsApi.refreshButtons();
            },
            dataLoading: data => {
                var _a, _b, _c;
                (_a = events === null || events === void 0 ? void 0 : events.dataLoading) === null || _a === void 0 ? void 0 : _a.call(events, data);
                (_c = (_b = gridApi.gridProps).onDataLoading) === null || _c === void 0 ? void 0 : _c.call(_b, data, gridApi);
                console.log('dataLoading');
                if (!gridApi.gridProps.progressiveLoad)
                    gridApi.setIsLoading(true);
            },
            dataLoaded: data => {
                var _a, _b, _c;
                (_a = events === null || events === void 0 ? void 0 : events.dataLoaded) === null || _a === void 0 ? void 0 : _a.call(events, data);
                (_c = (_b = gridApi.gridProps).onDataLoaded) === null || _c === void 0 ? void 0 : _c.call(_b, data, gridApi);
                if (!gridApi.getIsMounted())
                    return;
                console.log('dataLoaded');
                if (!gridApi.gridProps.progressiveLoad)
                    gridApi.setIsLoading(false);
            },
            dataLoadError: error => {
                var _a, _b, _c;
                (_a = events === null || events === void 0 ? void 0 : events.dataLoadError) === null || _a === void 0 ? void 0 : _a.call(events, error);
                const err = error;
                (_c = (_b = gridApi.gridProps).onDataLoadError) === null || _c === void 0 ? void 0 : _c.call(_b, err.message, err.code, gridApi);
                console.log('dataLoadError', error);
                if (!gridApi.getIsMounted())
                    return;
                gridApi.setIsLoading(false);
                const message = MessageBox.confirm({
                    content: (React.createElement("div", null,
                        React.createElement("p", null, error.message),
                        " ",
                        React.createElement("p", null, 'Попробовать снова?'))),
                    colorType: 'danger',
                    buttons: {
                        ok: {
                            onClick: () => {
                                message.destroy();
                                gridApi.retryFetchData();
                            },
                        },
                    },
                });
            },
            rowDblClick: (event, row) => {
                var _a;
                (_a = events === null || events === void 0 ? void 0 : events.rowDblClick) === null || _a === void 0 ? void 0 : _a.call(events, event, row);
                gridApi.buttonsApi.triggerClick('update');
            },
            activeRowChanged: row => {
                var _a;
                (_a = events === null || events === void 0 ? void 0 : events.activeRowChanged) === null || _a === void 0 ? void 0 : _a.call(events, row);
                gridApi.buttonsApi.refreshButtons();
            },
        };
    }, [events, gridApi]);
};
