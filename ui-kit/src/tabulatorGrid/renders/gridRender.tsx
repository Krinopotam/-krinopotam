import React, {useCallback, useEffect, useMemo, useRef} from 'react';
import {IRequestProps, ITabulator, ITabulatorProps, TabulatorBase} from '@src/tabulatorBase';
import {useEvents} from '../hooks/useEvents';
import {GenerateAjaxRequestFunc} from '@src/tabulatorGrid/helpers/fetchHelpers';
import {IGridApi, IGridProps, IGridRowData} from '@src/tabulatorGrid';

export const GridRender = ({
    tableRef,
    api,
    gridProps,
    tabulatorProps,
}: {
    tableRef: React.MutableRefObject<ITabulator | undefined>;
    api: IGridApi;
    gridProps: IGridProps;
    tabulatorProps: ITabulatorProps;
}): React.JSX.Element => {
    const events = useEvents(api, gridProps);
    const resizeObserverRef = useRef<ResizeObserver | undefined>(undefined);
    const onTableRef = useCallback(
        (tabulatorRef: React.MutableRefObject<ITabulator>) => {
            tableRef.current = tabulatorRef.current;
            api.tableApi = tabulatorRef.current;
            if (gridProps.resizeHeightWithParent) resizeObserverRef.current = resizeObserver(tableRef, gridProps.resizeHeightWithParent);
        },
        [api, gridProps.resizeHeightWithParent, tableRef]
    );

    useEffect(() => {
        return () => {
            resizeObserverRef.current?.disconnect();
        };
    }, []);

    const ajaxRequestFunc = useMemo(() => GenerateAjaxRequestFunc(api, gridProps?.onDataFetch), [api, gridProps.onDataFetch]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const onAjaxRequesting = useCallback((url: string, params: IRequestProps) => gridProps.onDataFetching?.(url, params, api), [api, gridProps.onDataFetching]);

    const onAjaxResponse = useCallback(
        (_url: string, params: IRequestProps, response: IGridRowData[]) => gridProps.onDataFetchResponse?.(response, params, api),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [api, gridProps.onDataFetchResponse]
    );

    return (
        <TabulatorBase
            {...tabulatorProps}
            id={api.getId()}
            layout={tabulatorProps.layout ?? 'fitData'}
            movableColumns={tabulatorProps.movableColumns !== false}
            height={'100%'}
            dataLoader={false} //disable tabulator inbuilt loader overlay
            onTableRef={onTableRef}
            dataTreeFilter={true}
            data={gridProps.dataSet}
            ajaxRequesting={gridProps.onDataFetching ? undefined : (onAjaxRequesting as ITabulator['options']['ajaxRequesting'])}
            ajaxRequestFunc={!gridProps.onDataFetch ? undefined : (ajaxRequestFunc as ITabulator['options']['ajaxRequestFunc'])}
            ajaxResponse={!gridProps.onDataFetchResponse ? undefined : onAjaxResponse}
            containerClassName={gridProps.className}
            placeholder={gridProps.placeholder ?? api.t('noRows')}
            events={events}
        />
    );
};

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
