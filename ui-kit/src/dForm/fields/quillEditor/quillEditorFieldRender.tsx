import React, {CSSProperties, useCallback, useEffect, useSyncExternalStore} from 'react';
import {QuillEditorField} from '@src/dForm/fields/quillEditor/quillEditorField';
import Quill, {Sources} from 'quill';
import {DeltaStatic, QuillEditor} from '@src/quillEditor/quillEditor';
import {Range, UnprivilegedEditor} from 'react-quill';

export const QuillEditorFieldRender = ({field}: {field: QuillEditorField}): React.JSX.Element => {
    useSyncExternalStore(field.subscribe.bind(field), field.getSnapshot.bind(field));

    const fieldProps = field.getProps();

    const value = field.getValue() as string | undefined;

    const onChange = useCallback(
        function (this: Quill, value: string, delta: DeltaStatic, source: Sources, editor: UnprivilegedEditor) {
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

    let defStyle: CSSProperties = {};
    if (fieldProps.width) {
        defStyle = {width: fieldProps.width};
    }

    const style = {...defStyle, ...fieldProps.style};

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
