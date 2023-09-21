// noinspection DuplicatedCode

import React from 'react';
import {DForm, IDFormProps} from '@src/dynamicForm';
import {DFormConfig} from '@src/dynamicForm/configBuilder/dFormConfig';
import {InputComponentConfig} from '@src/dynamicForm/configBuilder/inputComponentConfig';
import {PasswordComponentConfig} from '@src/dynamicForm/configBuilder/passwordComponentConfig';

interface IFields {
    login: string;
    password: string;
}

const formProps = new DFormConfig<IFields>('Test form')
    .confirmChanges(true)
    .addFields(
        new InputComponentConfig<IFields>('login').label('Логин'),
        new PasswordComponentConfig<IFields>('password').label('Пароль')
    )
    .buttons({ok: {position: 'right'}})
    .getConfig();

/** Simple Dynamic form example */
export const SimpleForm = (props?: IDFormProps): React.JSX.Element => {
    const compProps = {...formProps, ...props}
    return (
        <>
            <div style={{maxWidth: 500}}>
                <DForm {...compProps} />
            </div>
        </>
    );
};

export default SimpleForm
