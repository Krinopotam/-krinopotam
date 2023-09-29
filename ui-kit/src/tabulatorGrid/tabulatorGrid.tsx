import React, {useRef, useState} from 'react';
import {ITabulatorProps, ITabulator} from '@src/tabulatorBase';
import {IButtonsRowApi, IFormButton, IFormButtons} from '@src/buttonsRow/buttonsRow';
import {IDFormModalProps, IDFormModalApi} from '@src/dynamicFormModal';
import {TPromise} from '@krinopotam/service-types';
import {IGridApi, useInitGridApi} from './hooks/api';
import {useInitialFetchData} from './hooks/initialFetchRows';
import {ContainerRender} from './renders/containerRender';
import {ITabulatorEvents} from "@src/tabulatorBase/tabulatorBase";

export interface IGridRowData extends Record<string, unknown> {
    /** Row id */
    id: string | number;
    children?: IGridRowData[];
}

export interface IGridProps {
    /** A mutable object to merge with these controls api */
    apiRef?: unknown;

    /** Grid Id */
    id?: string;

    /** Grid mode: local or remote*/
    gridMode?: 'local' | 'remote';

    /** Tree view mode */
    dataTree?: boolean;

    /** The dataTree children field name */
    dataTreeChildField?: string;

    /** The parent key field name */
    dataTreeParentField?: string;

    /** The dataTree children indentation */
    dataTreeChildIndent?: number;

    /** Grid columns */
    columns: ITabulatorProps['columns'];

    /** Grid data set */
    dataSet?: IGridRowData[];

    /** Grid class name */
    className?: string;

    buttons?: Record<'view' | 'create' | 'clone' | 'update' | 'delete' | 'filterToggle', IFormButton | null> | IFormButtons;

    /** Table can't be edited */
    readOnly?: boolean;

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

    /** Hide HeaderFilter when grid is initialized */
    headerFilterHidden?:ITabulatorProps['headerFilterHidden']

    /** Default column properties */
    columnDefaults?: ITabulatorProps['columnDefaults'];

    /** Grid events*/
    events?: ITabulatorEvents;

    // --- callbacks -----------------------------------------------------

    /** Fires when menu visibility status changed */
    onMenuVisibilityChanged?: (isVisible: boolean, gridApi: IGridApi) => void;

    /** Fires, when the dataSet changed. User can modify the dataSet before dataSet will apply */
    onDataSetChange?: (dataSet: IGridRowData[] | undefined, gridApi: IGridApi) => IGridRowData[] | void;

    /** fires when the grid trying to fetch data */
    onDataFetch?: (gridApi: IGridApi) => IGridDataSourcePromise | undefined | void;

    /** fires when the grid data fetch success */
    onDataFetchSuccess?: (dataSet: IGridRowData[] | undefined, gridApi: IGridApi) => void;

    /** fires when the grid data fetch failed */
    onDataFetchError?: (message: string, code: number, gridApi: IGridApi) => void;

    /** fires when the grid data fetch completed */
    onDataFetchCompleted?: (gridApi: IGridApi) => void;

    /** Callback executed when selected rows change */
    onSelectionChange?: (keys: string[], selectedRows: IGridRowData[], gridApi: IGridApi) => void;

    /** Callback executed when selected rows delete */
    onDelete?: (selectedRows: IGridRowData[], gridApi: IGridApi) => IGridDeletePromise | void | undefined;
}

export type IGridDataSourcePromise = TPromise<{ data: Record<string, unknown>[] }, { message: string; code: number }>;
export type IGridDeletePromise = TPromise<{ data: Record<string, unknown> }, { message: string; code: number }>;

const TabulatorGrid = (props: IGridProps): React.JSX.Element => {
    const tableRef = useRef<ITabulator>();
    const [editFormApi] = useState<IDFormModalApi>({} as IDFormModalApi);
    const [buttonsApi] = useState({} as IButtonsRowApi & { refreshButtons: () => void });
    const [gridApi] = useState((props.apiRef || {}) as IGridApi);

    useInitGridApi({gridApi, props, tableRef, editFormApi, buttonsApi});

    useInitialFetchData(gridApi);

    return <ContainerRender tableRef={tableRef} gridApi={gridApi} gridProps={props}/>
};

export default TabulatorGrid;
