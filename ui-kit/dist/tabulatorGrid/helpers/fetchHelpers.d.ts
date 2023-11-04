import { IGridApi, IGridProps } from '../../tabulatorGrid';
import { IAjaxConfig, IRequestProps } from '../../tabulatorBase';
export declare const GenerateAjaxRequestFunc: (gridApi: IGridApi, onDataFetch: IGridProps['onDataFetch'], extraParams?: Record<string, unknown>) => ((_url: string, _config: IAjaxConfig, params: IRequestProps) => Promise<unknown>) | undefined;
