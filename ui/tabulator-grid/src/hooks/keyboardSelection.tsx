import { useLayoutEffect} from 'react';
import {IGridApi} from './api';

export const useKeyboardSelection = (tableContainer:HTMLElement, gridApi: IGridApi) => {
    useLayoutEffect(() => {
        if (!tableContainer) return;
        tableContainer.tabIndex = 0;
        tableContainer.style.outline = 'none';

        tableContainer.addEventListener('keydown', function (e: KeyboardEvent) {
            switch (e.keyCode) {
                case 40: // down arrow
                    onKeyDownDown(e, gridApi);
                    break;
                case 38: // up arrow
                    onKeyDownUp(e, gridApi);
                    break;
            }
        });
    }, [gridApi, tableContainer]);
};

const onKeyDownUp = (e: KeyboardEvent, gridApi: IGridApi) => {
    e.preventDefault();
    const prevId = gridApi.getPrevRowKey(gridApi.getActiveRowKey());
    gridApi.setActiveRowKey(prevId ?? null, true, 'top');
};

const onKeyDownDown = (e: KeyboardEvent, gridApi: IGridApi) => {
    e.preventDefault();
    const nextId = gridApi.getNextRowKey(gridApi.getActiveRowKey());
    gridApi.setActiveRowKey(nextId ?? null, true, 'bottom');
};
