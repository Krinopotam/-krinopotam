const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-DY4jbcst.js","assets/default-highlight-Dn6Zkl0a.js","assets/index-CtAjfk3U.js"])))=>i.map(i=>d[i]);
import{W as s,j as o,S as p,a as m,D as c,r as d,_ as F}from"./index-CtAjfk3U.js";import{D as b}from"./isArray-Dq3mFmoY.js";import{I as e}from"./inputField-i3gDy1o8.js";import{T as n}from"./tabsField-1LK1nVmL.js";import{I as u}from"./inlineGroupField-B-kKho5M.js";import{P as f,C as _}from"./pageLayout-BYJr8qhp.js";import{d as h,c as T}from"./darcula-BqMdvqtY.js";import"./buttonsRow-DIWV9y5m.js";import"./messageBox-BEJz6LZv.js";import"./index-CQ36vsgA.js";import"./baseField-CLOOMrMa.js";import"./index-tEAOawB8.js";import"./SearchOutlined-BPRhDdUX.js";import"./index-CMA59ydq.js";import"./PlusOutlined-CjmZvIFI.js";const I=()=>{const[l,i]=s.useState(!1),r=C(l);return o.jsxs("div",{children:[o.jsx("h1",{children:"Example of a form with nested tabs"}),o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(p,{style:{marginBottom:30},children:o.jsx(m,{checkedChildren:"Horizontal",unCheckedChildren:"Vertical",onChange:()=>i(a=>!a)})}),o.jsx(b,{...r})]})]})},t={},C=l=>({apiRef:t,formId:"Test form",layout:l?"horizontal":"vertical",confirmChanges:!0,fieldsProps:{field1:{component:e,label:"Field1",rules:[{type:"string",rule:"not-empty",message:"Поле не должно быть пустым"}]},field1a:{component:e,label:"Field1a",dependsOn:["field1"]},field1b:{component:e,label:"Field1b",dependsOn:["field1a"]},field2:{component:n,label:"Field2",tabs:{"Tab 1":{row1:{component:u,fieldsProps:{field2_1_1:{component:e,label:"Field3",showCount:!0},field2_1_2:{component:e,label:"Field4"}}}},"Tab 2":{field2_2_1:{component:e,label:"Field5",showCount:!0},field2_2_2:{component:n,label:"Field6",tabs:{"Tab 2_1":{field2_2_1_1:{component:e,label:"Field3",showCount:!0},field2_2_1_2:{component:e,label:"Field4"}},"Tab 2_2":{field2_2_2_1:{component:e,label:"Field5",showCount:!0},field2_2_2_2:{component:e,label:"Field6"}}}}},"Tab 3":{field3_2_1:{component:e,label:"Field5",showCount:!0},field3_2_2:{component:n,label:"Field6",tabs:{"Tab 3_1":{field3_2_1_1:{component:e,label:"Field3",showCount:!0},field3_2_1_2:{component:e,label:"Field4"}},"Tab 3_2":{field3_2_2_1:{component:e,label:"Field5",showCount:!0},field3_2_2_2:{component:e,label:"Field6"}}}}}}}},buttons:{ok:{position:"right"},rerenderTabField:{position:"left",title:"Rerender Tabs field",onClick:()=>{t.model.getField("field2").emitRender()}},rerenderTab1:{position:"left",title:"Rerender Tab 1 content",onClick:()=>{t.model.getField("field2").emitTabRender("Tab 1")}},rerenderForm:{position:"left",title:"Rerender Form",onClick:()=>{t.model.emitFormRender()}}}}),x=d.lazy(()=>F(()=>import("./index-DY4jbcst.js").then(l=>l.dw),__vite__mapDeps([0,1,2])).then(l=>({default:l.Prism}))),L=l=>o.jsxs(f,{children:[o.jsx(I,{}),o.jsx(c,{}),o.jsx("div",{children:o.jsx(_,{items:[{key:1,label:"Show source",children:o.jsx(d.Suspense,{fallback:o.jsx("div",{children:"Loading source..."}),children:o.jsx(x,{language:"tsx",style:l.darkMode?h:T,showLineNumbers:!0,children:`
import React from 'react';
import {DForm, IDFormApi, IDFormProps} from @krinopotam/ui-kit/dForm';
import {InputField} from @krinopotam/ui-kit/dForm/fields/input/inputField';
import {TabsField} from @krinopotam/ui-kit/dForm/fields/tabs/tabsField';
import {Space, Switch} from 'antd';
import {IInlineGroupFieldProps, InlineGroupField} from @krinopotam/ui-kit/dForm/fields/inlineGroup";
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
                        row1: {
                            component: InlineGroupField,
                            fieldsProps: {
                                field2_1_1: {component: InputField, label: 'Field3', showCount: true},
                                field2_1_2: {component: InputField, label: 'Field4'},
                            },
                        } satisfies IInlineGroupFieldProps,
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
`})})}]})})]});export{L as Pagec7f96cb7310644108809857a2c36efa0,L as default};
