import React, {useEffect, useRef, useState} from 'react';
import {Input, InputRef} from 'antd';
import {useEvent} from '@krinopotam/common-hooks';
import {BaseComponentInfo} from '@src/dFormConstructor/fields/baseComponentInfo';
import {FormInfo} from '@src/dFormConstructor/fields/formInfo';
import {WarningOutlined} from '@ant-design/icons';

export const StringEditor = ({formInfo, field, propKey}: {formInfo: FormInfo; field: BaseComponentInfo; propKey: string}): React.JSX.Element => {
    const val = field.getProp(propKey);

    const [, setCurVal] = useState<string | undefined>(val);
    const [error, setError] = useState<string>('');

    const ref = useRef<InputRef>(null);
    const changedRef = useRef(false);
    const onChange = useEvent((e: React.ChangeEvent<HTMLInputElement>) => {
        changedRef.current = true;
        const newVal = e.target.value;
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

    return <Input ref={ref} onChange={onChange} value={val} status={error ? 'error' : ''} prefix={error ? <WarningOutlined title={error} /> : <span />} />;
};
