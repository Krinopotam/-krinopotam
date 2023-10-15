// noinspection DuplicatedCode

import React from 'react';
import {DForm, IDFormProps} from '@src/dForm';
import {InputField} from "@src/dForm/fields/input/inputField";

const formProps: IDFormProps = {
    formId: 'Test form',
    confirmChanges: true,
    fieldsProps: {
        login: {component: InputField, label: 'Логин', tooltip: 'Ввод логина'},
        password: {component: InputField, label: 'Пароль', tooltip: 'Ввод пвароль'},
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
