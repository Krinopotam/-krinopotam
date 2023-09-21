import React from "react";
import {DForm} from "@src/dynamicForm";
import {IDFormFieldDividerProps, DividerComponent} from "@src/dynamicForm/components/dividerComponent";
import {IDFormFieldInputProps, InputComponent} from "@src/dynamicForm/components/inputComponent";

type IComponent = Omit<IDFormFieldDividerProps, 'component'>

/** DynamicForm Divider component */
export const DividerField = (props: IComponent): React.JSX.Element => <DForm
    buttons={null}
    fieldsProps={
        {
            field1: {label: 'Field 1', component: InputComponent} satisfies IDFormFieldInputProps,
            divider: {...props, component: DividerComponent} satisfies IDFormFieldDividerProps,
            field2: {label: 'Field 2', component: InputComponent} satisfies IDFormFieldInputProps,
        }

    }
/>

export default DividerField