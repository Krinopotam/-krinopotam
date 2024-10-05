const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-aRU0KM20.js","assets/default-highlight-Kf2sMSRd.js","assets/index-BEbJdilr.js"])))=>i.map(i=>d[i]);
import{R as a,j as o,S as n,a as l,r as t,_ as d,D as c}from"./index-BEbJdilr.js";import{D as m}from"./dForm-BUs8TQbJ.js";import{I as p}from"./inputField-CHnFv8h3.js";import{P as u}from"./passwordField-BZL91Zof.js";import{P as h,C as x,d as f,c as P}from"./darcula-DUU8WC9V.js";import"./modal-DZ70cJBI.js";import"./index-DJAh43lQ.js";import"./index-C0ukGqzI.js";import"./SearchOutlined-CqkiXlgD.js";const F=()=>{const[r,e]=a.useState(!1),s=g(r);return o.jsxs("div",{children:[o.jsx("h1",{children:"Basic form example"}),o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(n,{style:{marginBottom:30},children:o.jsx(l,{checkedChildren:"Horizontal",unCheckedChildren:"Vertical",onChange:()=>e(i=>!i)})}),o.jsx(m,{...s})]})]})},g=r=>({layout:r?"horizontal":"vertical",fieldsProps:{login:{component:p,label:"Login",autoFocus:!0},password:{component:u,label:"Password"}},buttons:{ok:{position:"right"}}}),j=t.lazy(()=>d(()=>import("./index-aRU0KM20.js").then(r=>r.ds),__vite__mapDeps([0,1,2])).then(r=>({default:r.Prism}))),_=r=>o.jsxs(h,{children:[o.jsx("div",{children:o.jsx(F,{})}),o.jsx(c,{}),o.jsx("div",{children:o.jsx(x,{items:[{key:1,label:"Show source",children:o.jsx(t.Suspense,{fallback:o.jsx("div",{children:"Loading source..."}),children:o.jsx(j,{language:"tsx",style:r.darkMode?f:P,showLineNumbers:!0,children:`
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
`})})}]})})]});export{_ as Page49d1e62ad10e42e4a793a879928fe79f,_ as default};
