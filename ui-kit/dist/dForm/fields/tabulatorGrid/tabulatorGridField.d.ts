import { BaseField, IBaseFieldProps } from '../../../dForm/fields/base/baseField';
import React from 'react';
import { IGridApi, IGridDataSourcePromise, IGridDeletePromise, IGridProps, IGridRowData } from '../../../tabulatorGrid';
import { IRequestProps } from '../../../tabulatorBase';
export interface ITabulatorGridFieldPropsBase extends IBaseFieldProps<TabulatorGridField> {
    value?: IGridRowData[];
    resizeHeightWithForm?: boolean;
}
export interface ITabulatorGridFieldPropsCallbacks {
    onMenuVisibilityChanged?: (isVisible: boolean, gridApi: IGridApi, field: TabulatorGridField) => void;
    onDataLoading?: (dataSet: IGridRowData[] | undefined, gridApi: IGridApi, field: TabulatorGridField) => void;
    onDataLoaded?: (dataSet: IGridRowData[] | undefined, gridApi: IGridApi, field: TabulatorGridField) => void;
    onDataLoadError?: (message: string, code: number, gridApi: IGridApi, field: TabulatorGridField) => void;
    onDataChanged?: (dataSet: IGridRowData[] | undefined, gridApi: IGridApi, field: TabulatorGridField) => void;
    onDataFetch?: (params: IRequestProps, gridApi: IGridApi, field: TabulatorGridField) => IGridDataSourcePromise | undefined;
    onDataFetchResponse?: (dataSet: IGridRowData[], params: IRequestProps, gridApi: IGridApi, field: TabulatorGridField) => IGridRowData[];
    onSelectionChange?: (keys: string[], selectedRows: IGridRowData[], gridApi: IGridApi, field: TabulatorGridField) => void;
    onDelete?: (selectedRows: IGridRowData[], gridApi: IGridApi, field: TabulatorGridField) => IGridDeletePromise | void | undefined;
}
export type ITabulatorGridFieldProps = ITabulatorGridFieldPropsBase & ITabulatorGridFieldPropsCallbacks & Omit<IGridProps, keyof ITabulatorGridFieldPropsCallbacks | 'dataSet'>;
export declare class TabulatorGridField extends BaseField<ITabulatorGridFieldProps> {
    protected render(): React.JSX.Element;
}
