import {IBaseFieldProps} from "@src/dForm/fields/base";
import {BaseField} from '@src/dForm/fields/base/baseField';
import {SelectFieldRender} from '@src/dForm/fields/select/selectFieldRender';

import {ISelectProps} from '@src/select';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface ISelectFieldOwnProps extends IBaseFieldProps<SelectField, ISelectProps['value']> {}

export type ISelectFieldProps = ISelectFieldOwnProps & ISelectProps;

export class SelectField extends BaseField<ISelectFieldProps> {
    protected render() {
        return <SelectFieldRender field={this} />;
    }
}
