import { BaseField, IBaseFieldProps } from "../../../dForm/fields/base/baseField";
import React from "react";
export interface IInputFieldProps extends IBaseFieldProps<InputField> {
    value?: string | number;
    showCount?: boolean;
    maxLength?: number;
}
export declare class InputField extends BaseField<IInputFieldProps> {
    protected render(): React.JSX.Element;
}
