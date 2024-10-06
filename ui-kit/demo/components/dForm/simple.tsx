// noinspection DuplicatedCode

import {DForm, IDFormProps} from '@src/dForm';
import {IInputFieldProps, InputField} from '@src/dForm/fields/input/inputField';
import {IPasswordFieldProps, PasswordField} from '@src/dForm/fields/password/passwordField';
import {Space, Switch} from 'antd';
import React from 'react';

export const Example = (): React.JSX.Element => {
    const [horizontal, setHorizontal] = React.useState(false);
    const formProps = useFormProps(horizontal);

    return (
        <div>
            {/*Description Start*/}
            <h1>Basic form example</h1>
            {/*Description End*/}
            <div style={{maxWidth: 500}}>
                <Space style={{marginBottom: 30}}>
                    <Switch checkedChildren={'Horizontal'} unCheckedChildren={'Vertical'} onChange={() => setHorizontal(cur => !cur)} />
                </Space>
                <DForm {...formProps} />
            </div>
        </div>
    );
};

type IFieldTypes = {
    login: string;
    password: string;
};

const useFormProps = (horizontal: boolean) => {
    return {
        layout: horizontal ? 'horizontal' : 'vertical',
        fieldsProps: {
            login: {component: InputField, label: 'Login', autoFocus: true} satisfies IInputFieldProps,
            password: {component: PasswordField, label: 'Password'} satisfies IPasswordFieldProps,
        },
        buttons: {ok: {position: 'right'}},
    } satisfies IDFormProps<IFieldTypes>;
};
