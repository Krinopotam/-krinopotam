// noinspection DuplicatedCode

import React from 'react';
import {DForm, IDFormProps} from '@src/dynamicForm';
import {IDFormFieldInputProps, InputComponent} from '@src/dynamicForm/components/inputComponent';

const formProps: IDFormProps = {
    formId: 'Test form',
    confirmChanges: true,
    fieldsProps: {
        field1: {component: InputComponent, label: 'Поле 1', placeholder: 'Я не должно быть пустым'} as IDFormFieldInputProps,
        field2: {component: InputComponent, label: 'Поле 2', placeholder: 'Я должно быть числом'} as IDFormFieldInputProps,
    },
    validationRules: {
        field1: [{type: 'string', rule: 'not-empty', message: 'Поле не должно быть пустым'}],
        field2: [{type: 'number', rule: 'not-empty', message: 'Поле должно быть числом'}],
    },
    buttons: {ok: {position: 'right'}},
};

export const FormValidation = (): React.JSX.Element => {
    return (
        <div style={{maxWidth: 500}}>
            <DForm {...formProps} />
        </div>
    );
};
