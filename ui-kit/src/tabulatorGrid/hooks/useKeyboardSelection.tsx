import {useLayoutEffect} from 'react';
import {IGridApi} from "@src/tabulatorGrid";
import {IKeyboardKey} from "@krinopotam/service-types";


export const useKeyboardSelection = (tableContainer: HTMLElement, gridApi: IGridApi) => {
    useLayoutEffect(() => {
        if (!tableContainer) return;
        tableContainer.tabIndex = 0;
        tableContainer.style.outline = 'none';

        tableContainer.addEventListener('keydown', function (e: KeyboardEvent) {
            switch (e.key as IKeyboardKey) {
                case 'ArrowDown':
                    onKeyDownDown(e, gridApi);
                    break;
                case 'ArrowUp':
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
