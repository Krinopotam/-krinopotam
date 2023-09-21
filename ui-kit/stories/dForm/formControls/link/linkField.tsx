import React from "react";
import {DForm} from "@src/dynamicForm";
import {IDFormFieldLinkProps, LinkComponent} from "@src/dynamicForm/components/linkComponent";

type IComponent = Omit<IDFormFieldLinkProps, 'component'>

/** DynamicForm Link component */
export const LinkField = (props: IComponent): React.JSX.Element => <DForm
    buttons={null}
    fieldsProps={
        {field1: {...props, component: LinkComponent} satisfies IDFormFieldLinkProps}
    }
/>

export default LinkField