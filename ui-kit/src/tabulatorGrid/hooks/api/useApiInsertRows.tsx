import React from 'react';
import {IGridApi, IGridProps, IGridRowData, IRowKey} from '@src/tabulatorGrid';
import {IsArray} from '@krinopotam/js-helpers/helpersObjects/isArray';
import {addTreeRows} from '@src/tabulatorGrid/helpers/addTreeRows';

export const useApiInsertRows = (dataSetRef: React.RefObject<IGridProps['dataSet'] | undefined>, api: IGridApi): IGridApi['insertRows'] => {
    return (rows: IGridRowData[] | IGridRowData, place?: 'above' | 'below', target?: IRowKey, updateActiveRow?: boolean) => {
        const tableApi = api.tableApi;
        if (!tableApi) return;

        const dataTree = api.getProps().dataTree;

        const above = place === 'above';

        const _rows: IGridRowData[] = IsArray(rows) ? [...rows] : [rows];

        for (const row of _rows) {
            if (!dataTree) tableApi.addData([row], above, target).then();
            else addTreeRows(api, [row], place, target);
        }

        dataSetRef.current = tableApi.getData() || [];
        api.getProps().onDataChanged?.(dataSetRef.current, api);

        if (updateActiveRow && _rows[0]) api.setActiveRowKey(_rows[0].id, true, 'center');

        tableApi.setTableBodyFocus();
    };
};