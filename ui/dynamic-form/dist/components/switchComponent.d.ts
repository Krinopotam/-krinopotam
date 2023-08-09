import React from 'react';
import { IDFormComponentProps, IDFormFieldProps } from './baseComponent';
export interface IDFormFieldSwitchProps extends IDFormFieldProps {
    default?: boolean;
    checkedChildren?: React.ReactNode;
    unCheckedChildren?: React.ReactNode;
    loading?: boolean;
}
interface IDFormSwitchComponentProps extends IDFormComponentProps {
    fieldProps: IDFormFieldSwitchProps;
}
export declare const SwitchComponent: ({ formApi, fieldName, fieldProps }: IDFormSwitchComponentProps) => React.JSX.Element;
export {};
