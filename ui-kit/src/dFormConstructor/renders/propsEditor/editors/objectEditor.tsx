import {EllipsisOutlined} from '@ant-design/icons';
import {useEvent} from '@krinopotam/common-hooks';
import {AnyType} from '@krinopotam/service-types';
import {Button} from '@src/button';
import {IBaseField, IBaseFieldProps} from '@src/dForm/fields/base';
import {CustomField, ICustomFieldProps} from '@src/dForm/fields/custom';
import {IInputFieldProps, InputField} from '@src/dForm/fields/input';
import {INumberFieldProps, NumberField} from '@src/dForm/fields/number';
import {ISelectFieldProps, SelectField} from '@src/dForm/fields/select';
import {ISwitchFieldProps, SwitchField} from '@src/dForm/fields/switch';
import {BaseComponentInfo, IPropsType} from '@src/dFormConstructor/fields/baseComponentInfo';
import {FormInfo} from '@src/dFormConstructor/fields/formInfo';
import {ObjectListEditorComponent} from '@src/dFormConstructor/renders/propsEditor/editors/objectListEditor';
import {RulesEditorComponent} from '@src/dFormConstructor/renders/propsEditor/editors/rulesEditor';
import {DFormModal, IDFormModalApi, IDFormModalProps} from '@src/dFormModal';
import {ISelectBaseProps} from '@src/select';
import {Input, Space} from 'antd';
import React, {useState} from 'react';

export const ObjectEditor = ({formInfo, field, propKey, allIds}: {formInfo: FormInfo; field: BaseComponentInfo; propKey: string; allIds:string[]}): React.JSX.Element => {
    const val = field.getProp(propKey);
    const [, setCurVal] = useState<Record<string, unknown> | undefined>(val);

    const [formApi] = useState({} as IDFormModalApi);
    const formProps = useGetFormProps({
        fieldId: field.getId(),
        propInfo: field.getPropsInfo()[propKey] as IPropsType,
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

export const ObjectEditorRender = (props: {
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
    propInfo: IPropsType | undefined;
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

export const useGetFormProps = ({fieldId, propInfo, allIds}: {fieldId: string; propInfo: IPropsType | undefined; allIds: string[]}) => {
    const formProps: IDFormModalProps & {fieldsProps: Record<string, unknown>} = {
        layout: 'horizontal',
        height: 500,
        fieldsProps: {},
    };
    if (!propInfo) return formProps;

    for (const key in propInfo) {
        const dataType = propInfo[key];
        const editor = getEditorField(dataType, key, fieldId, allIds);
        if (!editor) continue;
        formProps.fieldsProps[key] = editor;
    }
    return formProps;
};

export const getEditorField = (
    dataType: IPropsType[keyof IPropsType],
    key: string,
    parentFieldId: string,
    allIds: string[]
): IBaseFieldProps<AnyType, AnyType> | undefined => {
    if (dataType === 'string') {
        return {
            component: InputField,
            label: key,
        } satisfies IInputFieldProps;
    } else if (dataType === 'number') {
        return {
            component: NumberField,
            label: key,
        } satisfies INumberFieldProps;
    } else if (dataType === 'boolean') {
        return {
            component: SwitchField,
            label: key,
        } satisfies ISwitchFieldProps;
    } else if (dataType === 'fieldIds') {
        return {
            component: SelectField,
            label: key,
            dataSet: optionsToDataSet(allIds.filter(f => f !== parentFieldId)),
            mode: 'multiple',
        } satisfies ISelectFieldProps;
    } else if (dataType === 'rules') {
        return {
            component: CustomField,
            label: key,
            onRender: (_value, field) => <RulesEditorComponent fieldId={parentFieldId} field={field} />,
        } satisfies ICustomFieldProps;
    } else if (Array.isArray(dataType)) {
        if (typeof dataType[0] === 'string') {
            const options = dataType as string[];
            if (options[0] === '__multi')
                return {
                    component: SelectField,
                    label: key,
                    dataSet: optionsToDataSet(options.slice(1)),
                    mode: 'multiple',
                } satisfies ISelectFieldProps;
            else
                return {
                    component: SelectField,
                    label: key,
                    dataSet: optionsToDataSet(options),
                } satisfies ISelectFieldProps;
        } else if (typeof dataType[0] === 'object') {
            return {
                component: CustomField,
                label: key,
                onRender: (_value, field) => (
                    <ObjectListEditorComponent fieldId={parentFieldId} field={field} propInfo={dataType as unknown as IPropsType} allIds={allIds} />
                ),
            } satisfies ICustomFieldProps;
        }
    } else if (typeof dataType === 'object') {
        return {
            component: CustomField,
            label: key,
            onRender: (_value, field) => <ObjectEditorComponent fieldId={parentFieldId} field={field} propInfo={dataType} allIds={allIds} />,
        } satisfies ICustomFieldProps;
    }
};

const optionsToDataSet = (options: string[]) => {
    const dataSet: ISelectBaseProps['dataSet'] = options.map(item => ({id: item, label: item}));
    return dataSet;
};
