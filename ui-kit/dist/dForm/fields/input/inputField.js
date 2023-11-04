import { BaseField, } from "../../../dForm/fields/base/baseField";
import { InputFieldRender } from "../../../dForm/fields/input/inputFieldRender";
import React from "react";
export class InputField extends BaseField {
    render() {
        return React.createElement(InputFieldRender, { field: this });
    }
}
//# sourceMappingURL=inputField.js.map