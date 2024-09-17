import {IGridApi, IGridRowData} from '@src/tabulatorGrid';

export const useApiGetActiveRow = (api: IGridApi): IGridApi['getActiveRow'] => {
    return () => {
        return api.getActiveNode()?.getData() as IGridRowData;
    };
};