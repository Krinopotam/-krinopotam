
    import React from 'react';
    import {PageLayout} from '../layouts/pageLayout';
    import {FormSimple} from '../../components/dForm/changePropsViaApi';
    import { Divider, Collapse } from 'antd';
    import SyntaxHighlighter from 'react-syntax-highlighter';
    import {darcula, docco} from 'react-syntax-highlighter/dist/esm/styles/hljs';

    export const Page3a2056f1015a4f70b6aafaf83d1064a2 = (props: {darkMode: boolean}): React.JSX.Element => {
    // language=text
    const source = `
import React from 'react';
import {DForm, IDFormApi, IDFormProps} from @krinopotam/ui-kit/dForm';
import {InputField} from @krinopotam/ui-kit/dForm/fields/input/inputField";
import {Button} from @krinopotam/ui-kit/button";
import {Space, Switch} from "antd";
const api = {} as IDFormApi
const formProps: IDFormProps = {
    apiRef: api,
    formId: 'Test form',
    confirmChanges: true,
    fieldsProps: {
        field1: {component: InputField, label: 'Поле 1'},
        field2: {component: InputField, label: 'Поле 2', autoFocus: true},
    },
    buttons: {ok: {position: 'right'}},
};
let num = 0
const onClick1 = () => {
    num++
    api.updateProps({
        fieldsProps: {
            field1: {component: InputField, label: \`Поле 1 (\${num})\`},
            field2: {component: InputField, label: \`Поле 2 (\${num})\`, autoFocus: true},
        }
    })
}
const onClick2 = () => {
    num++
    api.updateProps({
        fieldsProps: {
            field1: {component: InputField, label: \`Поле 1 (\${num})\`},
            field3: {component: InputField, label: \`Поле 3 (\${num})\`, autoFocus: true},
        }
    })
}
let disabled = false
const disableHandle = () => {
    disabled=!disabled
    api.model.getField('field1').setDisabled(disabled)
}
let show = true
const hideHandle = () => {
    show=!show
    api.model.getField('field1').setHidden(!show)
}
let layout = false
const changeLayout = () => {
    layout = !layout
    api.updateProps({
        layout: !layout ? 'vertical' : 'horizontal',
    })
}
export const FormSimple = (): React.JSX.Element => {
    return (
        <>
            <div style={{maxWidth: 500}}>
                <Space>
                    <Button type="primary" onClick={onClick1}>Набор полей 1</Button>
                    <Button type="primary" onClick={onClick2}>Набор полей 2</Button>
                    <Switch checkedChildren={'Enable'} unCheckedChildren={'Disable'} defaultChecked onChange={disableHandle}/>
                    <Switch checkedChildren={'Show'} unCheckedChildren={'Hide'} defaultChecked onChange={hideHandle}/>
                    <Switch checkedChildren={'Horizontal'} unCheckedChildren={'Vertical'} onChange={changeLayout}/>
                </Space>
                <DForm {...formProps} formStyle={{marginTop: 15}}/>
            </div>
        </>
    );
};
`
    return (
        <PageLayout>
            <div>
                <FormSimple />
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

export default Page3a2056f1015a4f70b6aafaf83d1064a2;
