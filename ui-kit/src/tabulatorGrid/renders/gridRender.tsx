import React, {useCallback, useEffect, useRef} from 'react';
import {TabulatorBase, IAjaxConfig, IRequestProps, ITabulator, ITabulatorProps} from '@src/tabulatorBase';
import {IGridApi} from '../hooks/api';
import dispatcher from '@src/formsDispatcher';
import {IGridProps} from '../tabulatorGrid';
import {useEvents} from '../hooks/events';
import {BaseFetchHandler} from '@src/tabulatorGrid/helpers/fetchHelpers';

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

    const ajaxRequestFunc = useCallback(
        (url: string, config: IAjaxConfig, params: IRequestProps) => {
            console.log('ajaxRequestFunc',params)
            return new Promise((resolve, reject) => {
                const dataSource = gridProps?.onDataFetch?.(gridApi, params);

                BaseFetchHandler(gridApi, dataSource, params)?.then(
                    result => {
                        if (!gridApi.getIsMounted())  return

                        if (gridProps.pagination) resolve({data: result.data, last_page: result.last_page ?? 1});
                        else resolve(result.data); //WORKAROUND:The page module expects data in the format {data:[rows], last_page:number}. Without pagination data expected [rows]
                    },
                    () => {
                        reject();
                    }
                );
            });
        },
        [gridApi, gridProps]
    );

    return (
        <TabulatorBase
            {...tabulatorProps}
            layout={tabulatorProps.layout ?? 'fitData'}
            movableColumns={tabulatorProps.movableColumns !== false}
            ajaxRequestFunc={!gridProps.onDataFetch ? undefined : (ajaxRequestFunc as ITabulator['ajaxRequestFunc'])}
            height={'100%'}
            dataLoader={false} //disable tabulator inbuilt loader overlay
            onTableRef={onTableRef}
            gridId={gridApi.getGridId()}
            dataTreeFilter={true}
            data={gridApi.getDataSet()}
            ajaxURL={!gridProps.onDataFetch ? undefined : '-'} //WORKAROUND: if we want to use ajax request, we should set ajaxUrl to any value
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
