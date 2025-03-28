import React, {CSSProperties, useCallback, useEffect, useSyncExternalStore} from 'react';
import {DateTimeField, IDateTimeFieldProps} from '@src/dForm/fields/dateTime/dateTimeField';
import {DatePicker, GetDatePickerFormat} from '@src/datePicker';
import dayjs from 'dayjs';

export const DateTimeFieldRender = ({field}: {field: DateTimeField}): React.JSX.Element => {
    useSyncExternalStore(field.subscribe.bind(field), field.getSnapshot.bind(field));
    const fieldId = field.getId();
    const fieldProps = field.getProps();

    const fieldFormat = GetDatePickerFormat(fieldProps.mode, fieldProps.timeMode, fieldProps.format);
    let value = field.getValue();

    if (!value) {
        value = undefined;
        field.setValue(value, true);
    }

    if (value === 'now') {
        value = dayjs(new Date()).format(fieldFormat);
        field.setValue(value, true);
    }

    if (fieldProps.nowIfEmpty !== false && !value && !field.isDirty() && !field.isTouched()) {
        value = dayjs(new Date()).format(fieldFormat);
        field.setValue(value, true);
    }

    const onChange = useCallback<NonNullable<IDateTimeFieldProps['onChange']>>(
        e => {
            if (!field.isReady()) return;
            field.setDirty(true);
            field.setValue((e as dayjs.Dayjs | null)?.format(fieldFormat) ?? undefined);
        },
        [field, fieldFormat]
    );

    const onBlur = useCallback(() => {
        field.setTouched(true);
    }, [field]);

    useEffect(() => {
        field.setReady(true);
    }, [field]);

    const defStyle: CSSProperties = {width: field.getWidth() ?? '100%'};

    const style = {...defStyle, ...fieldProps.style};

    return (
        <DatePicker
            {...fieldProps}
            className={fieldProps.className}
            disabled={field.isDisabled()}
            readOnly={field.isReadOnly()}
            name={fieldId}
            value={value}
            style={style}
            /** --- Callbacks ---------- */
            onBlur={onBlur}
            onChange={onChange}
            onOk={val => fieldProps?.onOk?.(val as dayjs.Dayjs, field)}
            onOpenChange={open => fieldProps?.onOpenChange?.(open, field)}
            onPanelChange={(value, mode) => fieldProps?.onPanelChange?.(value, mode, field)}
            onMouseDown={e => fieldProps?.onMouseDown?.(e, field)}
        />
    );
};
