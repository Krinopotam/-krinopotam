import React from "react";
import {DForm} from "@src/dForm";
import {CustomField, ICustomFieldProps} from "@src/dForm/fields/custom/customField";

type IComponent = ICustomFieldProps;

/** DForm Custom component */
export const CustomComponent = (props: IComponent): React.JSX.Element => <DForm
    buttons={null}
    fieldsProps={
        {field1: {...props, component: CustomField}}
    }
/>

export default CustomComponent