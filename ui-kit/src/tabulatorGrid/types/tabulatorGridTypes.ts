import React from 'react';
import {IButtonsRowApi, IFormButton} from '@src/buttonsRow';
import {IDFormModalApi, IDFormModalProps} from '@src/dFormModal';
import {IRequestProps, ITabulator, ITabulatorProps} from '@src/tabulatorBase';
import {RowComponent, ScrollToRowPosition} from 'tabulator-tables';
import {IBreakpoints} from "@krinopotam/common-hooks/useResponsive";
import {translations} from "@src/tabulatorGrid/translations/translations";

export interface IGridRowData extends Record<string, unknown> {
    /** Row id */
    id: string | number;
    children?: IGridRowData[];
}

export interface IGridPropsBase {
    /** A mutable object to merge with these controls api */
    apiRef?: unknown;

    /** Grid Id */
    id?: string;

    /** Grid mode: local or remote*/
    gridMode?: 'local' | 'remote';

    /** Grid data set */
    dataSet?: IGridRowData[];

    /** Grid class name */
    className?: string;

    /** Grid label in header buttons row */
    headerLabel?: React.ReactNode;

    /** Grid header buttons */
    buttons?: Record<'view' | 'create' | 'clone' | 'update' | 'delete' | 'select' | 'filterToggle' | 'system', ITabulatorButton | null> | ITabulatorButtons;

    /** Grid header buttons size. Default: 'small'*/
    buttonsSize?: ITabulatorButton['size'];

    /** If true, only button icons will be displayed, without title */
    buttonsIconsOnly?: boolean;

    /** Grid header buttons size. Default: 'right'*/
    buttonsPosition?: ITabulatorButton['position'];

    /** Table can't be edited */
    readOnly?: boolean;

    /** Edit DFormModal parameters */
    editFormProps?: IDFormModalProps;

    /** Selection DFormModal parameters */
    selectionFormProps?: IDFormModalProps;

    /** Append row selection when using selectionFormProps (by default, the dataSet is replaced with the selected rows. This option allows you to change this behavior) */
    appendSelection?: boolean;

    /** Disable row hover effect */
    noHover?: boolean;

    /** Confirm message before rows delete */
    rowDeleteMessage?: React.ReactNode;

    /** Should confirm before delete */
    confirmDelete?: boolean;

    /** No rows placeholder */
    placeholder?: string;

    /** Selector of parent container (.className or #id). Tabulator Grid will resize height on container height change */
    resizeHeightWithParent?: string;

    /** Breakpoint for responsive design */
    responsiveBreakpoint?: IBreakpoints;

    /** Language */
    language?: keyof typeof translations;

    /** Custom translation */
    translation?: Partial<typeof translations.en>
}

export interface IGridPropsCallbacks {
    /** Fires when menu visibility status changed */
    onMenuVisibilityChanged?: (isVisible: boolean, gridApi: IGridApi) => void;

    /** special callback used to fetch remote data. If not specified, the request will not be processed. */
    onDataFetch?: (params: IRequestProps, gridApi: IGridApi) => IGridDataSourcePromise | IGridRowData[] | undefined;

    /** Called before a data fetching begins. If it returns false, then the fetch is canceled */
    onDataFetching?: (url: string, params: IRequestProps, gridApi: IGridApi) => boolean;

    /** Fires when a successful remote fetch request has been made. This callback can also be used to modify the received data before it is parsed by the table. If you use this callback it must return the data to be parsed by Tabulator, otherwise no data will be rendered. */
    onDataFetchResponse?: (dataSet: IGridRowData[], params: IRequestProps, gridApi: IGridApi) => IGridRowData[];

    /** The callback is triggered when data set loading starts (regardless of whether it is an ajax request or a ready-made dataSet is passed) */
    onDataLoading?: (dataSet: IGridRowData[] | undefined, gridApi: IGridApi) => void;

    /** The callback is triggered when dataset changed or new dataSet is loaded into the table (regardless of whether it is an ajax request or a ready-made dataSet is passed) */
    onDataLoaded?: (dataSet: IGridRowData[] | undefined, gridApi: IGridApi) => void;

    /** The callback is triggered  after data has been processed and the table has been rendered. */
    onDataProcessed?: (dataSet: IGridRowData[] | undefined, gridApi: IGridApi) => void;

    /** Fires when the grid data loading failed */
    onDataLoadError?: (message: string, code: number, gridApi: IGridApi) => void;

    /** Fires before the data change (the data set updated, rows added/deleted, etc.) */
    onDataChanged?: (dataSet: IGridRowData[] | undefined, gridApi: IGridApi) => void;

    /** Callback executed when selected rows change */
    onSelectionChange?: (data: IGridRowData[], rows: RowComponent[], selectedRows: RowComponent[], deselectedRows: RowComponent[], gridApi: IGridApi) => void;

    /** Callback executed when selected rows delete */
    onDelete?: (selectedRows: IGridRowData[], gridApi: IGridApi) => IGridDeletePromise | void | undefined;
}

export type IGridProps = IGridPropsBase & IGridPropsCallbacks & Omit<ITabulatorProps, 'data' | 'ajaxURL' | 'ajaxRequestFunc' | 'ajaxResponse'>;
export type IGridDataSourcePromise = Promise<{ data: IGridRowData[]; last_page?: number }>;
export type IGridDeletePromise = Promise<{ data: boolean; last_page?: number }>;

export type IRowKey = IGridRowData['id'];
export type IRowKeys = IRowKey | IRowKey[];

export interface IGridApi {
    /** Get grid ID */
    getId: () => string;

    /** Current grid props */
    gridProps: IGridProps;

    /** Component table instance (Tabulator) */
    tableApi: ITabulator | undefined;

    /** Get grid mounted state */
    getIsMounted: () => boolean;

    /** Get current data set*/
    getDataSet: () => IGridRowData[] | undefined;

    /** Set data set*/
    setDataSet: (dataSet: IGridRowData[] | null | undefined) => void;

    /** Get current loading state */
    getIsLoading: () => boolean;

    /** Set current loading state */
    setIsLoading: (isLoading: boolean) => void;

    /** Insert new row/rows */
    insertRows: (rowData: IGridRowData | IGridRowData[], place?: 'above' | 'below', key?: IRowKey, updateActiveRow?: boolean) => void;

    /** Update existed row/rows */
    updateRows: (rowData: IGridRowData | IGridRowData[], updateActiveRow?: boolean) => void;

    /** Delete existed row/rows by keys */
    removeRowsByKeys: (keys: IRowKeys) => void;

    /** Simple remove existed row/rows from grid without any logic (not to be confused with deleteRows) */
    removeRows: (rowData: IGridRowData | IGridRowData[]) => void;

    /** Delete existed row/rows from grid with deletion confirmation and asynchronous processing (not to be confused with removeRows) */
    deleteRows: (rowData: IGridRowData | IGridRowData[]) => void;

    /** Set active row */
    setActiveRowKey: (key: IRowKey | null, clearSelection?: boolean, scrollPosition?: ScrollToRowPosition) => void;

    /* Get active row key */
    getActiveRowKey: () => IRowKey | undefined;

    /** Get active row node */
    getActiveNode: () => RowComponent | undefined;

    /** Get active row */
    getActiveRow: () => IGridRowData | undefined;

    /* Get next row key */
    getNextRowKey: (key: IRowKey | undefined, step?: number) => IRowKey | undefined;

    /* Get previous row key */
    getPrevRowKey: (key: IRowKey | undefined, step?: number) => IRowKey | undefined;

    /** Get selected rows keys */
    getSelectedRowKeys: () => IRowKey[];

    /** Set selected row/rows keys */
    setSelectedRowKeys: (keys: IRowKeys | null | undefined, clearPrevSelection?: boolean) => void;

    /** Set selected row/rows keys */
    setSelectedRows: (rows: IGridRowData[] | undefined, clearPrevSelection?: boolean) => void;

    /** Get selected tabulator row nodes */
    getSelectedNodes: () => RowComponent[];

    /** Get selected rows */
    getSelectedRows: () => IGridRowData[];

    /**
     * @return row data (suitable as a dataSet for dForm)
     * @param node - row node
     * @param withParent - Add parent information to data
     * @param selfParent - The parent of a row must be the row itself
     * @param parentOnly - The data should not contain any data other than parent data
     * @param withChildren - The data must contain children data
     */
    getRowData: (
        node: RowComponent | undefined,
        withParent?: boolean,
        selfParent?: boolean,
        parentOnly?: boolean,
        withChildren?: boolean
    ) => Record<string, unknown>;

    /** Open columns properties dialog */
    openColumnDialog: (open: boolean) => void;

    /** Select all rows*/
    // selectAll: () => void;

    /** Select next row */
    //selectNextRow: (direction: 'next' | 'previous', ensureVisible?: boolean) => void;

    /** Select first row */
    //selectFirstRow: (ensureVisible?: boolean) => void;

    /** Select last row */
    // selectLastRow: (ensureVisible?: boolean) => void;

    /** Returns row node by key */
    getNodeByKey: (key: IRowKey) => RowComponent | undefined;

    /** Returns row by key */
    getRowByKey: (key: IRowKey) => IGridRowData | undefined;

    /** edit form api */
    editFormApi: IDFormModalApi;

    /** selection form api */
    selectionFormApi: IDFormModalApi;

    /** Buttons api */
    buttonsApi: IButtonsRowApi & { refreshButtons: () => void };

    /** Fetch data. If onDataFetch callback  is undefined,the request will use the previously set onDataFetch callback  */
    fetchData: (onDataFetch?: IGridProps['onDataFetch'], params?: Record<string, unknown>) => void;

    /** Retry fetch data (with last fetch function) */
    retryFetchData: () => void;

    /** Set current data fetch handler */
    setCurrentDataFetchHandler: (dataFetchHandler: IGridProps['onDataFetch'], params?: Record<string, unknown>) => void;

    /** Get current data fetch handler */
    getCurrentDataFetchHandler: () => [IGridProps['onDataFetch'], Record<string, unknown> | undefined];
}

export interface ITabulatorButton extends IFormButton {
    /** if no row is selected in the grid, disable the button */
    checkDisabled?: boolean;

    /** if no row is selected in the grid, hide the button */
    checkHidden?: boolean;
}

export type ITabulatorButtons = Record<string, ITabulatorButton | null>;