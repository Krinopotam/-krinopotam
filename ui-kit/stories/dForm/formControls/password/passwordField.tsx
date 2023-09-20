import React from "react";
import {DForm} from "@src/dynamic-form";
import {IDFormFieldPasswordProps, PasswordComponent} from "@src/dynamic-form/components/passwordComponent";

type IComponent = Omit<IDFormFieldPasswordProps, 'component'>

/** DynamicForm Password component */
export const PasswordField = (props: IComponent): React.JSX.Element => <DForm
    buttons={null}
    fieldsProps={
        {field1: {...props, component: PasswordComponent}}
    }/>

export default PasswordField