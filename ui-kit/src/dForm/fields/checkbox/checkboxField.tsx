import {IBaseFieldProps} from "@src/dForm/fields/base";
import {BaseField, } from "@src/dForm/fields/base/baseField";
import React from "react";
import {CheckboxFieldRender} from "@src/dForm/fields/checkbox/checkboxFieldRender";

export interface ICheckboxFieldProps extends IBaseFieldProps<CheckboxField, boolean> {
    /** The indeterminate checked state of checkbox */
    indeterminate?: boolean;
}

export class CheckboxField extends BaseField<ICheckboxFieldProps> {
    noGrowWidth() {
        return true
    }

    protected render() {
        return <CheckboxFieldRender field={this} />
    }
}
