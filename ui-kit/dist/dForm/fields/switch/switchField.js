import { BaseField, } from "../../../dForm/fields/base/baseField";
import React from "react";
import { SwitchFieldRender } from "../../../dForm/fields/switch/switchFieldRender";
export class SwitchField extends BaseField {
    render() {
        return React.createElement(SwitchFieldRender, { field: this });
    }
}
//# sourceMappingURL=switchField.js.map