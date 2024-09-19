import React, {useCallback, useEffect, useMemo, useRef} from 'react';
import {TabulatorBase, ITabulator, ITabulatorProps, IRequestProps} from '@src/tabulatorBase';
import {useEvents} from '../hooks/useEvents';
import {GenerateAjaxRequestFunc} from '@src/tabulatorGrid/helpers/fetchHelpers';
import {IGridApi, IGridProps, IGridRowData} from "@src/tabulatorGrid";
import {translations} from "@src/tabulatorGrid/translations/translations";
import {useTranslate} from "@src/_shared/hooks/useTranslate";

export const GridRender = ({
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
    const events = useEvents(gridApi, gridProps);
    const resizeObserverRef = useRef<ResizeObserver | undefined>(undefined);
    const onTableRef = useCallback(
        (tabulatorRef: React.MutableRefObject<ITabulator>) => {
            tableRef.current = tabulatorRef.current;
            gridApi.tableApi = tabulatorRef.current;
            if (gridProps.resizeHeightWithParent) resizeObserverRef.current = resizeObserver(tableRef, gridProps.resizeHeightWithParent);
        },
        [gridApi, gridProps.resizeHeightWithParent, tableRef]
    );

    const t = useTranslate(gridProps.language, translations, gridProps.translation);

    useEffect(() => {
        return () => {
            resizeObserverRef.current?.disconnect();
        };
    }, []);

    const ajaxRequestFunc = useMemo(() => GenerateAjaxRequestFunc(gridApi, gridProps?.onDataFetch), [gridApi, gridProps.onDataFetch]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const onAjaxRequesting = useCallback((url:string, params:IRequestProps) => gridProps.onDataFetching?.(url, params, gridApi), [gridApi, gridProps.onDataFetching])

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const onAjaxResponse = useCallback( (_url:string, params: IRequestProps, response:IGridRowData[]) => gridProps.onDataFetchResponse?.(response, params, gridApi), [gridApi, gridProps.onDataFetchResponse])
    
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
            data={gridProps.dataSet}
            ajaxRequesting={gridProps.onDataFetching ? undefined : (onAjaxRequesting as ITabulator['options']['ajaxRequesting'])}
            ajaxRequestFunc={!gridProps.onDataFetch ? undefined : (ajaxRequestFunc as ITabulator['options']['ajaxRequestFunc'])}
            ajaxResponse={!gridProps.onDataFetchResponse ? undefined : onAjaxResponse}
            containerClassName={gridProps.className}
            placeholder={gridProps.placeholder ?? t('noRows')}
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
