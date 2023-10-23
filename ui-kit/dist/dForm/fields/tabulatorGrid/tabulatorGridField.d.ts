import { BaseField, IBaseFieldProps } from '../../../dForm/fields/base/baseField';
import React from 'react';
import { IGridApi, IGridDataSourcePromise, IGridDeletePromise, IGridProps, IGridRowData } from '../../../tabulatorGrid';
import { IRequestProps } from '../../../tabulatorBase';
export interface ITabulatorGridFieldOnlyProps extends IBaseFieldProps<TabulatorGridField> {
    value?: IGridRowData[];
    resizeHeightWithForm?: boolean;
    onMenuVisibilityChanged?: (isVisible: boolean, gridApi: IGridApi, field: TabulatorGridField) => void;
    onDataLoaded?: (dataSet: IGridRowData[] | undefined, gridApi: IGridApi, field: TabulatorGridField) => void;
    onDataSetChange?: (dataSet: IGridRowData[] | undefined, gridApi: IGridApi, field: TabulatorGridField) => IGridRowData[] | void;
    onDataFetch?: (gridApi: IGridApi, params: IRequestProps, field: TabulatorGridField) => IGridDataSourcePromise | undefined;
    onDataFetchSuccess?: (dataSet: IGridRowData[] | undefined, gridApi: IGridApi, field: TabulatorGridField) => void;
    onDataFetchError?: (message: string, code: number, gridApi: IGridApi, field: TabulatorGridField) => void;
    onDataFetchCompleted?: (gridApi: IGridApi, field: TabulatorGridField) => void;
    onSelectionChange?: (keys: string[], selectedRows: IGridRowData[], gridApi: IGridApi, field: TabulatorGridField) => void;
    onDelete?: (selectedRows: IGridRowData[], gridApi: IGridApi, field: TabulatorGridField) => IGridDeletePromise | void | undefined;
}
export type ITabulatorGridFieldProps = ITabulatorGridFieldOnlyProps & Omit<IGridProps, 'placeholder' | 'dataSet' | 'onReady' | 'onDataLoaded' | 'onDataSetChange' | 'onDataFetch' | 'onDataFetchSuccess' | 'onDataFetchError' | 'onDataFetchCompleted' | 'onSelectionChange' | 'onDelete'>;
export declare class TabulatorGridField extends BaseField<ITabulatorGridFieldProps> {
    protected render(): React.JSX.Element;
}
