import { BaseField } from '../../../dForm/fields/base/baseField';
import React from 'react';
import { DividerFieldRender } from "../../../dForm/fields/divider/dividerFieldRender";
export class DividerField extends BaseField {
    render() {
        return React.createElement(DividerFieldRender, { field: this });
    }
    renderField() {
        return this.render();
    }
}
//# sourceMappingURL=dividerField.js.map