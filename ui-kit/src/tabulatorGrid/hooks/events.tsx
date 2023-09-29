import {IGridApi} from './api';
import {ITabulatorProps} from '@src/tabulatorBase';
import {useMemo} from 'react';
import dispatcher from '@src/formsDispatcher';
import {ITabulatorEvents} from "@src/tabulatorBase/tabulatorBase";

export const useEvents = (gridApi: IGridApi, events: ITabulatorEvents | undefined): ITabulatorProps['events'] => {
    return useMemo(() => {
        return {
            keyDown: (e: KeyboardEvent) => {
                events?.keyDown?.(e)

                if (!dispatcher?.isActive(gridApi.getGridId())) return;

                if (!e.ctrlKey && !e.shiftKey && e.key === 'Insert') {
                    gridApi.buttonsApi?.triggerClick('create');
                    e.stopPropagation();
                } else if (!e.ctrlKey && !e.shiftKey && e.key === 'F9') {
                    gridApi.buttonsApi?.triggerClick('clone');
                    e.stopPropagation();
                } else if (!e.ctrlKey && !e.shiftKey && (e.key === 'F2' || e.key === 'Enter')) {
                    gridApi.buttonsApi?.triggerClick('update');
                    e.stopPropagation();
                } else if (!e.ctrlKey && !e.shiftKey && e.key === 'Delete') {
                    gridApi.buttonsApi?.triggerClick('delete');
                    e.stopPropagation();
                }
            },
            rowDblClick: (event, row) => {
                events?.rowDblClick?.(event, row);
                gridApi.buttonsApi.triggerClick('update');
            },
            activeRowChanged: (row) => {
                events?.activeRowChanged?.(row);
                gridApi.buttonsApi.refreshButtons();
            },
            tableBuilt:()=>{
                events?.tableBuilt?.();
                gridApi.buttonsApi.refreshButtons();
            }
        };
    }, [events, gridApi]);
};
