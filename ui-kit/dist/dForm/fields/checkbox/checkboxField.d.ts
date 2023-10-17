import { BaseField, IBaseFieldProps } from "../../../dForm/fields/base/baseField";
import React from "react";
export interface ICheckboxFieldProps extends IBaseFieldProps<CheckboxField> {
    value?: boolean;
    indeterminate?: boolean;
}
export declare class CheckboxField extends BaseField<ICheckboxFieldProps> {
    protected render(): React.JSX.Element;
}
