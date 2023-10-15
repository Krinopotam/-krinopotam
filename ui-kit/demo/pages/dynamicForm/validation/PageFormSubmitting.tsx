
    import React from 'react';
    import {FormSubmitting} from '../../../components/dynamicForm/validation/formSubmitting';
    import { Divider, Collapse } from 'antd';
    import SyntaxHighlighter from 'react-syntax-highlighter';
    import {darcula, docco} from 'react-syntax-highlighter/dist/esm/styles/hljs';

    export const PageFormSubmitting = (props: {darkMode: boolean}): React.JSX.Element => {
    // language=text
    const source = `
import React from 'react';
import {DForm, IDFormProps} from @krinopotam/ui-kit/dynamicForm';
import {IDFormFieldInputProps, InputComponent} from @krinopotam/ui-kit/dynamicForm/components/inputComponent';
import {IDFormFieldPasswordProps, PasswordComponent} from @krinopotam/ui-kit/dynamicForm/components/passwordComponent';
const formProps: IDFormProps = {
    formId: 'Test form',
    confirmChanges: true,
    fieldsProps: {
        login: {component: InputComponent, label: 'Логин'} as IDFormFieldInputProps,
        password: {component: PasswordComponent, label: 'Пароль'} as IDFormFieldPasswordProps,
    },
    onSubmit: () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() < 0.5) reject({message: 'Ошибка сохранения', code: 400});
                else resolve({data: {login: 'new login', password: 'new password'}});
            }, 3000);
        });
    },
    buttons: {ok: {position: 'right'}},
};
export const FormSubmitting = (): React.JSX.Element => {
    return (
        <>
            <div style={{maxWidth: 500}}>
                <DForm {...formProps} />
            </div>
        </>
    );
};
`
    return (
        <>
            <div>
                <FormSubmitting />
            </div>
            <Divider />
            <div>
                <Collapse 
                    items={[{key: 1, label: 'Show source', children: <SyntaxHighlighter language="javascript" style={props.darkMode ? darcula : docco}>{source}</SyntaxHighlighter>}]}>
                </Collapse>
            </div>
        </>
    );
};

export default PageFormSubmitting;
