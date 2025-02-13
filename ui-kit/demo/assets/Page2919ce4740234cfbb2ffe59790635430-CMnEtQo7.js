const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-DY4jbcst.js","assets/default-highlight-Dn6Zkl0a.js","assets/index-CtAjfk3U.js"])))=>i.map(i=>d[i]);
import{W as n,j as e,S as a,a as m,D as d,r as i,_ as p}from"./index-CtAjfk3U.js";import{D as c}from"./isArray-Dq3mFmoY.js";import{I as r}from"./inputField-i3gDy1o8.js";import{P as u,C as h}from"./pageLayout-BYJr8qhp.js";import{d as f,c as b}from"./darcula-BqMdvqtY.js";import"./buttonsRow-DIWV9y5m.js";import"./messageBox-BEJz6LZv.js";import"./index-CQ36vsgA.js";import"./baseField-CLOOMrMa.js";import"./index-tEAOawB8.js";import"./SearchOutlined-BPRhDdUX.js";const y=()=>{const[t,o]=n.useState(!1),s=x(t);return e.jsxs("div",{style:{maxWidth:500},children:[e.jsx(a,{style:{marginBottom:30},children:e.jsx(m,{checkedChildren:"Horizontal",unCheckedChildren:"Vertical",onChange:()=>o(l=>!l)})}),e.jsx(c,{...s})]})},x=t=>({formId:"Test form",layout:t?"horizontal":"vertical",confirmChanges:!0,fieldsProps:{field1:{component:r,label:"Field 1",placeholder:"I shouldn't be empty"},field2:{component:r,label:"Field 2",placeholder:"I must be a number"}},validationRules:{field1:[{type:"string",rule:"not-empty",message:"The field must not be empty"}],field2:[{type:"number",rule:"not-empty",message:"Field must be a number"}]},buttons:{ok:{position:"right"}}}),g=i.lazy(()=>p(()=>import("./index-DY4jbcst.js").then(t=>t.dw),__vite__mapDeps([0,1,2])).then(t=>({default:t.Prism}))),E=t=>e.jsxs(u,{children:[e.jsx(y,{}),e.jsx(d,{}),e.jsx("div",{children:e.jsx(h,{items:[{key:1,label:"Show source",children:e.jsx(i.Suspense,{fallback:e.jsx("div",{children:"Loading source..."}),children:e.jsx(g,{language:"tsx",style:t.darkMode?f:b,showLineNumbers:!0,children:`
import React from 'react';
import {DForm, IDFormProps} from @krinopotam/ui-kit/dForm';
import {InputField} from @krinopotam/ui-kit/dForm/fields/input/inputField';
import {Space, Switch} from 'antd';
export const Example = (): React.JSX.Element => {
    const [horizontal, setHorizontal] = React.useState(false);
    const formProps = useFormProps(horizontal);
    return (
        <div style={{maxWidth: 500}}>
            <Space style={{marginBottom: 30}}>
                <Switch checkedChildren={'Horizontal'} unCheckedChildren={'Vertical'} onChange={() => setHorizontal(cur => !cur)} />
            </Space>
            <DForm {...formProps} />
        </div>
    );
};
const useFormProps = (horizontal: boolean) => {
    return {
        formId: 'Test form',
        layout: horizontal ? 'horizontal' : 'vertical',
        confirmChanges: true,
        fieldsProps: {
            field1: {component: InputField, label: 'Field 1', placeholder: 'I shouldn't be empty'},
            field2: {component: InputField, label: 'Field 2', placeholder: 'I must be a number'},
        },
        validationRules: {
            field1: [{type: 'string', rule: 'not-empty', message: 'The field must not be empty'}],
            field2: [{type: 'number', rule: 'not-empty', message: 'Field must be a number'}],
        },
        buttons: {ok: {position: 'right'}},
    } satisfies IDFormProps;
};
`})})}]})})]});export{E as Page2919ce4740234cfbb2ffe59790635430,E as default};
