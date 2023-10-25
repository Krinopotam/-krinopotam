import {IGridApi, IGridProps} from '@src/tabulatorGrid';
import {IAjaxConfig, IRequestProps} from '@src/tabulatorBase';

export const GenerateAjaxRequestFunc = (gridApi: IGridApi, dataFetchCallback: IGridProps['onDataFetch'], extraParams?:Record<string, unknown>) => {
    if (!dataFetchCallback) return undefined;
    const gridProps = gridApi.gridProps;
    gridApi.setCurrentDataFetchHandler(dataFetchCallback, extraParams)
    return (url: string, config: IAjaxConfig, params: IRequestProps) => {
        return new Promise((resolve, reject) => {
            const totalParams = {...params, ...extraParams}
            dataFetchCallback(totalParams, gridApi).then(
                result => {
                    if (!gridApi.getIsMounted()) return;

                    if (gridProps.pagination) resolve({data: result.data, last_page: result.last_page ?? 1});
                    else resolve(result.data); //WORKAROUND:The page module expects data in the format {data:[rows], last_page:number}. Without pagination data expected [rows]
                },
                error => {
                    reject(error);
                }
            );
        });
    };
};
