import {useEvent} from '@krinopotam/common-hooks';
import type {AnyType} from '@krinopotam/service-types';
import {FormInfoContext} from '@src/dFormConstructor/context/formInfoProvider';
import {SelectedFieldContext} from '@src/dFormConstructor/context/selectedFieldProvider';
import {BaseComponentInfo, IComponentPropsInfo} from '@src/dFormConstructor/fields/baseComponentInfo';
import {BooleanEditor} from '@src/dFormConstructor/renders/propsEditor/editors/booleanEditor';
import {FormEditor} from '@src/dFormConstructor/renders/propsEditor/editors/formEditor';
import {NumberEditor} from '@src/dFormConstructor/renders/propsEditor/editors/numberEditor';
import {ObjectEditor} from '@src/dFormConstructor/renders/propsEditor/editors/objectEditor';
import {ObjectListEditor} from '@src/dFormConstructor/renders/propsEditor/editors/objectListEditor';
import {RulesEditor} from '@src/dFormConstructor/renders/propsEditor/editors/rulesEditor';
import {SelectEditor} from '@src/dFormConstructor/renders/propsEditor/editors/selectEditor';
import {StringEditor} from '@src/dFormConstructor/renders/propsEditor/editors/stringEditor';
import {Descriptions, DescriptionsProps, Input, Tooltip} from 'antd';
import runDebounce from 'lodash.debounce';
import React, {ChangeEvent, useContext, useMemo, useSyncExternalStore} from 'react';

export const PropsEditor = (): React.JSX.Element => {
    const {formInfo} = useContext(FormInfoContext);
    useSyncExternalStore(formInfo.propsEditorSubscribe.bind(formInfo), formInfo.getPropsEditorRerenderSnapshot.bind(formInfo));
    const {selectedField} = useContext(SelectedFieldContext);
    const [filter, setFilter] = React.useState<string>('');

    const title = undefined; //selectedField?.getId();
    const allItems = usePrepareFieldsProps(selectedField);

    const items = allItems?.filter(item => !filter || (item?.key as string)?.toLowerCase().includes(filter.toLowerCase()));

    const debounceSetFilter = useMemo(
        () =>
            runDebounce((search: string) => {
                setFilter(search);
            }, 100),
        []
    );

    const onSearch = useEvent((e: ChangeEvent<HTMLInputElement>) => {
        const search = e.target.value;
        debounceSetFilter(search);
    });

    if (!selectedField) return <></>;

    return (
        <>
            {' '}
            <Input placeholder={'Search...'} style={{marginBottom: 10}} onChange={onSearch} />
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
        </>
    );
};

const usePrepareFieldsProps = (fieldInfo: BaseComponentInfo | undefined): DescriptionsProps['items'] => {
    const {formInfo} = useContext(FormInfoContext);
    const allIds = formInfo.getAllFieldIds({tab: true, tabs: true, inlineGroup: true});

    if (!fieldInfo) return [];

    const propsInfo: IComponentPropsInfo<AnyType> = fieldInfo.getPropsInfo();
    const result: DescriptionsProps['items'] = [];
    for (const key in propsInfo) {
        const dataType = propsInfo[key];

        const editorProps = {
            formInfo,
            field: fieldInfo,
            propKey: key,
            allIds,
        };

        let editor: React.ReactNode;
        if (dataType === 'string') editor = <StringEditor {...editorProps} />;
        else if (dataType === 'number') editor = <NumberEditor {...editorProps} />;
        else if (dataType === 'boolean') editor = <BooleanEditor {...editorProps} />;
        else if (dataType === 'fieldIds') editor = <SelectEditor {...editorProps} options={allIds.filter(f => f !== fieldInfo.getId())} multiple />;
        else if (dataType === 'rules') editor = <RulesEditor {...editorProps} />;
        else if (dataType === 'form') editor = <FormEditor {...editorProps} />;
        else if (dataType === 'formModal') editor = <FormEditor {...editorProps} modal />;
        else if (Array.isArray(dataType)) {
            if (typeof dataType[0] === 'string') {
                const options = dataType as string[];
                if (dataType[0] === '__multi') editor = <SelectEditor {...editorProps} options={options.slice(1)} multiple />;
                else editor = <SelectEditor {...editorProps} options={options} />;
            } else if (typeof dataType[0] === 'object') editor = <ObjectListEditor {...editorProps} />;
        } else if (typeof dataType === 'object') editor = <ObjectEditor {...editorProps} />;

        const label = key.length <= 15 ? key : <Tooltip title={key}>{`${key.slice(0, 15)}...`}</Tooltip>;

        result.push({key, label: label, children: editor});
    }

    return result;
};
