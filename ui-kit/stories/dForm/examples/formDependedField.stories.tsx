import {DForm, IDFormProps} from '@src/dynamicForm';
import React from 'react';
import {IDFormFieldInputProps, InputComponent} from '@src/dynamicForm/components/inputComponent';

export default {
    title: 'Dform/Examples/FormDependedFields',
};

export const Default = () => {
    const formProps: IDFormProps = {
        formId: 'Test form',
        confirmChanges: true,
        fieldsProps: {
            field1: {component: InputComponent, label: 'Поле 1', placeholder: 'Введите что-нибудь'} as IDFormFieldInputProps,
            field2: {
                component: InputComponent,
                label: 'Поле 2 (зависит от Поля 1)',
                placeholder: 'Меня не видно, если поле 1 пусто. Введите что-нибудь',
                dependsOn: ['field1'],
            } as IDFormFieldInputProps,
            field3: {
                component: InputComponent,
                label: 'Поле 3 (зависит от Поля 1 и 2)',
                placeholder: 'Меня не видно, если поля 1 или 2 пусты',
                dependsOn: ['field1', 'field2'],
            } as IDFormFieldInputProps,
        },

        buttons: {ok: {position: 'right'}},
    };

    const FormDependedField = (): React.JSX.Element => {
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

    return <FormDependedField />;
};
