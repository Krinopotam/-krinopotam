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
import { DatePicker as AntDatePicker } from 'antd';
import 'antd/es/date-picker/style/index';
import React from "react";
export const DatePicker = (_a) => {
    var { readOnly, allowClear, open, inputReadOnly, panelRender, showTime, format } = _a, props = __rest(_a, ["readOnly", "allowClear", "open", "inputReadOnly", "panelRender", "showTime", "format"]);
    const defaultDateFormat = 'DD.MM.YYYY';
    const defaultTimeFormat = 'HH:mm:ss';
    const dateTimeFormat = format || defaultDateFormat + (showTime ? ' ' + defaultTimeFormat : '');
    let showTimeFormat = showTime;
    if (showTimeFormat === true)
        showTimeFormat = { format: dateTimeFormat };
    return (React.createElement(AntDatePicker, Object.assign({}, props, { allowClear: readOnly ? false : allowClear, open: readOnly ? false : open, inputReadOnly: readOnly ? true : inputReadOnly, panelRender: readOnly ? () => null : panelRender, showTime: showTimeFormat, format: dateTimeFormat, className: props.className })));
};
