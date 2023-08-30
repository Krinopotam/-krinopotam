import React from 'react';
import { IDFormComponentProps, IDFormFieldProps } from './baseComponent';
export interface IDFormFieldDividerProps extends Omit<IDFormFieldProps, 'readOnly' | 'disabled' | 'default' | 'autoFocus'> {
    title?: string | React.ReactNode;
    plain?: boolean;
    orientation?: "center" | "left" | "right";
    orientationMargin?: string | number;
}
interface IDFormDividerComponentProps extends IDFormComponentProps {
    fieldProps: IDFormFieldDividerProps;
}
export declare const DividerComponent: ({ formApi, fieldName, fieldProps }: IDFormDividerComponentProps) => React.JSX.Element;
export {};
