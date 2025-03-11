import React, {CSSProperties, useCallback, useEffect, useSyncExternalStore} from "react";
import {Checkbox} from "antd";
import {CheckboxChangeEvent} from "antd/es/checkbox";
import {CheckboxField} from "@src/dForm/fields/checkbox/checkboxField";

export const CheckboxFieldRender = ({field}:{field:CheckboxField}):React.JSX.Element =>{
    useSyncExternalStore(field.subscribe.bind(field), field.getSnapshot.bind(field));

    const fieldId = field.getId();
    const fieldProps = field.getProps();

    const value = field.getValue() as boolean;

    const onChange = useCallback(
        (e: CheckboxChangeEvent) => {
            if (!field.isReady()) return;
            field.setValue( e.target.checked || false);
            field.setTouched( true);
            field.setDirty( true);
        },
        [field]
    );

    useEffect(() => {
        field.setReady(true)
    }, [field, fieldId]);

    const defStyle: CSSProperties = {width: field.getWidth()};
    const style = {...defStyle, ...fieldProps.style};

    return (
        <Checkbox
            className={fieldProps.className}
            checked={value}
            disabled={field.isDisabled() || field.isReadOnly()}
            onChange={onChange}
            autoFocus={fieldProps.autoFocus}
            indeterminate={fieldProps.indeterminate}
            style={style}
        />
    );
}
