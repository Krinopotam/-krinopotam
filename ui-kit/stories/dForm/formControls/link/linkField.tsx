import React from "react";
import {DForm} from "@src/dynamic-form";
import {IDFormFieldLinkProps, LinkComponent} from "@src/dynamic-form/components/linkComponent";

type IComponent = Omit<IDFormFieldLinkProps, 'component'>

/** DynamicForm Link component */
export const LinkField = (props: IComponent): React.JSX.Element => <DForm
    buttons={null}
    fieldsProps={
        {field1: {...props, component: LinkComponent}}
    }
/>

export default LinkField