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
import { render } from 'react-dom';
import { ActiveSelectionModule } from '../modules/activeSelectionModule';
import { AdvancedTreeModule } from '../modules/advancedTreeModule';
import { collapseButton, expandButton } from '../parts/icons';
import { setPatches } from '../patches/setPatches';
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
    var _a;
    const $container = containerRef.current;
    const propOptions = yield propsToOptions(props);
    tableRef.current = initTabulatorClass($container, propOptions);
    onTableRef === null || onTableRef === void 0 ? void 0 : onTableRef(tableRef);
    if (events) {
        for (const eventName in events) {
            const handler = events[eventName];
            (_a = tableRef.current) === null || _a === void 0 ? void 0 : _a.on(eventName, handler);
        }
    }
});
function syncRender(component, el) {
    return new Promise((resolve) => {
        render(component, el, () => {
            resolve(el);
        });
    });
}
const propsToOptions = (props) => __awaiter(void 0, void 0, void 0, function* () {
    var _b, _c;
    const output = Object.assign({}, props);
    if (typeof props.footerElement === 'object') {
        const el = yield syncRender(props.footerElement, document.createElement('div'));
        output.footerElement = el.innerHTML;
    }
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
const initTabulatorClass = ($container, options) => {
    Tabulator.registerModule(ActiveSelectionModule);
    Tabulator.registerModule(AdvancedTreeModule);
    const tableApi = new Tabulator($container, options);
    setPatches(tableApi);
    return tableApi;
};
