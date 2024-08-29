// noinspection DuplicatedCode

import React from 'react';
import {DForm, IDFormProps} from '@src/dForm';
import {InputField} from "@src/dForm/fields/input/inputField";
import {PasswordField} from "@src/dForm/fields/password/passwordField";

const formProps: IDFormProps = {
    formId: 'Test form',
    confirmChanges: true,
    fieldsProps: {
        login: {component: InputField, label: 'Логин'},
        password: {component: PasswordField, label: 'Пароль', autoFocus: true},
    },

    buttons: {ok: {position: 'right'}},
};

export const FormSimple = (): React.JSX.Element => {
    return (
        <>
            {/*Description Start*/}
            <h1>Пример простой формы с вертикальным расположением подписей полей</h1>
            {/*Description End*/}
            <div style={{maxWidth: 500}}>
                <DForm {...formProps} />
            </div>
        </>
    );
};
