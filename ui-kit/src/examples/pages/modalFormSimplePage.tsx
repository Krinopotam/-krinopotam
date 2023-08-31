
    import React from 'react';
    import {ModalFormSimple} from '../components/modalFormSimple';
    import { Divider } from 'antd';
    import SyntaxHighlighter from 'react-syntax-highlighter';
    import {darcula, docco} from 'react-syntax-highlighter/dist/esm/styles/hljs';

    export const ModalFormSimplePage = (props: {darkMode: boolean}): React.JSX.Element => {
    // language=text
    const source = `// noinspection DuplicatedCode

import React, {useCallback} from 'react';

import {Button} from '../../button';
import {IDFormModalApi, DFormModal} from '../../dynamic-form-modal';
import {DFormModalConfig, InputComponentConfig, PasswordComponentConfig} from '../../dynamic-form-modal/configBuilder';

interface IFields {
    login: string;
    password: string;
}

const formApi = {} as IDFormModalApi;

const formProps = new DFormModalConfig<IFields>('Test form')
    .apiRef(formApi)
    .confirmChanges(true)
    .addFields(
        new InputComponentConfig<IFields>('login').label('Логин'),
        new PasswordComponentConfig<IFields>('password').label('Пароль'))
    .getConfig();

export const ModalFormSimple = (): React.JSX.Element => {
    const onClick = useCallback(() => {
        formApi.open('create');
    }, []);

    return (
        <>
            <div style={{maxWidth: 500}}>
                <Button onClick={onClick}>Открыть форму</Button>
                <DFormModal {...formProps} />
            </div>
        </>
    );
};
`
    return (
        <>
            <div>
                <ModalFormSimple />
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
