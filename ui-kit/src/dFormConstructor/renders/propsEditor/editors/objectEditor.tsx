import {EllipsisOutlined} from '@ant-design/icons';
import {useEvent} from '@krinopotam/common-hooks';
import {Button} from '@src/button';
import {IBaseField} from '@src/dForm/fields/base';
import {CustomField, ICustomFieldProps} from '@src/dForm/fields/custom';
import {IInputFieldProps, InputField} from '@src/dForm/fields/input';
import {INumberFieldProps, NumberField} from '@src/dForm/fields/number';
import {ISelectFieldProps, SelectField} from '@src/dForm/fields/select';
import {ISwitchFieldProps, SwitchField} from '@src/dForm/fields/switch';
import {BaseComponentInfo, IPropsTypeBase} from '@src/dFormConstructor/fields/baseComponentInfo';
import {FormInfo} from '@src/dFormConstructor/fields/formInfo';
import {DFormModal, IDFormModalApi, IDFormModalProps} from '@src/dFormModal';
import {ISelectBaseProps} from '@src/select';
import {Input, Space} from 'antd';
import React, {useState} from 'react';

export const ObjectEditor = ({formInfo, field, propKey}: {formInfo: FormInfo; field: BaseComponentInfo; propKey: string}): React.JSX.Element => {
    const allIds = formInfo.getAllFieldIds({tab: true, tabs: true, inlineGroup: true});
    const val = field.getProp(propKey);
    const [, setCurVal] = useState<Record<string, unknown> | undefined>(val);

    const [formApi] = useState({} as IDFormModalApi);
    const formProps = useGetFormProps({
        fieldId: field.getId(),
        propInfo: field.getPropsInfo()[propKey] as Record<string, IPropsTypeBase>,
        allIds,
    });

    const onClick = useEvent(() => {
        formApi.open('update', {...formProps, dataSet: val});
    });

    const onSubmit = useEvent((values: Record<string, unknown>) => {
        setCurVal(values);
        field.setProp(propKey, values);
        formInfo.emitFormPreviewRerender();
        formInfo.emitFieldsTreeRerender();
    });

    return <ObjectEditorRender val={val} formApi={formApi} formProps={formProps} onClick={onClick} onSubmit={onSubmit} />;
};

const ObjectEditorRender = (props: {
    formApi: IDFormModalApi;
    formProps: IDFormModalProps;
    val: Record<string, unknown> | undefined;
    onClick: () => void;
    onSubmit: (values: Record<string, unknown>) => void;
}): React.JSX.Element => {
    return (
        <>
            <Space.Compact style={{width: '100%'}}>
                <Input value={props.val?.toString()} disabled />
                <Button type={'default'} onClick={props.onClick} icon={<EllipsisOutlined />} title={'Set value'} />
            </Space.Compact>
            <DFormModal apiRef={props.formApi} {...props.formProps} onSubmit={props.onSubmit} />
        </>
    );
};

export const ObjectEditorComponent = ({
    fieldId,
    field,
    propInfo,
    allIds,
}: {
    fieldId: string;
    field: IBaseField;
    propInfo: Record<string, IPropsTypeBase> | undefined;
    allIds: string[];
}): React.JSX.Element => {
    const [formApi] = useState({} as IDFormModalApi);
    const val = field.getValue();

    const formProps = useGetFormProps({fieldId, propInfo, allIds});

    const onClick = useEvent(() => {
        formApi.open('update', {...formProps, dataSet: val});
    });

    const onSubmit = useEvent((values: Record<string, unknown>) => {
        field.setValue(values);
    });

    return <ObjectEditorRender val={val} formApi={formApi} formProps={formProps} onClick={onClick} onSubmit={onSubmit} />;
};

export const useGetFormProps = ({fieldId, propInfo, allIds}: {fieldId: string; propInfo: Record<string, IPropsTypeBase> | undefined; allIds: string[]}) => {
    const formProps: IDFormModalProps & {fieldsProps: Record<string, unknown>} = {
        layout: 'horizontal',
        fieldsProps: {},
    };
    if (!propInfo) return formProps;

    const optionsToDataSet = (options: string[]) => {
        const dataSet: ISelectBaseProps['dataSet'] = options.map(item => ({id: item, label: item}));
        return dataSet;
    };

    for (const key in propInfo) {
        const dataType = propInfo[key];

        if (dataType === 'string') {
            formProps.fieldsProps[key] = {
                component: InputField,
                label: key,
            } satisfies IInputFieldProps;
        } else if (dataType === 'number') {
            formProps.fieldsProps[key] = {
                component: NumberField,
                label: key,
            } satisfies INumberFieldProps;
        } else if (dataType === 'boolean') {
            formProps.fieldsProps[key] = {
                component: SwitchField,
                label: key,
            } satisfies ISwitchFieldProps;
        } else if (Array.isArray(dataType)) {
            if (dataType[0] === 'multi')
                formProps.fieldsProps[key] = {
                    component: SelectField,
                    label: key,
                    dataSet: optionsToDataSet(dataType.slice(1)),
                    mode: 'multiple',
                } satisfies ISelectFieldProps;
            else
                formProps.fieldsProps[key] = {
                    component: SelectField,
                    label: key,
                    dataSet: optionsToDataSet(dataType),
                } satisfies ISelectFieldProps;
        } else if (dataType === 'fieldIds') {
            formProps.fieldsProps[key] = {
                component: SelectField,
                label: key,
                dataSet: optionsToDataSet(allIds.filter(f => f !== fieldId)),
                mode: 'multiple',
            } satisfies ISelectFieldProps;
        } else if (typeof dataType === 'object') {
            formProps.fieldsProps[key] = {
                component: CustomField,
                label: key,
                fieldWrapper: true,
                onRender: (_value, field) => (
                    <ObjectEditorComponent fieldId={fieldId} field={field} propInfo={dataType as Record<string, IPropsTypeBase>} allIds={allIds} />
                ),
            } satisfies ICustomFieldProps;
        }
    }
    return formProps;
};
