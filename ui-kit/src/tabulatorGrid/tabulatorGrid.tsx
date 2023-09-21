import 'tabulator-tables/dist/css/tabulator_simple.css';
import React, {useRef, useState} from 'react';
import {IReactTabulatorProps, ITabulator} from '../tabulatorReact';
import {IButtonsRowApi, IFormButton, IFormButtons} from '@src/buttonsRow/buttonsRow';
import {IDFormModalProps, IDFormModalApi} from '../dynamicFormModal';
import {TPromise} from '@krinopotam/service-types';
import {IGridApi, useInitGridApi} from './hooks/api';
import {useInitialFetchData} from './hooks/initialFetchRows';
import {ContainerRender} from './renders/containerRender';
import {Stylization} from './stylization';

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
    columns: IReactTabulatorProps['columns'];

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
    layout?: IReactTabulatorProps['layout'];

    /** Adjust to the data each time you load it into the table */
    layoutColumnsOnNewData?: IReactTabulatorProps['layoutColumnsOnNewData'];

    /** Grid container width*/
    width?: IReactTabulatorProps['width'];

    /** Grid container max width*/
    maxWidth?: IReactTabulatorProps['maxWidth'];

    /** Grid container min width*/
    minWidth?: IReactTabulatorProps['minWidth'];

    /** Grid height*/
    height?: IReactTabulatorProps['height'];

    /** Min grid height*/
    minHeight?: IReactTabulatorProps['minHeight'];

    /** Max grid height*/
    maxHeight?: IReactTabulatorProps['maxHeight'];

    /** allow multi select */
    multiSelect?: IReactTabulatorProps['multiSelect'];

    /** Resize a column its neighbouring column has the opposite resize applied to keep to total width of columns the same */
    resizableColumnFit?: IReactTabulatorProps['resizableColumnFit'];

    /** Row height */
    rowHeight?: IReactTabulatorProps['rowHeight'];

    /** Is the user can resize rows */
    resizableRows?: IReactTabulatorProps['resizableRows'];

    /** is columns movable */
    movableColumns?: IReactTabulatorProps['movableColumns'];

    /** is rows movable */
    movableRows?: IReactTabulatorProps['movableRows'];

    /** Group rows by field/fields data*/
    groupBy?: IReactTabulatorProps['groupBy'];

    /** Store column state in browser local storage */
    persistence?: IReactTabulatorProps['persistence'];

    /** Local storage key  */
    persistenceID?: IReactTabulatorProps['persistenceID'];

    /** Persistent layout */
    persistentLayout?: IReactTabulatorProps['persistentLayout'];

    /** Persistent Filter */
    persistentFilter?: IReactTabulatorProps['persistentFilter'];

    /** Persistent sort */
    persistentSort?: IReactTabulatorProps['persistentSort'];

    /** Frozen rows*/
    frozenRows?: IReactTabulatorProps['frozenRows'];

    /** Frozen row field name/names (default: id) */
    frozenRowsField?: IReactTabulatorProps['frozenRowsField'];

    /** Initial filter */
    initialFilter?: IReactTabulatorProps['initialFilter'];

    /** Initial sort */
    initialSort?: IReactTabulatorProps['initialSort'];

    /** Initial header filter */
    initialHeaderFilter?: IReactTabulatorProps['initialHeaderFilter'];

    /** Is the header should be visible */
    headerVisible?: IReactTabulatorProps['headerVisible'];

    /** Default column properties */
    columnDefaults?: IReactTabulatorProps['columnDefaults'];

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
    const [initQue] = useState([] as (() => void)[]);

    useInitGridApi({gridApi, props, tableRef, editFormApi, buttonsApi, initQue: initQue});
    useInitialFetchData(gridApi);

    return (
        <>
            <Stylization/>
            <ContainerRender tableRef={tableRef} gridApi={gridApi} gridProps={props}/>
        </>
    );
};

export default TabulatorGrid;
