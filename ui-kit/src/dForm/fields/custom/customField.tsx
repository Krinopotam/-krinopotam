import {IBaseFieldProps} from '@src/dForm/fields/base';
import {BaseField} from '@src/dForm/fields/base/baseField';
import React from 'react';
import {CustomFieldRender} from '@src/dForm/fields/custom/customFieldRender';

export interface ICustomFieldProps extends IBaseFieldProps<CustomField, string | React.ReactNode> {
    /** Fires on field render */
    onRender?: (value: string | React.ReactNode, field: CustomField) => string | React.ReactNode;
}

export class CustomField extends BaseField<ICustomFieldProps> {
    protected render() {
        return <CustomFieldRender field={this} />;
    }

    override noItemWrapper() {
        // noinspection PointlessBooleanExpressionJS
        return this.getProps().noItemWrapper !== false;
    }

    override noContainer() {
        // noinspection PointlessBooleanExpressionJS
        return this.getProps().noContainer !== false;
    }
}
