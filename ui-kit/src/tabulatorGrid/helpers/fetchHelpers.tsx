import {IGridApi, IGridDataSourcePromise, IGridRowData} from '@src/tabulatorGrid';
import {MessageBox} from '@src/messageBox';
import {IRequestProps} from '@src/tabulatorBase';
import React from 'react';

/** Basic handler that must be executed on any call of the dataSource Promise*/
export const BaseFetchHandler = (gridApi: IGridApi, dataSource: IGridDataSourcePromise | undefined, params?: Record<string, unknown>) => {
    const props = gridApi.gridProps;
    if (!dataSource) {
        props?.onDataFetchSuccess?.(undefined, gridApi);
        props?.onDataFetchCompleted?.(gridApi);
        return;
    }

    gridApi.setIsLoading(true);
    dataSource.then(
        result => {
            if (!gridApi.getIsMounted()) return;
            const values = (result.data || []) as IGridRowData[];
            props?.onDataFetchCompleted?.(gridApi);
            props?.onDataFetchSuccess?.(values, gridApi);
            gridApi.setIsLoading(false);
        },
        error => {
            if (!gridApi.getIsMounted()) return;
            props?.onDataFetchCompleted?.(gridApi);
            props?.onDataFetchError?.(error.message, error.code, gridApi);
            gridApi.setIsLoading(false);
            const message = MessageBox.confirm({
                content: (
                    <>
                        {' '}
                        <p>{error.message}</p> <p>{'Попробовать снова?'}</p>{' '}
                    </>
                ),
                colorType: 'danger',
                buttons: {
                    ok: {
                        onClick: () => {
                            message.destroy();
                            gridApi.fetchData(params);
                        },
                    },
                },
            });
        }
    );

    return dataSource;
};

/** Returns pagination parameters for a data request (such as current page, filter status, sorting)*/
export const GetPaginationParams = (gridApi: IGridApi) => {
    const tableApi = gridApi.tableApi;

    const gridProps = gridApi.gridProps;

    const params: IRequestProps = {};

    if (!gridProps.pagination) return undefined;

    if (gridProps.paginationMode === 'remote') {
        params.page = 1;
        params.size = gridProps.paginationSize;
    }

    if (!tableApi) return params;

    if (gridProps.sortMode === 'remote') {
        const sorters = tableApi.getSorters() as {column?: unknown; field: string; dir: 'asc' | 'desc'}[];

        sorters.forEach(item => {
            delete item.column;
        });

        params.sort = sorters as {field: string; dir: 'asc' | 'desc'}[];
    }

    params.filter = tableApi.getFilters(true) as unknown as IRequestProps['filter'];

    return params;
};