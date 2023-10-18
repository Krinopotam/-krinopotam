import React, {useCallback, useEffect, useRef} from 'react';
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
    const resizeObserverRef = useRef<ResizeObserver | undefined>(undefined);
    const onTableRef = useCallback(
        (tabulatorRef: React.MutableRefObject<ITabulator>) => {
            tableRef.current = tabulatorRef.current;
            gridApi.tableApi = tabulatorRef.current;
            if (gridProps.resizeHeightWithParent) resizeObserverRef.current = resizeObserver(tableRef, gridProps.resizeHeightWithParent);
        },
        [gridApi, gridProps.resizeHeightWithParent, tableRef]
    );

    useEffect(() => {
        return () => {
            resizeObserverRef.current?.disconnect();
        };
    }, []);

    useEffect(() => {
        dispatcher.pushToStack(gridApi.getGridId());
    }, [gridApi]);

    return (
        <ReactTabulator
            {...tabulatorProps}
            height={'100%'}
            onTableRef={onTableRef}
            gridId={gridApi.getGridId()}
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

/** Resize tabulator grid if parent container resized */
const resizeObserver = (tableRef: React.MutableRefObject<ITabulator | undefined>, parentClassName: string) => {
    const gridContainer: HTMLElement | undefined | null = tableRef.current?.element?.closest('.tabulator-grid-container');
    const observableElement = gridContainer?.closest(parentClassName);

    if (!gridContainer || !observableElement || gridContainer.style.height.endsWith('%')) return;

    let curGridHeight = parseInt(gridContainer.style.height);
    let curParentHeight = observableElement.getBoundingClientRect().height;
    const outputSize = () => {
        if (!tableRef.current) return;
        const newParentHeight = observableElement.getBoundingClientRect().height;
        curGridHeight = curGridHeight + (newParentHeight - curParentHeight);
        gridContainer.style.height = (curGridHeight > 0 ? curGridHeight : 0) + 'px';
        curParentHeight = observableElement.getBoundingClientRect().height;
    };

    const observer = new ResizeObserver(outputSize);
    observer.observe(observableElement);
    return observer;
};
