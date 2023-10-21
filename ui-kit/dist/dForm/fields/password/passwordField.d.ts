import { BaseField, IBaseFieldProps } from "../../../dForm/fields/base/baseField";
import React from "react";
export interface IPasswordFieldProps extends IBaseFieldProps<PasswordField> {
    value?: string | number;
    showCount?: boolean;
    maxLength?: number;
    iconRender?: (visible: boolean) => React.ReactNode;
}
export declare class PasswordField extends BaseField<IPasswordFieldProps> {
    protected render(): React.JSX.Element;
}
