import React from "react";
import {DForm} from "@src/dynamic-form";
import {IDFormFieldTextAreaProps, TextAreaComponent} from "@src/dynamic-form/components/textAreaComponent";

type IComponent = Omit<IDFormFieldTextAreaProps, 'component'>

/** DynamicForm Textarea component */
export const TextareaField = (props: IComponent): React.JSX.Element => <DForm
    buttons={null}
    fieldsProps={
        {field1: {...props, component: TextAreaComponent}}
    }
/>

export default TextareaField