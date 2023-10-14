import {BaseField, IDFormBaseFieldProps,} from "@src/dForm/fields/base/baseField";
import React from "react";
import {CheckboxFieldRender} from "@src/dForm/fields/checkbox/checkboxFieldRender";

export interface IDFormCheckboxFieldProps extends IDFormBaseFieldProps<CheckboxField> {
    /** default value */
    value?: boolean;

    /** The indeterminate checked state of checkbox */
    indeterminate?: boolean;
}

export class CheckboxField extends BaseField<IDFormCheckboxFieldProps> {
    protected render() {
        return <CheckboxFieldRender field={this} />
    }
}
