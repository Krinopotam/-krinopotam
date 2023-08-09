import React from 'react';
import { IDFormComponentProps, IDFormFieldProps } from './baseComponent';
export interface IDFormFieldPasswordProps extends IDFormFieldProps {
    default?: string | number;
    showCount?: boolean;
    maxLength?: number;
    iconRender?: (visible: boolean) => React.ReactNode;
}
interface IDFormPasswordComponentProps extends IDFormComponentProps {
    fieldProps: IDFormFieldPasswordProps;
}
export declare const PasswordComponent: ({ formApi, fieldName, fieldProps }: IDFormPasswordComponentProps) => React.JSX.Element;
export {};
