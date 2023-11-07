import { BaseField } from '../../../dForm/fields/base/baseField';
import React from 'react';
import { SelectFieldRender } from '../../../dForm/fields/select/selectFieldRender';
export class SelectField extends BaseField {
    render() {
        return React.createElement(SelectFieldRender, { field: this });
    }
}
