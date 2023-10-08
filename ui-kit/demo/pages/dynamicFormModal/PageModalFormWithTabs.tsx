
    import React from 'react';
    import {ModalFormWithTabs} from '../../components/dynamicFormModal/modalFormWithTabs';
    import { Divider, Collapse } from 'antd';
    import SyntaxHighlighter from 'react-syntax-highlighter';
    import {darcula, docco} from 'react-syntax-highlighter/dist/esm/styles/hljs';

    export const PageModalFormWithTabs = (props: {darkMode: boolean}): React.JSX.Element => {
    // language=text
    const source = `
import React, {useCallback} from 'react';
import {Button} from @krinopotam/ui-kit/button';
import {IDFormModalApi, DFormModal, IDFormModalProps} from @krinopotam/ui-kit/dynamicFormModal';
import {IDFormFieldInputProps, InputComponent} from @krinopotam/ui-kit/dynamicForm/components/inputComponent";
import {DateTimeComponent, IDFormFieldDateTimeProps} from @krinopotam/ui-kit/dynamicForm/components/dateTimeComponent";
const formApi = {} as IDFormModalApi;
const formProps: IDFormModalProps = {
    formId: 'Test form',
    apiRef: formApi,
    confirmChanges: true,
    fieldsProps: {
        /** Входы */
        nameIn: {component: InputComponent, tab: 'Входы', label: 'Имя входящего', inlineGroup: 'row1'} as IDFormFieldInputProps,
        dateIn: {component: DateTimeComponent, tab: 'Входы', label: 'Дата входа', inlineGroup: 'row1', width: 150} as IDFormFieldDateTimeProps,
        /** Выходы */
        nameOut: {component: InputComponent, tab: 'Выходы', label: 'Имя выходящего', inlineGroup: 'row1'} as IDFormFieldInputProps,
        dateOut: {component: DateTimeComponent, tab: 'Выходы', label: 'Дата выхода', inlineGroup: 'row1', width: 150} as IDFormFieldDateTimeProps,
    },
    bodyHeight: 250,
};
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
                <Collapse 
                    items={[{key: 1, label: 'Show source', children: <SyntaxHighlighter language="javascript" style={props.darkMode ? darcula : docco}>{source}</SyntaxHighlighter>}]}>
                </Collapse>
            </div>
        </>
    );
};

export default PageModalFormWithTabs;
