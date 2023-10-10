import {BaseField, IDFormBaseFieldProps,} from "@src/dForm/fields/base/baseField";
import {InputFieldRender} from "@src/dForm/fields/input/inputFieldRender";
import React from "react";

export interface IDFormInputFieldProps extends IDFormBaseFieldProps<InputField> {
    /** Default value */
    value?: string | number ;

    /** Whether show text count */
    showCount?: boolean;

    /** The max length */
    maxLength?: number;
}

export class InputField extends BaseField<IDFormInputFieldProps> {
    protected render() {
        return <InputFieldRender field={this} />
    }
}
