import {useEvent} from '@krinopotam/common-hooks';
import {IBaseField} from '@src/dForm/fields/base';
import {ITabulatorGridFieldProps, TabulatorGridField} from '@src/dForm/fields/tabulatorGrid';
import {BaseComponentInfo, IPropsType} from '@src/dFormConstructor/fields/baseComponentInfo';
import {FormInfo} from '@src/dFormConstructor/fields/formInfo';
import {ObjectEditorRender, useGetFormProps} from '@src/dFormConstructor/renders/propsEditor/editors/objectEditor';
import {IDFormModalApi, IDFormModalProps} from '@src/dFormModal';
import {ITabulatorColumn, ITabulatorProps} from '@src/tabulatorBase';
import React, {useState} from 'react';

export const ObjectListEditor = ({formInfo, field, propKey}: {formInfo: FormInfo; field: BaseComponentInfo; propKey: string}): React.JSX.Element => {
    const allIds = formInfo.getAllFieldIds({tab: true, tabs: true, inlineGroup: true});
    const val = field.getProp(propKey);

    const [, setCurVal] = useState<unknown>(val);

    const [formApi] = useState({} as IDFormModalApi);
    const formProps = useGetTableFormProps({
        fieldId: field.getId(),
        propInfo: field.getPropsInfo()[propKey] as IPropsType,
        allIds,
    });

    const onClick = useEvent(() => {
        formApi.open('update', {...formProps, dataSet: {data: addIds(val)}});
    });

    const onSubmit = useEvent((values: Record<string, unknown>) => {
        const newVal = removeIds(values['data'] as Record<string, unknown>[]);
        setCurVal(newVal);
        field.setProp(propKey, newVal);
        formInfo.emitFormPreviewRerender();
        formInfo.emitFieldsTreeRerender();
    });

    return <ObjectEditorRender val={val} formApi={formApi} formProps={formProps} onClick={onClick} onSubmit={onSubmit} />;
};

const addIds = <T extends Record<string, unknown>>(data: T[]): T[] => {
    let index = 0;
    return data.map(item => {
        return {...item, id: item.id ?? index++};
    });
};

const removeIds = <T extends Record<string, unknown>>(data: T[]): T[] => {
    return data.map(item => {
        delete item.id;
        return item;
    });
};

const useGetTableFormProps = ({fieldId, propInfo, allIds}: {fieldId: string; propInfo: IPropsType; allIds: string[]}) => {
    const formProps: IDFormModalProps & {fieldsProps: Record<string, unknown>} = {
        height: 500,
        fieldsProps: {},
    };

    const pInfo = propInfo[0] as IPropsType;
    const editFormProps = useGetFormProps({fieldId, propInfo: pInfo, allIds});

    const colDef: ITabulatorProps['columns'] = [];
    for (const key in pInfo) {
        const col: ITabulatorColumn = {
            field: key,
            title: key,
        };
        colDef.push(col);
    }

    formProps.fieldsProps['data'] = {
        component: TabulatorGridField,
        columns: colDef,
        dataSet: [],
        editFormProps: editFormProps,
        onDelete: () => {},
        autoHeightResize: true,
    } satisfies ITabulatorGridFieldProps;
    return formProps;
};

export const ObjectListEditorComponent = ({
    fieldId,
    field,
    propInfo,
    allIds,
}: {
    fieldId: string;
    field: IBaseField;
    propInfo: IPropsType;
    allIds: string[];
}): React.JSX.Element => {
    const [formApi] = useState({} as IDFormModalApi);
    const val = field.getValue();

    const formProps = useGetTableFormProps({fieldId, propInfo, allIds});

    const onClick = useEvent(() => {
        formApi.open('update', {...formProps, dataSet: {data: val}});
    });

    const onSubmit = useEvent((values: Record<string, unknown>) => {
        field.setValue(values['data']);
    });

    return <ObjectEditorRender val={val} formApi={formApi} formProps={formProps} onClick={onClick} onSubmit={onSubmit} />;
};
