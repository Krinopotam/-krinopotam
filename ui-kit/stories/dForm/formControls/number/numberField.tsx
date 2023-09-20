import React from "react";
import {DForm} from "@src/dynamic-form";
import {IDFormFieldNumberProps, NumberComponent} from "@src/dynamic-form/components/numberComponent";

type IComponent = Omit<IDFormFieldNumberProps, 'component'>

/** DynamicForm Number component */
export const NumberField = (props: IComponent): React.JSX.Element => <DForm
    buttons={null}
    fieldsProps={
        {field1: {...props, component: NumberComponent}}
    }/>

export default NumberField