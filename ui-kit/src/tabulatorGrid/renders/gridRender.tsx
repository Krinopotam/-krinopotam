import React, {useCallback, useEffect, useMemo, useRef} from 'react';
import {TabulatorBase, ITabulator, ITabulatorProps} from '@src/tabulatorBase';
import dispatcher from '@src/formsDispatcher';
import {useEvents} from '../hooks/events';
import {GenerateAjaxRequestFunc} from '@src/tabulatorGrid/helpers/fetchHelpers';
import {IGridApi, IGridProps} from "@src/tabulatorGrid";

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
        dispatcher.pushToStack(gridApi.getId());
    }, [gridApi]);

    const ajaxRequestFunc = useMemo(() => GenerateAjaxRequestFunc(gridApi, gridProps?.onDataFetch), [gridApi, gridProps]);

    const dataSet = gridApi.getDataSet();
    return (
        <TabulatorBase
            {...tabulatorProps}
            id={gridApi.getId()}
            layout={tabulatorProps.layout ?? 'fitData'}
            movableColumns={tabulatorProps.movableColumns !== false}
            height={'100%'}
            dataLoader={false} //disable tabulator inbuilt loader overlay
            onTableRef={onTableRef}
            dataTreeFilter={true}
            data={dataSet}
            //data={gridProps.onDataFetch ? undefined : gridApi.getDataSet() ?? []} //WORKAROUND: if dataSet is undefined and ajax is not used, dataSet must be []. Otherwise, problems may occur when adding rows
            //ajaxURL={gridProps?.onDataFetch ? '-' : undefined} //WORKAROUND: if we want to use ajax request, we should set ajaxUrl to any value
            ajaxRequesting={gridProps.onDataFetching ? undefined : ((url, params) => gridProps.onDataFetching?.(url, params, gridApi)) as ITabulator['options']['ajaxRequesting']}
            ajaxRequestFunc={!gridProps.onDataFetch ? undefined : (ajaxRequestFunc as ITabulator['options']['ajaxRequestFunc'])}
            ajaxResponse={!gridProps.onDataFetchResponse ? undefined : (_url, params, response) => gridProps.onDataFetchResponse?.(response, params, gridApi)}
            containerClassName={gridProps.className}
            placeholder={gridProps.placeholder ?? 'Строки отсутствуют'}
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
