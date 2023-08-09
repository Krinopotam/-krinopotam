import React from 'react';
import { IDFormComponentProps, IDFormFieldProps } from './baseComponent';
import { InputNumberProps } from "antd/es/input-number";
export interface IDFormFieldNumberProps extends IDFormFieldProps {
    addonAfter?: React.ReactNode;
    addonBefore?: React.ReactNode;
    controls?: InputNumberProps['controls'];
    decimalSeparator?: string;
    default?: string | number;
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
interface IDFormNumberComponentProps extends IDFormComponentProps {
    fieldProps: IDFormFieldNumberProps;
}
export declare const NumberComponent: ({ formApi, fieldName, fieldProps }: IDFormNumberComponentProps) => React.JSX.Element;
export {};
