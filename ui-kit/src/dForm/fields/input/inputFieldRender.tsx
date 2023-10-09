import React, {useCallback, useEffect} from "react";
import {Input} from "antd";
import {InputField} from "@src/dForm/fields/input/inputField";

export const InputFieldRender = ({field}:{field:InputField}):React.JSX.Element =>{
    const fieldName = field.getName();
    const fieldProps = field.getProps();

    const value = field.getValue() as string | number | undefined;

    const onChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            field.setValue( e.target.value || null)
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

    return (
        <Input
            autoFocus={fieldProps.autoFocus}
            disabled={field.isDisabled()}
            maxLength={fieldProps.maxLength}
            name={fieldName}
            onBlur={onBlur}
            onChange={onChange}
            placeholder={fieldProps.placeholder}
            readOnly={field.isReadOnly()}
            showCount={fieldProps.showCount}
            value={value}
            style={fieldProps.style}
        />
    );
}
