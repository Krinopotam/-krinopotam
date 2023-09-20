import React from "react";
import {DForm} from "@src/dynamic-form";
import {IDFormFieldDateTimeProps, DateTimeComponent} from "@src/dynamic-form/components/dateTimeComponent";

type IComponent = Omit<IDFormFieldDateTimeProps, 'component'>

/** DynamicForm DateTime component */
export const DateTimeField = (props: IComponent): React.JSX.Element => <DForm
    buttons={null}
    fieldsProps={
        {field1: {...props, component: DateTimeComponent}}
    }
/>

export default DateTimeField