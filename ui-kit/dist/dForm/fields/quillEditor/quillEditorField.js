import { BaseField } from '../../../dForm/fields/base/baseField';
import React from 'react';
import { QuillEditorFieldRender } from '../../../dForm/fields/quillEditor/quillEditorFieldRender';
export class QuillEditorField extends BaseField {
    render() {
        return React.createElement(QuillEditorFieldRender, { field: this });
    }
}
