import React from "react";
import {DForm} from "@src/dynamic-form";
import {IDFormFieldCheckBoxProps, CheckboxComponent} from "@src/dynamic-form/components/checkboxComponent";

type IComponent = Omit<IDFormFieldCheckBoxProps, 'component'>

/** DynamicForm Checkbox component */
export const CheckboxField = (props: IComponent): React.JSX.Element => <DForm
    buttons={null}
    fieldsProps={
        {field1: {...props, component: CheckboxComponent}}
    }/>

export default CheckboxField