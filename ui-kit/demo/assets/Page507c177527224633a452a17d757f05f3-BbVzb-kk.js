const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-DwVYDlRJ.js","assets/default-highlight-B_-WNUR5.js","assets/index-DQhjKTAX.js"])))=>i.map(i=>d[i]);
import{R as a,j as e,S as n,a as m,r as s,_ as d,D as p}from"./index-DQhjKTAX.js";import{D as c}from"./dForm-CrwAE8Nv.js";import{I as r}from"./inputField-e8ddU0CD.js";import{P as u,C as h,d as f,c as b}from"./darcula-CRC2cY0A.js";import"./modal-CoK2ultv.js";import"./index-BoiGZk6f.js";import"./index-rKr-Kij3.js";import"./SearchOutlined-BHQSD20H.js";const x=()=>{const[t,o]=a.useState(!1),i=y(t);return e.jsxs("div",{style:{maxWidth:500},children:[e.jsx(n,{style:{marginBottom:30},children:e.jsx(m,{checkedChildren:"Horizontal",unCheckedChildren:"Vertical",onChange:()=>o(l=>!l)})}),e.jsx(c,{...i})]})},y=t=>({formId:"Test form",layout:t?"horizontal":"vertical",confirmChanges:!0,fieldsProps:{field1:{component:r,label:"Field 1",placeholder:"I shouldn't be empty"},field2:{component:r,label:"Field 2",placeholder:"I must be a number"}},validationRules:{field1:[{type:"string",rule:"not-empty",message:"The field must not be empty"}],field2:[{type:"number",rule:"not-empty",message:"Field must be a number"}]},buttons:{ok:{position:"right"}}}),g=s.lazy(()=>d(()=>import("./index-DwVYDlRJ.js").then(t=>t.ds),__vite__mapDeps([0,1,2])).then(t=>({default:t.Prism}))),C=t=>e.jsxs(u,{children:[e.jsx("div",{children:e.jsx(x,{})}),e.jsx(p,{}),e.jsx("div",{children:e.jsx(h,{items:[{key:1,label:"Show source",children:e.jsx(s.Suspense,{fallback:e.jsx("div",{children:"Loading source..."}),children:e.jsx(g,{language:"tsx",style:t.darkMode?f:b,showLineNumbers:!0,children:`
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
`})})}]})})]});export{C as Page507c177527224633a452a17d757f05f3,C as default};
