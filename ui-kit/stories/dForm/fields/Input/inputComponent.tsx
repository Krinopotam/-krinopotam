import React from "react";
import {DForm} from "@src/dForm";
import {IInputFieldProps, InputField} from "@src/dForm/fields/input/inputField";

type IComponent = IInputFieldProps

/** DForm Input component */
export const InputComponent = (props: IComponent): React.JSX.Element => <DForm
    buttons={null}
    fieldsProps={
        {field1: {...props, component: InputField}}
    }
/>

export default InputComponent
