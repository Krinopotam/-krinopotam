import {IGridApi, IGridRowData, IRowKey} from '@src/tabulatorGrid';
import {useCallback} from 'react';
import {IsArray} from '@krinopotam/js-helpers/helpersObjects/isArray';

export const useApiRemoveRows = (api: IGridApi): IGridApi['removeRows'] => {
    return useCallback(
        (rows: IGridRowData | IGridRowData[]) => {
            const clonedRows: IGridRowData[] = IsArray(rows) ? [...rows] : [rows];
            const keys: IRowKey[] = [];
            for (const row of clonedRows) keys.push(row.id);
            api.removeRowsByKeys(keys);
        },
        [api]
    );
};