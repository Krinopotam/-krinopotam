import React from "react";
import {DForm} from "@src/dynamic-form";
import {CustomComponent, IDFormFieldCustomProps} from "@src/dynamic-form/components/customComponent";
import {InputComponent} from "@src/dynamic-form/components/inputComponent";
import {IDFormFieldCheckBoxProps} from "@src/dynamic-form/components/checkboxComponent";

type IComponent = Omit<IDFormFieldCheckBoxProps, 'component' | 'callbacks'>

/** DynamicForm Custom component */
export const AutoUpdateCustomField = (props: IComponent): React.JSX.Element => <DForm
    buttons={null}
    fieldsProps={
        {
            field1: {label: "Enter value", component: InputComponent},
            field2: {...props, component: CustomComponent, callbacks: {onRender: MyComponent}} as IDFormFieldCustomProps,
        }
    }
    callbacks={{
        onFieldValueChanged: (_fieldName, _value, _prevValue, formApi) => {
            const inputValue = formApi.model.getFieldValue("field1") as string
            formApi.model.setFieldValue("field2", inputValue, true)
        }
    }}
/>

export default AutoUpdateCustomField

const MyComponent = (value: string): React.ReactNode => {
    return <h3>Entered value: &ldquo;<span style={{color: 'red'}}>{value}</span>&rdquo;</h3>
}
