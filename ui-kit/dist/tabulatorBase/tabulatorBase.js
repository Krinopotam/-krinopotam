var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import 'tabulator-tables/dist/css/tabulator_simple.css';
import React from 'react';
import { useInit } from './hooks/init';
import { getUuid } from '@krinopotam/js-helpers';
import { Stylization } from '../tabulatorBase/stylization';
export const TabulatorBase = (_a) => {
    var { onTableRef, gridId, events, containerClassName, width, minWidth, maxWidth } = _a, props = __rest(_a, ["onTableRef", "gridId", "events", "containerClassName", "width", "minWidth", "maxWidth"]);
    const containerRef = React.useRef(null);
    const tableRef = React.useRef();
    const [newId] = React.useState(getUuid());
    useInit({ props, events, containerRef, tableRef, onTableRef });
    const containerStyle = {
        width: width,
        maxWidth: maxWidth,
        minWidth: minWidth,
        userSelect: !props.allowTextSelection ? 'none' : undefined,
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(Stylization, { striped: true }),
        React.createElement("div", { ref: containerRef, id: gridId !== null && gridId !== void 0 ? gridId : newId, "data-instance": gridId !== null && gridId !== void 0 ? gridId : newId, className: containerClassName, style: containerStyle })));
};
export default TabulatorBase;
//# sourceMappingURL=tabulatorBase.js.map