import {AnyType} from "@krinopotam/service-types";
import React from 'react';
import {IGridProps} from '@src/tabulatorGrid';

export const useGetCurrentDataFetchHandler = (
    curDataFetchFunc: React.RefObject<IGridProps['onDataFetch'] | undefined>,
    curDataFetchParams: React.RefObject<Record<string, AnyType> | undefined>
) => {
    return (): [IGridProps['onDataFetch'], Record<string, AnyType> | undefined] => {
        return [curDataFetchFunc.current, curDataFetchParams.current];
    };
};