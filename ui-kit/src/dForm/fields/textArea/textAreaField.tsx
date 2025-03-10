import {IBaseFieldProps} from "@src/dForm/fields/base";
import {BaseField} from '@src/dForm/fields/base/baseField';
import React from 'react';
import {TextAreaFieldRender} from '@src/dForm/fields/textArea/textAreaFieldRender';
import {TextAreaProps} from 'antd/es/input/TextArea';

export interface ITextAreaFieldProps extends IBaseFieldProps<TextAreaField, string> {
    /** Whether show text count */
    showCount?: boolean;

    /** The max length */
    maxLength?: number;

    /** Height auto size feature, can be set to true | false or an object ( minRows: 2, maxRows: 6 ) */
    autoSize?: TextAreaProps['autoSize'];

    /** Specifies the visible width of a text area */
    cols?: number;

    /** Specifies the visible number of lines in a text area */
    rows?: number;

    /** Text wrap parameters. Specifies how the text in a text area is to be wrapped when submitted in a form */
    wrap?: 'soft' | 'hard';
}

export class TextAreaField extends BaseField<ITextAreaFieldProps> {
    protected render() {
        return <TextAreaFieldRender field={this} />;
    }
}
