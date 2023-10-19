import {useEffect} from 'react';
import {IGridApi} from './api';
import {IRequestProps} from '@src/tabulatorBase';

export const useInitialFetchData = (gridApi: IGridApi) => {
    useEffect(() => {
        gridApi.fetchData(undefined, GetPaginationParams(gridApi));
    }, [gridApi]);
};

export const GetPaginationParams = (gridApi: IGridApi) => {
    const tableApi = gridApi.tableApi;

    const gridProps = gridApi.gridProps;

    const params: IRequestProps = {};

    if (!gridProps.pagination) return undefined;

    if (gridProps.paginationMode === 'remote') {
        params.page = 1;
        params.size = gridProps.paginationSize;
    }

    if (!tableApi) return params;

    if (gridProps.sortMode === 'remote') {
        const sorters = tableApi.getSorters() as {column?: unknown; field: string; dir: 'asc' | 'desc'}[];

        sorters.forEach(item => {
            delete item.column;
        });

        params.sort = sorters as {field: string; dir: 'asc' | 'desc'}[];
    }

    params.filter = tableApi.getFilters(true) as unknown as IRequestProps['filter'];

    console.log(params);
    return params;
};
