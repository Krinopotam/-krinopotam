import {AnyType} from "@krinopotam/service-types";
import React from 'react';
import {IGridProps} from '@src/tabulatorGrid';

export const useSetCurrentDataFetchHandler = (
    curDataFetchHandler: React.RefObject<IGridProps['onDataFetch'] | undefined>,
    curDataFetchParams: React.RefObject<Record<string, AnyType> | undefined>
) => {
    return (dataFetchFunc?: IGridProps['onDataFetch'], params?: Record<string, AnyType>) => {
        curDataFetchHandler.current = dataFetchFunc;
        curDataFetchParams.current = params;
    };
};