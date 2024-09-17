import {IGridApi, IGridRowData, IRowKey} from '@src/tabulatorGrid';
import {useRef} from 'react';

export const useApiGetSelectedRowKeys = (api: IGridApi): IGridApi['getSelectedRowKeys'] => {
    const emptyArray = useRef<IRowKey[]>([]);
    return (): IRowKey[] => {
        if (!api.tableApi) return emptyArray.current;
        const selectedRows = api.tableApi.getSelectedData() as IGridRowData[];

        const result: IRowKey[] = [];

        for (const row of selectedRows) {
            result.push(row.id);
        }

        return result;
    };
};