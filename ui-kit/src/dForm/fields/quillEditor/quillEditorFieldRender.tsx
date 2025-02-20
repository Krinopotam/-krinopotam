import React, {CSSProperties, useCallback, useEffect, useSyncExternalStore} from 'react';
import {QuillEditorField} from '@src/dForm/fields/quillEditor/quillEditorField';
import Quill from 'quill';
import {QuillEditor} from '@src/quillEditor/quillEditor';
import ReactQuill, {DeltaStatic} from 'react-quill-new';

import Range = ReactQuill.Range;
import UnprivilegedEditor = ReactQuill.UnprivilegedEditor;
type Sources = "api" | "user" | "silent";

export const QuillEditorFieldRender = ({field}: {field: QuillEditorField}): React.JSX.Element => {
    useSyncExternalStore(field.subscribe.bind(field), field.getSnapshot.bind(field));

    const fieldProps = field.getProps();

    const value = field.getValue();

    const onChange = useCallback(
        function (this: Quill, value: string, delta: DeltaStatic, source: Sources, editor: UnprivilegedEditor) {
            if (!field.isReady()) return;
            field.setValue(value || undefined);
            field.setDirty(true);
            fieldProps.onChange?.(value, delta, source, editor, field);
        },
        [field, fieldProps]
    );

    const onBlur = useCallback(
        (previousSelection: Range, source: Sources, editor: UnprivilegedEditor) => {
            field.setTouched(true);
            fieldProps.onBlur?.(previousSelection, source, editor, field);
        },
        [field, fieldProps]
    );

    useEffect(() => {
        field.setReady(true);
    }, [field]);

    const defStyle: CSSProperties = {width: field.getWidth() ?? '100%'};
    const style: React.CSSProperties = {...defStyle, ...fieldProps.style};

    return (
        <QuillEditor
            className={fieldProps.className}
            theme={fieldProps.theme}
            value={value}
            formats={fieldProps.formats}
            toolbar={fieldProps.toolbar}
            preserveWhitespace={fieldProps.preserveWhitespace}
            tabIndex={fieldProps.tabIndex}
            bounds={fieldProps.bounds}
            style={style}
            disabled={field.isDisabled()}
            readOnly={field.isReadOnly()}
            placeholder={fieldProps.placeholder}
            // --- Callbacks -----------------------------
            onChange={onChange}
            onBlur={onBlur}
            onChangeSelection={(selection: Range, source: Sources, editor: UnprivilegedEditor) =>
                fieldProps.onChangeSelection?.(selection, source, editor, field)
            }
            onFocus={(selection: Range, source: Sources, editor: UnprivilegedEditor) => fieldProps.onFocus?.(selection, source, editor, field)}
            onKeyDown={e => fieldProps.onKeyDown?.(e, field)}
            onKeyPress={e => fieldProps.onKeyPress?.(e, field)}
            onKeyUp={e => fieldProps.onKeyUp?.(e, field)}
        />
    );
};
