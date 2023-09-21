// noinspection DuplicatedCode

import React from 'react';
import {DForm} from '@src/dynamicForm';
import {DFormConfig} from '@src/dynamicForm/configBuilder/dFormConfig';
import {InputComponentConfig} from '@src/dynamicForm/configBuilder/inputComponentConfig';
import {PasswordComponentConfig} from '@src/dynamicForm/configBuilder/passwordComponentConfig';

interface IFields {
    name: string;
    login: string;
    cnt: number;
}

const login = <T,>() => {
    return new InputComponentConfig<T>('login1' as keyof T).label('Логин');
};

const password = <T,>() => {
    return new PasswordComponentConfig<T>('password' as keyof T).label('Пароль');
};

const formProps = new DFormConfig<IFields>('Test form')
    .confirmChanges(true)
    .addFields(
        login().label('Имя пользователя'),
        password()
    )
    .buttons({ok: {position: 'right'}})
    .getConfig();

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
