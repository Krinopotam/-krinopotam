import {IGridApi} from '@src/tabulatorGrid';

export const useApiGetActiveNode = (api: IGridApi): IGridApi['getActiveNode'] => {
    return () => api.tableApi?.getActiveRow?.();
};