import {BaseField} from '@src/dForm/fields/base/baseField';
import React from 'react';
import {TextAreaFieldRender} from '@src/dForm/fields/textArea/textAreaFieldRender';
import {IInputFieldProps} from '@src/dForm/fields/input/inputField';
import {TextAreaProps} from 'antd/es/input/TextArea';

export interface IDFormTextAreaFieldProps extends IInputFieldProps {
    /** Height auto size feature, can be set to true | false or an object ( minRows: 2, maxRows: 6 ) */
    autoSize?: TextAreaProps['autoSize'];

    /** Specifies the visible width of a text area */
    cols?: number;

    /** Specifies the visible number of lines in a text area */
    rows?: number;

    /** Default value */
    value?: string | number;

    /** Text wrap parameters. Specifies how the text in a text area is to be wrapped when submitted in a form */
    wrap?: 'soft | hard';
}

export class TextAreaField extends BaseField<IDFormTextAreaFieldProps> {
    protected render() {
        return <TextAreaFieldRender field={this} />;
    }
}
