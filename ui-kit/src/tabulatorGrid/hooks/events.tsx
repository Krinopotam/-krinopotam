import {IGridApi} from './api';
import {ITabulatorProps} from '@src/tabulatorBase';
import {useMemo} from 'react';
import {ITabulatorEvents} from "@src/tabulatorBase/tabulatorBase";

export const useEvents = (gridApi: IGridApi, events: ITabulatorEvents | undefined): ITabulatorProps['events'] => {
    return useMemo(() => {
        return {
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
