import React from "react";
import {DForm} from "@src/dynamicForm";
import {IDFormFieldQuillEditorProps, QuillEditorComponent} from "@src/dynamicForm/components/quillEditorComponent";

type IComponent = Omit<IDFormFieldQuillEditorProps, 'component'>

/** DynamicForm QuillEditor component */
export const QuillEditorField = (props: IComponent): React.JSX.Element => <DForm
    buttons={null}
    fieldsProps={
        {field1: {...props, component: QuillEditorComponent} satisfies IDFormFieldQuillEditorProps}
    }
/>

export  default QuillEditorField