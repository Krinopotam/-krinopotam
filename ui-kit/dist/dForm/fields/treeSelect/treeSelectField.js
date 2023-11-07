import { BaseField, } from "../../../dForm/fields/base/baseField";
import React from "react";
import { TreeSelectFieldRender } from "../../../dForm/fields/treeSelect/treeSelectFieldRender";
export class TreeSelectField extends BaseField {
    render() {
        return React.createElement(TreeSelectFieldRender, { field: this });
    }
}
