import React, {useCallback, useEffect} from 'react';
import ReactTabulator, {ITabulator, ITabulatorProps} from '@src/tabulatorBase';
import {IGridApi} from '../hooks/api';
import dispatcher from '@src/formsDispatcher';
import {IGridProps} from '../tabulatorGrid';
import {useEvents} from '../hooks/events';

const GridRender_ = ({
    tableRef,
    gridApi,
    gridProps,
    tabulatorProps,
}: {
    tableRef: React.MutableRefObject<ITabulator | undefined>;
    gridApi: IGridApi;
    gridProps: IGridProps;
    tabulatorProps: ITabulatorProps;
}): React.JSX.Element => {
    const events = useEvents(gridApi, gridProps.events);

    const onTableRef = useCallback(
        (tabulatorRef: React.MutableRefObject<ITabulator>) => {
            tableRef.current = tabulatorRef.current;
            gridApi.tableApi = tabulatorRef.current;
        },
        [gridApi, tableRef]
    );

    useEffect(() => {
        dispatcher.pushToStack(gridApi.getGridId());
    }, [gridApi]);

    return (
        <ReactTabulator
            {...tabulatorProps}
            onTableRef={onTableRef}
            gridId={gridApi.getGridId()}
            dataTree={gridProps.dataTree}
            dataTreeChildField={gridProps.dataTreeChildField}
            dataTreeParentField={gridProps.dataTreeParentField}
            dataTreeChildIndent={gridProps.dataTreeChildIndent}
            dataTreeFilter={true}
            data={gridApi.getDataSet()}
            containerClassName={gridProps.className}
            placeholder={gridProps.placeholder ?? 'Строки отсутствуют'}
            layout={gridProps.layout ?? 'fitData'}
            movableColumns={gridProps.movableColumns !== false}
            headerVisible={gridProps.headerVisible !== false}
            sortMode={gridProps.gridMode}
            filterMode={gridProps.gridMode}
            events={events}
        />
    );
};

export const GridRender = React.memo(GridRender_);
