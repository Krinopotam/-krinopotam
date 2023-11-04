import { BaseField, } from "../../../dForm/fields/base/baseField";
import React from "react";
import { DateTimeFieldRender } from "../../../dForm/fields/dateTime/dateTimeFieldRender";
export class DateTimeField extends BaseField {
    render() {
        return React.createElement(DateTimeFieldRender, { field: this });
    }
}
//# sourceMappingURL=dateTimeField.js.map