
    import React from 'react';
    import {FormWithTemplatedFields} from '../components/dForm/formWithTemplatedFields';
    import { Divider, Collapse } from 'antd';
    import SyntaxHighlighter from 'react-syntax-highlighter';
    import {darcula, docco} from 'react-syntax-highlighter/dist/esm/styles/hljs';

    export const Page246dec2aa7c8461d8e01d6052e98a66d = (props: {darkMode: boolean}): React.JSX.Element => {
    // language=text
    const source = `
import React from 'react';
import {DForm, IDFormProps} from @krinopotam/ui-kit/dForm';
import {InputField} from @krinopotam/ui-kit/dForm/fields/input/inputField";
import {PasswordField} from @krinopotam/ui-kit/dForm/fields/password/passwordField";
const login = () => {
    return {component: InputField, label: 'Логин', autoFocus: true};
};
const password = () => {
    return {component: PasswordField, label: 'Пароль'};
};
const formProps: IDFormProps = {
    formId: 'Test form',
    confirmChanges: true,
    fieldsProps: {
        login: login(),
        password: password(),
    },
    buttons: {ok: {position: 'right'}},
};
export const FormWithTemplatedFields = (): React.JSX.Element => {
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
                <FormWithTemplatedFields />
            </div>
            <Divider />
            <div>
                <Collapse 
                    items={[{key: 1, label: 'Show source', children: <SyntaxHighlighter language="javascript" style={props.darkMode ? darcula : docco} showLineNumbers={true}>{source}</SyntaxHighlighter>}]}>
                </Collapse>
            </div>
        </>
    );
};

export default Page246dec2aa7c8461d8e01d6052e98a66d;
