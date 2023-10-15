import React from 'react';
import {DForm} from '@src/dForm';
import {QuillEditorField} from '@src/dForm/fields/quillEditor/quillEditorField';
import {IQuillEditorProps} from '@src/quillEditor';

type IComponent = IQuillEditorProps;

/** DForm QuillEditor component */
export const QuillEditorComponent = (props: IComponent): React.JSX.Element => (
    <DForm buttons={null} fieldsProps={{field1: {...props, component: QuillEditorField}}} />
);

export default QuillEditorComponent;