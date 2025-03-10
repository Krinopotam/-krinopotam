import React, {CSSProperties, useCallback, useEffect, useSyncExternalStore} from 'react';
import {ISelectFieldProps, SelectField} from '@src/dForm/fields/select/selectField';
import {Select} from '@src/select';

export const SelectFieldRender = ({field}: {field: SelectField}): React.JSX.Element => {
    useSyncExternalStore(field.subscribe.bind(field), field.getSnapshot.bind(field));

    const {component,...fieldProps} = field.getProps();

    const value = field.getValue();

    const onChange = useCallback<NonNullable<ISelectFieldProps['onChange']>>(
        (val, option) => {
            if (!field.isReady()) return;
            if (fieldProps.fullItemValue) field.setValue(option);
            else field.setValue(val);
            field.setDirty(true);
        },
        [field, fieldProps.fullItemValue]
    );
    const onBlur = useCallback<NonNullable<ISelectFieldProps['onBlur']>>(() => {
        field.setTouched(true);
    }, [field]);

    useEffect(() => {
        field.setReady(true);
    }, [field]);

    const defStyle: CSSProperties = {width: field.getWidth() ?? '100%'};
    const style: React.CSSProperties = {...defStyle, ...fieldProps.style};

    return (
        <Select
            className={fieldProps.className}
            allowClear
            {...fieldProps}
            disabled={field.isDisabled()}
            readOnly={field.isReadOnly()}
            value={value}
            style={style}
            /******** Callbacks *********/
            onBlur={onBlur}
            onChange={onChange}
        />
    );
};
