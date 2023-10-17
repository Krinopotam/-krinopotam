import { useMemo } from 'react';
export const useEvents = (gridApi, events) => {
    return useMemo(() => {
        return {
            rowDblClick: (event, row) => {
                var _a;
                (_a = events === null || events === void 0 ? void 0 : events.rowDblClick) === null || _a === void 0 ? void 0 : _a.call(events, event, row);
                gridApi.buttonsApi.triggerClick('update');
            },
            activeRowChanged: (row) => {
                var _a;
                (_a = events === null || events === void 0 ? void 0 : events.activeRowChanged) === null || _a === void 0 ? void 0 : _a.call(events, row);
                gridApi.buttonsApi.refreshButtons();
            },
            tableBuilt: () => {
                var _a;
                (_a = events === null || events === void 0 ? void 0 : events.tableBuilt) === null || _a === void 0 ? void 0 : _a.call(events);
                gridApi.buttonsApi.refreshButtons();
            }
        };
    }, [events, gridApi]);
};
