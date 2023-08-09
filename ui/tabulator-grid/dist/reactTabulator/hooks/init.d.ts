import React from 'react';
import { EventCallBackMethods } from 'tabulator-tables';
import { IReactTabulatorProps, ITabulator } from '../reactTabulator';
export declare const useInit: ({ props, events, containerRef, tableRef, onTableRef, }: {
    props: IReactTabulatorProps;
    events?: Partial<EventCallBackMethods> | undefined;
    containerRef: React.RefObject<HTMLDivElement | null>;
    tableRef: React.MutableRefObject<ITabulator | undefined>;
    onTableRef?: ((ref: React.MutableRefObject<ITabulator | undefined>) => void) | undefined;
}) => void;
