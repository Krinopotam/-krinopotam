import React from "react";
import {DForm} from "@src/dForm";
import {InputField} from "@src/dForm/fields/input/inputField";
import {DividerField, IDividerFieldProps} from "@src/dForm/fields/divider/dividerField";

type IComponent = IDividerFieldProps;

/** DForm Divider component */
export const DividerComponent = (props: IComponent): React.JSX.Element => <DForm
    buttons={null}
    fieldsProps={
        {
            field1: {label: 'Field 1', component: InputField},
            divider: {...props, component: DividerField},
            field2: {label: 'Field 2', component: InputField} ,
        }

    }
/>

export default DividerComponent