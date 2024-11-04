import {IBaseFieldProps} from "@src/dForm/fields/base";
import {BaseField, } from "@src/dForm/fields/base/baseField";
import {InputFieldRender} from "@src/dForm/fields/input/inputFieldRender";
import React from "react";

export interface IInputFieldProps extends IBaseFieldProps<InputField, string> {
    /** Whether show text count */
    showCount?: boolean;

    /** The max length */
    maxLength?: number;

    /** The autocomplete attribute*/
    autocomplete?: string;

    /** spellcheck attribute */
    spellcheck?: 'true' | 'false';
}

export class InputField extends BaseField<IInputFieldProps> {
    protected render() {
        return <InputFieldRender field={this} />
    }
}
