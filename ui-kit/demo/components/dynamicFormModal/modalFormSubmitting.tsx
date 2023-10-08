// noinspection DuplicatedCode

import React, {useCallback} from 'react';
import {Button} from '@src/button';
import {IDFormModalApi, DFormModal, IDFormModalProps} from '@src/dynamicFormModal';
import {IDFormFieldInputProps, InputComponent} from "@src/dynamicForm/components/inputComponent";
import {IDFormFieldPasswordProps, PasswordComponent} from "@src/dynamicForm/components/passwordComponent";

const formApi = {} as IDFormModalApi;

const formProps: IDFormModalProps = {
    formId: 'Test form',
    apiRef: formApi,
    confirmChanges: true,
    fieldsProps: {
        field1: {component: InputComponent, label: 'login', tooltip: 'Login input'} as IDFormFieldInputProps,
        field2: {component: PasswordComponent, label: 'password', tooltip: 'Password input'} as IDFormFieldPasswordProps,
    },
    onSubmit: () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() < 0.5) reject({message: 'Ошибка сохранения', code: 400});
                else resolve({data: {login: 'new login', password: 'new password'}});
            }, 3000);
        });
    },
}


export const ModalFormSubmitting = (): React.JSX.Element => {
    const onClick = useCallback(() => {
        formApi.open('create');
    }, []);

    return (
        <>
            {/*Description Start*/}
            <h1>Пример сохранения данных модальной формы</h1>
            <p>Для обеспечения сохранения необходимо в калбэк onSubmit передать функцию, возвращающую Promise, который при успешном ответе сервера (resolve) возвращает объект вида:</p>
            <code>{'data:{имя_поля1: "значение", имя_поля2: "значение 2"...}'}</code>
            <p>а при ошибке (reject)</p>
            <code>{'error:{message: string, code: number}'}</code>
            <p>Для примера, вероятность сбоя при сохранении 50%</p>
            <p></p>
            {/*Description End*/}
            <div style={{maxWidth: 500}}>
                <Button onClick={onClick}>Открыть форму</Button>
                <DFormModal {...formProps} />
            </div>
        </>
    );
};
