import React, {useCallback, useEffect, useRef} from 'react';
import ReactTabulator, {IAjaxConfig, IRequestProps, ITabulator, ITabulatorProps} from '@src/tabulatorBase';
import {IGridApi} from '../hooks/api';
import dispatcher from '@src/formsDispatcher';
import {IGridProps, IGridRowData} from '../tabulatorGrid';
import {useEvents} from '../hooks/events';
import {MessageBox} from "@src/messageBox";

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

    const ajaxRequestFunc = useCallback((url:string, config:IAjaxConfig, params:IRequestProps)=>{
            return new Promise((resolve) => {

                const dataSource = gridProps?.onDataFetch?.(gridApi, params);
                if (!dataSource) {
                    gridProps?.onDataFetchSuccess?.(undefined, gridApi);
                    gridProps?.onDataFetchCompleted?.(gridApi);
                    resolve ({data:[], last_page:1});
                    return
                }

                gridApi.setIsLoading(true);
                dataSource.then(
                    result => {
                        const data = (result.data || []) as IGridRowData[];
                        if (gridApi.getIsMounted()) {
                            gridProps?.onDataFetchCompleted?.(gridApi);
                            gridProps?.onDataFetchSuccess?.(data, gridApi);
                            gridApi.setIsLoading(false);
                        }
                        resolve({data:data, last_page: result.last_page ?? 1})
                        return
                    },
                    error => {
                        if (!gridApi.getIsMounted()) {
                            resolve(  {data:[], last_page:1});
                            return
                        }
                        gridProps?.onDataFetchCompleted?.(gridApi);
                        gridProps?.onDataFetchError?.(error.message, error.code, gridApi);
                        gridApi.setIsLoading(false);
                        const box = MessageBox.confirm({
                            content: (
                                <>
                                    <p>{error.message}</p>
                                    <p>{'Попробовать снова?'}</p>
                                </>
                            ),
                            colorType: 'danger',
                            buttons: {
                                ok: {
                                    onClick: () => {
                                        box.destroy();
                                        gridApi.fetchData(dataSource, params);
                                    },
                                },
                            },
                        });
                    }
                );
            })

          //  return gridProps.onDataFetch?.(gridApi, params)

    } , [gridApi, gridProps])

    return (
        <ReactTabulator
            {...tabulatorProps}
            ajaxRequestFunc={ gridProps.onDataFetch ? ajaxRequestFunc as ITabulator['ajaxRequestFunc']: undefined}
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
