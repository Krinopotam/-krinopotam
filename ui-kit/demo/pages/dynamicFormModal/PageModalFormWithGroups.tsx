
    import React from 'react';
    import {ModalFormWithGroups} from '../../components/dynamicFormModal/modalFormWithGroups';
    import { Divider } from 'antd';
    import SyntaxHighlighter from 'react-syntax-highlighter';
    import {darcula, docco} from 'react-syntax-highlighter/dist/esm/styles/hljs';

    export const PageModalFormWithGroups = (props: {darkMode: boolean}): React.JSX.Element => {
    // language=text
    const source = `
import React, {useCallback} from 'react';
import {Button} from @krinopotam/ui-kit/button';
import {IDFormModalApi, DFormModal} from @krinopotam/ui-kit/dynamicFormModal';
import {DFormModalConfig, DateTimeComponentConfig, InputComponentConfig} from @krinopotam/ui-kit/dynamicFormModal/configBuilder';
interface IFields {
    nameIn: string;
    dateIn: string;
    nameOut: string;
    dateOut: string;
}
const formApi = {} as IDFormModalApi;
const formProps = new DFormModalConfig<IFields>('Test form')
    .apiRef(formApi)
    .confirmChanges(true)
    .addFields(
        new InputComponentConfig<IFields>('nameIn').label('Имя входящего').inlineGroup('row1'),
        new DateTimeComponentConfig<IFields>('dateIn').label('Дата входа').width(150).inlineGroup('row1'),
        new InputComponentConfig<IFields>('nameOut').label('Имя выходящего').inlineGroup('row2'),
        new DateTimeComponentConfig<IFields>('dateOut').label('Дата выхода').width(150).inlineGroup('row2')
    )
    .getConfig();
export const ModalFormWithGroups = (): React.JSX.Element => {
    const onClick = useCallback(() => {
        formApi.open('create');
    }, []);
    return (
        <div style={{maxWidth: 500}}>
            <Button onClick={onClick}>Открыть форму</Button>
            <DFormModal {...formProps} />
        </div>
    );
};
`
    return (
        <>
            <div>
                <ModalFormWithGroups />
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

export default PageModalFormWithGroups;
