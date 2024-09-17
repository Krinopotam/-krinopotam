import {IGridApi, IRowKey} from '@src/tabulatorGrid';
import {RowComponent} from 'tabulator-tables';

export const useApiGetPrevRowKey = (api: IGridApi): IGridApi['getPrevRowKey'] => {
    return (key: IRowKey | undefined, step?: number) => {
        if (!api.tableApi || !key) return undefined;
        if (!step) step = 1;
        let curNode: RowComponent | undefined = api.tableApi?.getRow(key);
        if (!curNode) return undefined;
        for (let i = 0; i < step; i++) {
            const prevNode = curNode?.getPrevRow();
            if (!prevNode) return curNode.getData().id;
            curNode = prevNode;
        }

        return curNode.getData().id;
    };
};