import React from 'react';
import {IGridProps} from '@src/tabulatorGrid';

export const useGetCurrentDataFetchHandler = (
    curDataFetchFunc: React.MutableRefObject<IGridProps['onDataFetch'] | undefined>,
    curDataFetchParams: React.MutableRefObject<Record<string, unknown> | undefined>
) => {
    return (): [IGridProps['onDataFetch'], Record<string, unknown> | undefined] => {
        return [curDataFetchFunc.current, curDataFetchParams.current];
    };
};