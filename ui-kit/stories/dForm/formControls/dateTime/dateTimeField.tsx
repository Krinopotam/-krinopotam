import React from "react";
import {DForm} from "@src/dynamicForm";
import {IDFormFieldDateTimeProps, DateTimeComponent} from "@src/dynamicForm/components/dateTimeComponent";

type IComponent = Omit<IDFormFieldDateTimeProps, 'component'>

/** DynamicForm DateTime component */
export const DateTimeField = (props: IComponent): React.JSX.Element => <DForm
    buttons={null}
    fieldsProps={
        {field1: {...props, component: DateTimeComponent} satisfies IDFormFieldDateTimeProps}
    }
/>

export default DateTimeField