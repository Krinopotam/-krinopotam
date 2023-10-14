import React from "react";
import {DForm} from "@src/dForm";
import {IDFormFieldProps} from "@src/dForm";
import {QuillEditorField} from "@src/dForm/fields/quillEditor/quillEditorField";

type IComponent = IDFormFieldProps;

/** DForm QuillEditor component */
export const QuillEditorComponent = (props: IComponent): React.JSX.Element => <DForm
    buttons={null}
    fieldsProps={
        {field1: {...props, component: QuillEditorField}}
    }
/>

export  default QuillEditorComponent