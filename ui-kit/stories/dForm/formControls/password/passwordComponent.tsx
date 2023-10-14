import React from "react";
import {DForm} from "@src/dForm";
import {IDFormFieldProps} from "@src/dForm";
import {PasswordField} from "@src/dForm/fields/password/passwordField";

type IComponent = IDFormFieldProps

/** DynamicForm Password component */
export const PasswordComponent = (props: IComponent): React.JSX.Element => <DForm
    buttons={null}
    fieldsProps={
        {field1: {...props, component: PasswordField}}
    }/>

export default PasswordComponent