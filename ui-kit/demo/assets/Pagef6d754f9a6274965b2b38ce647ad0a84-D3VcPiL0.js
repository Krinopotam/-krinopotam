const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-CaEZq3o6.js","assets/default-highlight-Co1BbaV1.js","assets/index-CzYOWtY3.js"])))=>i.map(i=>d[i]);
import{R as n,j as e,S as l,a as d,r as i,_ as c,D as m}from"./index-CzYOWtY3.js";import{D as p}from"./dForm-oEAd0w94.js";import{I as a}from"./inputField-JsxEKsAN.js";import{P as h,C as u,d as f,c as x}from"./darcula-fwW_2Y8a.js";import"./buttonsRow-NOziNv-G.js";import"./modal-BG6C0-ZR.js";import"./index-DX1MZAsy.js";import"./index-BQhEJFnB.js";import"./SearchOutlined-C3qLh6j9.js";const j=()=>{const[o,t]=n.useState(!1),r=g(o);return e.jsxs("div",{children:[e.jsx("h1",{children:"Example of loading data when opening a form"}),e.jsx("p",{children:"To ensure loading, you need to pass a function to the onDataFetch callback that returns a Promise, which, if the server responds successfully (resolve), returns an object like:"}),e.jsx("code",{children:'data:{field_name1: "value", field_name2: "value 2"...}'}),e.jsx("p",{children:"in case of error (reject)"}),e.jsx("code",{children:"error:{message: string, code: number}"}),e.jsx("p",{children:"For example, the probability of failure during loading is 50%"}),e.jsx("p",{}),e.jsxs("div",{style:{maxWidth:500},children:[e.jsx(l,{style:{marginBottom:30},children:e.jsx(d,{checkedChildren:"Horizontal",unCheckedChildren:"Vertical",onChange:()=>t(s=>!s)})}),e.jsx(p,{...r})]})]})},g=o=>({formId:"Test form",layout:o?"horizontal":"vertical",formMode:"update",confirmChanges:!0,fieldsProps:{position:{component:a,label:"Position"},department:{component:a,label:"Department"}},onDataFetch:()=>new Promise((t,r)=>{setTimeout(()=>{Math.random()<.5?r({message:"Error loading data",code:400}):t({data:{position:"Chief",department:"Sales department"}})},3e3)}),buttons:{ok:{position:"right"}}}),P=i.lazy(()=>c(()=>import("./index-CaEZq3o6.js").then(o=>o.ds),__vite__mapDeps([0,1,2])).then(o=>({default:o.Prism}))),E=o=>e.jsxs(h,{children:[e.jsx("div",{children:e.jsx(j,{})}),e.jsx(m,{}),e.jsx("div",{children:e.jsx(u,{items:[{key:1,label:"Show source",children:e.jsx(i.Suspense,{fallback:e.jsx("div",{children:"Loading source..."}),children:e.jsx(P,{language:"tsx",style:o.darkMode?f:x,showLineNumbers:!0,children:`
import React from 'react';
import {DForm, IDFormProps} from @krinopotam/ui-kit/dForm';
import {InputField} from @krinopotam/ui-kit/dForm/fields/input/inputField';
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
const useFormProps = (horizontal: boolean) => {
    return {
        formId: 'Test form',
        layout: horizontal ? 'horizontal' : 'vertical',
        formMode: 'update',
        confirmChanges: true,
        fieldsProps: {
            position: {component: InputField, label: 'Position'},
            department: {component: InputField, label: 'Department'},
        },
        onDataFetch: () => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (Math.random() < 0.5) reject({message: 'Error loading data', code: 400});
                    else resolve({data: {position: 'Chief', department: 'Sales department'}});
                }, 3000);
            });
        },
        buttons: {ok: {position: 'right'}},
    } satisfies IDFormProps;
};
`})})}]})})]});export{E as Pagef6d754f9a6274965b2b38ce647ad0a84,E as default};
