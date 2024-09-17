import {IGridApi} from '@src/tabulatorGrid';

export const useApiGetActiveRowKey = (api: IGridApi): IGridApi['getActiveRowKey'] => {
    return () => api.tableApi?.getActiveRowKey?.();
};