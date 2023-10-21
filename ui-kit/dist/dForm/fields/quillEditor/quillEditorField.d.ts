import { BaseField, IBaseFieldProps } from '../../../dForm/fields/base/baseField';
import React from 'react';
import { IQuillEditorProps } from '../../../quillEditor';
import { IDeltaStatic } from '../../../quillEditor/quillEditor';
import { Sources } from 'quill';
import { Range, UnprivilegedEditor } from 'react-quill';
export interface IQuillEditorFieldProps extends IBaseFieldProps<QuillEditorField> {
    bounds?: IQuillEditorProps['bounds'];
    value?: string;
    className?: IQuillEditorProps['className'];
    formats?: IQuillEditorProps['formats'];
    toolbar?: IQuillEditorProps['toolbar'];
    preserveWhitespace?: IQuillEditorProps['preserveWhitespace'];
    scrollingContainer?: IQuillEditorProps['scrollingContainer'];
    tabIndex?: IQuillEditorProps['tabIndex'];
    theme?: IQuillEditorProps['theme'];
    onChange?: (value: string, delta: IDeltaStatic, source: Sources, editor: UnprivilegedEditor, field: QuillEditorField) => void;
    onBlur?: (previousSelection: Range, source: Sources, editor: UnprivilegedEditor, field: QuillEditorField) => void;
    onChangeSelection?: (selection: Range, source: Sources, editor: UnprivilegedEditor, field: QuillEditorField) => void;
    onFocus?: (selection: Range, source: Sources, editor: UnprivilegedEditor, field: QuillEditorField) => void;
    onKeyDown?: (e: React.KeyboardEvent<HTMLElement>, field: QuillEditorField) => void;
    onKeyPress?: (e: React.KeyboardEvent<HTMLElement>, field: QuillEditorField) => void;
    onKeyUp?: (e: React.KeyboardEvent<HTMLElement>, field: QuillEditorField) => void;
}
export declare class QuillEditorField extends BaseField<IQuillEditorFieldProps> {
    protected render(): React.JSX.Element;
}
