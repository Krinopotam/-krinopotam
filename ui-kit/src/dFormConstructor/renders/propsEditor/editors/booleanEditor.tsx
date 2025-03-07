import React, {useState} from 'react';
import {Switch} from 'antd';
import {useEvent} from '@krinopotam/common-hooks';
import {BaseComponentInfo} from '@src/dFormConstructor/fields/baseComponentInfo';
import {FormInfo} from '@src/dFormConstructor/fields/formInfo';

export const BooleanEditor = ({formInfo, field, propKey}: {formInfo: FormInfo; field: BaseComponentInfo; propKey: string}): React.JSX.Element => {
    const val = field.getProp(propKey);
    const [, setCurVal] = useState<boolean | undefined>(val);

    const onChange = useEvent((checked: boolean) => {
        setCurVal(checked); //just for input component rerender
        field.setProp(propKey, checked);
        formInfo.emitFormPreviewRerender();
        formInfo.emitFieldsTreeRerender();
    });

    return <Switch onChange={onChange} value={val} />;
};
