import React from 'react';
import {ColumnDefinition, EventCallBackMethods, TabulatorFull as Tabulator} from 'tabulator-tables';
import {ITabulatorProps, ITabulator, ITabulatorColumn} from '../tabulatorBase';
import {createRoot} from 'react-dom/client';
import {ActiveSelectionModule} from '../modules/activeSelectionModule';
import {AdvancedHeaderFilterModule} from '../modules/advancedHeaderFilterModule';
import {collapseButton, expandButton} from '../parts/icons';
import {setPatches} from '../patches/setPatches';
import {BaseHOC} from "@src/tabulatorBase/parts/baseHOC";

export const useInit = ({
                            props,
                            events,
                            containerRef,
                            tableRef,
                            onTableRef,
                        }: {
    props: ITabulatorProps;
    events?: Partial<EventCallBackMethods>;
    containerRef: React.RefObject<HTMLDivElement | null>;
    tableRef: React.MutableRefObject<ITabulator | undefined>;
    onTableRef?: (ref: React.MutableRefObject<ITabulator>) => void;
}) => {
    React.useEffect(() => {

        initTabulator({props, events, containerRef, tableRef, onTableRef}).then();

        return () => {
            for (const eventName in events) {
                const handler = events[eventName as keyof EventCallBackMethods];
                // eslint-disable-next-line react-hooks/exhaustive-deps
                tableRef.current?.off(eventName as keyof EventCallBackMethods, handler);
            }

            // eslint-disable-next-line react-hooks/exhaustive-deps
            tableRef.current?.destroy();
        };
    }, [props, onTableRef, containerRef, tableRef, events]);
};

const initTabulator = async ({
                                 props,
                                 events,
                                 containerRef,
                                 tableRef,
                                 onTableRef,
                             }: {
    props: ITabulatorProps;
    events?: Partial<EventCallBackMethods>;
    containerRef: React.RefObject<HTMLDivElement | null>;
    tableRef: React.MutableRefObject<ITabulator | undefined>;
    onTableRef?: (ref: React.MutableRefObject<ITabulator>) => void;
}) => {
    const $container = containerRef.current as HTMLDivElement; // mounted DOM element
    const propOptions = await propsToOptions(props);

    tableRef.current = await initTabulatorClass($container, propOptions, props, events);
    onTableRef?.(tableRef as React.MutableRefObject<ITabulator>);
};

const syncRender = async (component: React.ReactNode, container: HTMLElement): Promise<HTMLElement> => {
    return new Promise((resolve) => {
        const root = createRoot(container);
        root.render(<BaseHOC onEffect={() => {resolve(container)}}>{component}</BaseHOC>);
    });
}

const propsToOptions = async (props: ITabulatorProps) => {
    const output = {...props} as ITabulator['options'];

    output.columns = await columnPropsToOptions(props) as ColumnDefinition[];

    if (typeof props.footerElement === 'object') {
        // convert from JSX to HTML string (tabulator's footerElement accepts string)
        const el = await syncRender(props.footerElement, document.createElement('div'));
        output.footerElement = el.innerHTML;
    }

    output.columnDefaults = props.columnDefaults ?? {};

    if (!props.dataTreeChildField) output.dataTreeChildField = 'children'
    if (!props.dataTreeParentField) output.dataTreeParentField = 'parent'
    if (!props.dataTreeChildIndent) output.dataTreeChildIndent = 22
    output.dataTreeBranchElement = false;

    output.selectable = false //We don't use built selectable mode. We use the custom selection algorithm
    output.dataTreeCollapseElement = props.dataTreeCollapseElement ?? collapseButton;
    output.dataTreeExpandElement = props.dataTreeExpandElement ?? expandButton;
    output.keybindings = {
        navUp: false,
        navDown: false,
        scrollPageUp: false,
        scrollPageDown: false,
        scrollToStart: false,
        scrollToEnd: false,
    };
    return output;
};

const columnPropsToOptions = async (props: ITabulatorProps)=>{
    if (!props.columns) return undefined;
    const columns: ITabulatorColumn[] = [];
    for (const column of props.columns) {
        if (React.isValidElement(column.headerPopup)) {
            // convert from JSX to HTML string (tabulator's element accepts string)
            const el = await syncRender(column.headerPopup, document.createElement('div'));
            column.headerPopup = el.innerHTML;
        }

        columns.push(column)
    }
    return columns;
}

const initTabulatorClass = async ($container: HTMLDivElement, options: ITabulator['options'], props: ITabulatorProps, events?: Partial<EventCallBackMethods>): Promise<ITabulator> => {
    Tabulator.registerModule(ActiveSelectionModule);
    Tabulator.registerModule(AdvancedHeaderFilterModule);

    return new Promise((resolve) => {
        const tableApi = new Tabulator($container, options) as ITabulator;
        setPatches(tableApi); //TODO: Monkey patches. Check if the developer fixed it

        if (!events) events = {}

        for (const eventName in events) {
            const handler = events[eventName as keyof EventCallBackMethods];
            if (!handler) continue;
            tableApi?.on(eventName as keyof EventCallBackMethods, handler);
        }

        tableApi?.on('tableBuilt', () => { resolve(tableApi) })
    });
}
