import { BaseField, } from "../../../dForm/fields/base/baseField";
import React from "react";
import { NumberFieldRender } from "../../../dForm/fields/number/numberFieldRender";
export class NumberField extends BaseField {
    render() {
        return React.createElement(NumberFieldRender, { field: this });
    }
}
