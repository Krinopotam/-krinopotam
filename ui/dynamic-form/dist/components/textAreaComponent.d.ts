import React from 'react';
import { IDFormComponentProps } from './baseComponent';
import { IDFormFieldInputProps } from './inputComponent';
import { TextAreaProps } from 'antd/es/input/TextArea';
export interface IDFormFieldTextAreaProps extends IDFormFieldInputProps {
    autoSize?: TextAreaProps['autoSize'];
    cols?: number;
    rows?: number;
    default?: string | number;
    wrap?: 'soft | hard';
}
interface IDFormTextAreaComponentProps extends IDFormComponentProps {
    fieldProps: IDFormFieldTextAreaProps;
}
export declare const TextAreaComponent: ({ formApi, fieldName, fieldProps }: IDFormTextAreaComponentProps) => React.JSX.Element;
export {};
