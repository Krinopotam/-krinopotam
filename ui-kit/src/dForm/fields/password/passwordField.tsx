import {BaseField, IDFormBaseFieldProps,} from "@src/dForm/fields/base/baseField";
import React from "react";
import {PasswordFieldRender} from "@src/dForm/fields/password/passwordFieldRender";

export interface IDFormPasswordFieldProps extends IDFormBaseFieldProps<PasswordField> {
    /** Default value */
    value?: string | number;

    /** Show input counter */
    showCount?: boolean;

    /** Max input length */
    maxLength?: number;

    /** Icons render */
    iconRender?: (visible: boolean) => React.ReactNode;
}

export class PasswordField extends BaseField<IDFormPasswordFieldProps> {
    protected render() {
        return <PasswordFieldRender field={this} />
    }
}
