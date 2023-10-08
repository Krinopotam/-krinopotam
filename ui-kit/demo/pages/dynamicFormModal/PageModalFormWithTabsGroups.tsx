
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
import {IDFormModalApi, DFormModal, IDFormModalProps} from @krinopotam/ui-kit/dynamicFormModal';
import {IDFormFieldInputProps, InputComponent} from @krinopotam/ui-kit/dynamicForm/components/inputComponent';
import {DateTimeComponent, IDFormFieldDateTimeProps} from @krinopotam/ui-kit/dynamicForm/components/dateTimeComponent';
const formApi = {} as IDFormModalApi;
const formProps: IDFormModalProps = {
    formId: 'Test form',
    apiRef: formApi,
    confirmChanges: true,
    fieldsProps: {
        /** Посетитель */
        object: {component: InputComponent, tab: 'Посетитель', label: 'Объект'} as IDFormFieldInputProps,
        nameIn: {component: InputComponent, tab: 'Посетитель', label: 'Имя входящего', inlineGroup: 'row1'} as IDFormFieldInputProps,
        dateIn: {component: DateTimeComponent, tab: 'Посетитель', label: 'Дата входа', inlineGroup: 'row1', width: 150} as IDFormFieldDateTimeProps,
        nameOut: {component: InputComponent, tab: 'Посетитель', label: 'Имя выходящего', inlineGroup: 'row1'} as IDFormFieldInputProps,
        dateOut: {component: DateTimeComponent, tab: 'Посетитель', label: 'Дата выхода', inlineGroup: 'row1', width: 150} as IDFormFieldDateTimeProps,
        /** Транспорт */
        vehicle: {component: InputComponent, tab: 'Посетитель', label: 'number'} as IDFormFieldInputProps,
        number: {component: InputComponent, tab: 'Посетитель', label: 'Номер'} as IDFormFieldInputProps,
    },
    bodyHeight: 330,
};
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
