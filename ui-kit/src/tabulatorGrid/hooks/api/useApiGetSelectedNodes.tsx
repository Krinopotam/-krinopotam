import {IGridApi} from '@src/tabulatorGrid';
import {RowComponent} from 'tabulator-tables';

export const useApiGetSelectedNodes = (api: IGridApi): IGridApi['getSelectedNodes'] => {
    return (): RowComponent[] => api.tableApi?.getSelectedRows?.() ?? [];
};