import {AnyType} from "@krinopotam/service-types";
import React from 'react';
import {IGridProps} from '@src/tabulatorGrid';

export const useGetCurrentDataFetchHandler = (
    curDataFetchFunc: React.MutableRefObject<IGridProps['onDataFetch'] | undefined>,
    curDataFetchParams: React.MutableRefObject<Record<string, AnyType> | undefined>
) => {
    return (): [IGridProps['onDataFetch'], Record<string, AnyType> | undefined] => {
        return [curDataFetchFunc.current, curDataFetchParams.current];
    };
};