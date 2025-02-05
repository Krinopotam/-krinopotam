import React from 'react';
import {IGridApi, IGridProps, IGridRowData, IRowKeys} from '@src/tabulatorGrid';
import {IsArray} from '@krinopotam/js-helpers/helpersObjects/isArray';
import {RowComponent} from 'tabulator-tables';

export const useApiRemoveRowsByKeys = (dataSetRef: React.RefObject<IGridProps['dataSet'] | undefined>, api: IGridApi): IGridApi['removeRowsByKeys'] => {
    return (keys: IRowKeys) => {
        const table = api.tableApi;
        if (!table) return;
        const indexField = table.options.index;

        const _keys: IGridRowData['id'][] = IsArray(keys) ? [...keys] : [keys];

        let newActiveNode: RowComponent | false = false;
        let newActiveNodeCandidate: RowComponent | false = false;
        for (const key of _keys) {
            const node = table.getRow(key);
            if (!node) continue;
            if (newActiveNode && node === newActiveNode) newActiveNode = false;
            newActiveNodeCandidate = node.getNextRow() || node.getPrevRow();
            if (newActiveNodeCandidate) newActiveNode = newActiveNodeCandidate;

            const parentNode = table.options.dataTree ? node.getTreeParent() : false;
            table.deselectRow(node);
            table.deleteRow(key);
            if (parentNode) parentNode.reformat();
        }

        if (newActiveNode && indexField) newActiveNode = table.getRow(newActiveNode.getData()[indexField]); //we update the link to the node, because after deleting the node map is rebuilt and the objects are not equal to each other (glitches occur)
        table.setActiveRow(newActiveNode || null, true, 'bottom');

        dataSetRef.current = table?.getData() ?? [];

        api.getProps().onDataChanged?.(dataSetRef.current, api);

        table.setTableBodyFocus();
    };
};