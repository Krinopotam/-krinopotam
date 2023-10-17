import { BaseField, IBaseFieldProps } from '../../../dForm/fields/base/baseField';
import React from 'react';
import { TextAreaProps } from 'antd/es/input/TextArea';
export interface ITextAreaFieldProps extends IBaseFieldProps<TextAreaField> {
    value?: string | number;
    showCount?: boolean;
    maxLength?: number;
    autoSize?: TextAreaProps['autoSize'];
    cols?: number;
    rows?: number;
    wrap?: 'soft | hard';
}
export declare class TextAreaField extends BaseField<ITextAreaFieldProps> {
    protected render(): React.JSX.Element;
}
