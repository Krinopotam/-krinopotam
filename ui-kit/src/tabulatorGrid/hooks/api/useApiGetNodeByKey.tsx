import {IGridApi, IRowKey} from '@src/tabulatorGrid';

export const useApiGetNodeByKey = (api: IGridApi): IGridApi['getNodeByKey'] => {
    return (key: IRowKey) => {
        if (!key || !api.tableApi) return undefined;
        return api.tableApi?.getRow(key);
    };
};