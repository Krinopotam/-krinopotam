import {BaseField, IBaseFieldProps,} from "@src/dForm/fields/base/baseField";
import React from "react";
import {TabulatorGridFieldRender} from "@src/dForm/fields/tabulatorGrid/tabulatorGridFieldRender";
import {ITabulatorProps} from "@src/tabulatorBase";
import {IFormButton, IFormButtons} from "@src/buttonsRow";
import {IDFormModalProps} from "@src/dynamicFormModal";
import {IGridApi, IGridDataSourcePromise, IGridDeletePromise, IGridRowData} from "@src/tabulatorGrid";

export interface ITabulatorGridFieldProps extends IBaseFieldProps<TabulatorGridField> {
    /** Grid Id */
    id?: string;

    /** Grid mode: local or remote*/
    gridMode?: 'local' | 'remote';

    /** Tree view mode */
    dataTree?: boolean;

    /** The children field name */
    dataTreeChildField?: string;

    /** The parent key field name */
    dataTreeParentField?: string;

    /** The tree data children indentation */
    dataTreeChildIndent?: number;

    /** Grid columns */
    columns?: ITabulatorProps['columns'];

    /** Grid class name */
    className?: string;

    buttons?: Record<'view' | 'create' | 'clone' | 'update' | 'delete', IFormButton | null> | IFormButtons;

    /** Edit modal controls parameters */
    editFormProps?: IDFormModalProps;

    /** Disable row hover effect */
    noHover?: boolean;

    /** Confirm message before rows delete */
    rowDeleteMessage?: React.ReactNode;

    /** Should confirm before delete */
    confirmDelete?: boolean;

    /** No rows placeholder */
    placeholder?: string;

    /** Table layout */
    layout?: ITabulatorProps['layout'];

    /** Adjust to the data each time you load it into the table */
    layoutColumnsOnNewData?: ITabulatorProps['layoutColumnsOnNewData'];

    /** Grid container width*/
    width?: ITabulatorProps['width'];

    /** Grid container max width*/
    maxWidth?: ITabulatorProps['maxWidth'];

    /** Grid container min width*/
    minWidth?: ITabulatorProps['minWidth'];

    /** Grid height*/
    height?: ITabulatorProps['height'];

    /** Min grid height*/
    minHeight?: ITabulatorProps['minHeight'];

    /** Max grid height*/
    maxHeight?: ITabulatorProps['maxHeight'];

    /** allow multi select */
    multiSelect?: ITabulatorProps['multiSelect'];

    /** Resize a column its neighbouring column has the opposite resize applied to keep to total width of columns the same */
    resizableColumnFit?: ITabulatorProps['resizableColumnFit'];

    /** Row height */
    rowHeight?: ITabulatorProps['rowHeight'];

    /** Is the user can resize rows */
    //resizableRows?: ITabulatorProps['resizableRows'];

    /** is columns movable */
    movableColumns?: ITabulatorProps['movableColumns'];

    /** is rows movable */
    movableRows?: ITabulatorProps['movableRows'];

    /** Group rows by field/fields data*/
    groupBy?: ITabulatorProps['groupBy'];

    /** Store column state in browser local storage */
    persistence?: ITabulatorProps['persistence'];

    /** Local storage key  */
    persistenceID?: ITabulatorProps['persistenceID'];

    /** Persistent layout */
    persistentLayout?: ITabulatorProps['persistentLayout'];

    /** Persistent Filter */
    persistentFilter?: ITabulatorProps['persistentFilter'];

    /** Persistent sort */
    persistentSort?: ITabulatorProps['persistentSort'];

    /** Frozen rows*/
    frozenRows?: ITabulatorProps['frozenRows'];

    /** Frozen row field name/names (default: id) */
    frozenRowsField?: ITabulatorProps['frozenRowsField'];

    /** Initial filter */
    initialFilter?: ITabulatorProps['initialFilter'];

    /** Initial sort */
    initialSort?: ITabulatorProps['initialSort'];

    /** Initial header filter */
    initialHeaderFilter?: ITabulatorProps['initialHeaderFilter'];

    /** Is the header should be visible */
    headerVisible?: ITabulatorProps['headerVisible'];

    /** Default column properties */
    columnDefaults?: ITabulatorProps['columnDefaults'];

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

export class TabulatorGridField extends BaseField<ITabulatorGridFieldProps> {
    protected render() {
        return <TabulatorGridFieldRender field={this} />
    }
}
