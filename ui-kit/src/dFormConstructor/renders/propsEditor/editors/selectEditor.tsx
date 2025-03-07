import React, {useMemo, useState} from 'react';
import {useEvent} from '@krinopotam/common-hooks';
import {BaseComponentInfo} from '@src/dFormConstructor/fields/baseComponentInfo';
import {FormInfo} from '@src/dFormConstructor/fields/formInfo';
import {ISelectBaseProps, Select} from '@src/select';

export const SelectEditor = ({
    formInfo,
    field,
    propKey,
    multiple,
    options,
}: {
    formInfo: FormInfo;
    field: BaseComponentInfo;
    propKey: string;
    options: string[];
    multiple?: boolean;
}): React.JSX.Element => {
    const val = field.getProp(propKey);
    const [, setCurVal] = useState<unknown>(val);

    const dataSet: ISelectBaseProps['dataSet'] = useMemo(() => options.map(item => ({id: item, label: item})), [options]);

    const onChange: ISelectBaseProps['onChange'] = useEvent(value => {
        setCurVal(value); //just for input component rerender
        field.setProp(propKey, value);
        formInfo.emitFormPreviewRerender();
        formInfo.emitFieldsTreeRerender();
    });

    return <Select onChange={onChange} dataSet={dataSet} value={val} style={{width: '100%'}} allowClear mode={multiple ? 'multiple' : undefined} />;
};
