// noinspection DuplicatedCode

import React from 'react';
import {DForm, IDFormProps} from '@src/dynamicForm';
import {IDFormFieldInputProps, InputComponent} from '@src/dynamicForm/components/inputComponent';
import {IDFormFieldPasswordProps, PasswordComponent} from '@src/dynamicForm/components/passwordComponent';

const login = () => {
    return {component: InputComponent, label: 'Логин', autoFocus: true} as IDFormFieldInputProps;
};

const password = () => {
    return {component: PasswordComponent, label: 'Пароль'} as IDFormFieldPasswordProps;
};

const formProps: IDFormProps = {
    formId: 'Test form',
    confirmChanges: true,
    fieldsProps: {
        login: login(),
        password: password(),
    },

    buttons: {ok: {position: 'right'}},
};

export const FormWithTemplatedFields = (): React.JSX.Element => {
    return (
        <>
            {/*Description Start*/}
            <h1>Пример формы с полями, сохраненными в виде шаблонов с предустановленными значениями</h1>
            {/*Description End*/}
            <div style={{maxWidth: 500}}>
                <DForm {...formProps} />
            </div>
        </>
    );
};
