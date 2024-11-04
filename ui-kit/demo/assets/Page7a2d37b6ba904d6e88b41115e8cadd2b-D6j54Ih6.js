const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-CaEZq3o6.js","assets/default-highlight-Co1BbaV1.js","assets/index-CzYOWtY3.js"])))=>i.map(i=>d[i]);
import{R as a,j as e,S as n,a as m,r as i,_ as d,D as p}from"./index-CzYOWtY3.js";import{D as c}from"./dForm-oEAd0w94.js";import{I as r}from"./inputField-JsxEKsAN.js";import{P as u,C as h,d as f,c as b}from"./darcula-fwW_2Y8a.js";import"./buttonsRow-NOziNv-G.js";import"./modal-BG6C0-ZR.js";import"./index-DX1MZAsy.js";import"./index-BQhEJFnB.js";import"./SearchOutlined-C3qLh6j9.js";const x=()=>{const[t,o]=a.useState(!1),s=y(t);return e.jsxs("div",{style:{maxWidth:500},children:[e.jsx(n,{style:{marginBottom:30},children:e.jsx(m,{checkedChildren:"Horizontal",unCheckedChildren:"Vertical",onChange:()=>o(l=>!l)})}),e.jsx(c,{...s})]})},y=t=>({formId:"Test form",layout:t?"horizontal":"vertical",confirmChanges:!0,fieldsProps:{field1:{component:r,label:"Field 1",placeholder:"I shouldn't be empty"},field2:{component:r,label:"Field 2",placeholder:"I must be a number"}},validationRules:{field1:[{type:"string",rule:"not-empty",message:"The field must not be empty"}],field2:[{type:"number",rule:"not-empty",message:"Field must be a number"}]},buttons:{ok:{position:"right"}}}),g=i.lazy(()=>d(()=>import("./index-CaEZq3o6.js").then(t=>t.ds),__vite__mapDeps([0,1,2])).then(t=>({default:t.Prism}))),D=t=>e.jsxs(u,{children:[e.jsx("div",{children:e.jsx(x,{})}),e.jsx(p,{}),e.jsx("div",{children:e.jsx(h,{items:[{key:1,label:"Show source",children:e.jsx(i.Suspense,{fallback:e.jsx("div",{children:"Loading source..."}),children:e.jsx(g,{language:"tsx",style:t.darkMode?f:b,showLineNumbers:!0,children:`
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
`})})}]})})]});export{D as Page7a2d37b6ba904d6e88b41115e8cadd2b,D as default};
