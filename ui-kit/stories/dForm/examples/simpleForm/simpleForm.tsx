// noinspection DuplicatedCode

import React from 'react';
import {DForm, IDFormProps} from '@src/dynamicForm';
import {IDFormFieldInputProps, InputComponent} from '@src/dynamicForm/components/inputComponent';
import {IDFormFieldPasswordProps, PasswordComponent} from '@src/dynamicForm/components/passwordComponent';

const formProps: IDFormProps = {
    formId: 'Test form',
    confirmChanges: true,
    fieldsProps: {
        login: {component: InputComponent, label: 'Логин', tooltip: 'Ввод логина'} as IDFormFieldInputProps,
        password: {component: PasswordComponent, label: 'Пароль', tooltip: 'Ввод пвароль'} as IDFormFieldPasswordProps,
    },

    buttons: {ok: {position: 'right'}},
};

/** Simple Dynamic form example */
export const SimpleForm = (props?: IDFormProps): React.JSX.Element => {
    const compProps = {...formProps, ...props};
    return (
        <>
            <div style={{maxWidth: 500}}>
                <DForm {...compProps} />
            </div>
        </>
    );
};

export default SimpleForm;
