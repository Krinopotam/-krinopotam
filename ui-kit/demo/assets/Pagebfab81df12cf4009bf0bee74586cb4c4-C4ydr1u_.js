const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-CyxzPzPK.js","assets/default-highlight-BA4pzhEA.js","assets/index-Cpuh8Ebd.js"])))=>i.map(i=>d[i]);
import{R as a,j as o,S as n,a as l,r as e,_ as d,D as p}from"./index-Cpuh8Ebd.js";import{D as c}from"./dForm-t1Ccos62.js";import{I as m}from"./inputField-DrHpZyP5.js";import{P as u}from"./passwordField-Vkpds4CI.js";import{P as h,C as f,d as P,c as x}from"./darcula-hcLbMwDB.js";import"./buttonsRow-MpDC2SN8.js";import"./modal-g5li7x1J.js";import"./index-DNdv76Wr.js";import"./index-B7DtBnw9.js";import"./SearchOutlined-mv_WcC67.js";const F=()=>{const[r,s]=a.useState(!1),t=g(r);return o.jsxs("div",{children:[o.jsx("h1",{children:"Basic form example"}),o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(n,{style:{marginBottom:30},children:o.jsx(l,{checkedChildren:"Horizontal",unCheckedChildren:"Vertical",onChange:()=>s(i=>!i)})}),o.jsx(c,{...t})]})]})},g=r=>({layout:r?"horizontal":"vertical",fieldsProps:{login:{component:m,label:"Login",autoFocus:!0},password:{component:u,label:"Password"}},buttons:{ok:{position:"right"}}}),j=e.lazy(()=>d(()=>import("./index-CyxzPzPK.js").then(r=>r.ds),__vite__mapDeps([0,1,2])).then(r=>({default:r.Prism}))),_=r=>o.jsxs(h,{children:[o.jsx("div",{children:o.jsx(F,{})}),o.jsx(p,{}),o.jsx("div",{children:o.jsx(f,{items:[{key:1,label:"Show source",children:o.jsx(e.Suspense,{fallback:o.jsx("div",{children:"Loading source..."}),children:o.jsx(j,{language:"tsx",style:r.darkMode?P:x,showLineNumbers:!0,children:`
import {DForm, IDFormProps} from @krinopotam/ui-kit/dForm';
import {IInputFieldProps, InputField} from @krinopotam/ui-kit/dForm/fields/input/inputField';
import {IPasswordFieldProps, PasswordField} from @krinopotam/ui-kit/dForm/fields/password/passwordField';
import {Space, Switch} from 'antd';
import React from 'react';
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
type IFieldTypes = {
    login: string;
    password: string;
};
const useFormProps = (horizontal: boolean) => {
    return {
        layout: horizontal ? 'horizontal' : 'vertical',
        fieldsProps: {
            login: {component: InputField, label: 'Login', autoFocus: true} satisfies IInputFieldProps,
            password: {component: PasswordField, label: 'Password'} satisfies IPasswordFieldProps,
        },
        buttons: {ok: {position: 'right'}},
    } satisfies IDFormProps<IFieldTypes>;
};
`})})}]})})]});export{_ as Pagebfab81df12cf4009bf0bee74586cb4c4,_ as default};
