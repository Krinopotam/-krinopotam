import React from "react";
import {DForm} from "@src/dynamicForm";
import {IDFormFieldTextAreaProps, TextAreaComponent} from "@src/dynamicForm/components/textAreaComponent";

type IComponent = Omit<IDFormFieldTextAreaProps, 'component'>

/** DynamicForm Textarea component */
export const TextAreaField = (props: IComponent): React.JSX.Element => <DForm
    buttons={null}
    fieldsProps={
        {field1: {...props, component: TextAreaComponent} satisfies IDFormFieldTextAreaProps}
    }
/>

export default TextAreaField