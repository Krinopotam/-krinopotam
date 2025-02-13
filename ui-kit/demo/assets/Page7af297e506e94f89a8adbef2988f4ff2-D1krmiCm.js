const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-DY4jbcst.js","assets/default-highlight-Dn6Zkl0a.js","assets/index-CtAjfk3U.js"])))=>i.map(i=>d[i]);
import{W as r,j as e,S as a,a as s,D as p,r as n,_ as m}from"./index-CtAjfk3U.js";import{D as f}from"./isArray-Dq3mFmoY.js";import{I as t}from"./inputField-i3gDy1o8.js";import{T as c}from"./tabsField-1LK1nVmL.js";import{I as h}from"./inlineGroupField-B-kKho5M.js";import{P as b,C as u}from"./pageLayout-BYJr8qhp.js";import{d as _,c as F}from"./darcula-BqMdvqtY.js";import"./buttonsRow-DIWV9y5m.js";import"./messageBox-BEJz6LZv.js";import"./index-CQ36vsgA.js";import"./baseField-CLOOMrMa.js";import"./index-tEAOawB8.js";import"./SearchOutlined-BPRhDdUX.js";import"./index-CMA59ydq.js";import"./PlusOutlined-CjmZvIFI.js";const x=()=>{const[o,i]=r.useState(!1),l=I(o);return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"An example of a form with fields and tabs whose visibility depends on each other"}),e.jsxs("div",{style:{maxWidth:600},children:[e.jsx(a,{style:{marginBottom:30},children:e.jsx(s,{checkedChildren:"Horizontal",unCheckedChildren:"Vertical",onChange:()=>i(d=>!d)})}),e.jsx(f,{...l})]})]})},I=o=>({formId:"Test form",layout:o?"horizontal":"vertical",confirmChanges:!0,fieldsProps:{field1:{component:t,label:"Field1 (the Field2 depends on it)",placeholder:"Enter something"},row1:{component:h,fieldsProps:{field2:{component:t,label:"Field2 (the Field3 depends on it)",placeholder:"Enter something",dependsOn:["field1"]},field3:{component:t,label:"Field3 (the Tab1 fields depends on it)",placeholder:"Enter something",dependsOn:["field2"]}}},tabs:{component:c,tabs:{"Tab 1":{tab_1_field1:{component:t,label:"tab_1_field1",dependsOn:["field3"]},tab_1_field2:{component:t,label:"tab_1_field2",dependsOn:["field3"]},tab_1_field3:{component:t,label:"tab_1_field3",dependsOn:["field3"]}},"Tab 2 (independent) ":{tab_2_field1:{component:t,label:"tab_2_field1 (independent )",showCount:!0},tab_2_field2:{component:t,label:"tab_2_field2 (independent )"}}}}},buttons:{ok:{position:"right"}}}),g=n.lazy(()=>m(()=>import("./index-DY4jbcst.js").then(o=>o.dw),__vite__mapDeps([0,1,2])).then(o=>({default:o.Prism}))),R=o=>e.jsxs(b,{children:[e.jsx(x,{}),e.jsx(p,{}),e.jsx("div",{children:e.jsx(u,{items:[{key:1,label:"Show source",children:e.jsx(n.Suspense,{fallback:e.jsx("div",{children:"Loading source..."}),children:e.jsx(g,{language:"tsx",style:o.darkMode?_:F,showLineNumbers:!0,children:`
import React from 'react';
import {DForm, IDFormProps} from @krinopotam/ui-kit/dForm';
import {InputField} from @krinopotam/ui-kit/dForm/fields/input/inputField';
import {TabsField} from @krinopotam/ui-kit/dForm/fields/tabs/tabsField';
import {Space, Switch} from 'antd';
import {IInlineGroupFieldProps, InlineGroupField} from @krinopotam/ui-kit/dForm/fields/inlineGroup';
export const Example = (): React.JSX.Element => {
    const [horizontal, setHorizontal] = React.useState(false);
    const formProps = useFormProps(horizontal);
    return (
        <>
            <div style={{maxWidth: 600}}>
                <Space style={{marginBottom: 30}}>
                    <Switch checkedChildren={'Horizontal'} unCheckedChildren={'Vertical'} onChange={() => setHorizontal(cur => !cur)} />
                </Space>
                <DForm {...formProps} />
            </div>
        </>
    );
};
const useFormProps = (horizontal: boolean) => {
    return {
        formId: 'Test form',
        layout: horizontal ? 'horizontal' : 'vertical',
        confirmChanges: true,
        //disableDepended:true,
        fieldsProps: {
            field1: {component: InputField, label: 'Field1 (the Field2 depends on it)', placeholder: 'Enter something'},
            row1: {
                component: InlineGroupField,
                fieldsProps: {
                    field2: {component: InputField, label: 'Field2 (the Field3 depends on it)', placeholder: 'Enter something', dependsOn: ['field1']},
                    field3: {component: InputField, label: 'Field3 (the Tab1 fields depends on it)', placeholder: 'Enter something', dependsOn: ['field2']},
                },
            } satisfies IInlineGroupFieldProps,
            tabs: {
                component: TabsField,
                tabs: {
                    'Tab 1': {
                        tab_1_field1: {component: InputField, label: 'tab_1_field1', dependsOn: ['field3']},
                        tab_1_field2: {component: InputField, label: 'tab_1_field2', dependsOn: ['field3']},
                        tab_1_field3: {component: InputField, label: 'tab_1_field3', dependsOn: ['field3']},
                    },
                    'Tab 2 (independent) ': {
                        tab_2_field1: {component: InputField, label: 'tab_2_field1 (independent )', showCount: true},
                        tab_2_field2: {component: InputField, label: 'tab_2_field2 (independent )'},
                    },
                },
            },
        },
        buttons: {ok: {position: 'right'}},
    } satisfies IDFormProps;
};
`})})}]})})]});export{R as Page7af297e506e94f89a8adbef2988f4ff2,R as default};
