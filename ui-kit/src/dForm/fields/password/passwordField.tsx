import {BaseField, IBaseFieldProps,} from "@src/dForm/fields/base/baseField";
import React from "react";
import {PasswordFieldRender} from "@src/dForm/fields/password/passwordFieldRender";

export interface IPasswordFieldProps extends IBaseFieldProps<PasswordField> {
    /** Default value */
    value?: string | number;

    /** Show input counter */
    showCount?: boolean;

    /** Max input length */
    maxLength?: number;

    /** Icons render */
    iconRender?: (visible: boolean) => React.ReactNode;

    /** The autocomplete attribute*/
    autocomplete?: 'on' | 'off';

    /** spellcheck attribute */
    spellcheck?: 'true' | 'false';
}

export class PasswordField extends BaseField<IPasswordFieldProps> {
    protected render() {
        return <PasswordFieldRender field={this} />
    }
}
