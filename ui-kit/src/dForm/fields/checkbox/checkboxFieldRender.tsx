import React, {CSSProperties, useCallback, useEffect, useSyncExternalStore} from "react";
import {Checkbox} from "antd";
import {CheckboxChangeEvent} from "antd/es/checkbox";
import {CheckboxField} from "@src/dForm/fields/checkbox/checkboxField";

export const CheckboxFieldRender = ({field}:{field:CheckboxField}):React.JSX.Element =>{
    useSyncExternalStore(field.subscribe.bind(field), field.getSnapshot.bind(field));

    const fieldName = field.getName();
    const fieldProps = field.getProps();

    const value = field.getValue() as boolean;

    const onChange = useCallback(
        (e: CheckboxChangeEvent) => {
            field.setValue( e.target.checked || false);
            field.setTouched( true);
            field.setDirty( true);
        },
        [field]
    );

    useEffect(() => {
        field.setReady(true)
    }, [field, fieldName]);

    let defStyle: CSSProperties = {};
    if (fieldProps.width) {
        defStyle = {width: fieldProps.width};
    }

    const style = {...defStyle, ...fieldProps.style};

    return (
        <Checkbox
            checked={value}
            disabled={field.isDisabled() || field.isReadOnly()}
            onChange={onChange}
            autoFocus={fieldProps.autoFocus}
            indeterminate={fieldProps.indeterminate}
            style={style}
        />
    );
}
