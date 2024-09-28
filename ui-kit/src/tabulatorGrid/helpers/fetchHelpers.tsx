import {AnyType} from "@krinopotam/service-types";
import {IGridApi, IGridProps, IGridRowData} from '@src/tabulatorGrid';
import {IAjaxConfig, IRequestProps} from '@src/tabulatorBase';
import {IsArray} from '@krinopotam/js-helpers/helpersObjects/isArray';
import {IsPromise} from '@krinopotam/js-helpers/helpersObjects/isPromise';

export const GenerateAjaxRequestFunc = (gridApi: IGridApi, onDataFetch: IGridProps['onDataFetch'], extraParams?: Record<string, AnyType>) => {
    if (!onDataFetch) return undefined;
    const gridProps = gridApi.getProps();
    gridApi.setCurrentDataFetchHandler(onDataFetch, extraParams);
    return (_url: string, _config: IAjaxConfig, params: IRequestProps) => {
        return new Promise((resolve, reject) => {
            const totalParams = {...params, ...extraParams};

            const fetchPromise = onDataFetch(totalParams, gridApi);
            if (typeof fetchPromise === 'undefined') resolve(prepareData(gridProps, {data: []}));
            if (!IsPromise(fetchPromise)) {
                if (IsArray(fetchPromise)) resolve(prepareData(gridProps, {data: fetchPromise}));
                else reject(new Error());

                return;
            }

            fetchPromise.then(
                result => {
                    if (!gridApi.getIsMounted()) return;
                    resolve(prepareData(gridProps, result));
                },
                error => {
                    reject(error);
                }
            );
        });
    };
};

const prepareData = (gridProps: IGridProps, result: {data: IGridRowData[]; last_page?: number}) => {
    //WORKAROUND:The page module expects data in the format {data:[rows], last_page:number}. Without pagination data expected [rows]
    if (gridProps.pagination || gridProps.progressiveLoad) return {data: result.data, last_page: result.last_page ?? 1};
    else return result.data;
};
