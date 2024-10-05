const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-DdqqSCj0.js","assets/default-highlight-9uSTSbTs.js","assets/index-c6xXn22Z.js"])))=>i.map(i=>d[i]);
import{R as a,j as o,S as n,a as l,r as t,_ as c,D as d}from"./index-c6xXn22Z.js";import{D as m}from"./dForm-CZw76wHB.js";import{I as p}from"./inputField-CPNFEZKC.js";import{P as u}from"./passwordField-D_Xxq_rP.js";import{P as h,C as x,d as f,c as P}from"./darcula-DhxqnDMh.js";import"./modal-CDnUOe4A.js";import"./index-CzWkA8Ku.js";import"./index-Cbpa_xnq.js";import"./SearchOutlined-DGItvMC8.js";const F=()=>{const[r,e]=a.useState(!1),s=g(r);return o.jsxs("div",{children:[o.jsx("h1",{children:"Basic form example"}),o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(n,{style:{marginBottom:30},children:o.jsx(l,{checkedChildren:"Horizontal",unCheckedChildren:"Vertical",onChange:()=>e(i=>!i)})}),o.jsx(m,{...s})]})]})},g=r=>({layout:r?"horizontal":"vertical",fieldsProps:{login:{component:p,label:"Login",autoFocus:!0},password:{component:u,label:"Password"}},buttons:{ok:{position:"right"}}}),j=t.lazy(()=>c(()=>import("./index-DdqqSCj0.js").then(r=>r.ds),__vite__mapDeps([0,1,2])).then(r=>({default:r.Prism}))),_=r=>o.jsxs(h,{children:[o.jsx("div",{children:o.jsx(F,{})}),o.jsx(d,{}),o.jsx("div",{children:o.jsx(x,{items:[{key:1,label:"Show source",children:o.jsx(t.Suspense,{fallback:o.jsx("div",{children:"Loading source..."}),children:o.jsx(j,{language:"tsx",style:r.darkMode?f:P,showLineNumbers:!0,children:`
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
`})})}]})})]});export{_ as Page47e3ac052f3c4eb7836c2ce39b42f677,_ as default};
