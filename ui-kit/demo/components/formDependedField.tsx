// noinspection DuplicatedCode

import React from 'react';
import {DForm} from '@src/dynamicForm';
import {DFormConfig} from '@src/dynamicForm/configBuilder/dFormConfig';
import {InputComponentConfig} from '@src/dynamicForm/configBuilder/inputComponentConfig';

interface IFields {
    field1: string;
    field2: string;
    field3: string;
}

const formProps = new DFormConfig<IFields>('Test form')
    .confirmChanges(true)
    .addFields(
        new InputComponentConfig<IFields>('field1').label('Поле 1').placeholder('Введите что-нибудь'),
        new InputComponentConfig<IFields>('field2')
            .label('Поле 2 (зависит от Поля 1)')
            .placeholder('Меня не видно, если поле 1 пусто. Введите что-нибудь')
            .dependsOn(['field1']),
        new InputComponentConfig<IFields>('field3')
            .label('Поле 3 (зависит от Поля 1 и 2)')
            .placeholder('Меня не видно, если поля 1 и 2 пусты')
            .dependsOn(['field1', 'field2'])
    )
    .buttons({ok: {position: 'right'}})
    .getConfig();

export const FormDependedField = (): React.JSX.Element => {
    return (
        <>
            {/*Description Start*/}
            <h1>Пример формы с зависимыми полями</h1>
            <p>Пока родительское поле не заполнено, зависимые поля скрыты</p>
            {/*Description End*/}
        <div style={{maxWidth: 500}}>
            <DForm {...formProps} />
        </div></>
    );
};
