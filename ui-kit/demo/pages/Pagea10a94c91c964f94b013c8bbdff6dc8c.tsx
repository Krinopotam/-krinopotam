
    import React from 'react';
    import {DependedFields} from '../components/dForm/dependedFields';
    import { Divider, Collapse } from 'antd';
    import SyntaxHighlighter from 'react-syntax-highlighter';
    import {darcula, docco} from 'react-syntax-highlighter/dist/esm/styles/hljs';

    export const Pagea10a94c91c964f94b013c8bbdff6dc8c = (props: {darkMode: boolean}): React.JSX.Element => {
    // language=text
    const source = `
import React from 'react';
import {DForm, IDFormProps} from @krinopotam/ui-kit/dForm';
import {InputField} from @krinopotam/ui-kit/dForm/fields/input/inputField';
import {TabsField} from @krinopotam/ui-kit/dForm/fields/tabs/tabsField";
const formProps: IDFormProps = {
    formId: 'Test form',
    confirmChanges: true,
    //disableDepended:true,
    //layout:'horizontal',
    fieldsProps: {
        //field1: {component: InputField, label: 'Field1'},
        //field2: {component: InputField, label: 'Field2', dependsOn:['field1']},
        field3: {component: InputField, label: 'Field3'},
        field4: {component: InputField, label: 'Field4', inlineGroup:'row1', dependsOn:['field3']},
        field5: {component: InputField, label: 'Field5', inlineGroup:'row1', dependsOn:['field4']},
        tabs: {
            component: TabsField,
            tabs: {
                'Tab 1': {
                    field1_1: {component: InputField, label: 'Field3', dependsOn:['field3']},
                    field1_2: {component: InputField, label: 'Field4', dependsOn:['field3']},
                    field1_3: {component: InputField, label: 'Field4', inlineGroup:'row2', dependsOn:['field1_1', 'field1_2']},
                },
                'Tab 2': {
                    field2_1: {component: InputField, label: 'Field5', showCount: true},
                    field2_2: {component: InputField, label: 'Field6'},
                },
            },
        },
        /*        group1: {
                    component:InlineGroupField, fieldsProps: {
                        field1: {component: InputField, label: 'Field1' ,inlineGroup:'row1', rules: [{type: 'string', rule: 'not-empty', message: 'Поле не должно быть пустым'}]} ,
                        field2: {component: InputField, label: 'Field2',inlineGroup:'row1'},
                    },//label:'group1'
                },*/
    },
    buttons: {ok: {position: 'right'}},
};
export const DependedFields = (): React.JSX.Element => {
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
                <DependedFields />
            </div>
            <Divider />
            <div>
                <Collapse 
                    items={[{key: 1, label: 'Show source', children: <SyntaxHighlighter language="javascript" style={props.darkMode ? darcula : docco} showLineNumbers={true}>{source}</SyntaxHighlighter>}]}>
                </Collapse>
            </div>
        </>
    );
};

export default Pagea10a94c91c964f94b013c8bbdff6dc8c;
