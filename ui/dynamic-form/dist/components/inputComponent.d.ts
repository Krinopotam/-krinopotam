import { IDFormComponentProps, IDFormFieldProps } from './baseComponent';
import React from 'react';
export interface IDFormFieldInputProps extends IDFormFieldProps {
    default?: string | number;
    showCount?: boolean;
    maxLength?: number;
}
interface IDFormInputComponentProps extends IDFormComponentProps {
    fieldProps: IDFormFieldInputProps;
}
export declare const InputComponent: ({ formApi, fieldName, fieldProps }: IDFormInputComponentProps) => React.JSX.Element;
export {};
