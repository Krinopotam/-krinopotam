import {IGridApi, IRowKey} from '@src/tabulatorGrid';
import {RowComponent} from 'tabulator-tables';

export const useApiGetNextRowKey = (api: IGridApi): IGridApi['getNextRowKey'] => {
    return (key: IRowKey | undefined, step?: number) => {
        if (!api.tableApi || !key) return undefined;
        if (!step) step = 1;
        let curNode: RowComponent | undefined = api.tableApi?.getRow(key);
        if (!curNode) return undefined;
        for (let i = 0; i < step; i++) {
            const nextNode = curNode?.getNextRow();
            if (!nextNode) return curNode.getData().id;
            curNode = nextNode;
        }

        return curNode.getData().id;
    };
};