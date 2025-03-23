import {useEvent} from '@krinopotam/common-hooks';
import {CustomField, ICustomFieldProps} from '@src/dForm/fields/custom';
import {DFormConstructor} from '@src/dFormConstructor/dFormConstructor';
import {BaseComponentInfo} from '@src/dFormConstructor/fields/baseComponentInfo';
import {FormInfo} from '@src/dFormConstructor/fields/formInfo';
import {FormModalInfo} from "@src/dFormConstructor/fields/formModalInfo";
import {ObjectEditorRender} from '@src/dFormConstructor/renders/propsEditor/editors/objectEditor';
import {IDFormModalApi, IDFormModalProps} from '@src/dFormModal';
import React, {useState} from 'react';

export const FormEditor = ({formInfo, field, propKey, modal}: {formInfo: FormInfo; field: BaseComponentInfo; propKey: string, modal?:boolean}): React.JSX.Element => {
    const val = field.getProp(propKey);
    const [, setCurVal] = useState<unknown>(val);

    const [formApi] = useState({} as IDFormModalApi);

    const newFormInfo = modal ? new FormModalInfo({id: 'subForm1', label: 'Modal Sub Form'}) : new FormInfo({id: 'subForm1', label: 'Sub Form'});

    const formProps = useGetFormProps({
        newFormInfo: newFormInfo,
    });

    const onClick = useEvent(() => {
        newFormInfo.setProps(val ?? {});
        formApi.open('update', {...formProps});
    });

    const onSubmit = useEvent(() => {
        const newVal = newFormInfo.getProps();
        setCurVal(newVal);
        field.setProp(propKey, newVal);
        formInfo.emitFormPreviewRerender();
        formInfo.emitFieldsTreeRerender();
    });

    return <ObjectEditorRender val={val} formApi={formApi} formProps={formProps} onClick={onClick} onSubmit={onSubmit} />;
};

export const useGetFormProps = (props: {newFormInfo: FormInfo}) => {
    const formProps: IDFormModalProps = {
        height: '80%',
        width: '80%',
        fieldsProps: {
            rules: {
                component: CustomField,
                label: 'Sub form',
                onRender: () => <DFormConstructor initialFormInfo={props.newFormInfo} />,
                noContainer: true,
                noItemWrapper: true,
            } satisfies ICustomFieldProps,
        },
    };

    return formProps;
};
