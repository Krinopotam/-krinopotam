import{j as o,D as s}from"./index-HhzJ4ZAZ.js";import{P as t,C as e,h as i,d as a,a as n}from"./docco-DFBk-y2S.js";import{D as m}from"./dForm-CEoJtw24.js";import"./messageBox-B4gQYQRN.js";import{I as d}from"./inputField-BIswQArU.js";import{P as l}from"./passwordField-DmX-DZy9.js";import"./index-B0AR281A.js";import"./index-B_B5-a9j.js";import"./EyeOutlined-iPePv-Sb.js";import"./SearchOutlined-BTqMUkSq.js";const p=()=>({component:d,label:"Логин",autoFocus:!0}),c=()=>({component:l,label:"Пароль"}),u={formId:"Test form",confirmChanges:!0,fieldsProps:{login:p(),password:c()},buttons:{ok:{position:"right"}}},f=()=>o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Пример формы с полями, сохраненными в виде шаблонов с предустановленными значениями"}),o.jsx("div",{style:{maxWidth:500},children:o.jsx(m,{...u})})]}),v=r=>o.jsxs(t,{children:[o.jsx("div",{children:o.jsx(f,{})}),o.jsx(s,{}),o.jsx("div",{children:o.jsx(e,{items:[{key:1,label:"Show source",children:o.jsx(i,{language:"javascript",style:r.darkMode?a:n,showLineNumbers:!0,children:`
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
`})}]})})]});export{v as Page7988500da06a40e7aa4bba672b966504,v as default};
