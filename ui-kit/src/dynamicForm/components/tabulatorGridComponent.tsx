/**
 * @CheckboxComponent
 * @version 0.0.29.24
 * @link omegatester@gmail.com
 * @author Maksim Zaytsev
 * @license MIT
 */

import React, {useCallback, useMemo, useRef, useState} from 'react';

import {IDFormComponentProps, IDFormFieldProps} from './baseComponent';
import TabulatorGrid, {IGridRowData, ITabulatorProps, IGridDataSourcePromise, IGridDeletePromise, IGridApi} from '@src/tabulatorGrid';
import {IFormButton, IFormButtons} from 'src/buttonsRow';
import {IDFormModalProps} from '@src/dynamicFormModal';
import {IDFormApi} from "@src/dynamicForm";

export type {IGridRowData, IGridDataFetchPromise, IGridDataSourcePromise, IGridDeletePromise, ITabulatorRow} from '@src/tabulatorGrid';

// !used in configGenerator parsing. Don't use multi rows comments!
export interface IDFormFieldTabulatorGridProps extends Omit<IDFormFieldProps, 'width'> {
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

    /** The data tree children indentation */
    dataTreeChildIndent?: number;

    /** Grid columns */
    columns: ITabulatorProps['columns'];

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
    resizableRows?: ITabulatorProps['resizableRows'];

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
    onMenuVisibilityChanged?: (isVisible: boolean, gridApi: IGridApi, formApi: IDFormApi) => void;

    /** Fires, when the dataSet changed. User can modify the dataSet before dataSet will apply */
    onDataSetChange?: (dataSet: IGridRowData[] | undefined, gridApi: IGridApi, formApi: IDFormApi) => IGridRowData[] | void;

    /** fires when the grid trying to fetch data */
    onDataFetch?: (gridApi: IGridApi, formApi: IDFormApi) => IGridDataSourcePromise | undefined | void;

    /** fires when the grid data fetch success */
    onDataFetchSuccess?: (dataSet: IGridRowData[] | undefined, gridApi: IGridApi, formApi: IDFormApi) => void;

    /** fires when the grid data fetch failed */
    onDataFetchError?: (message: string, code: number, gridApi: IGridApi, formApi: IDFormApi) => void;

    /** fires when the grid data fetch completed */
    onDataFetchCompleted?: (gridApi: IGridApi, formApi: IDFormApi) => void;

    /** Callback executed when selected rows change */
    onSelectionChange?: (keys: string[], selectedRows: IGridRowData[], gridApi: IGridApi, formApi: IDFormApi) => void;

    /** Callback executed when selected rows delete */
    onDelete?: (selectedRows: IGridRowData[], gridApi: IGridApi, formApi: IDFormApi) => IGridDeletePromise | void | undefined;
}


interface IDFormTabulatorGridComponentProps extends IDFormComponentProps {
    fieldProps: IDFormFieldTabulatorGridProps
}

export const TabulatorGridComponent = ({formApi, fieldName, fieldProps}: IDFormTabulatorGridComponentProps): React.JSX.Element => {
    const value = formApi.model.getFieldValue(fieldName) as IGridRowData[];
    const prevDataSetRef = useRef<IGridRowData[]>();
    const prevValueRef = useRef<IGridRowData[]>();

    // Workaround: it is necessary to ensure that,
    // on the one hand, when changing the rows by the grid itself, the memorized dataSet stay the same and the grid are not re-rendered.
    // On the other hand, if the dataSet is modified by the user, the grid must re-render.
    // So the grid's memorized dataSet stays the same until it's set outside onDataSetChange.
    if (prevValueRef.current !== value) {
        prevDataSetRef.current = value;
        prevValueRef.current = value;
    }
    const curDataSet = prevDataSetRef.current;

    const [gridApi] = useState({} as IGridApi);

    const onDataSetChange = useCallback((dataSet: IGridRowData[] | undefined, gridApi:IGridApi, formApi:IDFormApi) => {
        prevValueRef.current = dataSet;
        formApi.model.setFieldValue(fieldName, dataSet ?? undefined);
        if (formApi.model.isFieldReady(fieldName)) {
            formApi.model.setFieldDirty(fieldName, true);
            formApi.model.setFieldTouched(fieldName, true);
        }
        return  fieldProps?.onDataSetChange?.(dataSet, gridApi, formApi);
    }, [fieldName, fieldProps]);

    const onDataFetch = useCallback((gridApi: IGridApi, formApi:IDFormApi) => {
        formApi.model.setFieldReady(fieldName, false);
        return fieldProps?.onDataFetch?.(gridApi, formApi);
    }, [fieldName, fieldProps]);

    const onDataFetchSuccess = useCallback((dataSet: (IGridRowData[] | undefined), gridApi: IGridApi, formApi:IDFormApi) => {
        formApi.model.setFieldReady(fieldName, true);
        return fieldProps?.onDataFetchSuccess?.(dataSet, gridApi, formApi);
    }, [fieldName, fieldProps]);

    return useMemo(() => {
        return (
            <TabulatorGrid
                id={fieldProps.id}
                apiRef={gridApi}
                gridMode={fieldProps.gridMode}
                dataTree={fieldProps.dataTree}
                dataTreeChildField={fieldProps.dataTreeChildField}
                dataTreeParentField={fieldProps.dataTreeParentField}
                dataTreeChildIndent={fieldProps.dataTreeChildIndent}
                columns={fieldProps.columns}
                dataSet={curDataSet}
                className={fieldProps.className}
                buttons={fieldProps.buttons}
                readOnly={fieldProps.readOnly}
                editFormProps={fieldProps.editFormProps}
                noHover={fieldProps.noHover}
                rowDeleteMessage={fieldProps.rowDeleteMessage}
                confirmDelete={fieldProps.confirmDelete}
                placeholder={fieldProps.placeholder}
                layout={fieldProps.layout}
                layoutColumnsOnNewData={fieldProps.layoutColumnsOnNewData}
                width={fieldProps.width}
                maxWidth={fieldProps.maxWidth}
                minWidth={fieldProps.minWidth}
                height={fieldProps.height}
                minHeight={fieldProps.minHeight}
                maxHeight={fieldProps.maxHeight}
                multiSelect={fieldProps.multiSelect}
                resizableColumnFit={fieldProps.resizableColumnFit}
                rowHeight={fieldProps.rowHeight}
                resizableRows={fieldProps.resizableRows}
                movableColumns={fieldProps.movableColumns}
                movableRows={fieldProps.movableRows}
                groupBy={fieldProps.groupBy}
                persistence={fieldProps.persistence}
                persistenceID={fieldProps.persistenceID}
                persistentLayout={fieldProps.persistentLayout}
                persistentFilter={fieldProps.persistentFilter}
                persistentSort={fieldProps.persistentSort}
                frozenRows={fieldProps.frozenRows}
                frozenRowsField={fieldProps.frozenRowsField}
                initialFilter={fieldProps.initialFilter}
                initialSort={fieldProps.initialSort}
                initialHeaderFilter={fieldProps.initialHeaderFilter}
                headerVisible={fieldProps.headerVisible}
                columnDefaults={fieldProps.columnDefaults}

                onMenuVisibilityChanged={(isVisible: boolean, gridApi: IGridApi) => fieldProps?.onMenuVisibilityChanged?.(isVisible, gridApi, formApi)}
                onDataSetChange={(dataSet: IGridRowData[] | undefined, gridApi: IGridApi) => onDataSetChange?.(dataSet, gridApi, formApi)}
                onDataFetch={(gridApi: IGridApi) => onDataFetch?.(gridApi, formApi)}
                onDataFetchSuccess={(dataSet: IGridRowData[] | undefined, gridApi: IGridApi) => onDataFetchSuccess?.(dataSet, gridApi, formApi)}
                onDataFetchError={(message: string, code: number, gridApi: IGridApi) => fieldProps?.onDataFetchError?.(message, code, gridApi, formApi)}
                onDataFetchCompleted={(gridApi: IGridApi) => fieldProps?.onDataFetchCompleted?.(gridApi, formApi)}
                onSelectionChange={(keys: string[], selectedRows: IGridRowData[], gridApi: IGridApi) => fieldProps?.onSelectionChange?.(keys, selectedRows, gridApi, formApi)}
                onDelete={(selectedRows: IGridRowData[], gridApi: IGridApi) => fieldProps?.onDelete?.(selectedRows, gridApi, formApi)}
            />
        );
    }, [gridApi, curDataSet, fieldProps, formApi, onDataSetChange, onDataFetch, onDataFetchSuccess]);
};
