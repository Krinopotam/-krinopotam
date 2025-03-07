import React, {useEffect, useRef, useState} from 'react';
import {InputNumber} from 'antd';
import {useEvent} from '@krinopotam/common-hooks';
import {BaseComponentInfo} from '@src/dFormConstructor/fields/baseComponentInfo';
import {FormInfo} from '@src/dFormConstructor/fields/formInfo';
import {InputNumberProps} from "antd/es/input-number";

export const NumberEditor = ({formInfo, field, propKey}: {formInfo: FormInfo; field: BaseComponentInfo; propKey: string}): React.JSX.Element => {
    const val = field.getProp(propKey);

    const [, setCurVal] = useState<unknown>(val);

    const ref = useRef<HTMLInputElement>(null);
    const changedRef = useRef(false);
    const onChange:InputNumberProps['onChange'] = useEvent((value) => {
        changedRef.current = true;
        setCurVal(value); //just for input component rerender
        field.setProp(propKey, value);
        formInfo.emitFormPreviewRerender();
        formInfo.emitFieldsTreeRerender();
    });

    useEffect(() => {
        if (changedRef.current) setTimeout(() => ref.current?.focus(), 0);
        changedRef.current = false;
    });

    return <InputNumber ref={ref} onChange={onChange} defaultValue={val}  />;
};
