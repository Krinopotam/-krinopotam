// noinspection DuplicatedCode

import React, {useCallback} from 'react';

import {Button} from '@src/button';
import {IDFormModalApi, DFormModal, IDFormModalProps} from '@src/dFormModal';
import {IInputFieldProps, InputField} from "@src/dForm/fields/input/inputField";
import {IPasswordFieldProps, PasswordField} from "@src/dForm/fields/password/passwordField";
import {FormLayoutSwitch} from "../../common/buttonsProps";

const formApi = {} as IDFormModalApi;

const formProps: IDFormModalProps = {
    formId: 'Test form',
    apiRef: formApi,
    confirmChanges: true,
    arrowsButtonsSelection: true,
    fieldsProps: {
        login: {component: InputField, label: 'Login'} as IInputFieldProps,
        password: {component: PasswordField, label: 'Password'} as IPasswordFieldProps
    },
    buttons: FormLayoutSwitch(formApi),
}

export const Simple = (): React.JSX.Element => {
    const onClick = useCallback(() => {
        formApi.open('create');
    }, []);

    return (
        <>
            {/*Description Start*/}
            <h1>Example of a simple modal form (vertical layout)</h1>
            <p>By default, a modal form has the ability to drag it by its title and resize it</p>
            {/*Description End*/}
            <div style={{maxWidth: 500}}>
                <Button onClick={onClick}>Открыть форму</Button>
                <DFormModal {...formProps} />
            </div>
        </>
    );
};
