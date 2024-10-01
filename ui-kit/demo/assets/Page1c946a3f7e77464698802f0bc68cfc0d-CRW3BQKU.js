const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-Co9PZaPl.js","assets/default-highlight-DvtBkdhg.js","assets/index-Dv3qFdjW.js"])))=>i.map(i=>d[i]);
import{R as a,j as o,S as n,a as l,r as e,_ as d,D as c}from"./index-Dv3qFdjW.js";import{D as m}from"./dForm-QxcKLYQQ.js";import{I as p}from"./inputField-C4gwpQCw.js";import{P as u}from"./passwordField-CyViNrHw.js";import{P as h,C as f,d as x,c as P}from"./darcula-MphVyLu8.js";import"./modal-Bp_ASPGm.js";import"./index-8gx4Y1o-.js";import"./index-qOGxHuln.js";import"./SearchOutlined-DCaoIkCx.js";const F=()=>{const[r,t]=a.useState(!1),s=g(r);return o.jsxs("div",{children:[o.jsx("h1",{children:"Basic form example"}),o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(n,{style:{marginBottom:30},children:o.jsx(l,{checkedChildren:"Horizontal",unCheckedChildren:"Vertical",onChange:()=>t(i=>!i)})}),o.jsx(m,{...s})]})]})},g=r=>({layout:r?"horizontal":"vertical",fieldsProps:{login:{component:p,label:"Login",autoFocus:!0},password:{component:u,label:"Password"}},buttons:{ok:{position:"right"}}}),j=e.lazy(()=>d(()=>import("./index-Co9PZaPl.js").then(r=>r.ds),__vite__mapDeps([0,1,2])).then(r=>({default:r.Prism}))),_=r=>o.jsxs(h,{children:[o.jsx("div",{children:o.jsx(F,{})}),o.jsx(c,{}),o.jsx("div",{children:o.jsx(f,{items:[{key:1,label:"Show source",children:o.jsx(e.Suspense,{fallback:o.jsx("div",{children:"Loading source..."}),children:o.jsx(j,{language:"tsx",style:r.darkMode?x:P,showLineNumbers:!0,children:`
import React from 'react';
import {DForm, IDFormProps} from @krinopotam/ui-kit/dForm';
import {InputField} from @krinopotam/ui-kit/dForm/fields/input/inputField';
import {PasswordField} from @krinopotam/ui-kit/dForm/fields/password/passwordField';
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
        layout: horizontal ? 'horizontal' : 'vertical',
        fieldsProps: {
            login: {component: InputField, label: 'Login', autoFocus: true},
            password: {component: PasswordField, label: 'Password'},
        },
        buttons: {ok: {position: 'right'}},
    } satisfies IDFormProps;
};
`})})}]})})]});export{_ as Page1c946a3f7e77464698802f0bc68cfc0d,_ as default};
