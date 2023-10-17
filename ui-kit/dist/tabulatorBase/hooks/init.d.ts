import React from 'react';
import { EventCallBackMethods } from 'tabulator-tables';
import { ITabulatorProps, ITabulator } from '../tabulatorBase';
export declare const useInit: ({ props, events, containerRef, tableRef, onTableRef, }: {
    props: ITabulatorProps;
    events?: Partial<EventCallBackMethods> | undefined;
    containerRef: React.RefObject<HTMLDivElement | null>;
    tableRef: React.MutableRefObject<ITabulator | undefined>;
    onTableRef?: ((ref: React.MutableRefObject<ITabulator>) => void) | undefined;
}) => void;
