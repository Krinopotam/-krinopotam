import React, {CSSProperties, useCallback, useEffect, useSyncExternalStore} from 'react';
import {InputNumber} from 'antd';
import {NumberField} from '@src/dForm/fields/number/numberField';

export const NumberFieldRender = ({field}: {field: NumberField}): React.JSX.Element => {
    useSyncExternalStore(field.subscribe.bind(field), field.getSnapshot.bind(field));

    const fieldId = field.getId();
    const fieldProps = field.getProps();

    const value = field.getValue();

    const onChange = useCallback(
        (val: string | number | null) => {
            if (!field.isReady()) return;
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

    const defStyle: CSSProperties = {width: field.getWidth() ?? '100%'};
    const style: CSSProperties = {...defStyle, ...fieldProps.style};

    return (
        <InputNumber
            className={fieldProps.className}
            addonAfter={fieldProps.addonAfter}
            addonBefore={fieldProps.addonBefore}
            autoFocus={fieldProps.autoFocus}
            controls={fieldProps.controls}
            decimalSeparator={fieldProps.decimalSeparator}
            disabled={field.isDisabled()}
            downHandler={fieldProps.downHandler}
            formatter={fieldProps.formatter}
            keyboard={fieldProps.keyboard}
            max={fieldProps.max}
            maxLength={fieldProps.maxLength}
            min={fieldProps.min}
            name={fieldId}
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
        />
    );
};
