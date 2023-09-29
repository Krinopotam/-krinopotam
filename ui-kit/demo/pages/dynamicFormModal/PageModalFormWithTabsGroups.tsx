
    import React from 'react';
    import {ModalFormWithTabsGroups} from '../../components/dynamicFormModal/modalFormWithTabsGroups';
    import { Divider, Collapse } from 'antd';
    import SyntaxHighlighter from 'react-syntax-highlighter';
    import {darcula, docco} from 'react-syntax-highlighter/dist/esm/styles/hljs';

    export const PageModalFormWithTabsGroups = (props: {darkMode: boolean}): React.JSX.Element => {
    // language=text
    const source = `
import React, {useCallback} from 'react';
import {Button} from @krinopotam/ui-kit/button';
import {IDFormModalApi, DFormModal} from @krinopotam/ui-kit/dynamicFormModal';
import {DFormModalConfig, DateTimeComponentConfig, InputComponentConfig} from @krinopotam/ui-kit/dynamicFormModal/configBuilder';
interface IFields {
    object: number;
    nameIn: string;
    dateIn: string;
    nameOut: string;
    dateOut: string;
    vehicle: string;
    number: string;
}
const formApi = {} as IDFormModalApi;
const formProps = new DFormModalConfig<IFields>('Test form')
    .apiRef(formApi)
    .confirmChanges(true)
    .addTab(
        'Посетитель',
        new InputComponentConfig<IFields>('object').label('Объект'),
        new InputComponentConfig<IFields>('nameIn').label('Имя входящего').inlineGroup('row1'),
        new DateTimeComponentConfig<IFields>('dateIn').label('Дата входа').width(150).inlineGroup('row1'),
        new InputComponentConfig<IFields>('nameOut').label('Имя выходящего').inlineGroup('row2'),
        new DateTimeComponentConfig<IFields>('dateOut').label('Дата выхода').width(150).inlineGroup('row2')
    )
    .addTab(
        'Транспорт',
        new InputComponentConfig<IFields>('vehicle').label('Автомобиль'),
        new InputComponentConfig<IFields>('number').label('Номер')
    )
    .bodyHeight(330)
    .getConfig();
export const ModalFormWithTabsGroups = (): React.JSX.Element => {
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
                <ModalFormWithTabsGroups />
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

export default PageModalFormWithTabsGroups;
