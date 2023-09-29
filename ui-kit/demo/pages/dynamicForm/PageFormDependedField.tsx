
    import React from 'react';
    import {FormDependedField} from '../../components/dynamicForm/formDependedField';
    import { Divider, Collapse } from 'antd';
    import SyntaxHighlighter from 'react-syntax-highlighter';
    import {darcula, docco} from 'react-syntax-highlighter/dist/esm/styles/hljs';

    export const PageFormDependedField = (props: {darkMode: boolean}): React.JSX.Element => {
    // language=text
    const source = `
import React from 'react';
import {DForm} from @krinopotam/ui-kit/dynamicForm';
import {DFormConfig} from @krinopotam/ui-kit/dynamicForm/configBuilder/dFormConfig';
import {InputComponentConfig} from @krinopotam/ui-kit/dynamicForm/configBuilder/inputComponentConfig';
interface IFields {
    field1: string;
    field2: string;
    field3: string;
}
const formProps = new DFormConfig<IFields>('Test form')
    .confirmChanges(true)
    .addFields(
        new InputComponentConfig<IFields>('field1').label('Поле 1').placeholder('Введите что-нибудь'),
        new InputComponentConfig<IFields>('field2')
            .label('Поле 2 (зависит от Поля 1)')
            .placeholder('Меня не видно, если поле 1 пусто. Введите что-нибудь')
            .dependsOn(['field1']),
        new InputComponentConfig<IFields>('field3')
            .label('Поле 3 (зависит от Поля 1 и 2)')
            .placeholder('Меня не видно, если поля 1 и 2 пусты')
            .dependsOn(['field1', 'field2'])
    )
    .buttons({ok: {position: 'right'}})
    .getConfig();
export const FormDependedField = (): React.JSX.Element => {
    return (
        <>
        <div style={{maxWidth: 500}}>
            <DForm {...formProps} />
        </div></>
    );
};
`
    return (
        <>
            <div>
                <FormDependedField />
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

export default PageFormDependedField;
