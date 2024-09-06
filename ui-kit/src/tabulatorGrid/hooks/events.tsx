import {ITabulatorProps} from '@src/tabulatorBase';
import React, {useMemo} from 'react';
import {MessageBox} from '@src/messageBox';
import {IsDebugMode} from "@krinopotam/common-hooks";
import {IGridApi, IGridProps} from "@src/tabulatorGrid";
import {useTranslate} from "@src/_shared/hooks/useTranslate";
import {translations} from "@src/tabulatorGrid/translations/translations";

export const useEvents = (gridApi: IGridApi, gridProps: IGridProps): ITabulatorProps['events'] => {
    const events = gridProps.events
    const t = useTranslate(gridProps.language, translations, gridProps.translation);
    return useMemo(() => {
        return {
            tableBuilt: () => {
                events?.tableBuilt?.();
                gridApi.getButtonsApi().refreshButtons();
            },
            dataLoading: data => {
                events?.dataLoading?.(data);
                gridApi.getProps().onDataLoading?.(data, gridApi);

                if (!gridApi.getProps().progressiveLoad) gridApi.setIsLoading(true);
            },
            dataLoaded: data => {
                events?.dataLoaded?.(data);
                gridApi.getProps().onDataLoaded?.(data, gridApi);
                if (!gridApi.getIsMounted()) return;

                if (!gridApi.getProps().progressiveLoad) gridApi.setIsLoading(false);
            },
            dataProcessed: data => {
                events?.dataProcessed?.(data);
                gridApi.getProps().onDataProcessed?.(data, gridApi);

                //console.log(data)
                //gridApi.setSelectedRowKeys([1,2,3])
            },
            dataLoadError: error => {
                events?.dataLoadError?.(error);
                const err = error as unknown as { message: string; code: number };
                gridApi.getProps().onDataLoadError?.(err.message, err.code, gridApi);

                if (!gridApi.getIsMounted()) return;
                gridApi.setIsLoading(false);

                MessageBox.destroyAll()
                const message = MessageBox.confirm({
                    language: gridApi.getProps().language,
                    content: (
                        <div>
                            <p>
                                <b>{error.message}</b>
                            </p>
                            {error.stack && IsDebugMode() ? <p>{error.stack}</p> : ''}
                            <p>{t('tryAgainQt')}</p>
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
                gridApi.getButtonsApi().triggerClick('update');
            },
            activeRowChanged: row => {
                events?.activeRowChanged?.(row);
                gridApi.getButtonsApi().refreshButtons();
            },
            rowSelectionChanged: (data, rows, selectedRows, deselectedRows) => {
                events?.rowSelectionChanged?.(data, rows, selectedRows, deselectedRows);
                gridApi.getProps().onSelectionChange?.(data, rows, selectedRows, deselectedRows, gridApi);
            },
        };
    }, [events, gridApi, t]);
};
