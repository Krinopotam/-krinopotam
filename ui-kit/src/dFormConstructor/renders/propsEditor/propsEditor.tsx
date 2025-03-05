import React, {useContext, useMemo} from 'react';
import type {DescriptionsProps} from 'antd';
import {Descriptions} from 'antd';
import {SelectedFieldContext} from '@src/dFormConstructor/context/selectedFieldProvider';
import type {AnyType, IKey} from '@krinopotam/service-types';
import {BaseComponentInfo, IComponentPropsInfo} from '@src/dFormConstructor/fields/baseComponentInfo';
import {StringEditor} from '@src/dFormConstructor/renders/propsEditor/editors/stringEditor';
import {FormPropsContext} from '@src/dFormConstructor/context/formPropsProvider';
import {formPropsToSource} from '@src/dFormConstructor/renders/sourceEditor/tools/formPropsToSource';
import {FormInfo} from '@src/dFormConstructor/fields/formInfo';

export const PropsEditor = (): React.JSX.Element => {
    const {selectedField} = useContext(SelectedFieldContext);

    const title = selectedField?.getId();
    const items = usePrepareFieldsProps(selectedField);

    if (!selectedField) return <></>;

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

export const usePrepareFieldsProps = (fieldInfo:  BaseComponentInfo | undefined): DescriptionsProps['items'] => {
    const {setFormProps} = useContext(FormPropsContext);

    if (!fieldInfo) return [];

    const propsInfo: IComponentPropsInfo<AnyType> = fieldInfo.getPropsInfo();
    const result: DescriptionsProps['items'] = [];
    for (const key in propsInfo) {
        const dataType = propsInfo[key];

        const val = key === 'id' ? fieldInfo.getId() : fieldInfo.getProps()[key];
        const setVal = (val: AnyType) => {
            let formInfo: FormInfo | undefined = undefined
            do {
                const parent = fieldInfo?.getParent();
                if (!parent?.getParent()) {
                    formInfo = parent  as FormInfo
                    break
                }
            } while (true);

            fieldInfo.setProp(key, val);
            const formProps = formInfo.getProps();
            setFormProps(formProps, formPropsToSource(formProps), 'propsEditor');
        };

        let editor: string | React.ReactNode = dataType;
        if (dataType === 'string') editor = <StringEditor val={val} setVal={setVal} />;

        result.push({key, label: key, children: editor});
    }

    return result;
};
