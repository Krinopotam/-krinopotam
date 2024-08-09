import React from 'react';
import {DForm} from '@src/dForm';
import {IInputFieldProps, InputField} from '@src/dForm/fields/input/inputField';
import {CustomField} from '@src/dForm/fields/custom/customField';
import {IDFormFieldProps} from "@src/dForm/fields";

type IComponent = IDFormFieldProps;

/** DForm Custom field auto-updating */
export const AutoUpdateCustomField = (props: IComponent): React.JSX.Element => (
    <DForm
        buttons={null}
        fieldsProps={{
            field1: {
                label: 'Enter value',
                component: InputField,
                onValueChanged: (value, prevValue, field) => {
                    const field2 = field.getModel().getField('field2')
                    field2.setValue(value);
                },
            } satisfies  IInputFieldProps,
            field2: {...props, component: CustomField, onRender: MyComponent},
        }}
    />
);

export default AutoUpdateCustomField;

const MyComponent = (value: React.ReactNode): React.ReactNode => {
    return (
        <h3>
            Entered value: &ldquo;<span style={{color: 'red'}}>{value}</span>&rdquo;
        </h3>
    );
};
