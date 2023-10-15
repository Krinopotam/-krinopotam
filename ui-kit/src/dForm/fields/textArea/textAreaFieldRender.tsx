import React, {CSSProperties, useCallback, useEffect} from 'react';
import {Input} from 'antd';
import {TextAreaField} from '@src/dForm/fields/textArea/textAreaField';

const {TextArea} = Input;
export const TextAreaFieldRender = ({field}: {field: TextAreaField}): React.JSX.Element => {
    const fieldName = field.getName();
    const fieldProps = field.getProps();

    const value = field.getValue() as string | number | undefined;

    const onChange = useCallback(
        (e: React.ChangeEvent<HTMLTextAreaElement>) => {
            field.setValue(e.target.value || null);
            field.setDirty(true);
        },
        [field]
    );

    const onBlur = useCallback(() => {
        field.setTouched(true);
    }, [field]);

    useEffect(() => {
        field.setReady(true);
    }, [field]);

    let defStyle: CSSProperties = {};
    if (fieldProps.width) {
        defStyle = {width: fieldProps.width};
    }

    const style = {...defStyle, ...fieldProps.style};

    return (
        <TextArea
            autoFocus={fieldProps.autoFocus}
            autoSize={fieldProps.autoSize}
            cols={fieldProps.cols}
            disabled={field.isDisabled()}
            maxLength={fieldProps.maxLength}
            name={fieldName}
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
