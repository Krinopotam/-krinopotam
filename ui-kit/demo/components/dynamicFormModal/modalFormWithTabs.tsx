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
        /** Входы */
        nameIn: {component: InputComponent, tab: 'Входы', label: 'Имя входящего', inlineGroup: 'row1'} as IDFormFieldInputProps,
        dateIn: {component: DateTimeComponent, tab: 'Входы', label: 'Дата входа', inlineGroup: 'row1', width: 150} as IDFormFieldDateTimeProps,
        /** Выходы */
        nameOut: {component: InputComponent, tab: 'Выходы', label: 'Имя выходящего', inlineGroup: 'row1'} as IDFormFieldInputProps,
        dateOut: {component: DateTimeComponent, tab: 'Выходы', label: 'Дата выхода', inlineGroup: 'row1', width: 150} as IDFormFieldDateTimeProps,
    },
    bodyHeight: 250,
};

export const ModalFormWithTabs = (): React.JSX.Element => {
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
