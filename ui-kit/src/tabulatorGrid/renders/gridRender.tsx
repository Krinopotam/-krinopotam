import React, {useCallback, useEffect} from 'react';
import ReactTabulator, {ITabulator} from '@src/tabulatorBase';
import {IGridApi} from '../hooks/api';
import dispatcher from '@src/formsDispatcher';
import {IGridProps} from '../tabulatorGrid';
import {useEvents} from '../hooks/events';

const GridRender_ = (
    {
        tableRef,
        gridApi,
        gridProps,
    }: {
        tableRef: React.MutableRefObject<ITabulator | undefined>;
        gridApi: IGridApi;
        gridProps: IGridProps;
    }): React.JSX.Element => {
    const events = useEvents(gridApi, gridProps.events);

    const onTableRef = useCallback(
        (tabulatorRef: React.MutableRefObject<ITabulator>) => {
            tableRef.current = tabulatorRef.current;
            gridApi.tableApi = tabulatorRef.current;
            console.log( gridApi.tableApi)
        },
        [gridApi, tableRef]
    );

    useEffect(() => {
        dispatcher.pushToStack(gridApi.getGridId());
    }, [gridApi]);

    return (
        <ReactTabulator
            onTableRef={onTableRef}
            gridId={gridApi.getGridId()}
            dataTree={gridProps.dataTree}
            dataTreeChildField={gridProps.dataTreeChildField}
            dataTreeParentField={gridProps.dataTreeParentField}
            dataTreeChildIndent={gridProps.dataTreeChildIndent}
            dataTreeFilter={true}
            data={gridApi.getDataSet()}
            columns={gridProps.columns}
            columnDefaults={gridProps.columnDefaults}
            containerClassName={gridProps.className}
            placeholder={gridProps.placeholder ?? 'Строки отсутствуют'}
            layout={gridProps.layout ?? 'fitData'}
            layoutColumnsOnNewData={gridProps.layoutColumnsOnNewData}
            width={gridProps.width}
            maxWidth={gridProps.maxWidth}
            minWidth={gridProps.minWidth}
            height={gridProps.height}
            maxHeight={gridProps.maxHeight}
            minHeight={gridProps.minHeight}
            multiSelect={gridProps.multiSelect}
            resizableColumnFit={gridProps.resizableColumnFit}
            rowHeight={gridProps.rowHeight}
            resizableRows={gridProps.resizableRows}
            movableColumns={gridProps.movableColumns !== false}
            movableRows={gridProps.movableRows}
            groupBy={gridProps.groupBy}
            persistence={gridProps.persistence}
            persistenceID={gridProps.persistenceID}
            persistentLayout={gridProps.persistentLayout}
            persistentFilter={gridProps.persistentFilter}
            persistentSort={gridProps.persistentSort}
            frozenRows={gridProps.frozenRows}
            frozenRowsField={gridProps.frozenRowsField}
            initialFilter={gridProps.initialFilter}
            initialSort={gridProps.initialSort}
            headerVisible={gridProps.headerVisible !== false}
            sortMode={gridProps.gridMode}
            filterMode={gridProps.gridMode}
            /*rowFormatter={(row: RowComponent) => {
                    const table = row.getTable() as ITabulator;
                    if (!tableBuilt) return;
                    const data = row.getData(); //get data object for row
                    if (data.id === table.getActiveRowKey()) row.getElement().style.borderColor = '#ff0000'; //apply css change to row element
                    else row.getElement().style.borderColor = '#f5f5f5';
                }}*/
            events={events}
        />
    );
};

export const GridRender = React.memo(GridRender_);
