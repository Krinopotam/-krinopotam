import{j as o,D as t}from"./index-239f7c99.js";import{P as e,C as i,S as n,d as a,a as m}from"./docco-df193236.js";import{D as d}from"./index-e86df101.js";import{I as l}from"./inputField-d0cac391.js";import{P as p}from"./passwordField-a2453185.js";import"./index-edb02d85.js";import"./EyeOutlined-6214a1a0.js";import"./SearchOutlined-cde65a1f.js";const c=()=>({component:l,label:"Логин",autoFocus:!0}),u=()=>({component:p,label:"Пароль"}),f={formId:"Test form",confirmChanges:!0,fieldsProps:{login:c(),password:u()},buttons:{ok:{position:"right"}}},F=()=>o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Пример формы с полями, сохраненными в виде шаблонов с предустановленными значениями"}),o.jsx("div",{style:{maxWidth:500},children:o.jsx(d,{...f})})]}),D=r=>{const s=`
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
`;return o.jsxs(e,{children:[o.jsx("div",{children:o.jsx(F,{})}),o.jsx(t,{}),o.jsx("div",{children:o.jsx(i,{items:[{key:1,label:"Show source",children:o.jsx(n,{language:"javascript",style:r.darkMode?a:m,showLineNumbers:!0,children:s})}]})})]})};export{D as Page02a1bfd1261b4d98ba8f206735ea6ab9,D as default};
