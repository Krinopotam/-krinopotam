import React from 'react';
import { IDFormComponentProps, IDFormFieldProps } from './baseComponent';
export interface IDFormFieldCheckBoxProps extends IDFormFieldProps {
    default?: boolean;
    indeterminate?: boolean;
}
interface IDFormCheckboxComponentProps extends IDFormComponentProps {
    fieldProps: IDFormFieldCheckBoxProps;
}
export declare const CheckboxComponent: ({ formApi, fieldName, fieldProps }: IDFormCheckboxComponentProps) => React.JSX.Element;
export {};
