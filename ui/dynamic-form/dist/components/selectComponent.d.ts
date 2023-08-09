import React from 'react';
import { IDFormComponentProps, IDFormFieldProps } from './baseComponent';
import { LabeledValue } from 'antd/es/select';
import { SelectProps } from "rc-select/lib/Select";
export interface ISelectComponentElement {
    id: string | number;
    title: string | React.ReactNode;
    disabled?: boolean;
    icon?: React.ReactNode;
}
type BaseValueType = RawValueType | null;
type RawValueType = string | number;
interface DisplayValueType {
    key?: React.Key;
    value?: RawValueType;
    label?: React.ReactNode;
    title?: string | number;
    disabled?: boolean;
}
type CustomTagProps = {
    label: React.ReactNode;
    value: unknown;
    disabled: boolean;
    onClose: (event?: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    closable: boolean;
};
type OptionType = {
    label: React.ReactNode;
    value?: BaseValueType;
    disabled?: boolean;
};
type ValueType = string | string[] | number | number[] | LabeledValue | LabeledValue[];
export interface IDFormFieldSelectProps extends IDFormFieldProps {
    dataSet: ISelectComponentElement[];
    allowClear?: boolean | {
        clearIcon?: React.ReactNode;
    };
    autoClearSearchValue?: boolean;
    defaultActiveFirstOption?: boolean;
    defaultOpen?: boolean;
    default?: ValueType;
    popupClassName?: string;
    dropdownRender?: (originNode: React.ReactElement) => React.ReactElement;
    fieldNames?: SelectProps['fieldNames'];
    filterOption?: boolean | ((inputValue: string, option?: OptionType) => boolean);
    filterSort?: (optionA: OptionType, optionB: OptionType) => number;
    labelInValue?: boolean;
    listHeight?: number;
    loading?: boolean;
    maxTagCount?: number | 'responsive';
    maxTagPlaceholder?: React.ReactNode | ((omittedValues: DisplayValueType[]) => React.ReactNode);
    maxTagTextLength?: number;
    menuItemSelectedIcon?: React.ReactNode;
    mode?: 'multiple' | 'tags';
    notFoundContent?: React.ReactNode;
    optionFilterProp?: string;
    optionLabelProp?: string;
    placement?: 'bottomLeft' | 'bottomRight' | 'topLeft' | 'topRight';
    removeIcon?: React.ReactNode;
    showArrow?: boolean;
    showSearch?: boolean;
    suffixIcon?: React.ReactNode | null;
    tagRender?: (props: CustomTagProps) => React.ReactElement;
    tokenSeparators?: string[];
    virtual?: boolean;
}
interface IDFormSelectComponentProps extends IDFormComponentProps {
    fieldProps: IDFormFieldSelectProps;
}
export declare const SelectComponent: ({ formApi, fieldName, fieldProps }: IDFormSelectComponentProps) => React.JSX.Element;
export declare const SelectComponentElementRenderTitle: (fieldProps: ISelectComponentElement, setColorDisabled?: boolean) => React.JSX.Element;
export {};
