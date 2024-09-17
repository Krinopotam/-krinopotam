
    import React from 'react';
    import {PageLayout} from '../layouts/pageLayout';
    import {NewFormSimple} from '../../components/dForm/newFormSimple';
    import { Divider, Collapse } from 'antd';
    import SyntaxHighlighter from 'react-syntax-highlighter';
    import {darcula, docco} from 'react-syntax-highlighter/dist/esm/styles/hljs';

    export const Pagec0a20fdc04aa435486e3eae1a21a38ee = (props: {darkMode: boolean}): React.JSX.Element => {
    // language=text
    const source = `
import React from 'react';
import {DForm, IDFormProps} from @krinopotam/ui-kit/dForm';
import {IInputFieldProps, InputField} from @krinopotam/ui-kit/dForm/fields/input/inputField';
import {DateTimeField, IDateTimeFieldProps} from @krinopotam/ui-kit/dForm/fields/dateTime/dateTimeField';
const formProps: IDFormProps = {
    formId: 'Test form',
    confirmChanges: true,
    //layout:'horizontal',
    fieldsProps: {
        field1: {
            component: DateTimeField,
            label: 'Field1',
            inlineGroup: 'row1',
            rules: [{type: 'string', rule: 'not-empty', message: 'Поле не должно быть пустым'}],
        } satisfies IDateTimeFieldProps,
        field2: {component: InputField, label: 'Field2', inlineGroup: 'row1'} satisfies IInputFieldProps,
        field3: {component: InputField, label: 'Field3'} satisfies IInputFieldProps,
        /*        group1: {
                    component:InlineGroupField, fieldsProps: {
                        field1: {component: InputField, label: 'Field1' ,inlineGroup:'row1', rules: [{type: 'string', rule: 'not-empty', message: 'Поле не должно быть пустым'}]} ,
                        field2: {component: InputField, label: 'Field2',inlineGroup:'row1'},
                    },//label:'group1'
                },*/
        field4: {component: InputField, label: 'Field4'} satisfies IInputFieldProps,
    },
    onFormValuesChanged: (fieldName, values) => console.log(\`\${fieldName} changed:\`, values[fieldName]),
    buttons: {ok: {position: 'right'}},
};
export const NewFormSimple = (): React.JSX.Element => {
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
        <PageLayout>
            <div>
                <NewFormSimple />
            </div>
            <Divider />
            <div>
                <Collapse 
                    items={[{key: 1, label: 'Show source', children: <SyntaxHighlighter language="javascript" style={props.darkMode ? darcula : docco} showLineNumbers={true}>{source}</SyntaxHighlighter>}]}>
                </Collapse>
            </div>
        </PageLayout>
    );
};

export default Pagec0a20fdc04aa435486e3eae1a21a38ee;
