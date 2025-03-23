import {useEvent} from '@krinopotam/common-hooks';
import {DModel} from '@src/dForm';
import {IBaseField} from '@src/dForm/fields/base';
import {IInputFieldProps, InputField} from '@src/dForm/fields/input';
import {ISelectFieldProps, SelectField} from '@src/dForm/fields/select';
import {ITabulatorGridFieldProps, TabulatorGridField} from '@src/dForm/fields/tabulatorGrid';
import {BaseComponentInfo} from '@src/dFormConstructor/fields/baseComponentInfo';
import {FormInfo} from '@src/dFormConstructor/fields/formInfo';
import {ObjectEditorRender} from '@src/dFormConstructor/renders/propsEditor/editors/objectEditor';
import {addIds} from '@src/dFormConstructor/renders/propsEditor/tools/addIds';
import {removeIds} from '@src/dFormConstructor/renders/propsEditor/tools/removeIds';
import {IDFormModalApi, IDFormModalProps} from '@src/dFormModal';
import {ISelectNode} from '@src/select';
import React, {useState} from 'react';

export const RulesEditor = ({formInfo, field, propKey}: {formInfo: FormInfo; field: BaseComponentInfo; propKey: string}): React.JSX.Element => {
    const val = field.getProp(propKey);
    const [, setCurVal] = useState<unknown>(val);

    const [formApi] = useState({} as IDFormModalApi);
    const formProps = useGetFormProps({
        fieldId: field.getId(),
    });

    const onClick = useEvent(() => {
        formApi.open('update', {...formProps, dataSet: {rules: addIds(val)}});
    });

    const onSubmit = useEvent((values: Record<string, unknown>) => {
        const newVal = removeIds(values['rules'] as Record<string, unknown>[]);
        setCurVal(newVal);
        field.setProp(propKey, newVal);
        formInfo.emitFormPreviewRerender();
        formInfo.emitFieldsTreeRerender();
    });

    return <ObjectEditorRender val={val} formApi={formApi} formProps={formProps} onClick={onClick} onSubmit={onSubmit} />;
};

export const RulesEditorComponent = ({fieldId, field}: {fieldId: string; field: IBaseField}): React.JSX.Element => {
    const [formApi] = useState({} as IDFormModalApi);
    const val = field.getValue();

    const formProps = useGetFormProps({fieldId});

    const onClick = useEvent(() => {
        formApi.open('update', {...formProps, dataSet: {rules: val}});
    });

    const onSubmit = useEvent((values: Record<string, unknown>) => {
        field.setValue(values['rules']);
    });

    return <ObjectEditorRender val={val} formApi={formApi} formProps={formProps} onClick={onClick} onSubmit={onSubmit} />;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const useGetFormProps = (_props: {fieldId: string}) => {
    const rulesMap = {
        string: ['not-empty', 'max-length', 'min-length', '=', '!=', 'is-email', 'is-email-or-empty', 'is-uuid', 'is-uuid-or-empty'],
        number: ['not-empty', 'number-or-empty', '=', '!=', '>', '>=', '<', '<='],
        file: ['not-empty', 'extension'],
        date: ['not-empty', 'date-or-empty', '=', '!=', '>', '>=', '<', '<='],
        object: ['not-empty', 'null', '=', '!=', 'contains', 'not-contains'],
    };

    const typesDataSet = [];
    for (const key in rulesMap) typesDataSet.push({id: key, label: key});

    const changeDataSet = (model: DModel, clear: boolean) => {
        const type = model.getField<SelectField>('type');
        const rule = model.getField<SelectField>('rule');
        const val = type.getValue();

        const ruleOptions = rulesMap[val as keyof typeof rulesMap] ?? [];
        const ruleDataSet: ISelectNode[] = ruleOptions.map(item => ({id: item, label: item}));
        rule.updateProps({dataSet: ruleDataSet});
        if (clear) rule.setValue(undefined);
    };

    const editFormProps: IDFormModalProps = {
        width: 400,
        fieldsProps: {
            type: {
                component: SelectField,
                label: 'type',
                dataSet: typesDataSet,
                onValueChanged: (_value, _prevValue, field) => {
                    changeDataSet(field.getModel(), true);
                },
                onReadyStateChanged: (_ready, field) => {
                    changeDataSet(field.getModel(), false);
                },
                rules: [{type: 'string', rule: 'not-empty', message: 'You need to choose a type'}],
            } satisfies ISelectFieldProps,
            rule: {
                component: SelectField,
                label: 'Rule',
                dependsOn: ['type'],
                rules: [{type: 'string', rule: 'not-empty', message: 'You need to choose a rule'}],
            } satisfies ISelectFieldProps,
            parameter: {
                component: InputField,
                label: 'Parameter',
                dependsOn: ['rule'],
            } satisfies IInputFieldProps,
            message: {
                component: InputField,
                label: 'message',
                dependsOn: ['rule'],
                rules: [{type: 'string', rule: 'not-empty', message: 'You need to enter a message'}],
            } satisfies IInputFieldProps,
        },
    };

    const formProps: IDFormModalProps = {
        height: 500,
        width: 800,
        fieldsProps: {
            rules: {
                component: TabulatorGridField,
                label: 'Validation rules',
                columns: [
                    {field: 'type', title: 'Type', width: 100},
                    {field: 'rule', title: 'Rule', width: 100},
                    {field: 'parameter', title: 'Parameter', width: 100},
                    {field: 'message', title: 'message', width: 450},
                ],
                autoHeightResize: true,
                editFormProps,
                onDelete: () => {},

                //dataSet: typesDataSet,
            } satisfies ITabulatorGridFieldProps,
        },
    };

    return formProps;
};
