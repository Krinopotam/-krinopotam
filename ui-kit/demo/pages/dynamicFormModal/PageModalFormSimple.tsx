
    import React from 'react';
    import {ModalFormSimple} from '../../components/dynamicFormModal/modalFormSimple';
    import { Divider, Collapse } from 'antd';
    import SyntaxHighlighter from 'react-syntax-highlighter';
    import {darcula, docco} from 'react-syntax-highlighter/dist/esm/styles/hljs';

    export const PageModalFormSimple = (props: {darkMode: boolean}): React.JSX.Element => {
    // language=text
    const source = `
import React, {useCallback} from 'react';
import {Button} from @krinopotam/ui-kit/button';
import {IDFormModalApi, DFormModal} from @krinopotam/ui-kit/dynamicFormModal';
import {DFormModalConfig, InputComponentConfig, PasswordComponentConfig} from @krinopotam/ui-kit/dynamicFormModal/configBuilder';
interface IFields {
    login: string;
    password: string;
}
const formApi = {} as IDFormModalApi;
const formProps = new DFormModalConfig<IFields>('Test form')
    .apiRef(formApi)
    .confirmChanges(true)
    .arrowsButtonsSelection(true)
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
                <Collapse 
                    items={[{key: 1, label: 'Show source', children: <SyntaxHighlighter language="javascript" style={props.darkMode ? darcula : docco}>{source}</SyntaxHighlighter>}]}>
                </Collapse>
            </div>
        </>
    );
};

export default PageModalFormSimple;
