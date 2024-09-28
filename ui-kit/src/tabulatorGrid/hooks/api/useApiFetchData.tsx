import {AnyType} from "@krinopotam/service-types";
import {IGridApi, IGridProps} from '@src/tabulatorGrid';
import {GenerateAjaxRequestFunc} from '@src/tabulatorGrid/helpers/fetchHelpers';

export const useApiFetchData = (gridApi: IGridApi): IGridApi['fetchData'] => {
    return (dataFetchHandler?: IGridProps['onDataFetch'], params?: Record<string, AnyType>) => {
        const table = gridApi.tableApi;
        if (!table) return;

        table.modules.page.dataChanging = true; //WORKAROUND: by default dataChanging=false and tabulator will reset params
        table.modules.ajax.setUrl('-'); //WORKAROUND^ Tabulator will request ajax data only when ((!data && url) || typeof dataSet === 'string')

        if (dataFetchHandler) table.modules.ajax.loaderPromise = GenerateAjaxRequestFunc(gridApi, dataFetchHandler, params); //WORKAROUND: update current table AjaxRequestFunc

        table.setData(undefined, params).then();
    };
};