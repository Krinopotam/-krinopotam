import React, {CSSProperties, useCallback, useEffect, useSyncExternalStore} from 'react';
import {Input} from 'antd';
import {InputField} from '@src/dForm/fields/input/inputField';

export const InputFieldRender = ({field}: {field: InputField}): React.JSX.Element => {
    useSyncExternalStore(field.subscribe.bind(field), field.getSnapshot.bind(field));

    const fieldName = field.getName();
    const fieldProps = field.getProps();

    const value = field.getValue();

    const onChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            if (!field.isReady()) return;
            field.setValue(e.target.value);
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

    const defStyle: CSSProperties = {width: field.getWidth() ?? '100%'};
    const style: React.CSSProperties = {...defStyle, ...fieldProps.style};

    return (
        <Input
            autoFocus={fieldProps.autoFocus}
            disabled={field.isDisabled()}
            readOnly={field.isReadOnly()}
            maxLength={fieldProps.maxLength}
            name={fieldName}
            onBlur={onBlur}
            onChange={onChange}
            placeholder={fieldProps.placeholder}
            showCount={fieldProps.showCount}
            value={value}
            style={style}
            autoComplete={fieldProps.autocomplete}
            spellCheck={fieldProps.spellcheck}
        />
    );
};
