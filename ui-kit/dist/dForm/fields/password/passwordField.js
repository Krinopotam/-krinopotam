import { BaseField, } from "../../../dForm/fields/base/baseField";
import React from "react";
import { PasswordFieldRender } from "../../../dForm/fields/password/passwordFieldRender";
export class PasswordField extends BaseField {
    render() {
        return React.createElement(PasswordFieldRender, { field: this });
    }
}
//# sourceMappingURL=passwordField.js.map