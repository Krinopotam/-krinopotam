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
import * as React from 'react';
import { TimePicker as AntTimePicker } from 'antd';
export const TimePicker = (_a) => {
    var { allowClear, open, panelRender, inputReadOnly, readOnly } = _a, props = __rest(_a, ["allowClear", "open", "panelRender", "inputReadOnly", "readOnly"]);
    return (React.createElement(AntTimePicker, Object.assign({}, props, { allowClear: readOnly ? false : allowClear, open: readOnly ? false : open, inputReadOnly: readOnly ? true : inputReadOnly, panelRender: readOnly ? () => null : panelRender })));
};
TimePicker.displayName = 'TimePicker';
//# sourceMappingURL=timePicker.js.map