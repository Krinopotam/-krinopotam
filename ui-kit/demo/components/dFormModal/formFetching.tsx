// noinspection DuplicatedCode

import React, {useCallback} from 'react';
import {Button} from '@src/button';
import {IDFormModalApi, DFormModal, IDFormModalProps} from '@src/dFormModal';
import {InputField} from "@src/dForm/fields/input/inputField";
import {FormLayoutSwitch} from "../../common/buttonsProps";

const formApi = {} as IDFormModalApi;

const formProps: IDFormModalProps = {
    formId: 'Test form',
    apiRef: formApi,
    confirmChanges: true,
    fieldsProps: {
        position: {component: InputField, label: 'Должность'},
        department: {component: InputField, label: 'Подразделение'},
    },
    onDataFetch: () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() < 0.5) reject({message: 'Ошибка загрузки данных', code: 400});
                else resolve({data: {position: 'Директор', department: 'Главная дирекция'}});
            }, 3000);
        });
    },

    buttons: FormLayoutSwitch(formApi),
}

export const FormFetching = (): React.JSX.Element => {
    const onClick = useCallback(() => {
        formApi.open('update');
    }, []);

    return (
        <>
            {/*Description Start*/}
            <h1>Example of loading data when opening a form</h1>
            <p>To ensure loading, you need to pass a function to the onDataFetch callback that returns a Promise, which, if the server responds successfully (resolve), returns an object of the form:</p>
            <code>{`data:{имя_поля1: "значение", имя_поля2: "значение 2"...}`}</code>
            <p>and if there is an error (reject)</p>
            <code>{`error:{message: string, code: number}`}</code>
            <p>For example, the probability of failure during loading is 50%</p>
            <p></p>
            {/*Description End*/}
            <div style={{maxWidth: 500}}>
                <Button onClick={onClick}>Open form</Button>
                <DFormModal {...formProps} />
            </div>
        </>
    );
};
