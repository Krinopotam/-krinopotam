import {IGridApi, IGridProps} from '@src/tabulatorGrid';
import {IAjaxConfig, IRequestProps} from '@src/tabulatorBase';
import {IsPromise} from '@krinopotam/js-helpers';

export const GenerateAjaxRequestFunc = (gridApi: IGridApi, onDataFetch: IGridProps['onDataFetch'], extraParams?: Record<string, unknown>) => {
    if (!onDataFetch) return undefined;
    const gridProps = gridApi.gridProps;
    gridApi.setCurrentDataFetchHandler(onDataFetch, extraParams);
    return (_url: string, _config: IAjaxConfig, params: IRequestProps) => {
        return new Promise((resolve, reject) => {
            const totalParams = {...params, ...extraParams};

            const fetchPromise = onDataFetch(totalParams, gridApi);
            if (!IsPromise(fetchPromise)) reject(new Error());
            fetchPromise.then(
                result => {
                    if (!gridApi.getIsMounted()) return;

                    if (gridProps.pagination || gridProps.progressiveLoad) resolve({data: result.data, last_page: result.last_page ?? 1});
                    else resolve(result.data); //WORKAROUND:The page module expects data in the format {data:[rows], last_page:number}. Without pagination data expected [rows]
                },
                error => {
                    reject(error);
                }
            );
        });
    };
};
