import React, {useEffect, useRef, useState} from 'react';
import {Input, InputRef} from 'antd';
import {useEvent} from '@krinopotam/common-hooks';
import {BaseComponentInfo} from '@src/dFormConstructor/fields/baseComponentInfo';
import {FormInfo} from '@src/dFormConstructor/fields/formInfo';

export const StringEditor = ({formInfo, field, propKey}: {formInfo: FormInfo; field: BaseComponentInfo; propKey: string}): React.JSX.Element => {
    const val = field.getProp(propKey);

    const [, setCurVal] = useState<string | undefined>(val);

    const ref = useRef<InputRef>(null);
    const changedRef = useRef(false);
    const onChange = useEvent((e: React.ChangeEvent<HTMLInputElement>) => {
        setCurVal(e.target.value); //just for input component rerender
        field.setProp(propKey, e.target.value);
        formInfo.emitFormPreviewRerender();
        formInfo.emitFieldsTreeRerender();
        changedRef.current = true;
    });

    useEffect(() => {
        if (changedRef.current) setTimeout(() => ref.current?.focus(), 0);
        changedRef.current = false;
    });

    return <Input ref={ref} onChange={onChange} value={val} />;
};
