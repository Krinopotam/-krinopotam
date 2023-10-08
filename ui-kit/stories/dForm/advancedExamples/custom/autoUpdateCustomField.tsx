import React from 'react';
import {DForm} from '@src/dynamicForm';
import {CustomComponent, IDFormFieldCustomProps} from '@src/dynamicForm/components/customComponent';
import {IDFormFieldInputProps, InputComponent} from '@src/dynamicForm/components/inputComponent';
import {IDFormFieldCheckBoxProps} from '@src/dynamicForm/components/checkboxComponent';

type IComponent = Omit<IDFormFieldCheckBoxProps, 'component' | 'callbacks'>;

/** DynamicForm Custom component */
export const AutoUpdateCustomField = (props: IComponent): React.JSX.Element => (
    <DForm
        buttons={null}
        fieldsProps={{
            field1: {label: 'Enter value', component: InputComponent} satisfies IDFormFieldInputProps,
            field2: {...props, component: CustomComponent, onRender: MyComponent} satisfies IDFormFieldCustomProps,
        }}
        onFieldValueChanged={(_fieldName, _value, _prevValue, formApi) => {
            const inputValue = formApi.model.getFieldValue('field1') as string;
            formApi.model.setFieldValue('field2', inputValue, true);
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
