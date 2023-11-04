import React from 'react';
import {DForm} from '@src/dForm';
import {IQuillEditorFieldProps, QuillEditorField} from '@src/dForm/fields/quillEditor/quillEditorField';

type IComponent = IQuillEditorFieldProps;

/** DForm QuillEditor field */
export const QuillEditorComponent = (props: IComponent): React.JSX.Element => (
    <DForm buttons={null} fieldsProps={{field1: {...props, component: QuillEditorField}}} />
);

export default QuillEditorComponent;