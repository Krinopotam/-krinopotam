// noinspection DuplicatedCode

import React, {useCallback} from 'react';
import {Button} from '@src/button';
import {IDFormModalApi, DFormModal, IDFormModalProps} from '@src/dynamicFormModal';
import {IDFormFieldInputProps, InputComponent} from '@src/dynamicForm/components/inputComponent';
import {DateTimeComponent, IDFormFieldDateTimeProps} from '@src/dynamicForm/components/dateTimeComponent';

const formApi = {} as IDFormModalApi;

const formProps: IDFormModalProps = {
    formId: 'Test form',
    apiRef: formApi,
    confirmChanges: true,
    fieldsProps: {
        /** Посетитель */
        object: {component: InputComponent, tab: 'Посетитель', label: 'Объект'} as IDFormFieldInputProps,
        nameIn: {component: InputComponent, tab: 'Посетитель', label: 'Имя входящего', inlineGroup: 'row1'} as IDFormFieldInputProps,
        dateIn: {component: DateTimeComponent, tab: 'Посетитель', label: 'Дата входа', inlineGroup: 'row1', width: 150} as IDFormFieldDateTimeProps,
        nameOut: {component: InputComponent, tab: 'Посетитель', label: 'Имя выходящего', inlineGroup: 'row1'} as IDFormFieldInputProps,
        dateOut: {component: DateTimeComponent, tab: 'Посетитель', label: 'Дата выхода', inlineGroup: 'row1', width: 150} as IDFormFieldDateTimeProps,
        /** Транспорт */
        vehicle: {component: InputComponent, tab: 'Посетитель', label: 'number'} as IDFormFieldInputProps,
        number: {component: InputComponent, tab: 'Посетитель', label: 'Номер'} as IDFormFieldInputProps,
    },
    bodyHeight: 330,
};

export const ModalFormWithTabsGroups = (): React.JSX.Element => {
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
