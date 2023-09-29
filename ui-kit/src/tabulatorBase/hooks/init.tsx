import React from 'react';
import {ColumnDefinition, EventCallBackMethods, TabulatorFull as Tabulator} from 'tabulator-tables';
import {ITabulatorProps, ITabulator} from '../tabulatorBase';
import {createRoot} from 'react-dom/client';
import {ActiveSelectionModule} from '../modules/activeSelectionModule';
import {AdvancedHeaderFilterModule, IFilterFunction} from '../modules/advancedHeaderFilterModule';
import {collapseButton, expandButton} from '../parts/icons';
import {setPatches} from '../patches/setPatches';
import {FooterHOC} from "@src/tabulatorBase/parts/footerHOC";

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
    const propOptions = await propsToOptions(props, tableRef);

    tableRef.current = await initTabulatorClass($container, propOptions, props, events);
    onTableRef?.(tableRef as React.MutableRefObject<ITabulator>);
};

const syncRender = async (component: React.JSX.Element, container: HTMLElement): Promise<HTMLElement> => {
    return new Promise((resolve) => {
        const root = createRoot(container);
        root.render(<FooterHOC onEffect={() => {resolve(container)}}>{component}</FooterHOC>);
    });
}

const propsToOptions = async (props: ITabulatorProps, tableRef: React.MutableRefObject<ITabulator | undefined>) => {
    const output = {...props} as ITabulator['options'];

    if (typeof props.footerElement === 'object') {
        // convert from JSX to HTML string (tabulator's footerElement accepts string)
        const el = await syncRender(props.footerElement, document.createElement('div'));
        output.footerElement = el.innerHTML;
    }

    //output.columnDefaults = prepareColumnDefaults(props.columnDefaults || {}, props.dataTree, tableRef)
    //output.columns = prepareColumns(props.columns, props.dataTree, tableRef)

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

const initTabulatorClass = async ($container: HTMLDivElement, options: ITabulator['options'], props: ITabulatorProps, events?: Partial<EventCallBackMethods>): Promise<ITabulator> => {
    Tabulator.registerModule(ActiveSelectionModule);
    Tabulator.registerModule(AdvancedHeaderFilterModule);

    return new Promise((resolve) => {
        console.log('before')
        const tableApi = new Tabulator($container, options) as ITabulator;
        console.log('after')
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


//region Wrap columns headerFilterFunc into TreeFilterFunc
const prepareColumnDefaults = (columnDef: Partial<ColumnDefinition> | undefined, dataTree: boolean | undefined, tableRef: React.MutableRefObject<ITabulator | undefined>) => {
    if (!dataTree || !columnDef) return columnDef;
    return wrapTreeFilterFunc(columnDef, tableRef)
}

const prepareColumns = (columns: ITabulatorProps['columns'], dataTree: boolean | undefined, tableRef: React.MutableRefObject<ITabulator | undefined>) => {
    if (!dataTree || !columns) return columns;

    const resultColumns: Partial<ColumnDefinition>[] = [];
    for (const column of columns) {
        resultColumns.push(wrapTreeFilterFunc(column, tableRef));
    }

    return resultColumns as ITabulatorProps['columns'];
}

const wrapTreeFilterFunc = (columnDef: Partial<ColumnDefinition>, tableRef: React.MutableRefObject<ITabulator | undefined>): Partial<ColumnDefinition> => {
    //return columnDef;
    if (typeof columnDef?.headerFilterFunc !== 'function') return columnDef;

    const columnDefClone = {...columnDef} as ColumnDefinition;

    columnDefClone.headerFilterFunc = (filterVal, rowValue, rowData, filterParams) => {
        if (!tableRef.current) return true;
        const filterFunction = tableRef.current.getBaseTreeDataFilter(columnDef.headerFilterFunc as IFilterFunction);
        return filterFunction(filterVal, rowValue, rowData, filterParams);
    }

    return columnDefClone
}
//endregion