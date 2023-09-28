
    import React from 'react';
    import {ModalFormWithTabs} from '../../components/dynamicFormModal/modalFormWithTabs';
    import { Divider } from 'antd';
    import SyntaxHighlighter from 'react-syntax-highlighter';
    import {darcula, docco} from 'react-syntax-highlighter/dist/esm/styles/hljs';

    export const PageModalFormWithTabs = (props: {darkMode: boolean}): React.JSX.Element => {
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
    .addTab(
        'Входы',
        new InputComponentConfig<IFields>('nameIn').label('Имя входящего'),
        new DateTimeComponentConfig<IFields>('dateIn').label('Дата входа')
    )
    .addTab(
        'Выходы',
        new InputComponentConfig<IFields>('nameOut').label('Имя выходящего').inlineGroup('row1'),
        new DateTimeComponentConfig<IFields>('dateOut').label('Дата выхода').inlineGroup('row1')
    )
    .bodyHeight(250)
    .getConfig();
export const ModalFormWithTabs = (): React.JSX.Element => {
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
                <ModalFormWithTabs />
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

export default PageModalFormWithTabs;
