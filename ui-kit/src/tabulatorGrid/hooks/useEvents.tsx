import {AnyType} from '@krinopotam/service-types';
import {ITabulatorProps} from '@src/tabulatorBase';
import React, {useMemo} from 'react';
import {MessageBox} from '@src/messageBox';
import {IsDebugMode} from '@krinopotam/common-hooks';
import {IGridApi, IGridProps, ITabulatorButtons} from '@src/tabulatorGrid';

export const useEvents = (api: IGridApi, events: IGridProps['events']): ITabulatorProps['events'] => {
    return useMemo(() => {
        return {
            tableBuilt: () => {
                events?.tableBuilt?.();
                api.getButtonsApi().refreshButtons();
            },
            dataLoading: data => {
                events?.dataLoading?.(data);
                api.getProps().onDataLoading?.(data, api);

                if (!api.getProps().progressiveLoad) api.setIsLoading(true);
            },
            dataLoaded: data => {
                events?.dataLoaded?.(data);
                api.getProps().onDataLoaded?.(data, api);
                if (!api.getIsMounted()) return;

                if (!api.getProps().progressiveLoad) api.setIsLoading(false);
            },
            dataProcessed: data => {
                events?.dataProcessed?.(data);
                api.getProps().onDataProcessed?.(data, api);

                //console.log(data)
                //api.setSelectedRowKeys([1,2,3])
            },
            dataLoadError: error => {
                events?.dataLoadError?.(error);
                const err = error as unknown as {message: string; code: number};
                api.getProps().onDataLoadError?.(err.message, err.code, api);

                if (!api.getIsMounted()) return;
                api.setIsLoading(false);

                MessageBox.destroyAll();
                const message = MessageBox.confirm({
                    language: api.getProps().language,
                    content: (
                        <div>
                            <p>
                                <b>{error.message}</b>
                            </p>
                            {error.stack && IsDebugMode() ? <p>{error.stack}</p> : ''}
                            <p>{api.t('tryAgainQt')}</p>
                        </div>
                    ),
                    colorType: 'danger',
                    buttons: {
                        ok: {
                            onClick: () => {
                                message.destroy();
                                api.retryFetchData();
                            },
                        },
                    },
                });
            },
            rowDblClick: (event, row) => {
                events?.rowDblClick?.(event, row);
                api.getButtonsApi().triggerClick('update');
            },
            activeRowChanged: row => {
                events?.activeRowChanged?.(row);
                api.getProps().onActiveRowChanged?.(row, api);
                api.getButtonsApi().refreshButtons();
                triggerButtonEvent(api, 'onActiveRowChanged', [row, api]);
            },
            rowSelectionChanged: (data, rows, selectedRows, deselectedRows) => {
                events?.rowSelectionChanged?.(data, rows, selectedRows, deselectedRows);
                api.getProps().onSelectionChange?.(data, rows, selectedRows, deselectedRows, api);
                triggerButtonEvent(api, 'onSelectionChange', [data, rows, selectedRows, deselectedRows, api]);
            },
        };
    }, [events, api]);
};

const triggerButtonEvent = (api: IGridApi, name: 'onActiveRowChanged' | 'onSelectionChange', params: AnyType[]) => {
    const buttons = api.getButtonsApi().buttons() as ITabulatorButtons;
    if (!buttons) return;

    for (const key in buttons) {
        const button = buttons[key];
        if (button?.[name]) {
            // @ts-expect-error - pass dynamic params
            button?.[name](key, button, ...params);
        }
    }
};
