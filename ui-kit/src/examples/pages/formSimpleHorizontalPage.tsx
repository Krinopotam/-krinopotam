
    import React from 'react';
    import {FormSimpleHorizontal} from '../components/formSimpleHorizontal';
    import { Divider } from 'antd';
    import SyntaxHighlighter from 'react-syntax-highlighter';
    import {darcula, docco} from 'react-syntax-highlighter/dist/esm/styles/hljs';

    export const FormSimpleHorizontalPage = (props: {darkMode: boolean}): React.JSX.Element => {
    // language=text
    const source = `// noinspection DuplicatedCode

import React from 'react';
import {DForm} from '../../dynamic-form';
import {DFormConfig} from '../../dynamic-form/configBuilder/dFormConfig';
import {InputComponentConfig} from '../../dynamic-form/configBuilder/inputComponentConfig';
import {PasswordComponentConfig} from '../../dynamic-form/configBuilder/passwordComponentConfig';

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
    .layout('horizontal')
    .buttons({ok: {position: 'right'}})
    .getConfig();

export const FormSimpleHorizontal = (): React.JSX.Element => {
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
                <FormSimpleHorizontal />
            </div>
            <Divider />
            <div>
                <SyntaxHighlighter language="javascript" style={props.darkMode ? darcula : docco}>
                    {source}
                </SyntaxHighlighter>
            </div>
        </>
    );
};
