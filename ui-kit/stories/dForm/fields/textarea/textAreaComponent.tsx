import React from "react";
import {DForm} from "@src/dForm";
import {ITextAreaFieldProps, TextAreaField} from "@src/dForm/fields/textArea/textAreaField";

type IComponent = ITextAreaFieldProps

/** DForm Textarea field */
export const TextAreaComponent = (props: IComponent): React.JSX.Element => <DForm
    buttons={null}
    fieldsProps={
        {field1: {...props, component: TextAreaField}}
    }
/>

export default TextAreaComponent