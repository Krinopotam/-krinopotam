import React from "react";
import {DForm} from "@src/dynamicForm";
import {IDFormFieldCustomProps, CustomComponent} from "@src/dynamicForm/components/customComponent";

type IComponent = Omit<IDFormFieldCustomProps, 'component'>

/** DynamicForm Custom component */
export const CustomField = (props: IComponent): React.JSX.Element => <DForm
    buttons={null}
    fieldsProps={
        {field1: {...props, component: CustomComponent} satisfies IDFormFieldCustomProps}
    }
/>

export default CustomField