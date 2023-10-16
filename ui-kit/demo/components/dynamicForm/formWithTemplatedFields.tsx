// noinspection DuplicatedCode

import React from 'react';
import {DForm, IDFormProps} from '@src/dForm';
import {InputField} from "@src/dForm/fields/input/inputField";
import {PasswordField} from "@src/dForm/fields/password/passwordField";

const login = () => {
    return {component: InputField, label: 'Логин', autoFocus: true};
};

const password = () => {
    return {component: PasswordField, label: 'Пароль'};
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
