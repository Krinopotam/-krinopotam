import React, {CSSProperties, useCallback, useEffect, useSyncExternalStore} from "react";
import {Input} from "antd";
import {PasswordField} from "@src/dForm/fields/password/passwordField";

export const PasswordFieldRender = ({field}:{field:PasswordField}):React.JSX.Element =>{
    useSyncExternalStore(field.subscribe.bind(field), field.getSnapshot.bind(field));

    const fieldName = field.getName();
    const fieldProps = field.getProps();

    const value = field.getValue();

    const onChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            if (!field.isReady()) return;
            field.setValue( e.target.value)
            field.setDirty(true)
        },
        [field]
    );
    const onBlur = useCallback(() => {
        field.setTouched(true)
    }, [field]);

    useEffect(() => {
        field.setReady(true)
    }, [field]);

    const defStyle: CSSProperties = {width: field.getWidth() ?? '100%'};
    const style: React.CSSProperties = {...defStyle, ...fieldProps.style};

    return (
        <Input.Password
            className={fieldProps.className}
            autoFocus={fieldProps.autoFocus}
            disabled={field.isDisabled()}
            iconRender={fieldProps.iconRender}
            maxLength={fieldProps.maxLength}
            name={fieldName}
            onBlur={onBlur}
            onChange={onChange}
            placeholder={fieldProps.placeholder}
            readOnly={field.isReadOnly()}
            showCount={fieldProps.showCount}
            value={value}
            style={style}
            autoComplete={fieldProps.autocomplete}
            spellCheck={fieldProps.spellcheck}
        />
    );
}
