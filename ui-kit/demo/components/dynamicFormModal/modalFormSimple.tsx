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
    arrowsButtonsSelection: true,
    fieldsProps: {
        login: {component: InputComponent, label: 'Login'} as IDFormFieldInputProps,
        password: {component: PasswordComponent, label: 'Password'} as IDFormFieldPasswordProps
    }
}

export const ModalFormSimple = (): React.JSX.Element => {
    const onClick = useCallback(() => {
        formApi.open('create');
    }, []);

    return (
        <>
            {/*Description Start*/}
            <h1>Пример простой модальной формы</h1>
            <p>По умолчанию для модальной формы доступна возможность перетаскивания ее за заголовок и изменения ее размера</p>
            {/*Description End*/}
            <div style={{maxWidth: 500}}>
                <Button onClick={onClick}>Открыть форму</Button>
                <DFormModal {...formProps} />
            </div>
        </>
    );
};
