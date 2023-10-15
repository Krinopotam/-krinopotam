import React, {CSSProperties, useCallback, useEffect, useSyncExternalStore} from 'react';
import {InputNumber} from 'antd';
import {NumberField} from '@src/dForm/fields/number/numberField';

export const NumberFieldRender = ({field}: {field: NumberField}): React.JSX.Element => {
    useSyncExternalStore(field.subscribe.bind(field), field.getSnapshot.bind(field));

    const fieldName = field.getName();
    const fieldProps = field.getProps();

    const value = field.getValue() as number | undefined;

    const onChange = useCallback(
        (val: string | number | null) => {
            field.setValue(val ?? 0);
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

    const style: CSSProperties = {width: '100%', ...fieldProps.style};

    return (
        <InputNumber
            addonAfter={fieldProps.addonAfter}
            addonBefore={fieldProps.addonBefore}
            autoFocus={fieldProps.autoFocus}
            className={fieldProps.className}
            controls={fieldProps.controls}
            decimalSeparator={fieldProps.decimalSeparator}
            disabled={field.isDisabled()}
            downHandler={fieldProps.downHandler}
            formatter={fieldProps.formatter}
            keyboard={fieldProps.keyboard}
            max={fieldProps.max}
            maxLength={fieldProps.maxLength}
            min={fieldProps.min}
            name={fieldName}
            onBlur={onBlur}
            onChange={onChange}
            parser={fieldProps.parser}
            placeholder={fieldProps.placeholder}
            precision={fieldProps.precision}
            prefix={fieldProps.prefix}
            prefixCls={fieldProps.prefixCls}
            readOnly={field.isReadOnly()}
            step={fieldProps.step}
            stringMode={fieldProps.stringMode}
            style={style}
            upHandler={fieldProps.upHandler}
            value={value}
            width={fieldProps.width}
        />
    );
};
