import {BaseField, IBaseFieldProps} from '@src/dForm/fields/base/baseField';
import React from 'react';
import {TabulatorGridFieldRender} from '@src/dForm/fields/tabulatorGrid/tabulatorGridFieldRender';
import {IGridApi, IGridDataSourcePromise, IGridDeletePromise, IGridProps, IGridRowData} from '@src/tabulatorGrid';
import {IRequestProps} from '@src/tabulatorBase';
import {RowComponent} from 'tabulator-tables';

export interface ITabulatorGridFieldPropsBase extends IBaseFieldProps<TabulatorGridField> {
    /** Default value */
    value?: IGridRowData[];

    /** Auto resize height on form resize */
    resizeHeightWithForm?: boolean;

    /** By default, when a form is in Create mode, it does not load data even if onDataFetch callback is provided. This option changes this behavior*/
    fetchInCreateMode?: boolean;
}

export interface ITabulatorGridFieldPropsCallbacks {
    /** Fires when menu visibility status changed */
    onMenuVisibilityChanged?: (isVisible: boolean, gridApi: IGridApi, field: TabulatorGridField) => void;

    /** Fires when dataSet loading starts (regardless of whether it is an ajax request or a ready-made dataSet is passed) */
    onDataLoading?: (dataSet: IGridRowData[] | undefined, gridApi: IGridApi, field: TabulatorGridField) => void;

    /** callback is triggered when a new set of data is loaded into the table (regardless of whether it is an ajax request or a ready-made dataSet is passed) */
    onDataLoaded?: (dataSet: IGridRowData[] | undefined, gridApi: IGridApi, field: TabulatorGridField) => void;

    /** The callback is triggered  after data has been processed and the table has been rendered. */
    onDataProcessed?: (dataSet: IGridRowData[] | undefined, gridApi: IGridApi, field: TabulatorGridField) => void;

    /** fires when the grid data loading failed */
    onDataLoadError?: (message: string, code: number, gridApi: IGridApi, field: TabulatorGridField) => void;

    /** Fires before the data change (the data set updated, rows added/deleted, etc.) */
    onDataChanged?: (dataSet: IGridRowData[] | undefined, gridApi: IGridApi, field: TabulatorGridField) => void;

    /** special callback used to fetch remote data. If not specified, the request will not be processed */
    onDataFetch?: (params: IRequestProps, gridApi: IGridApi, field: TabulatorGridField) => IGridDataSourcePromise | undefined;

    /** Called before a data fetching begins. If it returns false, then the fetch is canceled */
    onDataFetching?: (url: string, params: IRequestProps, gridApi: IGridApi, field: TabulatorGridField) => boolean;

    /** Fires when a successful remote fetch request has been made. This callback can also be used to modify the received data before it is parsed by the table. If you use this callback it must return the data to be parsed by Tabulator, otherwise no data will be rendered. */
    onDataFetchResponse?: (dataSet: IGridRowData[], params: IRequestProps, gridApi: IGridApi, field: TabulatorGridField) => IGridRowData[];

    /** Callback executed when selected rows change */
    onSelectionChange?: (
        data: IGridRowData[],
        rows: RowComponent[],
        selectedRows: RowComponent[],
        deselectedRows: RowComponent[],
        gridApi: IGridApi,
        field: TabulatorGridField
    ) => void;

    /** Callback executed when selected rows delete */
    onDelete?: (selectedRows: IGridRowData[], gridApi: IGridApi, field: TabulatorGridField) => IGridDeletePromise | void | undefined;
}

export type ITabulatorGridFieldProps = ITabulatorGridFieldPropsBase &
    ITabulatorGridFieldPropsCallbacks &
    Omit<IGridProps, keyof ITabulatorGridFieldPropsCallbacks>;

export class TabulatorGridField extends BaseField<ITabulatorGridFieldProps> {
    private gridApi: IGridApi = {} as IGridApi;

    protected render() {
        const fieldProps = this.getProps();
        if (fieldProps.apiRef) this.gridApi = fieldProps.apiRef as IGridApi;
        return <TabulatorGridFieldRender field={this} gridApi={this.gridApi} />;
    }

    /** Get current grid api */
    getGridApi() {
        return this.gridApi;
    }

    /**
     * Sets a new field value, cause the field to rerender
     * *this function doesn't change the field touch and dirty statuses. You should handle it in the field component!
     * @param value - new value
     * @param noEvents - do not emit onValueChanged callback
     * @param noRerender - do not emit re-rendering
     * @param noUpdateDataSet - do not update dataSet by inner grid method
     */
    setValue(value: unknown, noEvents?: boolean, noRerender?: boolean, noUpdateDataSet?:boolean) {
        const gridProps = this.getProps();
        if (!noUpdateDataSet && !gridProps.selectionMode) this.gridApi.setDataSet(value as IGridRowData[]);
        return super.setValue(value, noEvents, noRerender)
    }

    /** Set/update grid dataSet */
    setDataSet(dataSet: IGridRowData[] | undefined, noEvents?: boolean) {
        const gridProps = this.getProps();
        if (!gridProps.selectionMode) this.setValue(dataSet, noEvents)
        else this.gridApi.setDataSet(dataSet);
    }

    /** Get current grid dataSet */
    getDataSet() {
        return this.gridApi.getDataSet()
    }
}
