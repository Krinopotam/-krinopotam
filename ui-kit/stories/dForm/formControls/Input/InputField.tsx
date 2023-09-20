import React from "react";
import {DForm} from "@src/dynamic-form";
import {IDFormFieldInputProps, InputComponent} from "@src/dynamic-form/components/inputComponent";

type IComponent = Omit<IDFormFieldInputProps, 'component'>

/** DynamicForm Input component */
export const InputField = (props: IComponent): React.JSX.Element => <DForm
    buttons={null}
    fieldsProps={
        {field1: {...props, component: InputComponent}}
    }
/>

export default InputField