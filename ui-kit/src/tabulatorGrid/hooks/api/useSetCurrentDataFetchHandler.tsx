import React from 'react';
import {IGridProps} from '@src/tabulatorGrid';

export const useSetCurrentDataFetchHandler = (
    curDataFetchHandler: React.MutableRefObject<IGridProps['onDataFetch'] | undefined>,
    curDataFetchParams: React.MutableRefObject<Record<string, unknown> | undefined>
) => {
    return (dataFetchFunc?: IGridProps['onDataFetch'], params?: Record<string, unknown>) => {
        curDataFetchHandler.current = dataFetchFunc;
        curDataFetchParams.current = params;
    };
};