// noinspection DuplicatedCode

import React from 'react';
import {DForm, IDFormProps} from '@src/dForm';
import {InputField} from '@src/dForm/fields/input/inputField';
import {PasswordField} from '@src/dForm/fields/password/passwordField';
import {Space, Switch} from 'antd';

export const Example = (): React.JSX.Element => {
    const [horizontal, setHorizontal] = React.useState(false);
    const formProps = useFormProps(horizontal);

    return (
        <>
            {/*Description Start*/}
            <h1>Example of form data submitting</h1>
            <p>
                To ensure submitting, you need to pass a function to the onSubmit callback that returns a Promise, which, if the server responds successfully
                (resolve), returns an object like:
            </p>
            <code>{`data:{field_name1: "value", field_name2: "value 2"...}`}</code>
            <p>and in case of error (reject):</p>
            <code>{`error:{message: string, code: number}`}</code>
            <p>For example, the probability of failure when saving is 50%</p>
            <p></p>
            {/*Description End*/}
            <div style={{maxWidth: 500}}>
                <Space style={{marginBottom: 30}}>
                    <Switch checkedChildren={'Horizontal'} unCheckedChildren={'Vertical'} onChange={() => setHorizontal(cur => !cur)} />
                </Space>
                <DForm {...formProps} />
            </div>
        </>
    );
};

const useFormProps = (horizontal: boolean) => {
    return {
        formId: 'Test form',
        layout: horizontal ? 'horizontal' : 'vertical',
        confirmChanges: true,
        fieldsProps: {
            login: {component: InputField, label: 'Login'},
            password: {component: PasswordField, label: 'Password'},
        },
        onSubmit: () => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (Math.random() < 0.5) reject({message: 'Submit error', code: 400});
                    else resolve({data: {login: 'new login', password: 'new password'}});
                }, 3000);
            });
        },

        buttons: {ok: {position: 'right'}},
    } satisfies IDFormProps;
};
