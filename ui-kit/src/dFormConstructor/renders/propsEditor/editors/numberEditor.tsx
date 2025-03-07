import React, {useEffect, useRef, useState} from 'react';
import {InputNumber} from 'antd';
import {useEvent} from '@krinopotam/common-hooks';
import {BaseComponentInfo} from '@src/dFormConstructor/fields/baseComponentInfo';
import {FormInfo} from '@src/dFormConstructor/fields/formInfo';
import {InputNumberProps} from 'antd/es/input-number';
import {WarningOutlined} from '@ant-design/icons';

export const NumberEditor = ({formInfo, field, propKey}: {formInfo: FormInfo; field: BaseComponentInfo; propKey: string}): React.JSX.Element => {
    const val = field.getProp(propKey);

    const [, setCurVal] = useState<unknown>(val);
    const [error, setError] = useState<string>('');

    const ref = useRef<HTMLInputElement>(null);
    const changedRef = useRef(false);
    const onChange: InputNumberProps['onChange'] = useEvent(newVal => {
        changedRef.current = true;
        setCurVal(newVal); //just for input component rerender
        field.setProp(propKey, newVal);
        setError(field.validateProps(propKey, newVal));
        formInfo.emitFormPreviewRerender();
        formInfo.emitFieldsTreeRerender();
    });

    useEffect(() => {
        if (changedRef.current) setTimeout(() => ref.current?.focus(), 0);
        changedRef.current = false;
    });

    return (
        <InputNumber
            ref={ref}
            onChange={onChange}
            defaultValue={val}
            status={error ? 'error' : ''}
            prefix={error ? <WarningOutlined title={error} /> : <span />}
        />
    );
};
