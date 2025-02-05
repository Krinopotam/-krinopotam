import React from 'react';
import {IGridApi, IGridProps} from '@src/tabulatorGrid';

export const useApiSetDataSet = (curDataSetRef: React.RefObject<IGridProps['dataSet']>, api: IGridApi): IGridApi['setDataSet'] => {
    return (dataSet: IGridProps['dataSet'] | null) => {
        if (!api.tableApi) return;

        curDataSetRef.current = dataSet ?? undefined;

        api.tableApi?.deselectRow();
        api.tableApi?.clearData();
        if (curDataSetRef.current?.length) api.tableApi?.setData(curDataSetRef.current);

        api.getProps().onDataChanged?.(curDataSetRef.current, api);
    };
};