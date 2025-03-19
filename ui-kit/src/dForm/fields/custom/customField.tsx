import {IBaseFieldProps} from "@src/dForm/fields/base";
import {BaseField} from '@src/dForm/fields/base/baseField';
import React from 'react';
import {CustomFieldRender} from '@src/dForm/fields/custom/customFieldRender';

export interface ICustomFieldProps extends IBaseFieldProps<CustomField, string | React.ReactNode> {
    /** Fires on field render */
    onRender?: (value: string | React.ReactNode, field: CustomField) => string | React.ReactNode;

    /** By default, custom field is rendered in raw mode, without in a field wrapper and field label */
    fieldWrapper?:boolean
}

export class CustomField extends BaseField<ICustomFieldProps> {
    protected render() {
        return <CustomFieldRender field={this} />;
    }

    renderField(): React.ReactNode {
        if (this.getProps().fieldWrapper) return super.renderField();
        return this.render();
    }
}
