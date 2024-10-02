const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-C2SUEjL0.js","assets/default-highlight-BDFjN1OP.js","assets/index-CgBeyb-e.js"])))=>i.map(i=>d[i]);
import{R as l,j as e,S as n,a as m,r as s,_ as d,D as c}from"./index-CgBeyb-e.js";import{D as p}from"./dForm-B-6Y2TlM.js";import{I as r}from"./inputField-CHbICkKZ.js";import{P as u,C as h,d as f,c as b}from"./darcula-Bm4NDPn1.js";import"./modal-hi51mlNB.js";import"./index-Birbnh4n.js";import"./index-BmHUbDh_.js";import"./SearchOutlined-DsYktL9I.js";const x=()=>{const[t,o]=l.useState(!1),i=y(t);return e.jsxs("div",{style:{maxWidth:500},children:[e.jsx(n,{style:{marginBottom:30},children:e.jsx(m,{checkedChildren:"Horizontal",unCheckedChildren:"Vertical",onChange:()=>o(a=>!a)})}),e.jsx(p,{...i})]})},y=t=>({formId:"Test form",layout:t?"horizontal":"vertical",confirmChanges:!0,fieldsProps:{field1:{component:r,label:"Field 1",placeholder:"I shouldn't be empty"},field2:{component:r,label:"Field 2",placeholder:"I must be a number"}},validationRules:{field1:[{type:"string",rule:"not-empty",message:"The field must not be empty"}],field2:[{type:"number",rule:"not-empty",message:"Field must be a number"}]},buttons:{ok:{position:"right"}}}),g=s.lazy(()=>d(()=>import("./index-C2SUEjL0.js").then(t=>t.ds),__vite__mapDeps([0,1,2])).then(t=>({default:t.Prism}))),C=t=>e.jsxs(u,{children:[e.jsx("div",{children:e.jsx(x,{})}),e.jsx(c,{}),e.jsx("div",{children:e.jsx(h,{items:[{key:1,label:"Show source",children:e.jsx(s.Suspense,{fallback:e.jsx("div",{children:"Loading source..."}),children:e.jsx(g,{language:"tsx",style:t.darkMode?f:b,showLineNumbers:!0,children:`
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
`})})}]})})]});export{C as Page22faefa623414a05afc43e9c060a72b7,C as default};
