import React, {CSSProperties, useCallback, useEffect, useSyncExternalStore} from 'react';
import {SelectField} from '@src/dForm/fields/select/selectField';
import {ISelectNode, ISelectValue, Select} from '@src/select';

export const SelectFieldRender = ({field}: {field: SelectField}): React.JSX.Element => {
    useSyncExternalStore(field.subscribe.bind(field), field.getSnapshot.bind(field));

    const fieldProps = field.getProps();

    const value = field.getValue() as ISelectValue | undefined;

    const onChange = useCallback(
        (value: ISelectValue, options: ISelectNode | ISelectNode[]) => {
            field.setValue(fieldProps.fullItemValue ? options: value);
            field.setDirty(true);
        },
        [field, fieldProps.fullItemValue]
    );
    const onBlur = useCallback(() => {
        field.setTouched(true);
    }, [field]);

    useEffect(() => {
        field.setReady(true);
    }, [field]);

    let defStyle: CSSProperties = {};
    if (fieldProps.width) {
        defStyle = {width: fieldProps.width};
    }

    const style = {...defStyle, ...fieldProps.style};

    return (
        <Select
            dataSet={fieldProps.dataSet}
            allowClear={fieldProps.allowClear !== false}
            autoClearSearchValue={fieldProps.autoClearSearchValue}
            autoFocus={fieldProps.autoFocus}
            defaultActiveFirstOption={fieldProps.defaultActiveFirstOption}
            defaultOpen={fieldProps.defaultOpen}
            disabled={field.isDisabled()}
            readOnly={field.isReadOnly()}
            fieldNames={fieldProps.fieldNames}
            filterOption={fieldProps.filterOption}
            filterSort={fieldProps.filterSort}
            labelInValue={fieldProps.labelInValue}
            listHeight={fieldProps.listHeight}
            loading={fieldProps.loading}
            maxTagCount={fieldProps.maxTagCount}
            maxTagPlaceholder={fieldProps.maxTagPlaceholder}
            maxTagTextLength={fieldProps.maxTagTextLength}
            menuItemSelectedIcon={fieldProps.menuItemSelectedIcon}
            mode={fieldProps.mode}
            notFoundContent={fieldProps.notFoundContent}
            optionFilterProp={fieldProps.optionFilterProp}
            optionLabelProp={fieldProps.optionLabelProp}
            placeholder={fieldProps.placeholder}
            placement={fieldProps.placement}
            popupClassName={fieldProps.popupClassName}
            removeIcon={fieldProps.removeIcon}
            showSearch={fieldProps.showSearch}
            suffixIcon={fieldProps.suffixIcon}
            tagRender={fieldProps.tagRender}
            tokenSeparators={fieldProps.tokenSeparators}
            value={value}
            virtual={fieldProps.virtual}
            style={style}
            /******** Callbacks *********/
            onBlur={onBlur}
            onChange={onChange}
            onSelect={fieldProps.onSelect}
            onDeselect={fieldProps.onDeselect}
        />
    );
};
