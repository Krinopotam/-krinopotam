
    import React from 'react';
    import {DependedFields} from '../../components/dForm/dependedFields';
    import { Divider, Collapse } from 'antd';
    import SyntaxHighlighter from 'react-syntax-highlighter';
    import {darcula, docco} from 'react-syntax-highlighter/dist/esm/styles/hljs';

    export const PageDependedFields = (props: {darkMode: boolean}): React.JSX.Element => {
    // language=text
    const source = `
import React from 'react';
import {DForm, IDFormProps} from @krinopotam/ui-kit/dForm';
import {InputField} from @krinopotam/ui-kit/dForm/fields/input/inputField';
const formProps: IDFormProps = {
    formId: 'Test form',
    confirmChanges: true,
    //layout:'horizontal',
    fieldsProps: {
        field1: {component: InputField, label: 'Field1'},
        field2: {component: InputField, label: 'Field2', dependsOn:['field1']},
        field3: {component: InputField, label: 'Field3', dependsOn:['field2']},
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
                    items={[{key: 1, label: 'Show source', children: <SyntaxHighlighter language="javascript" style={props.darkMode ? darcula : docco}>{source}</SyntaxHighlighter>}]}>
                </Collapse>
            </div>
        </>
    );
};

export default PageDependedFields;
