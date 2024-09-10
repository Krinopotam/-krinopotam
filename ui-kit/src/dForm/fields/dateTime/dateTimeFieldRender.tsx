import React, {CSSProperties, useCallback, useEffect, useSyncExternalStore} from 'react';
import {DateTimeField} from '@src/dForm/fields/dateTime/dateTimeField';
import {DatePicker} from '@src/datePicker';
import dayjs from "dayjs";

export const DateTimeFieldRender = ({field}: {field: DateTimeField}): React.JSX.Element => {
    useSyncExternalStore(field.subscribe.bind(field), field.getSnapshot.bind(field));
    const fieldName = field.getName();
    const fieldProps = field.getProps();

    let value = field.getValue();

    if (!value && !field.isDirty() && !field.isTouched()) {
        value = dayjs(new Date());
        field.setValue(value, true);
    }
    const onChange = useCallback(
        (e: dayjs.Dayjs | null) => {
            if (!field.isReady()) return;
            field.setDirty(true);
            field.setValue(e ?? undefined);
        },
        [field]
    );

    const onBlur = useCallback(() => {
        field.setTouched(true);
    }, [field]);

    useEffect(() => {
        field.setReady(true);
    }, [field]);

    const defStyle:CSSProperties = {width: fieldProps.width ?? '100%'};

    const style = {...defStyle, ...fieldProps.style};

    return (
        <DatePicker
            {...fieldProps}
            disabled={field.isDisabled()}
            readOnly={field.isDisabled()}
            name={fieldName}
            value={value}
            style={style}
            /** --- Callbacks ---------- */
            onBlur={onBlur}
            onChange={onChange}
            onOk={value => fieldProps?.onOk?.(value, field)}
            onOpenChange={open => fieldProps?.onOpenChange?.(open, field)}
            onPanelChange={(value, mode) => fieldProps?.onPanelChange?.(value, mode, field)}
            onMouseDown={e => fieldProps?.onMouseDown?.(e, field)}
        />
    );
};
