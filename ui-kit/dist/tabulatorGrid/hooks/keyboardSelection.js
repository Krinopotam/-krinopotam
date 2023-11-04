import { useLayoutEffect } from 'react';
export const useKeyboardSelection = (tableContainer, gridApi) => {
    useLayoutEffect(() => {
        if (!tableContainer)
            return;
        tableContainer.tabIndex = 0;
        tableContainer.style.outline = 'none';
        tableContainer.addEventListener('keydown', function (e) {
            switch (e.keyCode) {
                case 40:
                    onKeyDownDown(e, gridApi);
                    break;
                case 38:
                    onKeyDownUp(e, gridApi);
                    break;
            }
        });
    }, [gridApi, tableContainer]);
};
const onKeyDownUp = (e, gridApi) => {
    e.preventDefault();
    const prevId = gridApi.getPrevRowKey(gridApi.getActiveRowKey());
    gridApi.setActiveRowKey(prevId !== null && prevId !== void 0 ? prevId : null, true, 'top');
};
const onKeyDownDown = (e, gridApi) => {
    e.preventDefault();
    const nextId = gridApi.getNextRowKey(gridApi.getActiveRowKey());
    gridApi.setActiveRowKey(nextId !== null && nextId !== void 0 ? nextId : null, true, 'bottom');
};
//# sourceMappingURL=keyboardSelection.js.map