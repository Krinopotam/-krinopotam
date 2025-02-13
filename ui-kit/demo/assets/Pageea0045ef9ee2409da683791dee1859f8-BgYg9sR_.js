const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-DY4jbcst.js","assets/default-highlight-Dn6Zkl0a.js","assets/index-CtAjfk3U.js"])))=>i.map(i=>d[i]);
import{W as n,j as e,S as l,a as d,D as m,r as i,_ as c}from"./index-CtAjfk3U.js";import{D as p}from"./isArray-Dq3mFmoY.js";import{I as a}from"./inputField-i3gDy1o8.js";import{P as h,C as u}from"./pageLayout-BYJr8qhp.js";import{d as f,c as x}from"./darcula-BqMdvqtY.js";import"./buttonsRow-DIWV9y5m.js";import"./messageBox-BEJz6LZv.js";import"./index-CQ36vsgA.js";import"./baseField-CLOOMrMa.js";import"./index-tEAOawB8.js";import"./SearchOutlined-BPRhDdUX.js";const g=()=>{const[o,t]=n.useState(!1),r=j(o);return e.jsxs("div",{children:[e.jsx("h1",{children:"Example of loading data when opening a form"}),e.jsx("p",{children:"To ensure loading, you need to pass a function to the onDataFetch callback that returns a Promise, which, if the server responds successfully (resolve), returns an object like:"}),e.jsx("code",{children:'data:{field_name1: "value", field_name2: "value 2"...}'}),e.jsx("p",{children:"in case of error (reject)"}),e.jsx("code",{children:"error:{message: string, code: number}"}),e.jsx("p",{children:"For example, the probability of failure during loading is 50%"}),e.jsx("p",{}),e.jsxs("div",{style:{maxWidth:500},children:[e.jsx(l,{style:{marginBottom:30},children:e.jsx(d,{checkedChildren:"Horizontal",unCheckedChildren:"Vertical",onChange:()=>t(s=>!s)})}),e.jsx(p,{...r})]})]})},j=o=>({formId:"Test form",layout:o?"horizontal":"vertical",formMode:"update",confirmChanges:!0,fieldsProps:{position:{component:a,label:"Position"},department:{component:a,label:"Department"}},onDataFetch:()=>new Promise((t,r)=>{setTimeout(()=>{Math.random()<.5?r({message:"Error loading data",code:400}):t({data:{position:"Chief",department:"Sales department"}})},3e3)}),buttons:{ok:{position:"right"}}}),P=i.lazy(()=>c(()=>import("./index-DY4jbcst.js").then(o=>o.dw),__vite__mapDeps([0,1,2])).then(o=>({default:o.Prism}))),I=o=>e.jsxs(h,{children:[e.jsx(g,{}),e.jsx(m,{}),e.jsx("div",{children:e.jsx(u,{items:[{key:1,label:"Show source",children:e.jsx(i.Suspense,{fallback:e.jsx("div",{children:"Loading source..."}),children:e.jsx(P,{language:"tsx",style:o.darkMode?f:x,showLineNumbers:!0,children:`
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
`})})}]})})]});export{I as Pageea0045ef9ee2409da683791dee1859f8,I as default};
