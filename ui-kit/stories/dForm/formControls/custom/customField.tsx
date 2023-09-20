import React from "react";
import {DForm} from "@src/dynamic-form";
import {IDFormFieldCustomProps, CustomComponent} from "@src/dynamic-form/components/customComponent";

type IComponent = Omit<IDFormFieldCustomProps, 'component'>

/** DynamicForm Custom component */
export const CustomField = (props: IComponent): React.JSX.Element => <DForm
    buttons={null}
    fieldsProps={
        {field1: {...props, component: CustomComponent}}
    }
/>

export default CustomField