import { BaseField, } from "../../../dForm/fields/base/baseField";
import React from "react";
import { CheckboxFieldRender } from "../../../dForm/fields/checkbox/checkboxFieldRender";
export class CheckboxField extends BaseField {
    render() {
        return React.createElement(CheckboxFieldRender, { field: this });
    }
}
//# sourceMappingURL=checkboxField.js.map