import {BaseField, IDFormBaseFieldProps} from '@src/dForm/fields/base/baseField';
import React from 'react';
import {CustomFieldRender} from '@src/dForm/fields/custom/customFieldRender';

export interface IDFormCustomFieldProps extends IDFormBaseFieldProps<CustomField> {
    /** Default value */
    value?: string | React.ReactNode;

    /** Fires on field render */
    onRender?: (value: string | React.ReactNode, field: CustomField) => string | React.ReactNode;
}

export class CustomField extends BaseField<IDFormCustomFieldProps> {
    protected render() {
        return <CustomFieldRender field={this} />;
    }

    renderField(): React.ReactNode {
        return this.render();
    }
}
