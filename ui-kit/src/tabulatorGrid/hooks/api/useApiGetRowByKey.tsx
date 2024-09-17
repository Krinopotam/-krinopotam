import {IGridApi, IGridRowData, IRowKey} from '@src/tabulatorGrid';

export const useApiGetRowByKey = (api: IGridApi): IGridApi['getRowByKey'] => {
    return (key: IRowKey) => {
        return api.getNodeByKey(key)?.getData() as IGridRowData;
    };
};