
    import React from 'react';
    import {ModalFormWithTabsGroups} from '../../components/dFormModal/modalFormWithTabsGroups';
    import { Divider, Collapse } from 'antd';
    import SyntaxHighlighter from 'react-syntax-highlighter';
    import {darcula, docco} from 'react-syntax-highlighter/dist/esm/styles/hljs';

    export const PageModalFormWithTabsGroups = (props: {darkMode: boolean}): React.JSX.Element => {
    // language=text
    const source = `
import React, {useCallback} from 'react';
import {Button} from @krinopotam/ui-kit/button';
import {IDFormModalApi, DFormModal, IDFormModalProps} from @krinopotam/ui-kit/dFormModal';
import {TabsField} from @krinopotam/ui-kit/dForm/fields/tabs/tabsField';
import {InputField} from @krinopotam/ui-kit/dForm/fields/input/inputField';
import {DateTimeField} from @krinopotam/ui-kit/dForm/fields/dateTime/dateTimeField';
const formApi = {} as IDFormModalApi;
const formProps: IDFormModalProps = {
    formId: 'Test form',
    apiRef: formApi,
    confirmChanges: true,
    fieldsProps: {
        tabs: {
            component: TabsField,
            tabs: {
                ' Посетитель ': {
                    object: {component: InputField, label: 'Объект'},
                    nameIn: {component: InputField, label: 'Имя входящего', inlineGroup: 'row1'},
                    dateIn: {component: DateTimeField, label: 'Дата входа', inlineGroup: 'row1', width: 150},
                    nameOut: {component: InputField, label: 'Имя выходящего', inlineGroup: 'row2'},
                    dateOut: {component: DateTimeField, label: 'Дата выхода', inlineGroup: 'row2', width: 150},
                },
                ' Транспорт ': {
                    vehicle: {component: InputField, label: 'number'},
                    number: {component: InputField, label: 'Номер'},
                },
            },
        },
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
