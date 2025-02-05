import React from 'react';
import {IGridApi, IGridProps} from '@src/tabulatorGrid';

export const useApiGetDataSet = (curDataSetRef: React.RefObject<IGridProps['dataSet'] | undefined>, api: IGridApi): IGridApi['getDataSet'] => {
    return () => {
        if (!api.tableApi) return curDataSetRef.current ?? undefined;
        return api.tableApi.getData();
    };
};