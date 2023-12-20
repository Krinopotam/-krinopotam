import {BaseField, IBaseFieldProps,} from "@src/dForm/fields/base/baseField";
import {InputFieldRender} from "@src/dForm/fields/input/inputFieldRender";
import React from "react";

export interface IInputFieldProps extends IBaseFieldProps<InputField> {
    /** Default value */
    value?: string | number;

    /** Whether show text count */
    showCount?: boolean;

    /** The max length */
    maxLength?: number;

    /** The autocomplete attribute*/
    autocomplete?: 'on' | 'off';

    /** spellcheck attribute */
    spellcheck?: 'true' | 'false';
}

export class InputField extends BaseField<IInputFieldProps> {
    protected render() {
        return <InputFieldRender field={this} />
    }
}
