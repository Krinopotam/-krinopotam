import React from 'react';
import { TabulatorFull as Tabulator } from 'tabulator-tables';
import { createRoot } from 'react-dom/client';
import { ActiveSelectionModule } from '../modules/activeSelectionModule';
import { AdvancedHeaderFilterModule } from '../modules/advancedHeaderFilterModule';
import { collapseButton, expandButton } from '../parts/icons';
import { setPatches } from '../patches/setPatches';
import { BaseHOC } from '../../tabulatorBase/parts/baseHOC';
export const useInit = ({ props, events, containerRef, tableRef, onTableRef, }) => {
    React.useEffect(() => {
        initTabulator({ props, events, containerRef, tableRef, onTableRef }).then();
        return () => {
            var _a, _b;
            for (const eventName in events) {
                const handler = events[eventName];
                (_a = tableRef.current) === null || _a === void 0 ? void 0 : _a.off(eventName, handler);
            }
            (_b = tableRef.current) === null || _b === void 0 ? void 0 : _b.destroy();
        };
    }, [props, onTableRef, containerRef, tableRef, events]);
};
const initTabulator = async ({ props, events, containerRef, tableRef, onTableRef, }) => {
    const $container = containerRef.current;
    const propOptions = await propsToOptions(props);
    await initTabulatorClass($container, tableRef, onTableRef, propOptions, props, events);
};
const syncRender = async (component, container) => {
    return new Promise(resolve => {
        const root = createRoot(container);
        root.render(React.createElement(BaseHOC, { onEffect: () => {
                resolve(container);
            } }, component));
    });
};
const propsToOptions = async (props) => {
    var _a, _b, _c;
    const output = Object.assign({}, props);
    const columns = (await columnPropsToOptions(props));
    if (typeof props.footerElement === 'object') {
        const el = await syncRender(props.footerElement, document.createElement('div'));
        output.footerElement = el.innerHTML;
    }
    output.columnDefaults = (_a = props.columnDefaults) !== null && _a !== void 0 ? _a : {};
    if (!props.dataTreeChildField)
        output.dataTreeChildField = 'children';
    if (!props.dataTreeParentField)
        output.dataTreeParentField = 'parent';
    if (!props.dataTreeChildIndent)
        output.dataTreeChildIndent = 22;
    output.dataTreeBranchElement = false;
    if (props.selectionMode) {
        output.selectable = props.multiSelect === false ? 1 : true;
        output.columns = [
            {
                title: '',
                formatter: 'rowSelection',
                titleFormatter: 'rowSelection',
                titleFormatterParams: {
                    rowRange: 'active',
                },
                hozAlign: 'center',
                headerSort: false,
                width: 35,
            },
            ...columns,
        ];
    }
    else {
        output.selectable = false;
        output.columns = columns;
    }
    output.selectableRangeMode = undefined;
    output.dataTreeCollapseElement = (_b = props.dataTreeCollapseElement) !== null && _b !== void 0 ? _b : collapseButton;
    output.dataTreeExpandElement = (_c = props.dataTreeExpandElement) !== null && _c !== void 0 ? _c : expandButton;
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
const columnPropsToOptions = async (props) => {
    if (!props.columns)
        return undefined;
    const columns = [];
    for (const column of props.columns) {
        if (React.isValidElement(column.headerPopup)) {
            const el = await syncRender(column.headerPopup, document.createElement('div'));
            column.headerPopup = el.innerHTML;
        }
        columns.push(column);
    }
    return columns;
};
const initTabulatorClass = async ($container, tableRef, onTableRef, options, props, events) => {
    Tabulator.registerModule(ActiveSelectionModule);
    Tabulator.registerModule(AdvancedHeaderFilterModule);
    return new Promise(resolve => {
        const tableApi = new Tabulator($container, options);
        tableRef.current = tableApi;
        onTableRef === null || onTableRef === void 0 ? void 0 : onTableRef(tableRef);
        setPatches(tableApi);
        if (!events)
            events = {};
        for (const eventName in events) {
            const handler = events[eventName];
            if (!handler)
                continue;
            tableApi === null || tableApi === void 0 ? void 0 : tableApi.on(eventName, handler);
        }
        tableApi === null || tableApi === void 0 ? void 0 : tableApi.on('tableBuilt', () => {
            resolve(tableApi);
        });
    });
};
