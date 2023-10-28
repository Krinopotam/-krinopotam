import { IGridApi, IGridProps } from '../../tabulatorGrid';
import { IAjaxConfig, IRequestProps } from '../../tabulatorBase';
export declare const GenerateAjaxRequestFunc: (gridApi: IGridApi, dataFetchCallback: IGridProps['onDataFetch'], extraParams?: Record<string, unknown>) => ((url: string, config: IAjaxConfig, params: IRequestProps) => Promise<unknown>) | undefined;
