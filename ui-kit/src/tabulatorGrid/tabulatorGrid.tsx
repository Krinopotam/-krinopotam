import React, {useMemo, useRef, useState} from 'react';
import {ITabulatorProps, ITabulator, IRequestProps} from '@src/tabulatorBase';
import {IButtonsRowApi, IFormButton, IFormButtons} from '@src/buttonsRow/buttonsRow';
import {IDFormModalProps, IDFormModalApi} from '@src/dFormModal';
import {TPromise} from '@krinopotam/service-types';
import {IGridApi, useInitGridApi} from './hooks/api';
import {ContainerRender} from './renders/containerRender';
import {HelpersObjects} from '@krinopotam/js-helpers';
import {RowComponent} from 'tabulator-tables';

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

    /** Grid header buttons */
    buttons?: Record<'view' | 'create' | 'clone' | 'update' | 'delete' | 'select' | 'filterToggle' | 'system', IFormButton | null> | IFormButtons;

    /** Grid header buttons size. Default: 'small'*/
    buttonsSize?: IFormButton['size'];

    /** If true, only button icons will be displayed, without title */
    buttonsIconsOnly?: boolean;

    /** Grid header buttons size. Default: 'right'*/
    buttonsPosition?: IFormButton['position'];

    /** Table can't be edited */
    readOnly?: boolean;

    /** Edit DFormModal parameters */
    editFormProps?: IDFormModalProps;

    /** Selection DFormModal parameters */
    selectionFormProps?: IDFormModalProps;

    /** Append row selection when using selectionFormProps (by default, the dataSet is replaced with the selected rows. This option allows you to change this behavior) */
    appendSelection?:boolean;

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
}

export interface IGridPropsCallbacks {
    /** Fires when menu visibility status changed */
    onMenuVisibilityChanged?: (isVisible: boolean, gridApi: IGridApi) => void;

    /** special callback used to fetch remote data. If not specified, the request will not be processed. */
    onDataFetch?: (params: IRequestProps, gridApi: IGridApi) => IGridDataSourcePromise;

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
export type IGridDataSourcePromise = TPromise<{data: IGridRowData[]; last_page?: number}, {message: string; code: number}>;
export type IGridDeletePromise = TPromise<{data: IGridRowData[]; last_page?: number}, {message: string; code: number}>;

export const TabulatorGrid = (props: IGridProps): React.JSX.Element => {
    const tabulatorProps = useSplitTabulatorProps(props);
    const tableRef = useRef<ITabulator>();
    const [editFormApi] = useState<IDFormModalApi>((props.editFormProps?.apiRef ?? {}) as IDFormModalApi);
    const [selectionFormApi] = useState<IDFormModalApi>((props.selectionFormProps?.apiRef ?? {}) as IDFormModalApi);
    const [buttonsApi] = useState({} as IButtonsRowApi & {refreshButtons: () => void});
    const [gridApi] = useState((props.apiRef || {}) as IGridApi);

    const [columnsDialog, openColumnsDialog] = useState(false);
    useInitGridApi({gridApi, props, tableRef, editFormApi, selectionFormApi, buttonsApi, openColumnsDialog: openColumnsDialog});

    return <ContainerRender tableRef={tableRef} gridApi={gridApi} gridProps={props} tabulatorProps={tabulatorProps} columnsDialog={columnsDialog} />;
};

export default TabulatorGrid;

const useSplitTabulatorProps = (props: IGridProps) => {
    return useMemo((): ITabulatorProps => {
        const result = HelpersObjects.splitObject<IGridPropsBase & IGridPropsCallbacks, ITabulatorProps>(props, {
            apiRef: true,
            id: true,
            gridMode: true,
            dataSet: true,
            className: true,
            buttons: true,
            buttonsSize: true,
            buttonsPosition: true,
            buttonsIconsOnly: true,
            readOnly: true,
            editFormProps: true,
            selectionFormProps: true,
            appendSelection:true,
            noHover: true,
            rowDeleteMessage: true,
            confirmDelete: true,
            placeholder: true,
            onMenuVisibilityChanged: true,
            onDataLoading: true,
            onDataLoadError: true,
            onDataLoaded: true,
            onDataChanged: true,
            onDataProcessed:true,
            onDataFetch: true,
            onDataFetchResponse: true,
            onSelectionChange: true,
            onDelete: true,
            resizeHeightWithParent: true,
        });

        return result[1];
    }, [props]);
};
