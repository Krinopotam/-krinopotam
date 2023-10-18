import React, {useMemo, useRef, useState} from 'react';
import {ITabulatorProps, ITabulator} from '@src/tabulatorBase';
import {IButtonsRowApi, IFormButton, IFormButtons} from '@src/buttonsRow/buttonsRow';
import {IDFormModalProps, IDFormModalApi} from '@src/dFormModal';
import {TPromise} from '@krinopotam/service-types';
import {IGridApi, useInitGridApi} from './hooks/api';
import {useInitialFetchData} from './hooks/initialFetchRows';
import {ContainerRender} from './renders/containerRender';
import {HelpersObjects} from '@krinopotam/js-helpers';

export interface IGridRowData extends Record<string, unknown> {
    /** Row id */
    id: string | number;
    children?: IGridRowData[];
}

export interface IGridProps_ {
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

    /** Selector of parent container (.className or #id). Tabulator Grid will resize height on container height change */
    resizeHeightWithParent?:string

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

export type IGridProps = IGridProps_ & ITabulatorProps;

export type IGridDataSourcePromise = TPromise<{data: Record<string, unknown>[]}, {message: string; code: number}>;
export type IGridDeletePromise = TPromise<{data: Record<string, unknown>}, {message: string; code: number}>;

const TabulatorGrid = (props: IGridProps): React.JSX.Element => {
    const tabulatorProps = useSplitTabulatorProps(props);
    const tableRef = useRef<ITabulator>();
    const [editFormApi] = useState<IDFormModalApi>({} as IDFormModalApi);
    const [buttonsApi] = useState({} as IButtonsRowApi & {refreshButtons: () => void});
    const [gridApi] = useState((props.apiRef || {}) as IGridApi);

    useInitGridApi({gridApi, props, tableRef, editFormApi, buttonsApi});

    useInitialFetchData(gridApi);

    return <ContainerRender tableRef={tableRef} gridApi={gridApi} gridProps={props} tabulatorProps={tabulatorProps} />;
};

export default TabulatorGrid;

const useSplitTabulatorProps = (props: IGridProps) => {
    return useMemo((): ITabulatorProps => {
        const result = HelpersObjects.splitObject<IGridProps_, ITabulatorProps>(props, {
            apiRef: true,
            id: true,
            gridMode: true,
            dataSet: true,
            className: true,
            buttons: true,
            readOnly: true,
            editFormProps: true,
            noHover: true,
            rowDeleteMessage: true,
            confirmDelete: true,
            placeholder: true,
            onMenuVisibilityChanged: true,
            onDataSetChange: true,
            onDataFetch: true,
            onDataFetchSuccess: true,
            onDataFetchError: true,
            onDataFetchCompleted: true,
            onSelectionChange: true,
            onDelete: true,
            resizeHeightWithParent:true
        });

        return result[1];
    }, [props]);
};
