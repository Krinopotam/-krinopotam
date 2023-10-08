// noinspection DuplicatedCode

import React, {useCallback} from 'react';
import {Button} from '@src/button';
import {IDFormModalApi, DFormModal, IDFormModalProps} from '@src/dynamicFormModal';
import {IDFormFieldInputProps, InputComponent} from "@src/dynamicForm/components/inputComponent";
import {DateTimeComponent, IDFormFieldDateTimeProps} from "@src/dynamicForm/components/dateTimeComponent";

const formApi = {} as IDFormModalApi;

const formProps: IDFormModalProps = {
    formId: 'Test form',
    apiRef: formApi,
    confirmChanges: true,
    fieldsProps: {
        nameIn: {component: InputComponent, label: 'Имя входящего', inlineGroup: 'row1'} as IDFormFieldInputProps,
        dateIn: {component: DateTimeComponent, label: 'Дата входа', inlineGroup: 'row1', width: 150} as IDFormFieldDateTimeProps,
        nameOut: {component: InputComponent, label: 'Имя выходящего', inlineGroup: 'row1'} as IDFormFieldInputProps,
        dateOut: {component: DateTimeComponent, label: 'Дата выхода', inlineGroup: 'row1', width: 150} as IDFormFieldDateTimeProps,
    },
}

export const ModalFormWithGroups = (): React.JSX.Element => {
    const onClick = useCallback(() => {
        formApi.open('create');
    }, []);

    return (
        <div style={{maxWidth: 500}}>
            <Button onClick={onClick}>Открыть форму</Button>
            <DFormModal {...formProps} />
        </div>
    );
};
