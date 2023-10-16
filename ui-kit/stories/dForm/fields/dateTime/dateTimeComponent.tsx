import React from "react";
import {DForm} from "@src/dForm";
import {DateTimeField, IDateTimeFieldProps} from "@src/dForm/fields/dateTime/dateTimeField";

type IComponent = IDateTimeFieldProps;

/** DForm DateTime field */
export const DateTimeComponent = (props: IComponent): React.JSX.Element => <DForm
    buttons={null}
    fieldsProps={
        {field1: {...props, component: DateTimeField}}
    }
/>

export default DateTimeComponent