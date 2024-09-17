import {IGridApi, IRowKey, IRowKeys} from '@src/tabulatorGrid';
import {IsArray} from '@krinopotam/js-helpers/helpersObjects/isArray';

export const useApiSetSelectedRowsKeys = (api: IGridApi): IGridApi['setSelectedRowKeys'] => {
    return (keys: IRowKeys | null | undefined, clearPrevSelection?: boolean) => {
        if (!api.tableApi) return;

        if (!keys || clearPrevSelection) api.tableApi?.deselectRow();

        const selKeys: IRowKey[] = IsArray(keys) ? (keys as IRowKey[]) : [keys as IRowKey];
        api.tableApi?.selectRow(selKeys);
    };
};