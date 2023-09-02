// noinspection DuplicatedCode

import React, {useCallback} from 'react';

import {Button} from '@src/button';
import {IDFormModalApi, DFormModal} from '@src/dynamic-form-modal';
import {DFormModalConfig, InputComponentConfig, PasswordComponentConfig} from '@src/dynamic-form-modal/configBuilder';

interface IFields {
    login: string;
    password: string;
}

const formApi = {} as IDFormModalApi;

const formProps = new DFormModalConfig<IFields>('Test form')
    .apiRef(formApi)
    .confirmChanges(true)
    .addFields(
        new InputComponentConfig<IFields>('login').label('Логин'),
        new PasswordComponentConfig<IFields>('password').label('Пароль'))
    .getConfig();

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