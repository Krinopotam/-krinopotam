import 'react-quill/dist/quill.snow.css';
import React from 'react';
import { IDFormComponentProps } from './baseComponent';
import { IDFormFieldInputProps } from './inputComponent';
export interface IDFormTextEditorProps extends IDFormFieldInputProps {
    default?: string | number;
    formats: ['header', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'list', 'bullet', 'indent', 'link', 'color', 'background'];
    toolbar: [];
}
interface IDFormTextEditorComponentProps extends IDFormComponentProps {
    fieldProps: IDFormTextEditorProps;
}
export declare const TextEditorComponent: ({ formApi, fieldName, fieldProps }: IDFormTextEditorComponentProps) => React.JSX.Element;
export {};
