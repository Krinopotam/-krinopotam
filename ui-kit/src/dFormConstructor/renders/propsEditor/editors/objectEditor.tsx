import {useEvent} from '@krinopotam/common-hooks';
import {Button} from '@src/button';
import {IInputFieldProps, InputField} from '@src/dForm/fields/input';
import {INumberFieldProps, NumberField} from '@src/dForm/fields/number';
import {ISelectFieldProps, SelectField} from '@src/dForm/fields/select';
import {ISwitchFieldProps, SwitchField} from '@src/dForm/fields/switch';
import {FormInfoContext} from '@src/dFormConstructor/context/formInfoProvider';
import {BaseComponentInfo, IPropsTypeBase} from '@src/dFormConstructor/fields/baseComponentInfo';
import {FormInfo} from '@src/dFormConstructor/fields/formInfo';
import {DFormModal, IDFormModalApi, IDFormModalProps} from '@src/dFormModal';
import {ISelectBaseProps} from '@src/select';
import {Input, Space} from 'antd';
import React, {useContext, useState} from 'react';
import {EllipsisOutlined} from '@ant-design/icons';

export const ObjectEditor = ({formInfo, field, propKey}: {formInfo: FormInfo; field: BaseComponentInfo; propKey: string}): React.JSX.Element => {
    const val = field.getProp(propKey);
    const [, setCurVal] = useState<Record<string, unknown> | undefined>(val);

    const [formApi] = useState({} as IDFormModalApi)
    const formProps = useGetFormProps(field, field.getPropsInfo()[propKey] as Record<string, IPropsTypeBase>);

    const onClick = useEvent(() => {
        formApi.open('update', {...formProps, dataSet:val});
    });

    const onSubmit = useEvent((values: Record<string, unknown>) => {
        setCurVal(values);
        field.setProp(propKey, values);
        formInfo.emitFormPreviewRerender();
        formInfo.emitFieldsTreeRerender();
    });

    return (
        <>
            <Space.Compact style={{ width: '100%' }}>
                <Input value={val?.toString()} disabled />
                <Button type={'default'} onClick={onClick} icon={<EllipsisOutlined />} title={'Set value'}/>
            </Space.Compact>
            <DFormModal apiRef={formApi} {...formProps} onSubmit={onSubmit} />
        </>
    );
};

export const useGetFormProps = (field: BaseComponentInfo, propInfo: Record<string, IPropsTypeBase> | undefined) => {
    const {formInfo} = useContext(FormInfoContext);
    const allIds = formInfo.getAllFieldIds({tab: true, tabs: true, inlineGroup: true});

    const formProps: IDFormModalProps & {fieldsProps: Record<string, unknown>} = {layout:'horizontal', fieldsProps: {}};
    if (!propInfo) return formProps;

    const optionsToDataSet = (options: string[]) => {
        const dataSet: ISelectBaseProps['dataSet'] = options.map(item => ({id: item, label: item}));
        return dataSet;
    };

    for (const key in propInfo) {
        const dataType = propInfo[key];

        if (dataType === 'string')
            formProps.fieldsProps[key] = {
                component: InputField,
                label: key,
            } satisfies IInputFieldProps;
        else if (dataType === 'number')
            formProps.fieldsProps[key] = {
                component: NumberField,
                label: key,
            } satisfies INumberFieldProps;
        else if (dataType === 'boolean')
            formProps.fieldsProps[key] = {
                component: SwitchField,
                label: key,
            } satisfies ISwitchFieldProps;
        else if (Array.isArray(dataType)) {
            if (dataType[0] === 'multi')
                formProps.fieldsProps[key] = {
                    component: SelectField,
                    label: key,
                    dataSet: optionsToDataSet(dataType.slice(1)),
                    mode:'multiple'
                } satisfies ISelectFieldProps;
            else
                formProps.fieldsProps[key] = {
                    component: SelectField,
                    label: key,
                    dataSet: optionsToDataSet(dataType),
                } satisfies ISelectFieldProps;
        }
        //else if (typeof dataType === 'object') editor = <ObjectEditor {...editorProps} />;
        else if (dataType === 'fieldIds')
            formProps.fieldsProps[key] = {
                component: SelectField,
                label: key,
                dataSet: optionsToDataSet(allIds.filter(f => f !== field.getId())),
                mode:'multiple'
            } satisfies ISelectFieldProps;
    }

    return formProps;
};

