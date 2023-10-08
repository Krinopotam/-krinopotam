// noinspection DuplicatedCode

import React, {useCallback} from 'react';
import {Button} from '@src/button';
import {IDFormModalApi, DFormModal, IDFormModalProps} from '@src/dynamicFormModal';
import {IDFormFieldInputProps, InputComponent} from "@src/dynamicForm/components/inputComponent";

const formApi = {} as IDFormModalApi;

const formProps: IDFormModalProps = {
    formId: 'Test form',
    apiRef: formApi,
    confirmChanges: true,
    fieldsProps: {
        position: {component: InputComponent, label: 'Должность'} as IDFormFieldInputProps,
        department: {component: InputComponent, label: 'Подразделение'} as IDFormFieldInputProps,
    },
    onDataFetch: () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() < 0.5) reject({message: 'Ошибка загрузки данных', code: 400});
                else resolve({data: {position: 'Директор', department: 'Главная дирекция'}});
            }, 3000);
        });
    },

    buttons: {ok: {position: 'right'}}
}

export const ModalFormFetching = (): React.JSX.Element => {
    const onClick = useCallback(() => {
        formApi.open('update');
    }, []);

    return (
        <>
            {/*Description Start*/}
            <h1>Пример загрузки данных при открытии формы</h1>
            <p>Для обеспечения загрузки необходимо в калбэк onDataFetch передать функцию, возвращающую Promise, который при успешном ответе сервера (resolve) возвращает объект вида:</p>
            <code>{`data:{имя_поля1: "значение", имя_поля2: "значение 2"...}`}</code>
            <p>а при ошибке (reject)</p>
            <code>{`error:{message: string, code: number}`}</code>
            <p>Для примера, вероятность сбоя при загрузке 50%</p>
            <p></p>
            {/*Description End*/}
            <div style={{maxWidth: 500}}>
                <Button onClick={onClick}>Открыть форму</Button>
                <DFormModal {...formProps} />
            </div>
        </>
    );
};
