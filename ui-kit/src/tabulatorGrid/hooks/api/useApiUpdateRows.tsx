import React from 'react';
import {IGridApi, IGridProps, IGridRowData} from '@src/tabulatorGrid';
import {IsArray} from '@krinopotam/js-helpers/helpersObjects/isArray';
import {updateTreeRows} from '@src/tabulatorGrid/helpers/updateTreeRows';

export const useApiUpdateRows = (dataSetRef: React.MutableRefObject<IGridProps['dataSet'] | undefined>, api: IGridApi): IGridApi['updateRows'] => {
    return (rows: IGridRowData[] | IGridRowData, updateActiveRow?: boolean) => {
        if (!api.tableApi) return;
        const dataTree = api.getProps().dataTree;

        const _rows: IGridRowData[] = IsArray(rows) ? [...rows] : [rows];

        for (const row of _rows) {
            if (!dataTree) api.tableApi.updateData([row]).then();
            else updateTreeRows(api, row);
        }

        dataSetRef.current = api.tableApi?.getData() || [];
        api.getProps().onDataChanged?.(dataSetRef.current, api);

        if (updateActiveRow && _rows[0]) api.setActiveRowKey(_rows[0].id, true, 'center');
        api.tableApi.setTableBodyFocus();
    };
};