import React, { useCallback, useEffect } from 'react';
import { Select, Space } from 'antd';
const { Option } = Select;
export const SelectComponent = ({ formApi, fieldName, fieldProps }) => {
    const value = formApi.model.getFieldValue(fieldName);
    const onChange = useCallback((value) => {
        formApi.model.setFieldValue(fieldName, value);
        formApi.model.setFieldDirty(fieldName, true);
    }, [fieldName, formApi.model]);
    const onBlur = useCallback(() => {
        formApi.model.setFieldTouched(fieldName, true);
    }, [fieldName, formApi.model]);
    const options = [];
    let currentValue = undefined;
    const defIdx = 0;
    for (let idx = 0; idx < fieldProps.dataSet.length; idx++) {
        const item = fieldProps.dataSet[idx];
        const label = SelectComponentElementRenderTitle(item, false);
        const option = (React.createElement(Option, { value: item.id, disabled: item.disabled, key: 'sel_key_' + idx }, label));
        options.push(option);
        if (item.id == value)
            currentValue = {
                value: fieldProps.dataSet[defIdx].id,
                label: label,
            };
    }
    useEffect(() => {
        formApi.model.setFieldReady(fieldName, true);
    }, [fieldName, formApi.model]);
    return (React.createElement(Select, { allowClear: typeof fieldProps.allowClear === 'undefined' ? true : fieldProps.allowClear, autoClearSearchValue: fieldProps.autoClearSearchValue, autoFocus: fieldProps.autoFocus, defaultActiveFirstOption: fieldProps.defaultActiveFirstOption, defaultOpen: fieldProps.defaultOpen, disabled: formApi.model.isFieldDisabled(fieldName) || formApi.model.isFieldReadOnly(fieldName), fieldNames: fieldProps.fieldNames, filterOption: fieldProps.filterOption, filterSort: fieldProps.filterSort, labelInValue: fieldProps.labelInValue, listHeight: fieldProps.listHeight, loading: fieldProps.loading, maxTagCount: fieldProps.maxTagCount, maxTagPlaceholder: fieldProps.maxTagPlaceholder, maxTagTextLength: fieldProps.maxTagTextLength, menuItemSelectedIcon: fieldProps.menuItemSelectedIcon, mode: fieldProps.mode, notFoundContent: fieldProps.notFoundContent, onBlur: onBlur, onChange: onChange, optionFilterProp: fieldProps.optionFilterProp, optionLabelProp: fieldProps.optionLabelProp, placeholder: fieldProps.placeholder, placement: fieldProps.placement, popupClassName: fieldProps.popupClassName, removeIcon: fieldProps.removeIcon, showSearch: fieldProps.showSearch, suffixIcon: fieldProps.suffixIcon, tagRender: fieldProps.tagRender, tokenSeparators: fieldProps.tokenSeparators, value: currentValue, virtual: fieldProps.virtual }, options));
};
export const SelectComponentElementRenderTitle = (fieldProps, setColorDisabled = true) => {
    const color = setColorDisabled && fieldProps.disabled ? 'grey' : undefined;
    return fieldProps.icon ? (React.createElement(Space, { style: { color: color } },
        fieldProps.icon,
        fieldProps.title)) : (React.createElement("span", { style: { color: color } }, fieldProps.title));
};
