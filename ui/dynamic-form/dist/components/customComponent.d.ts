import React from 'react';
import { IDFormComponentProps, IDFormFieldProps } from './baseComponent';
export interface IDFormFieldCustomProps extends IDFormFieldProps {
    default?: string | React.ReactNode;
}
interface IDFormCustomComponentProps extends IDFormComponentProps {
    fieldProps: IDFormFieldCustomProps;
}
export declare const CustomComponent: ({ formApi, fieldName }: IDFormCustomComponentProps) => React.JSX.Element;
export {};
