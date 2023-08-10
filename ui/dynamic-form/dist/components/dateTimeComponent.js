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
import React, { useCallback, useEffect } from 'react';
import dayjs from 'dayjs';
import { DatePicker } from '@krinopotam/ui-datepicker';
export { default as dayjs, Dayjs } from 'dayjs';
export const DateTimeComponent = ({ formApi, fieldName, fieldProps }) => {
    const { format, default: defaultFieldValue } = fieldProps, fieldPros = __rest(fieldProps, ["format", "default"]);
    const defaultDateFormat = 'DD.MM.YYYY';
    const defaultTimeFormat = 'HH:mm:ss';
    const dateTimeFormat = format !== null && format !== void 0 ? format : defaultDateFormat + (fieldPros.showTime ? ' ' + defaultTimeFormat : '');
    let value = formApi.model.getFieldValue(fieldName);
    let fieldValue = value ? dayjs(value, dateTimeFormat) : undefined;
    let defaultValue;
    if (!defaultFieldValue)
        defaultValue = dayjs(new Date());
    else if (defaultFieldValue && typeof defaultFieldValue === 'string')
        defaultValue = dayjs(defaultFieldValue, dateTimeFormat);
    else if (dayjs.isDayjs(defaultFieldValue))
        defaultValue = defaultFieldValue;
    if (!formApi.model.isFieldTouched(fieldName) && !value && defaultValue) {
        value = defaultValue === null || defaultValue === void 0 ? void 0 : defaultValue.format(dateTimeFormat);
        formApi.model.setFieldValue(fieldName, value, true);
        fieldValue = defaultValue;
    }
    const onChange = useCallback((e) => {
        formApi.model.setFieldValue(fieldName, e === null || e === void 0 ? void 0 : e.format(dateTimeFormat));
        formApi.model.setFieldDirty(fieldName, true);
    }, [dateTimeFormat, fieldName, formApi.model]);
    const onBlur = useCallback(() => {
        formApi.model.setFieldTouched(fieldName, true);
    }, [fieldName, formApi.model]);
    useEffect(() => {
        formApi.model.setFieldReady(fieldName, true);
    }, [fieldName, formApi.model]);
    return (React.createElement(DatePicker, Object.assign({}, fieldPros, { disabled: formApi.model.isFieldDisabled(fieldName), readOnly: formApi.model.isFieldReadOnly(fieldName), format: dateTimeFormat, name: fieldName, onBlur: onBlur, onChange: onChange, value: fieldValue, style: { width: '100%' } })));
};
