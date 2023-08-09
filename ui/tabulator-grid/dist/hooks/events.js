import { useMemo } from 'react';
import dispatcher from '@krinopotam/ui-forms-dispatcher';
export const useEvents = (gridApi) => {
    return useMemo(() => {
        return {
            tableBuilt: () => {
                const initQue = gridApi.getInitQue();
                for (const func of initQue) {
                    func();
                }
                initQue.length = 0;
            },
            keyDown: (e) => {
                var _a, _b, _c, _d;
                if (!(dispatcher === null || dispatcher === void 0 ? void 0 : dispatcher.isActive(gridApi.getGridId())))
                    return;
                if (!e.ctrlKey && !e.shiftKey && e.key === 'Insert') {
                    (_a = gridApi.buttonsApi) === null || _a === void 0 ? void 0 : _a.triggerClick('create');
                    e.stopPropagation();
                }
                else if (!e.ctrlKey && !e.shiftKey && e.key === 'F9') {
                    (_b = gridApi.buttonsApi) === null || _b === void 0 ? void 0 : _b.triggerClick('clone');
                    e.stopPropagation();
                }
                else if (!e.ctrlKey && !e.shiftKey && (e.key === 'F2' || e.key === 'Enter')) {
                    (_c = gridApi.buttonsApi) === null || _c === void 0 ? void 0 : _c.triggerClick('update');
                    e.stopPropagation();
                }
                else if (!e.ctrlKey && !e.shiftKey && e.key === 'Delete') {
                    (_d = gridApi.buttonsApi) === null || _d === void 0 ? void 0 : _d.triggerClick('delete');
                    e.stopPropagation();
                }
            },
            rowDblClick: () => {
                gridApi.buttonsApi.triggerClick('update');
            },
            activeRowChanged: () => {
                gridApi.buttonsApi.refreshButtons();
            },
        };
    }, [gridApi]);
};
