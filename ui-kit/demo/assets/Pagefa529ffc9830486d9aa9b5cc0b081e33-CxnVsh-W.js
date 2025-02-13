const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-DY4jbcst.js","assets/default-highlight-Dn6Zkl0a.js","assets/index-CtAjfk3U.js"])))=>i.map(i=>d[i]);
import{W as a,j as o,S as n,a as l,D as d,r as t,_ as p}from"./index-CtAjfk3U.js";import{D as m}from"./isArray-Dq3mFmoY.js";import{I as c}from"./inputField-i3gDy1o8.js";import{P as u}from"./passwordField-BIusE14l.js";import{P as h,C as f}from"./pageLayout-BYJr8qhp.js";import{d as P,c as F}from"./darcula-BqMdvqtY.js";import"./buttonsRow-DIWV9y5m.js";import"./messageBox-BEJz6LZv.js";import"./index-CQ36vsgA.js";import"./baseField-CLOOMrMa.js";import"./index-tEAOawB8.js";import"./SearchOutlined-BPRhDdUX.js";const x=()=>{const[r,s]=a.useState(!1),e=g(r);return o.jsxs("div",{children:[o.jsx("h1",{children:"Basic form example"}),o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(n,{style:{marginBottom:30},children:o.jsx(l,{checkedChildren:"Horizontal",unCheckedChildren:"Vertical",onChange:()=>s(i=>!i)})}),o.jsx(m,{...e})]})]})},g=r=>({layout:r?"horizontal":"vertical",fieldsProps:{login:{component:c,label:"Login",autoFocus:!0},password:{component:u,label:"Password"}},buttons:{ok:{position:"right"}}}),w=t.lazy(()=>p(()=>import("./index-DY4jbcst.js").then(r=>r.dw),__vite__mapDeps([0,1,2])).then(r=>({default:r.Prism}))),H=r=>o.jsxs(h,{children:[o.jsx(x,{}),o.jsx(d,{}),o.jsx("div",{children:o.jsx(f,{items:[{key:1,label:"Show source",children:o.jsx(t.Suspense,{fallback:o.jsx("div",{children:"Loading source..."}),children:o.jsx(w,{language:"tsx",style:r.darkMode?P:F,showLineNumbers:!0,children:`
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
`})})}]})})]});export{H as Pagefa529ffc9830486d9aa9b5cc0b081e33,H as default};
