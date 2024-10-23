const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-PpfmoLrq.js","assets/default-highlight-CWL5sYcU.js","assets/index-DLyGJszd.js"])))=>i.map(i=>d[i]);
import{R as s,j as l,S as p,a as m,r as d,_ as c,D as b}from"./index-DLyGJszd.js";import{D as F}from"./dForm-8o49JMOI.js";import{I as e}from"./inputField-CrUAS0Ct.js";import{T as n}from"./tabsField-dL5aqlNH.js";import{P as u,C as _,d as f,c as h}from"./darcula-BfEmJZ6D.js";import"./mergeButtons-OmCcH4N9.js";import"./modal-CjmvIDqE.js";import"./index-CGhTEYKp.js";import"./index-DlQkoOxi.js";import"./SearchOutlined-B4yj2tsd.js";import"./index-DSL2xdJU.js";const T=()=>{const[o,i]=s.useState(!1),r=C(o);return l.jsxs("div",{children:[l.jsx("h1",{children:"Example of a form with nested tabs"}),l.jsxs("div",{style:{maxWidth:500},children:[l.jsx(p,{style:{marginBottom:30},children:l.jsx(m,{checkedChildren:"Horizontal",unCheckedChildren:"Vertical",onChange:()=>i(a=>!a)})}),l.jsx(F,{...r})]})]})},t={},C=o=>({apiRef:t,formId:"Test form",layout:o?"horizontal":"vertical",confirmChanges:!0,fieldsProps:{field1:{component:e,label:"Field1",rules:[{type:"string",rule:"not-empty",message:"Поле не должно быть пустым"}]},field1a:{component:e,label:"Field1a",dependsOn:["field1"]},field1b:{component:e,label:"Field1b",dependsOn:["field1a"]},field2:{component:n,label:"Field2",tabs:{"Tab 1":{field2_1_1:{component:e,label:"Field3",inlineGroup:"row1",showCount:!0},field2_1_2:{component:e,label:"Field4",inlineGroup:"row1"}},"Tab 2":{field2_2_1:{component:e,label:"Field5",showCount:!0},field2_2_2:{component:n,label:"Field6",tabs:{"Tab 2_1":{field2_2_1_1:{component:e,label:"Field3",showCount:!0},field2_2_1_2:{component:e,label:"Field4"}},"Tab 2_2":{field2_2_2_1:{component:e,label:"Field5",showCount:!0},field2_2_2_2:{component:e,label:"Field6"}}}}},"Tab 3":{field3_2_1:{component:e,label:"Field5",showCount:!0},field3_2_2:{component:n,label:"Field6",tabs:{"Tab 3_1":{field3_2_1_1:{component:e,label:"Field3",showCount:!0},field3_2_1_2:{component:e,label:"Field4"}},"Tab 3_2":{field3_2_2_1:{component:e,label:"Field5",showCount:!0},field3_2_2_2:{component:e,label:"Field6"}}}}}}}},buttons:{ok:{position:"right"},rerenderTabField:{position:"left",title:"Rerender Tabs field",onClick:()=>{t.model.getField("field2").emitRender()}},rerenderTab1:{position:"left",title:"Rerender Tab 1 content",onClick:()=>{t.model.getField("field2").emitTabRender("Tab 1")}},rerenderForm:{position:"left",title:"Rerender Form",onClick:()=>{t.model.emitFormRender()}}}}),x=d.lazy(()=>c(()=>import("./index-PpfmoLrq.js").then(o=>o.ds),__vite__mapDeps([0,1,2])).then(o=>({default:o.Prism}))),D=o=>l.jsxs(u,{children:[l.jsx("div",{children:l.jsx(T,{})}),l.jsx(b,{}),l.jsx("div",{children:l.jsx(_,{items:[{key:1,label:"Show source",children:l.jsx(d.Suspense,{fallback:l.jsx("div",{children:"Loading source..."}),children:l.jsx(x,{language:"tsx",style:o.darkMode?f:h,showLineNumbers:!0,children:`
import React from 'react';
import {DForm, IDFormApi, IDFormProps} from @krinopotam/ui-kit/dForm';
import {InputField} from @krinopotam/ui-kit/dForm/fields/input/inputField';
import {TabsField} from @krinopotam/ui-kit/dForm/fields/tabs/tabsField';
import {Space, Switch} from 'antd';
export const Example = (): React.JSX.Element => {
    const [horizontal, setHorizontal] = React.useState(false);
    const formProps = useFormProps(horizontal);
    return (
        <div>
            <div style={{maxWidth: 500}}>
                <Space style={{marginBottom: 30}}>
                    <Switch checkedChildren={'Horizontal'} unCheckedChildren={'Vertical'} onChange={() => setHorizontal(cur => !cur)} />
                </Space>
                <DForm {...formProps} />
            </div>
        </div>
    );
};
const api = {} as IDFormApi;
const useFormProps = (horizontal: boolean) => {
    return {
        apiRef: api,
        formId: 'Test form',
        layout: horizontal ? 'horizontal' : 'vertical',
        confirmChanges: true,
        fieldsProps: {
            field1: {component: InputField, label: 'Field1', rules: [{type: 'string', rule: 'not-empty', message: 'Поле не должно быть пустым'}]},
            field1a: {component: InputField, label: 'Field1a', dependsOn: ['field1']},
            field1b: {component: InputField, label: 'Field1b', dependsOn: ['field1a']},
            field2: {
                component: TabsField,
                label: 'Field2',
                tabs: {
                    'Tab 1': {
                        field2_1_1: {component: InputField, label: 'Field3', inlineGroup: 'row1', showCount: true},
                        field2_1_2: {component: InputField, label: 'Field4', inlineGroup: 'row1'},
                    },
                    'Tab 2': {
                        field2_2_1: {component: InputField, label: 'Field5', showCount: true},
                        field2_2_2: {
                            component: TabsField,
                            label: 'Field6',
                            tabs: {
                                'Tab 2_1': {
                                    field2_2_1_1: {component: InputField, label: 'Field3', showCount: true},
                                    field2_2_1_2: {component: InputField, label: 'Field4'},
                                },
                                'Tab 2_2': {
                                    field2_2_2_1: {component: InputField, label: 'Field5', showCount: true},
                                    field2_2_2_2: {component: InputField, label: 'Field6'},
                                },
                            },
                        },
                        //field2_2_3: {component: InputField, label: 'Field4'},
                    },
                    'Tab 3': {
                        field3_2_1: {component: InputField, label: 'Field5', showCount: true},
                        field3_2_2: {
                            component: TabsField,
                            label: 'Field6',
                            tabs: {
                                'Tab 3_1': {
                                    field3_2_1_1: {component: InputField, label: 'Field3', showCount: true},
                                    field3_2_1_2: {component: InputField, label: 'Field4'},
                                },
                                'Tab 3_2': {
                                    field3_2_2_1: {component: InputField, label: 'Field5', showCount: true},
                                    field3_2_2_2: {component: InputField, label: 'Field6'},
                                },
                            },
                        },
                        //field2_2_3: {component: InputField, label: 'Field4'},
                    },
                },
            },
        },
        buttons: {
            ok: {position: 'right'},
            rerenderTabField: {
                position: 'left',
                title: 'Rerender Tabs field',
                onClick: () => {
                    const tabField = api.model.getField('field2') as TabsField;
                    tabField.emitRender();
                },
            },
            rerenderTab1: {
                position: 'left',
                title: 'Rerender Tab 1 content',
                onClick: () => {
                    const tabField = api.model.getField('field2') as TabsField;
                    tabField.emitTabRender('Tab 1');
                },
            },
            rerenderForm: {
                position: 'left',
                title: 'Rerender Form',
                onClick: () => {
                    api.model.emitFormRender();
                },
            },
        },
    } satisfies IDFormProps;
};
`})})}]})})]});export{D as Pagecf746f3466bd4b34954366dd13b40de1,D as default};
