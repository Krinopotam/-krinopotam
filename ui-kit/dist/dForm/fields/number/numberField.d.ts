import { BaseField, IBaseFieldProps } from "../../../dForm/fields/base/baseField";
import React from "react";
import { InputNumberProps } from "antd/es/input-number";
export interface INumberFieldProps extends IBaseFieldProps<NumberField> {
    addonAfter?: React.ReactNode;
    addonBefore?: React.ReactNode;
    controls?: InputNumberProps['controls'];
    decimalSeparator?: string;
    value?: string | number;
    formatter?: InputNumberProps['formatter'];
    keyboard?: boolean;
    maxLength?: number;
    max?: number;
    min?: number;
    parser?: InputNumberProps['parser'];
    precision?: number;
    prefix?: React.ReactNode;
    step?: number | string;
    stringMode?: boolean;
    upHandler?: React.ReactNode;
    downHandler?: React.ReactNode;
    className?: string;
    prefixCls?: string;
}
export declare class NumberField extends BaseField<INumberFieldProps> {
    protected render(): React.JSX.Element;
}
