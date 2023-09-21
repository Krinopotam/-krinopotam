import React from "react";
import {DForm} from "@src/dynamicForm";
import {IDFormFieldNumberProps, NumberComponent} from "@src/dynamicForm/components/numberComponent";

type IComponent = Omit<IDFormFieldNumberProps, 'component'>

/** DynamicForm Number component */
export const NumberField = (props: IComponent): React.JSX.Element => <DForm
    buttons={null}
    fieldsProps={
        {field1: {...props, component: NumberComponent} satisfies IDFormFieldNumberProps }
    }/>

export default NumberField