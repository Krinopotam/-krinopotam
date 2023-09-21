import React from "react";
import {DForm} from "@src/dynamicForm";
import {IDFormFieldPasswordProps, PasswordComponent} from "@src/dynamicForm/components/passwordComponent";

type IComponent = Omit<IDFormFieldPasswordProps, 'component'>

/** DynamicForm Password component */
export const PasswordField = (props: IComponent): React.JSX.Element => <DForm
    buttons={null}
    fieldsProps={
        {field1: {...props, component: PasswordComponent}}
    }/>

export default PasswordField