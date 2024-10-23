const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-UHTfNfHP.js","assets/default-highlight-BW2eIfdj.js","assets/index-fLDE7RV8.js"])))=>i.map(i=>d[i]);
import{R as a,j as o,S as n,a as l,r as e,_ as d,D as p}from"./index-fLDE7RV8.js";import{D as c}from"./dForm-DcZj9aOC.js";import{I as m}from"./inputField-CjWubR6e.js";import{P as u}from"./passwordField-CmCtHx2T.js";import{P as h,C as P,d as x,c as F}from"./darcula-BAaai0cd.js";import"./mergeButtons-5jDhs16v.js";import"./modal-CJqMGIFI.js";import"./index-Dm8OxE-t.js";import"./index-BoVgkjiJ.js";import"./SearchOutlined-bm7ljvup.js";const f=()=>{const[r,s]=a.useState(!1),t=g(r);return o.jsxs("div",{children:[o.jsx("h1",{children:"Basic form example"}),o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(n,{style:{marginBottom:30},children:o.jsx(l,{checkedChildren:"Horizontal",unCheckedChildren:"Vertical",onChange:()=>s(i=>!i)})}),o.jsx(c,{...t})]})]})},g=r=>({layout:r?"horizontal":"vertical",fieldsProps:{login:{component:m,label:"Login",autoFocus:!0},password:{component:u,label:"Password"}},buttons:{ok:{position:"right"}}}),j=e.lazy(()=>d(()=>import("./index-UHTfNfHP.js").then(r=>r.ds),__vite__mapDeps([0,1,2])).then(r=>({default:r.Prism}))),_=r=>o.jsxs(h,{children:[o.jsx("div",{children:o.jsx(f,{})}),o.jsx(p,{}),o.jsx("div",{children:o.jsx(P,{items:[{key:1,label:"Show source",children:o.jsx(e.Suspense,{fallback:o.jsx("div",{children:"Loading source..."}),children:o.jsx(j,{language:"tsx",style:r.darkMode?x:F,showLineNumbers:!0,children:`
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
`})})}]})})]});export{_ as Page91c1eadc688d44249e4770a26add5781,_ as default};
