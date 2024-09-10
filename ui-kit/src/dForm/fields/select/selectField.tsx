import {BaseField, IBaseFieldProps} from '@src/dForm/fields/base/baseField';
import React from 'react';
import {SelectFieldRender} from '@src/dForm/fields/select/selectFieldRender';

import {ISelectNode, ISelectProps} from '@src/select';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface ISelectFieldOwnProps extends IBaseFieldProps<SelectField, ISelectProps['value'] | ISelectNode | ISelectNode[]> {

}

export type ISelectFieldProps = ISelectFieldOwnProps & ISelectProps;

export class SelectField extends BaseField<ISelectFieldProps> {
    protected render() {
        return <SelectFieldRender field={this} />;
    }
}
