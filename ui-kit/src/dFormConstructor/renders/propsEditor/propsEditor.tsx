import React, {useContext} from 'react';
import type {DescriptionsProps} from 'antd';
import {Descriptions} from 'antd';
import {SelectedFieldContext} from '@src/dFormConstructor/context/selectedFieldProvider';
import {FormInfoContext} from '@src/dFormConstructor/context/formInfoProvider';
import type {AnyType} from '@krinopotam/service-types';
import {IComponentPropsInfo} from '@src/dFormConstructor/fields/baseComponentInfo';

export const PropsEditor = (): React.JSX.Element => {
    const {fieldId} = useContext(SelectedFieldContext);
    const title = fieldId;
    const items = usePrepareFieldsProps(fieldId);
    return (
        <div
            style={{
                flex: 1,
                overflow: 'auto',
                scrollbarColor: 'rgb(234, 234, 234)',
                scrollbarGutter: 'stable',
                scrollbarWidth: 'thin',
                paddingRight: 20,
            }}
        >
            <Descriptions bordered title={title} column={1} size={'small'} items={items} />
        </div>
    );
};

export const usePrepareFieldsProps = (fieldId: string | undefined): DescriptionsProps['items'] => {
    const {formInfo} = useContext(FormInfoContext);
    if (!fieldId) return [];
    const fieldInfo = formInfo.getFieldInfoById(fieldId);
    if (!fieldInfo) return [];

    const propsInfo: IComponentPropsInfo<AnyType> = fieldInfo.getPropsInfo();
    const result: DescriptionsProps['items'] = [];
    for (const key in propsInfo) {
        const dataType = propsInfo[key];
        result.push({key: key, label: key, children: dataType});
    }

    return result;
};
