
    import React from 'react';
    import {NewFormWithTabs} from '../../components/dForm/newFormWithTabs';
    import { Divider, Collapse } from 'antd';
    import SyntaxHighlighter from 'react-syntax-highlighter';
    import {darcula, docco} from 'react-syntax-highlighter/dist/esm/styles/hljs';

    export const PageNewFormWithTabs = (props: {darkMode: boolean}): React.JSX.Element => {
    // language=text
    const source = `
import React from 'react';
import {DForm, IDFormProps} from @krinopotam/ui-kit/dForm';
import {InputField} from @krinopotam/ui-kit/dForm/fields/input/inputField';
import {TabsField} from @krinopotam/ui-kit/dForm/fields/tabs/tabsField';
const formProps: IDFormProps = {
    formId: 'Test form',
    //layout:'horizontal',
    confirmChanges: true,
    fieldsProps: {
        field1: {component: InputField, label: 'Field1', rules: [{type: 'string', rule: 'not-empty', message: 'Поле не должно быть пустым'}]},
        field2: {
            component: TabsField,
            label: 'Field2',
            tabs: {
                'Tab 1': {
                    field2_1_1: {component: InputField, label: 'Field3', showCount: true},
                    field2_1_2: {component: InputField, label: 'Field4'},
                },
                'Tab 2': {
                    field2_2_1: {component: InputField, label: 'Field5', showCount: true},
                    field2_2_2: {component: TabsField, label: 'Field6', tabs:{
                            'Tab 2_1': {
                                field2_2_1_1: {component: InputField, label: 'Field3', showCount: true},
                                field2_2_1_2: {component: InputField, label: 'Field4'},
                            },
                            'Tab 2_2': {
                                field2_2_2_1: {component: InputField, label: 'Field5', showCount: true},
                                field2_2_2_2: {component: InputField, label: 'Field6'},
                            },
                        }},
                    field2_2_3: {component: InputField, label: 'Field4'},
                },
            },
        },
        field3: {
            component: TabsField,
            label: undefined,
            tabs: {
                'Tab 1': {
                    field3_1_1: {component: InputField, label: 'Field3', showCount: true},
                    field3_1_2: {component: InputField, label: 'Field4'},
                },
                'Tab 2': {
                    field3_2_1: {component: InputField, label: 'Field5', showCount: true},
                    field3_2_2: {component: InputField, label: 'Field6'},
                },
            },
        },
    },
    buttons: {ok: {position: 'right'}},
};
export const NewFormWithTabs = (): React.JSX.Element => {
    return (
        <>
            <div style={{maxWidth: 500}}>
                <DForm {...formProps} />
            </div>
        </>
    );
};
`
    return (
        <>
            <div>
                <NewFormWithTabs />
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

export default PageNewFormWithTabs;
