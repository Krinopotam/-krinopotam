import {BaseField, IBaseFieldProps,} from "@src/dForm/fields/base/baseField";
import React from "react";
import {NumberFieldRender} from "@src/dForm/fields/number/numberFieldRender";
import {InputNumberProps} from "antd/es/input-number";

export interface INumberFieldProps extends IBaseFieldProps<NumberField> {
    /** The label text displayed after (on the right side of) the input field */
    addonAfter?: React.ReactNode;

    /** The label text displayed before (on the left side of) the input field */
    addonBefore?: React.ReactNode;

    /** Whether to show +- controls, or set custom arrows icon */
    controls?: InputNumberProps['controls']

    /** Decimal separator. Syntactic sugar of `formatter`. Config decimal separator of display. */
    decimalSeparator?: string;

    /** Default value */
    value?: string | number;

    /** Specifies the format of the value presented. Transform `value` to display value show in input */
    formatter?: InputNumberProps['formatter'];

    /** If enable keyboard behavior */
    keyboard?: boolean;

    /** Max input length */
    maxLength?: number;

    /** The max value */
    max?: number;

    /** The min value */
    min?: number;

    /** Specifies the value extracted from formatter. Parse display value to validate number */
    parser?: InputNumberProps['parser'];

    /** The precision of input value. Will use formatter when config of formatter. Syntactic sugar of `formatter`. Config precision of display. */
    precision?: number;

    /** The prefix icon for the Input */
    prefix?: React.ReactNode;

    /** The number to which the current value is increased or decreased. It can be an integer or decimal */
    step?: number | string;
    /** Set value as string to support high precision decimals. Will return string value by onChange */
    stringMode?: boolean;

    /** Up handler */
    upHandler?: React.ReactNode;

    /** Down handler */
    downHandler?: React.ReactNode;

    /** Class name */
    className?: string;

    /** Prefix class name */
    prefixCls?: string;
}

export class NumberField extends BaseField<INumberFieldProps> {
    protected render() {
        return <NumberFieldRender field={this} />
    }
}
