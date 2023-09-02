// noinspection DuplicatedCode

import React from 'react';
import {DForm, IDFormProps} from '@src/dynamic-form';
import {DFormConfig} from '@src/dynamic-form/configBuilder/dFormConfig';
import {InputComponentConfig} from '@src/dynamic-form/configBuilder/inputComponentConfig';
import {PasswordComponentConfig} from '@src/dynamic-form/configBuilder/passwordComponentConfig';

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
