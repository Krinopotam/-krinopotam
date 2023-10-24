import {BaseField, IBaseFieldProps} from '@src/dForm/fields/base/baseField';
import React from 'react';
import {TabulatorGridFieldRender} from '@src/dForm/fields/tabulatorGrid/tabulatorGridFieldRender';
import {IGridApi, IGridDataSourcePromise, IGridDeletePromise, IGridProps, IGridRowData} from '@src/tabulatorGrid';
import {IRequestProps} from '@src/tabulatorBase';
export interface ITabulatorGridFieldOnlyProps extends IBaseFieldProps<TabulatorGridField> {
    /** Default value */
    value?: IGridRowData[];

    /** Auto resize height on form resize */
    resizeHeightWithForm?: boolean;

    // --- callbacks -----------------------------------------------------
    /** Fires when menu visibility status changed */
    onMenuVisibilityChanged?: (isVisible: boolean, gridApi: IGridApi, field: TabulatorGridField) => void;

    /** Fires when dataSet loading starts (regardless of whether it is an ajax request or a ready-made dataSet is passed) */
    onDataLoading?: (dataSet: IGridRowData[] | undefined, gridApi: IGridApi, field: TabulatorGridField) => void;

    /** callback is triggered when a new set of data is loaded into the table (regardless of whether it is an ajax request or a ready-made dataSet is passed) */
    onDataLoaded?: (dataSet: IGridRowData[] | undefined, gridApi: IGridApi, field: TabulatorGridField) => void;

    /** fires when the grid data loading failed */
    onDataLoadError?: (message: string, code: number, gridApi: IGridApi, field: TabulatorGridField) => void;

    /** Fires before the data change (the data set updated, rows added/deleted, etc.) */
    onDataChanged?: (dataSet: IGridRowData[] | undefined, gridApi: IGridApi,  field: TabulatorGridField) => void;

    /** special callback used to fetch remote data. If not specified, the request will not be processed */
    onDataFetchHandler?: (gridApi: IGridApi, params: IRequestProps, field: TabulatorGridField) => IGridDataSourcePromise | undefined;

    /** Callback executed when selected rows change */
    onSelectionChange?: (keys: string[], selectedRows: IGridRowData[], gridApi: IGridApi, field: TabulatorGridField) => void;

    /** Callback executed when selected rows delete */
    onDelete?: (selectedRows: IGridRowData[], gridApi: IGridApi, field: TabulatorGridField) => IGridDeletePromise | void | undefined;
}

export type ITabulatorGridFieldProps = ITabulatorGridFieldOnlyProps &
    Omit<
        IGridProps,
        | 'placeholder'
        | 'dataSet'
        | 'onReady'
        | 'onDataLoaded'
        | 'onDataLoading'
        | 'onDataLoadError'
        | 'onDataChanged'
        | 'onDataFetchHandler'
        | 'onSelectionChange'
        | 'onDelete'
    >;

export class TabulatorGridField extends BaseField<ITabulatorGridFieldProps> {
    protected render() {
        return <TabulatorGridFieldRender field={this} />;
    }
}
