import {IGridApi, IGridRowData} from '@src/tabulatorGrid';

export const useApiSetSelectedRows = (api: IGridApi): IGridApi['setSelectedRows'] => {
    return (rows: IGridRowData[] | undefined, clearPrevSelection?: boolean) => {
        if (!api.tableApi) return;

        if (!rows) return api.setSelectedRowKeys(undefined, clearPrevSelection);

        const keys = [];
        for (const row of rows) keys.push(row.id);
        api.setSelectedRowKeys(keys, clearPrevSelection);
    };
};