import { TreeSelect } from '@krinopotam/ui-treeselect';
import React, { useCallback, useEffect, useMemo } from 'react';
import { HelpersObjects } from '@krinopotam/js-helpers';
export const TreeSelectComponent = ({ formApi, fieldName, fieldProps }) => {
    var _a;
    const treeProps = useGetTreeSelectProps(fieldProps);
    const value = formApi.model.getFieldValue(fieldName);
    const onChange = useCallback((value) => {
        var _a, _b, _c;
        formApi.model.setFieldValue(fieldName, value !== null && value !== void 0 ? value : null);
        formApi.model.setFieldDirty(fieldName, true);
        (_b = (_a = fieldProps.callbacks) === null || _a === void 0 ? void 0 : _a.onChange) === null || _b === void 0 ? void 0 : _b.call(_a, value);
        (_c = fieldProps.onCustomChange) === null || _c === void 0 ? void 0 : _c.call(fieldProps, value);
    }, [fieldName, fieldProps, formApi.model]);
    const onBlur = useCallback(() => {
        formApi.model.setFieldTouched(fieldName, true);
    }, [fieldName, formApi.model]);
    const onClear = useCallback(() => {
        var _a, _b;
        formApi.model.setFieldDirty(fieldName, true);
        formApi.model.setFieldTouched(fieldName, true);
        (_b = (_a = fieldProps.callbacks) === null || _a === void 0 ? void 0 : _a.onClear) === null || _b === void 0 ? void 0 : _b.call(_a);
    }, [fieldName, fieldProps.callbacks, formApi.model]);
    useEffect(() => {
        formApi.model.setFieldReady(fieldName, true);
    }, [fieldName, formApi.model]);
    return (React.createElement(TreeSelect, Object.assign({ style: { width: '100%' } }, treeProps, { autoFocus: fieldProps.autoFocus, defaultValueCallback: fieldProps.defaultValueCallback, disabled: formApi.model.isFieldDisabled(fieldName), readOnly: formApi.model.isFieldReadOnly(fieldName), value: value, placeholder: (_a = fieldProps.placeholder) !== null && _a !== void 0 ? _a : 'Выберите из списка', allowClear: fieldProps.allowClear !== false, callbacks: Object.assign({ onChange: onChange, onClear: onClear }, fieldProps.callbacks), onBlur: onBlur })));
};
const useGetTreeSelectProps = (props) => {
    return useMemo(() => {
        const result = HelpersObjects.splitObject(props, [
            'onCustomChange',
            'component',
            'helpClass',
            'label',
            'placeholder',
            'tab',
            'inlineGroup',
            'default',
            'hidden',
            'dependsOn',
            'width',
            'autoFocus',
        ]);
        return result[1];
    }, [props]);
};
