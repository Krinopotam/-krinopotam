import React, {CSSProperties, useCallback, useEffect, useSyncExternalStore} from 'react';
import {Input} from 'antd';
import {TextAreaField} from '@src/dForm/fields/textArea/textAreaField';

const {TextArea} = Input;
export const TextAreaFieldRender = ({field}: {field: TextAreaField}): React.JSX.Element => {
    useSyncExternalStore(field.subscribe.bind(field), field.getSnapshot.bind(field));
    
    const fieldId = field.getId();
    const fieldProps = field.getProps();

    const value = field.getValue();

    const onChange = useCallback(
        (e: React.ChangeEvent<HTMLTextAreaElement>) => {
            if (field.isReady()) {
                field.setValue(e.target.value);
                field.setDirty(true);
            }
        },
        [field]
    );

    const onBlur = useCallback(() => {
        field.setTouched(true);
    }, [field]);

    useEffect(() => {
        field.setReady(true);
    }, [field]);

    const defStyle: CSSProperties = {width: field.getWidth() ?? '100%'};
    const style: React.CSSProperties = {...defStyle, ...fieldProps.style};

    return (
        <TextArea
            className={fieldProps.className}
            autoFocus={fieldProps.autoFocus}
            autoSize={fieldProps.autoSize}
            cols={fieldProps.cols}
            disabled={field.isDisabled()}
            maxLength={fieldProps.maxLength}
            name={fieldId}
            onBlur={onBlur}
            onChange={onChange}
            placeholder={fieldProps.placeholder}
            readOnly={field.isReadOnly()}
            rows={fieldProps.rows}
            showCount={fieldProps.showCount}
            value={value}
            wrap={fieldProps.wrap}
            style={style}
        />
    );
};
