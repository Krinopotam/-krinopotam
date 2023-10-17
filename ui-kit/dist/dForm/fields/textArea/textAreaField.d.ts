import { BaseField } from '../../../dForm/fields/base/baseField';
import React from 'react';
import { IInputFieldProps } from '../../../dForm/fields/input/inputField';
import { TextAreaProps } from 'antd/es/input/TextArea';
export interface ITextAreaFieldProps extends IInputFieldProps {
    autoSize?: TextAreaProps['autoSize'];
    cols?: number;
    rows?: number;
    value?: string | number;
    wrap?: 'soft | hard';
}
export declare class TextAreaField extends BaseField<ITextAreaFieldProps> {
    protected render(): React.JSX.Element;
}
