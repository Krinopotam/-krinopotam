import React from "react";
import {DForm} from "@src/dynamicForm";
import {IDFormFieldInputProps, InputComponent} from "@src/dynamicForm/components/inputComponent";

type IComponent = Omit<IDFormFieldInputProps, 'component'>

/** DynamicForm Input component */
export const InputField = (props: IComponent): React.JSX.Element => <DForm
    buttons={null}
    fieldsProps={
        {field1: {...props, component: InputComponent} satisfies IDFormFieldInputProps}
    }
/>

export default InputField