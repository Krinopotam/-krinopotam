import {IGridApi} from './api';
import {ITabulatorProps} from '@src/tabulatorBase';
import React, {useMemo} from 'react';
import {ITabulatorEvents} from '@src/tabulatorBase/tabulatorBase';
import {MessageBox} from '@src/messageBox';

export const useEvents = (gridApi: IGridApi, events: ITabulatorEvents | undefined): ITabulatorProps['events'] => {
    return useMemo(() => {
        return {
            tableBuilt: () => {
                events?.tableBuilt?.();
                gridApi.buttonsApi.refreshButtons();
            },
            dataLoading: data => {
                events?.dataLoading?.(data);
                gridApi.gridProps.onDataLoading?.(data, gridApi);

                if (!gridApi.gridProps.progressiveLoad) gridApi.setIsLoading(true);
            },
            dataLoaded: data => {
                events?.dataLoaded?.(data);
                gridApi.gridProps.onDataLoaded?.(data, gridApi);
                if (!gridApi.getIsMounted()) return;

                if (!gridApi.gridProps.progressiveLoad) gridApi.setIsLoading(false);
            },
            dataLoadError: error => {
                events?.dataLoadError?.(error);
                const err = error as unknown as {message: string; code: number};
                gridApi.gridProps.onDataLoadError?.(err.message, err.code, gridApi);

                if (!gridApi.getIsMounted()) return;
                gridApi.setIsLoading(false);
                const message = MessageBox.confirm({
                    content: (
                        <div>
                            <p>
                                <b>{error.message}</b>
                            </p>
                            {error.stack && import.meta.env.MODE === 'development' ? <p>{error.stack}</p> : ''}
                            <p>{'Попробовать снова?'}</p>
                        </div>
                    ),
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
                events?.rowDblClick?.(event, row);
                gridApi.buttonsApi.triggerClick('update');
            },
            activeRowChanged: row => {
                events?.activeRowChanged?.(row);
                gridApi.buttonsApi.refreshButtons();
            },
        };
    }, [events, gridApi]);
};
