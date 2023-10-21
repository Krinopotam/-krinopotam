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
import dayjs from 'dayjs';
import React from "react";
export const DatePicker = (_a) => {
    var { mode, timeMode, readOnly, allowClear, open, inputReadOnly, panelRender, format, value } = _a, props = __rest(_a, ["mode", "timeMode", "readOnly", "allowClear", "open", "inputReadOnly", "panelRender", "format", "value"]);
    const [fieldMode, fieldPicker, fieldFormat, fieldShowTime] = GetDatePickerParams(mode, timeMode, format);
    const fieldValue = value ? dayjs(value, fieldFormat) : undefined;
    return (React.createElement(AntDatePicker, Object.assign({}, props, { allowClear: readOnly ? false : allowClear, open: readOnly ? false : open, inputReadOnly: readOnly ? true : inputReadOnly, panelRender: readOnly ? () => null : panelRender, showTime: fieldShowTime, format: fieldFormat, mode: fieldMode, picker: fieldPicker, value: fieldValue })));
};
export const GetDatePickerParams = (mode, timeMode, format) => {
    let fieldMode;
    let fieldPicker;
    let timeFormat = "HH:mm:ss";
    if (timeMode === 'minutes')
        timeFormat = "HH:mm";
    else if (timeMode === 'hours')
        timeFormat = "HH";
    const fieldFormat = GetDatePickerFormat(mode, timeMode, format);
    let fieldShowTime;
    if (!mode || mode === 'date') {
        fieldMode = 'date';
    }
    else if (mode === 'time') {
        fieldMode = 'time';
        fieldPicker = 'time';
    }
    else if (mode === 'dateTime') {
        fieldMode = 'date';
        fieldShowTime = { format: timeFormat };
    }
    else if (mode === 'week') {
        fieldMode = 'week';
        fieldPicker = 'week';
    }
    else if (mode === 'month') {
        fieldMode = 'month';
        fieldPicker = 'month';
    }
    else if (mode === 'quarter') {
        fieldMode = 'quarter';
        fieldPicker = 'quarter';
    }
    else if (mode === 'year') {
        fieldMode = 'year';
        fieldPicker = 'year';
    }
    return [fieldMode, fieldPicker, fieldFormat, fieldShowTime];
};
export const GetDatePickerFormat = (mode, timeMode, format) => {
    let timeFormat = "HH:mm:ss";
    if (timeMode === 'minutes')
        timeFormat = "HH:mm";
    else if (timeMode === 'hours')
        timeFormat = "HH";
    let fieldFormat;
    switch (mode) {
        case 'time':
            fieldFormat = format !== null && format !== void 0 ? format : timeFormat;
            break;
        case 'dateTime':
            fieldFormat = format !== null && format !== void 0 ? format : 'DD.MM.YYYY ' + timeFormat;
            break;
        case 'week':
            fieldFormat = format !== null && format !== void 0 ? format : 'YYYY-wo';
            break;
        case 'month':
            fieldFormat = format !== null && format !== void 0 ? format : 'MMMM YYYY';
            break;
        case 'quarter':
            fieldFormat = format !== null && format !== void 0 ? format : 'Q кв';
            break;
        case 'year':
            fieldFormat = format !== null && format !== void 0 ? format : 'YYYY';
            break;
        case 'date':
        default:
            fieldFormat = format !== null && format !== void 0 ? format : 'DD.MM.YYYY';
            break;
    }
    return fieldFormat;
};
