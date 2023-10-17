var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React from 'react';
import { TabulatorFull as Tabulator } from 'tabulator-tables';
import { createRoot } from 'react-dom/client';
import { ActiveSelectionModule } from '../modules/activeSelectionModule';
import { AdvancedHeaderFilterModule } from '../modules/advancedHeaderFilterModule';
import { collapseButton, expandButton } from '../parts/icons';
import { setPatches } from '../patches/setPatches';
import { BaseHOC } from "../../tabulatorBase/parts/baseHOC";
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
const initTabulator = ({ props, events, containerRef, tableRef, onTableRef, }) => __awaiter(void 0, void 0, void 0, function* () {
    const $container = containerRef.current;
    const propOptions = yield propsToOptions(props);
    tableRef.current = yield initTabulatorClass($container, propOptions, props, events);
    onTableRef === null || onTableRef === void 0 ? void 0 : onTableRef(tableRef);
});
const syncRender = (component, container) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve) => {
        const root = createRoot(container);
        root.render(React.createElement(BaseHOC, { onEffect: () => { resolve(container); } }, component));
    });
});
const propsToOptions = (props) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    const output = Object.assign({}, props);
    output.columns = (yield columnPropsToOptions(props));
    if (typeof props.footerElement === 'object') {
        const el = yield syncRender(props.footerElement, document.createElement('div'));
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
    output.selectable = false;
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
});
const columnPropsToOptions = (props) => __awaiter(void 0, void 0, void 0, function* () {
    if (!props.columns)
        return undefined;
    const columns = [];
    for (const column of props.columns) {
        if (React.isValidElement(column.headerPopup)) {
            const el = yield syncRender(column.headerPopup, document.createElement('div'));
            column.headerPopup = el.innerHTML;
        }
        columns.push(column);
    }
    return columns;
});
const initTabulatorClass = ($container, options, props, events) => __awaiter(void 0, void 0, void 0, function* () {
    Tabulator.registerModule(ActiveSelectionModule);
    Tabulator.registerModule(AdvancedHeaderFilterModule);
    return new Promise((resolve) => {
        const tableApi = new Tabulator($container, options);
        setPatches(tableApi);
        if (!events)
            events = {};
        for (const eventName in events) {
            const handler = events[eventName];
            if (!handler)
                continue;
            tableApi === null || tableApi === void 0 ? void 0 : tableApi.on(eventName, handler);
        }
        tableApi === null || tableApi === void 0 ? void 0 : tableApi.on('tableBuilt', () => { resolve(tableApi); });
    });
});
