import {BaseField, IBaseFieldProps,} from "@src/dForm/fields/base/baseField";
import React from "react";
import {PasswordFieldRender} from "@src/dForm/fields/password/passwordFieldRender";

export interface IPasswordFieldProps extends IBaseFieldProps<PasswordField, string> {
    /** Show input counter */
    showCount?: boolean;

    /** Max input length */
    maxLength?: number;

    /** Icons render */
    iconRender?: (visible: boolean) => React.ReactNode;

    /** The autocomplete attribute*/
    autocomplete?: string;

    /** spellcheck attribute */
    spellcheck?: 'true' | 'false';
}

export class PasswordField extends BaseField<IPasswordFieldProps> {
    protected render() {
        return <PasswordFieldRender field={this} />
    }
}
