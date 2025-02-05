import {IBaseFieldProps} from "@src/dForm/fields/base";
import {BaseField} from '@src/dForm/fields/base/baseField';
import React from 'react';
import {QuillEditorFieldRender} from '@src/dForm/fields/quillEditor/quillEditorFieldRender';
import {IQuillEditorProps} from '@src/quillEditor';
import ReactQuill, {DeltaStatic} from 'react-quill-new';

import Range = ReactQuill.Range;
import UnprivilegedEditor = ReactQuill.UnprivilegedEditor;
type Sources = "api" | "user" | "silent";

export interface IQuillEditorFieldProps extends IBaseFieldProps<QuillEditorField, string> {
    bounds?: IQuillEditorProps['bounds'];

    /** Allowed formats. This is separate from adding a control in the Toolbar. For example, you can configure Quill to allow bolded content to be pasted into an editor that has no bold button in the toolbar */
    formats?: IQuillEditorProps['formats'];

    /** Toolbars buttons config */
    toolbar?: IQuillEditorProps['toolbar'];

    preserveWhitespace?: IQuillEditorProps['preserveWhitespace'];

    tabIndex?: IQuillEditorProps['tabIndex'];

    /** Name of theme to use. The builtin options are “bubble” or “snow”. Default: snow */
    theme?: IQuillEditorProps['theme'];

    /** ------ Callbacks --------*/
    onChange?: (value: string, delta: DeltaStatic, source: Sources, editor: UnprivilegedEditor, field: QuillEditorField) => void;
    onBlur?: (previousSelection: Range, source: Sources, editor: UnprivilegedEditor, field: QuillEditorField) => void;
    onChangeSelection?: (selection: Range, source: Sources, editor: UnprivilegedEditor, field: QuillEditorField) => void;
    onFocus?: (selection: Range, source: Sources, editor: UnprivilegedEditor, field: QuillEditorField) => void;
    onKeyDown?: (e: React.KeyboardEvent<HTMLElement>, field: QuillEditorField) => void;
    onKeyPress?: (e: React.KeyboardEvent<HTMLElement>, field: QuillEditorField) => void;
    onKeyUp?: (e: React.KeyboardEvent<HTMLElement>, field: QuillEditorField) => void;
}

export class QuillEditorField extends BaseField<IQuillEditorFieldProps> {
    protected render() {
        return <QuillEditorFieldRender field={this} />;
    }
}
