import { BaseField } from '../../../dForm/fields/base/baseField';
import React from 'react';
import { CustomFieldRender } from '../../../dForm/fields/custom/customFieldRender';
export class CustomField extends BaseField {
    render() {
        return React.createElement(CustomFieldRender, { field: this });
    }
    renderField() {
        return this.render();
    }
}
