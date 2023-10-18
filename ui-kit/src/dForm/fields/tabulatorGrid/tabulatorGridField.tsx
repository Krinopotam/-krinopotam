import {BaseField, IBaseFieldProps} from '@src/dForm/fields/base/baseField';
import React from 'react';
import {TabulatorGridFieldRender} from '@src/dForm/fields/tabulatorGrid/tabulatorGridFieldRender';
import {IGridApi, IGridDataSourcePromise, IGridDeletePromise, IGridProps, IGridRowData} from '@src/tabulatorGrid';

export interface ITabulatorGridFieldOnlyProps extends IBaseFieldProps<TabulatorGridField> {
    /** Default value */
    value?: IGridRowData[];

    /** Auto resize height on form resize */
    resizeHeightWithForm?:boolean;

    // --- callbacks -----------------------------------------------------
    /** Fires when menu visibility status changed */
    onMenuVisibilityChanged?: (isVisible: boolean, gridApi: IGridApi, field: TabulatorGridField) => void;

    /** Fires, when the dataSet changed. User can modify the dataSet before dataSet will apply */
    onDataSetChange?: (dataSet: IGridRowData[] | undefined, gridApi: IGridApi, field: TabulatorGridField) => IGridRowData[] | void;

    /** fires when the grid trying to fetch data */
    onDataFetch?: (gridApi: IGridApi, field: TabulatorGridField) => IGridDataSourcePromise | undefined | void;

    /** fires when the grid data fetch success */
    onDataFetchSuccess?: (dataSet: IGridRowData[] | undefined, gridApi: IGridApi, field: TabulatorGridField) => void;

    /** fires when the grid data fetch failed */
    onDataFetchError?: (message: string, code: number, gridApi: IGridApi, field: TabulatorGridField) => void;

    /** fires when the grid data fetch completed */
    onDataFetchCompleted?: (gridApi: IGridApi, field: TabulatorGridField) => void;

    /** Callback executed when selected rows change */
    onSelectionChange?: (keys: string[], selectedRows: IGridRowData[], gridApi: IGridApi, field: TabulatorGridField) => void;

    /** Callback executed when selected rows delete */
    onDelete?: (selectedRows: IGridRowData[], gridApi: IGridApi, field: TabulatorGridField) => IGridDeletePromise | void | undefined;
}

export type ITabulatorGridFieldProps = ITabulatorGridFieldOnlyProps & Omit<IGridProps, 'placeholder' | 'value' | 'onReady'>;

export class TabulatorGridField extends BaseField<ITabulatorGridFieldProps> {
    protected render() {
        return <TabulatorGridFieldRender field={this} />;
    }
}
