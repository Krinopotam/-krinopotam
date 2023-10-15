import React from 'react';
import {DForm} from '@src/dForm';
import {IDFormFieldProps} from '@src/dForm';
import {CheckboxField} from '@src/dForm/fields/checkbox/checkboxField';

type IComponent = IDFormFieldProps;

/** DForm Checkbox component */
export const CheckboxComponent = (props: IComponent): React.JSX.Element => (
    <DForm buttons={null} fieldsProps={{field1: {...props, component: CheckboxField}}} />
);
export default CheckboxComponent;