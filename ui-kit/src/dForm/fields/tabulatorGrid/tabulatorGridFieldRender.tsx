import React, {useCallback, useMemo, useRef, useState, useSyncExternalStore} from 'react';
import {TabulatorGridField} from '@src/dForm/fields/tabulatorGrid/tabulatorGridField';
import TabulatorGrid, {IGridApi, IGridRowData} from '@src/tabulatorGrid';

export const TabulatorGridFieldRender = ({field}: {field: TabulatorGridField}): React.JSX.Element => {
    useSyncExternalStore(field.subscribe.bind(field), field.getSnapshot.bind(field));

    const fieldProps = field.getProps();

    const value = field.getValue() as IGridRowData[];

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

    const onDataSetChange = useCallback(
        (dataSet: IGridRowData[] | undefined, gridApi: IGridApi, field: TabulatorGridField) => {
            prevValueRef.current = dataSet;
            field.setValue(dataSet ?? undefined);
            if (field.isReady()) {
                field.setDirty(true);
                field.setTouched(true); //TODO: rework field touched
            }
            return fieldProps?.onDataSetChange?.(dataSet, gridApi, field);
        },
        [fieldProps]
    );

    const onDataFetch = useCallback(
        (gridApi: IGridApi, field: TabulatorGridField) => {
            field.setReady(false);
            return fieldProps?.onDataFetch?.(gridApi, field);
        },
        [fieldProps]
    );

    const onDataFetchSuccess = useCallback(
        (dataSet: IGridRowData[] | undefined, gridApi: IGridApi, field: TabulatorGridField) => {
            field.setReady(true);
            return fieldProps?.onDataFetchSuccess?.(dataSet, gridApi, field);
        },
        [fieldProps]
    );

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
                columns={fieldProps.columns ?? []}
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
                //resizableRows={fieldProps.resizableRows}
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
                ajaxRequestFunc={fieldProps.ajaxRequestFunc}
                updateColumnDefinition={fieldProps.updateColumnDefinition}
                /** Callbacks*/
                onMenuVisibilityChanged={(isVisible: boolean, gridApi: IGridApi) => fieldProps?.onMenuVisibilityChanged?.(isVisible, gridApi, field)}
                onDataSetChange={(dataSet: IGridRowData[] | undefined, gridApi: IGridApi) => onDataSetChange?.(dataSet, gridApi, field)}
                onDataFetch={(gridApi: IGridApi) => onDataFetch?.(gridApi, field)}
                onDataFetchSuccess={(dataSet: IGridRowData[] | undefined, gridApi: IGridApi) => onDataFetchSuccess?.(dataSet, gridApi, field)}
                onDataFetchError={(message: string, code: number, gridApi: IGridApi) => fieldProps?.onDataFetchError?.(message, code, gridApi, field)}
                onDataFetchCompleted={(gridApi: IGridApi) => fieldProps?.onDataFetchCompleted?.(gridApi, field)}
                onSelectionChange={(keys: string[], selectedRows: IGridRowData[], gridApi: IGridApi) =>
                    fieldProps?.onSelectionChange?.(keys, selectedRows, gridApi, field)
                }
                onDelete={(selectedRows: IGridRowData[], gridApi: IGridApi) => fieldProps?.onDelete?.(selectedRows, gridApi, field)}
            />
        );
    }, [fieldProps, gridApi, curDataSet, field, onDataSetChange, onDataFetch, onDataFetchSuccess]);
};
