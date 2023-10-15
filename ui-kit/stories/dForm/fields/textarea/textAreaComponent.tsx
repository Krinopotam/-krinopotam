import React from "react";
import {DForm} from "@src/dForm";
import {TextAreaField} from "@src/dForm/fields/textArea/textAreaField";
import {IDFormFieldProps} from "@src/dForm";

type IComponent = IDFormFieldProps

/** DForm Textarea component */
export const TextAreaComponent = (props: IComponent): React.JSX.Element => <DForm
    buttons={null}
    fieldsProps={
        {field1: {...props, component: TextAreaField}}
    }
/>

export default TextAreaComponent