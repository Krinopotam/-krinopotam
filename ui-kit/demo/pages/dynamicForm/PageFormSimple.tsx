
    import React from 'react';
    import {FormSimple} from '../../components/dynamicForm/formSimple';
    import { Divider, Collapse } from 'antd';
    import SyntaxHighlighter from 'react-syntax-highlighter';
    import {darcula, docco} from 'react-syntax-highlighter/dist/esm/styles/hljs';

    export const PageFormSimple = (props: {darkMode: boolean}): React.JSX.Element => {
    // language=text
    const source = `
import React from 'react';
import {DForm} from @krinopotam/ui-kit/dynamicForm';
import {DFormConfig} from @krinopotam/ui-kit/dynamicForm/configBuilder/dFormConfig';
import {InputComponentConfig} from @krinopotam/ui-kit/dynamicForm/configBuilder/inputComponentConfig';
import {PasswordComponentConfig} from @krinopotam/ui-kit/dynamicForm/configBuilder/passwordComponentConfig';
interface IFields {
    login: string;
    password: string;
}
const formProps = new DFormConfig<IFields>('Test form')
    .confirmChanges(true)
    .addFields(
        new InputComponentConfig<IFields>('login').label('Логин'),
        new PasswordComponentConfig<IFields>('password').label('Пароль')
    )
    .buttons({ok: {position: 'right'}})
    .getConfig();
export const FormSimple = (): React.JSX.Element => {
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
                <FormSimple />
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

export default PageFormSimple;