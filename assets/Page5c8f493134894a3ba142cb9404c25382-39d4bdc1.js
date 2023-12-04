import{j as o,D as t}from"./index-72bf19bf.js";import{P as i,C as e,S as m,d as a,a as n}from"./docco-47b38a91.js";import{D as d}from"./index-8ab5ffa3.js";import{I as l}from"./inputField-aa73a447.js";import{P as p}from"./passwordField-3aced548.js";import"./index-f788a2c8.js";import"./EyeOutlined-365e9e86.js";import"./SearchOutlined-f0393ae4.js";const c={formId:"Test form",confirmChanges:!0,fieldsProps:{login:{component:l,label:"Логин"},password:{component:p,label:"Пароль",autoFocus:!0}},buttons:{ok:{position:"right"}}},u=()=>o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Пример простой формы с вертикальным расположением подписей полей1"}),o.jsx("div",{style:{maxWidth:500},children:o.jsx(d,{...c})})]}),k=r=>{const s=`
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
`;return o.jsxs(i,{children:[o.jsx("div",{children:o.jsx(u,{})}),o.jsx(t,{}),o.jsx("div",{children:o.jsx(e,{items:[{key:1,label:"Show source",children:o.jsx(m,{language:"javascript",style:r.darkMode?a:n,showLineNumbers:!0,children:s})}]})})]})};export{k as Page5c8f493134894a3ba142cb9404c25382,k as default};
