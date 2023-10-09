/**
 * @TextEditorComponent
 * @version 0.0.29.92
 * @link omegatester@gmail.com
 * @author Maksim Zaytsev
 * @license MIT
 */

import 'react-quill/dist/quill.snow.css';

import React, {useCallback, useEffect} from 'react';

import {IDFormComponentProps, IDFormFieldProps} from './baseComponent';
import {Range, UnprivilegedEditor} from 'react-quill';
import Quill, {Sources} from "quill";
import {IQuillEditorProps, QuillEditor} from "@src/quillEditor";
import {DeltaStatic} from "@src/quillEditor/quillEditor";
import {IDFormApi} from "@src/dynamicForm";

// !used in configGenerator parsing. Don't use multi rows comments!
export interface IDFormFieldQuillEditorProps extends IDFormFieldProps {
    bounds?: IQuillEditorProps['bounds'];

    /** Default value */
    value?: string;

    className?: IQuillEditorProps['className'];

    /** Allowed formats. This is separate from adding a control in the Toolbar. For example, you can configure Quill to allow bolded content to be pasted into an editor that has no bold button in the toolbar */
    formats?: IQuillEditorProps['formats'];

    /** Toolbars buttons config */
    toolbar?: IQuillEditorProps['toolbar'];

    preserveWhitespace?: IQuillEditorProps['preserveWhitespace']

    scrollingContainer?: IQuillEditorProps['scrollingContainer'];

    tabIndex?: IQuillEditorProps['tabIndex'];

    /** Name of theme to use. The builtin options are “bubble” or “snow”. Default: snow */
    theme?: IQuillEditorProps['theme'];

    /** ------ Callbacks --------*/
    onChange?: (value: string, delta: DeltaStatic, source: Sources, editor: UnprivilegedEditor, formApi: IDFormApi) => void;
    onBlur?: (previousSelection: Range, source: Sources, editor: UnprivilegedEditor, formApi: IDFormApi) => void;
    onChangeSelection?: (selection: Range, source: Sources, editor: UnprivilegedEditor, formApi: IDFormApi) => void;
    onFocus?: (selection: Range, source: Sources, editor: UnprivilegedEditor, formApi: IDFormApi) => void;
    onKeyDown?: (e: React.KeyboardEvent<HTMLElement>, formApi: IDFormApi) => void
    onKeyPress?: (e: React.KeyboardEvent<HTMLElement>, formApi: IDFormApi) => void
    onKeyUp?: (e: React.KeyboardEvent<HTMLElement>, formApi: IDFormApi) => void
}

interface IDFormQuillEditorComponentProps extends IDFormComponentProps {
    fieldProps: IDFormFieldQuillEditorProps
}

export const QuillEditorComponent = ({formApi, fieldName, fieldProps}: IDFormQuillEditorComponentProps): React.JSX.Element => {
    const value = formApi.model.getFieldValue(fieldName) as string | undefined;
    const onChange = useCallback(
        function(this:Quill, value: string, delta: DeltaStatic, source: Sources, editor: UnprivilegedEditor)  {
            formApi.model.setFieldValue(fieldName, value || undefined);
            formApi.model.setFieldDirty(fieldName, true);
            fieldProps.onChange?.(value, delta, source, editor, formApi)
        },
        [fieldName, fieldProps, formApi]
    );

    const onBlur = useCallback((previousSelection: Range, source: Sources, editor: UnprivilegedEditor) => {
        formApi.model.setFieldTouched(fieldName, true);
        fieldProps.onBlur?.(previousSelection, source, editor, formApi)
    }, [fieldName, fieldProps, formApi]);

    useEffect(() => {
        formApi.model.setFieldReady(fieldName, true);
    }, [fieldName, formApi.model]);

    return (
        <QuillEditor
            theme={fieldProps.theme}
            value={value}
            formats={fieldProps.formats}
            toolbar={fieldProps.toolbar}
            className={fieldProps.className}
            preserveWhitespace={fieldProps.preserveWhitespace}
            tabIndex={fieldProps.tabIndex}
            bounds={fieldProps.bounds}
            scrollingContainer={fieldProps.scrollingContainer}
            style={fieldProps.style}
            readOnly={formApi.model.isFieldReadOnly(fieldName)}
            disabled={formApi.model.isFieldDisabled(fieldName)}
            placeholder={fieldProps.placeholder}

            // --- Callbacks -----------------------------
            onChange={onChange}
            onBlur={onBlur}
            onChangeSelection={(selection: Range, source: Sources, editor: UnprivilegedEditor) => fieldProps.onChangeSelection?.(selection, source, editor, formApi)}
            onFocus={(selection: Range, source: Sources, editor: UnprivilegedEditor) => fieldProps.onFocus?.(selection, source, editor, formApi)}
            onKeyDown={(e) => fieldProps.onKeyDown?.(e, formApi)}
            onKeyPress={(e) => fieldProps.onKeyPress?.(e, formApi)}
            onKeyUp={(e) => fieldProps.onKeyUp?.(e, formApi)}


        />
    );
};
