import{j as o,D as t}from"./index-61817db7.js";import{P as e,C as i,S as n,d as a,a as m}from"./docco-c83115a4.js";import{D as d}from"./index-654a7afc.js";import{I as l}from"./inputField-fe663b74.js";import{P as p}from"./passwordField-b13a8281.js";import"./index-37459ce3.js";import"./EyeOutlined-314614a5.js";import"./SearchOutlined-109e4278.js";const c=()=>({component:l,label:"Логин",autoFocus:!0}),u=()=>({component:p,label:"Пароль"}),f={formId:"Test form",confirmChanges:!0,fieldsProps:{login:c(),password:u()},buttons:{ok:{position:"right"}}},F=()=>o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Пример формы с полями, сохраненными в виде шаблонов с предустановленными значениями"}),o.jsx("div",{style:{maxWidth:500},children:o.jsx(d,{...f})})]}),D=r=>{const s=`
import React from 'react';
import {DForm, IDFormProps} from @krinopotam/ui-kit/dForm';
import {InputField} from @krinopotam/ui-kit/dForm/fields/input/inputField";
import {PasswordField} from @krinopotam/ui-kit/dForm/fields/password/passwordField";
const login = () => {
    return {component: InputField, label: 'Логин', autoFocus: true};
};
const password = () => {
    return {component: PasswordField, label: 'Пароль'};
};
const formProps: IDFormProps = {
    formId: 'Test form',
    confirmChanges: true,
    fieldsProps: {
        login: login(),
        password: password(),
    },
    buttons: {ok: {position: 'right'}},
};
export const FormWithTemplatedFields = (): React.JSX.Element => {
    return (
        <>
            <div style={{maxWidth: 500}}>
                <DForm {...formProps} />
            </div>
        </>
    );
};
`;return o.jsxs(e,{children:[o.jsx("div",{children:o.jsx(F,{})}),o.jsx(t,{}),o.jsx("div",{children:o.jsx(i,{items:[{key:1,label:"Show source",children:o.jsx(n,{language:"javascript",style:r.darkMode?a:m,showLineNumbers:!0,children:s})}]})})]})};export{D as Pagea8c0104d3b8444b1bf70c6172b615e36,D as default};
