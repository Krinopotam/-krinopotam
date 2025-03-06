import React, {useContext, useSyncExternalStore} from 'react';
import type {DescriptionsProps} from 'antd';
import {Descriptions} from 'antd';
import {SelectedFieldContext} from '@src/dFormConstructor/context/selectedFieldProvider';
import type {AnyType} from '@krinopotam/service-types';
import {BaseComponentInfo, IComponentPropsInfo} from '@src/dFormConstructor/fields/baseComponentInfo';
import {StringEditor} from '@src/dFormConstructor/renders/propsEditor/editors/stringEditor';
import {FormInfoContext} from '@src/dFormConstructor/context/formInfoProvider';
import {BooleanEditor} from '@src/dFormConstructor/renders/propsEditor/editors/booleanEditor';

export const PropsEditor = (): React.JSX.Element => {
    const {formInfo} = useContext(FormInfoContext);
    useSyncExternalStore(formInfo.propsEditorSubscribe.bind(formInfo), formInfo.getPropsEditorRerenderSnapshot.bind(formInfo));
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

export const usePrepareFieldsProps = (fieldInfo: BaseComponentInfo | undefined): DescriptionsProps['items'] => {
    const {formInfo} = useContext(FormInfoContext);

    if (!fieldInfo) return [];
    const propsInfo: IComponentPropsInfo<AnyType> = fieldInfo.getPropsInfo();
    const result: DescriptionsProps['items'] = [];
    for (const key in propsInfo) {
        const dataType = propsInfo[key];

        const editorProps = {
            formInfo,
            field: fieldInfo,
            propKey: key,
        };

        let editor: string | React.ReactNode = dataType;
        if (dataType === 'string') editor = <StringEditor {...editorProps} />;
        else if (dataType === 'boolean') editor = <BooleanEditor {...editorProps} />;

        result.push({key, label: key, children: editor});
    }

    return result;
};
