// noinspection DuplicatedCode

import React from 'react';
import {DForm, IDFormProps} from '@src/dForm';
import {InputField} from "@src/dForm/fields/input/inputField";

const formProps: IDFormProps = {
    formId: 'Test form',
    confirmChanges: true,
    fieldsProps: {
        field1: {component: InputField, label: 'Поле 1', placeholder: 'Введите что-нибудь'},
        field2: {
            component: InputField,
            label: 'Поле 2 (зависит от Поля 1)',
            placeholder: 'Меня не видно, если поле 1 пусто. Введите что-нибудь',
            dependsOn: ['field1'],
        },
        field3: {
            component: InputField,
            label: 'Поле 3 (зависит от Поля 1 и 2)',
            placeholder: 'Меня не видно, если поля 1 или 2 пусты',
            dependsOn: ['field1', 'field2'],
        } ,
    },

    buttons: {ok: {position: 'right'}},
};

export const FormDependedField = (): React.JSX.Element => {
    return (
        <>
            {/*Description Start*/}
            <h1>Пример формы с зависимыми полями</h1>
            <p>Пока родительское поле не заполнено, зависимые поля скрыты</p>
            {/*Description End*/}
            <div style={{maxWidth: 500}}>
                <DForm {...formProps} />
            </div>
        </>
    );
};
