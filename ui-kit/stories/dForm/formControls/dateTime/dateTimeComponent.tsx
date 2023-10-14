import React from "react";
import {DForm} from "@src/dForm";
import {IDFormFieldProps} from "@src/dForm";
import {DateTimeField} from "@src/dForm/fields/dateTime/dateTimeField";

type IComponent = IDFormFieldProps;

/** DynamicForm DateTime component */
export const DateTimeComponent = (props: IComponent): React.JSX.Element => <DForm
    buttons={null}
    fieldsProps={
        {field1: {...props, component: DateTimeField}}
    }
/>

export default DateTimeComponent