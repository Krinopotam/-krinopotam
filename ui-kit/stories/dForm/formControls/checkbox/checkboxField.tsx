import React from "react";
import {DForm} from "@src/dynamicForm";
import {IDFormFieldCheckBoxProps, CheckboxComponent} from "@src/dynamicForm/components/checkboxComponent";

type IComponent = Omit<IDFormFieldCheckBoxProps, 'component'>

/** DynamicForm Checkbox component */
export const CheckboxField = (props: IComponent): React.JSX.Element => <DForm
    buttons={null}
    fieldsProps={
        {field1: {...props, component: CheckboxComponent} satisfies IDFormFieldCheckBoxProps}
    }/>

export default CheckboxField