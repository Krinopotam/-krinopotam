import { BaseField, IBaseFieldProps } from "../../../dForm/fields/base/baseField";
import React from "react";
export interface ISwitchFieldProps extends IBaseFieldProps<SwitchField> {
    value?: boolean;
    checkedChildren?: React.ReactNode;
    unCheckedChildren?: React.ReactNode;
    loading?: boolean;
}
export declare class SwitchField extends BaseField<ISwitchFieldProps> {
    protected render(): React.JSX.Element;
}
