// noinspection DuplicatedCode

import React from 'react';
import {DForm, IDFormProps} from '@src/dynamicForm';
import {IDFormFieldInputProps, InputComponent} from '@src/dynamicForm/components/inputComponent';
import {IDFormFieldPasswordProps, PasswordComponent} from '@src/dynamicForm/components/passwordComponent';

const formProps: IDFormProps = {
    formId: 'Test form',
    confirmChanges: true,
    fieldsProps: {
        login: {component: InputComponent, label: 'Логин'} as IDFormFieldInputProps,
        password: {component: PasswordComponent, label: 'Пароль', autoFocus: true} as IDFormFieldPasswordProps,
    },

    buttons: {ok: {position: 'right'}},
};

export const FormSimple = (): React.JSX.Element => {
    return (
        <>
            {/*Description Start*/}
            <h1>Пример простой формы с вертикальным расположением подписей полей1</h1>
            {/*Description End*/}
            <div style={{maxWidth: 500}}>
                <DForm {...formProps} />
            </div>
        </>
    );
};
