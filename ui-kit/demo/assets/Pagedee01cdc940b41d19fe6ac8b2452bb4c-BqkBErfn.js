const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-9FGXM8eG.js","assets/default-highlight-_K3mzjfK.js","assets/index-CObHp3AH.js"])))=>i.map(i=>d[i]);
import{j as o,r as s,_ as e,D as t}from"./index-CObHp3AH.js";import{D as i}from"./dForm-DjwSwKfj.js";import{I as m}from"./inputField-CMzynz8s.js";import{P as a}from"./passwordField-VZRkMWns.js";import{P as d,C as n,d as l,c as p}from"./darcula-D-n55oql.js";import"./modal-BBQwvlDP.js";import"./DownOutlined-BYejAm0U.js";import"./index-BubinFZA.js";import"./CheckOutlined-ka3l-INf.js";import"./index-Bcx3LFQ2.js";import"./SearchOutlined-DZTAjpNT.js";const c={formId:"Test form",confirmChanges:!0,fieldsProps:{login:{component:m,label:"Логин"},password:{component:a,label:"Пароль",autoFocus:!0}},buttons:{ok:{position:"right"}}},u=()=>o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Пример простой формы с вертикальным расположением подписей полей"}),o.jsx("div",{style:{maxWidth:500},children:o.jsx(i,{...c})})]}),f=s.lazy(()=>e(()=>import("./index-9FGXM8eG.js").then(r=>r.ds),__vite__mapDeps([0,1,2])).then(r=>({default:r.Prism}))),y=r=>o.jsxs(d,{children:[o.jsx("div",{children:o.jsx(u,{})}),o.jsx(t,{}),o.jsx("div",{children:o.jsx(n,{items:[{key:1,label:"Show source",children:o.jsx(s.Suspense,{fallback:o.jsx("div",{children:"Loading source..."}),children:o.jsx(f,{language:"tsx",style:r.darkMode?l:p,showLineNumbers:!0,children:`
import React from 'react';
import {DForm, IDFormProps} from @krinopotam/ui-kit/dForm';
import {InputField} from @krinopotam/ui-kit/dForm/fields/input/inputField";
import {PasswordField} from @krinopotam/ui-kit/dForm/fields/password/passwordField";
const formProps: IDFormProps = {
    formId: 'Test form',
    confirmChanges: true,
    fieldsProps: {
        login: {component: InputField, label: 'Логин'},
        password: {component: PasswordField, label: 'Пароль', autoFocus: true},
    },
    buttons: {ok: {position: 'right'}},
};
export const FormSimple = (): React.JSX.Element => {
    return (
        <>
            <div style={{maxWidth: 500}}>
                <DForm {...formProps} />
            </div>
        </>
    );
};
`})})}]})})]});export{y as Pagedee01cdc940b41d19fe6ac8b2452bb4c,y as default};
