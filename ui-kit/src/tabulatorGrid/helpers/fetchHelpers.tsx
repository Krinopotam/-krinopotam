import {IGridApi, IGridDataSourcePromise} from '@src/tabulatorGrid';
import {MessageBox} from '@src/messageBox';
import React from 'react';

/** Basic handler that must be executed on any call of the dataSource Promise*/
export const BaseFetchHandler = (gridApi: IGridApi, dataSource: IGridDataSourcePromise | undefined, params?: Record<string, unknown>) => {
    const props = gridApi.gridProps;
    if (!dataSource) {
        props?.onDataFetchCompleted?.(gridApi);
        return;
    }

    gridApi.setIsLoading(true);
    dataSource.then(
        result => {
            if (!gridApi.getIsMounted()) return;
            props?.onDataFetchCompleted?.(gridApi);
            props?.onDataFetchSuccess?.(result.data, gridApi);
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
