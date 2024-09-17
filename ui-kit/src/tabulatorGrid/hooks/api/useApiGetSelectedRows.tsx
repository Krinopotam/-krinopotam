import {IGridApi, IGridRowData} from '@src/tabulatorGrid';

export const useApiGetSelectedRows = (api: IGridApi): IGridApi['getSelectedRows'] => {
    return (): IGridRowData[] => api.tableApi?.getSelectedData?.() ?? [];
};