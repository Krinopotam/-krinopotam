import React from 'react';
import { IDFormComponentProps, IDFormFieldProps } from './baseComponent';
export interface IDFormFieldLinkProps extends IDFormFieldProps {
    href?: string;
    target?: '_blank' | '_self' | '_parent' | '_top';
}
interface IDFormLinkComponentProps extends IDFormComponentProps {
    fieldProps: IDFormFieldLinkProps;
}
export declare const LinkComponent: ({ formApi, fieldName, fieldProps }: IDFormLinkComponentProps) => React.JSX.Element;
export {};
