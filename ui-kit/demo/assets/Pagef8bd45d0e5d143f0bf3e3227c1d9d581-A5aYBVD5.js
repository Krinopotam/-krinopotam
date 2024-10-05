const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-DdqqSCj0.js","assets/default-highlight-9uSTSbTs.js","assets/index-c6xXn22Z.js"])))=>i.map(i=>d[i]);
import{R as a,j as e,S as n,a as l,r as t,_ as d,D as m}from"./index-c6xXn22Z.js";import{D as c}from"./dForm-CZw76wHB.js";import{I as p}from"./inputField-CPNFEZKC.js";import{P as u}from"./passwordField-D_Xxq_rP.js";import{P as h,C as f,d as x,c as g}from"./darcula-DhxqnDMh.js";import"./modal-CDnUOe4A.js";import"./index-CzWkA8Ku.js";import"./index-Cbpa_xnq.js";import"./SearchOutlined-DGItvMC8.js";const j=()=>{const[o,r]=a.useState(!1),s=w(o);return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Example of form data submitting"}),e.jsx("p",{children:"To ensure submitting, you need to pass a function to the onSubmit callback that returns a Promise, which, if the server responds successfully (resolve), returns an object like:"}),e.jsx("code",{children:'data:{field_name1: "value", field_name2: "value 2"...}'}),e.jsx("p",{children:"and in case of error (reject):"}),e.jsx("code",{children:"error:{message: string, code: number}"}),e.jsx("p",{children:"For example, the probability of failure when saving is 50%"}),e.jsx("p",{}),e.jsxs("div",{style:{maxWidth:500},children:[e.jsx(n,{style:{marginBottom:30},children:e.jsx(l,{checkedChildren:"Horizontal",unCheckedChildren:"Vertical",onChange:()=>r(i=>!i)})}),e.jsx(c,{...s})]})]})},w=o=>({formId:"Test form",layout:o?"horizontal":"vertical",confirmChanges:!0,fieldsProps:{login:{component:p,label:"Login"},password:{component:u,label:"Password"}},onSubmit:()=>new Promise((r,s)=>{setTimeout(()=>{Math.random()<.5?s({message:"Submit error",code:400}):r({data:{login:"new login",password:"new password"}})},3e3)}),buttons:{ok:{position:"right"}}}),P=t.lazy(()=>d(()=>import("./index-DdqqSCj0.js").then(o=>o.ds),__vite__mapDeps([0,1,2])).then(o=>({default:o.Prism}))),D=o=>e.jsxs(h,{children:[e.jsx("div",{children:e.jsx(j,{})}),e.jsx(m,{}),e.jsx("div",{children:e.jsx(f,{items:[{key:1,label:"Show source",children:e.jsx(t.Suspense,{fallback:e.jsx("div",{children:"Loading source..."}),children:e.jsx(P,{language:"tsx",style:o.darkMode?x:g,showLineNumbers:!0,children:`
import React from 'react';
import {DForm, IDFormProps} from @krinopotam/ui-kit/dForm';
import {InputField} from @krinopotam/ui-kit/dForm/fields/input/inputField';
import {PasswordField} from @krinopotam/ui-kit/dForm/fields/password/passwordField';
import {Space, Switch} from 'antd';
export const Example = (): React.JSX.Element => {
    const [horizontal, setHorizontal] = React.useState(false);
    const formProps = useFormProps(horizontal);
    return (
        <>
            <div style={{maxWidth: 500}}>
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
        fieldsProps: {
            login: {component: InputField, label: 'Login'},
            password: {component: PasswordField, label: 'Password'},
        },
        onSubmit: () => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (Math.random() < 0.5) reject({message: 'Submit error', code: 400});
                    else resolve({data: {login: 'new login', password: 'new password'}});
                }, 3000);
            });
        },
        buttons: {ok: {position: 'right'}},
    } satisfies IDFormProps;
};
`})})}]})})]});export{D as Pagef8bd45d0e5d143f0bf3e3227c1d9d581,D as default};
