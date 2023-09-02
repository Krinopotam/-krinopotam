
    import React from 'react';
    import {FormDependedField} from '../components/formDependedField';
    import { Divider } from 'antd';
    import SyntaxHighlighter from 'react-syntax-highlighter';
    import {darcula, docco} from 'react-syntax-highlighter/dist/esm/styles/hljs';

    export const FormDependedFieldPage = (props: {darkMode: boolean}): React.JSX.Element => {
    // language=text
    const source = `// noinspection DuplicatedCode

import React from 'react';
import {DForm} from '@src/dynamic-form';
import {DFormConfig} from '@src/dynamic-form/configBuilder/dFormConfig';
import {InputComponentConfig} from '@src/dynamic-form/configBuilder/inputComponentConfig';

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
                <SyntaxHighlighter language="javascript" style={props.darkMode ? darcula : docco}>
                    {source}
                </SyntaxHighlighter>
            </div>
        </>
    );
};