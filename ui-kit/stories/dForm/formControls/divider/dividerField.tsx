import React from "react";
import {DForm} from "@src/dynamic-form";
import {IDFormFieldDividerProps, DividerComponent} from "@src/dynamic-form/components/dividerComponent";
import {InputComponent} from "@src/dynamic-form/components/inputComponent";

type IComponent = Omit<IDFormFieldDividerProps, 'component'>

/** DynamicForm Divider component */
export const DividerField = (props: IComponent): React.JSX.Element => <DForm
    buttons={null}
    fieldsProps={
        {
            field1: {label: 'Field 1', component: InputComponent},
            divider: {...props, component: DividerComponent},
            field2: {label: 'Field 2', component: InputComponent},
        }

    }
/>

export default DividerField