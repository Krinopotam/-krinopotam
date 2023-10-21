import { BaseField, IBaseFieldProps } from '../../../dForm/fields/base/baseField';
import React from 'react';
export interface ICustomFieldProps extends IBaseFieldProps<CustomField> {
    value?: string | React.ReactNode;
    onRender?: (value: string | React.ReactNode, field: CustomField) => string | React.ReactNode;
}
export declare class CustomField extends BaseField<ICustomFieldProps> {
    protected render(): React.JSX.Element;
    renderField(): React.ReactNode;
}
