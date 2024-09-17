import {IGridApi, IRowKey} from '@src/tabulatorGrid';
import {ScrollToRowPosition} from 'tabulator-tables';

export const useApiSetActiveRowKey = (api: IGridApi): IGridApi['setActiveRowKey'] => {
    return (key: IRowKey | null, clearSelection?: boolean, scrollPosition?: ScrollToRowPosition) => {
        if (!api.tableApi) return;
        api.tableApi.setActiveRowByKey(key, clearSelection, scrollPosition);
    };
};