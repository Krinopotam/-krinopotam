import{j as o,D as s}from"./index-jRq8dFl9.js";import{P as t,C as e,h as i,d as n,a as m}from"./docco-DVswO1UK.js";import{D as a}from"./dForm-CmpnCynY.js";import"./messageBox-A1wgNO27.js";import{I as d}from"./inputField-DjpktlwZ.js";import{P as l}from"./passwordField-BcOkdDNE.js";import"./index-h_fYsjXx.js";import"./index-CBQ57er9.js";import"./EyeOutlined-B_mcHe4i.js";import"./SearchOutlined-y0oc_54U.js";const p=()=>({component:d,label:"Логин",autoFocus:!0}),c=()=>({component:l,label:"Пароль"}),u={formId:"Test form",confirmChanges:!0,fieldsProps:{login:p(),password:c()},buttons:{ok:{position:"right"}}},f=()=>o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Пример формы с полями, сохраненными в виде шаблонов с предустановленными значениями"}),o.jsx("div",{style:{maxWidth:500},children:o.jsx(a,{...u})})]}),v=r=>o.jsxs(t,{children:[o.jsx("div",{children:o.jsx(f,{})}),o.jsx(s,{}),o.jsx("div",{children:o.jsx(e,{items:[{key:1,label:"Show source",children:o.jsx(i,{language:"javascript",style:r.darkMode?n:m,showLineNumbers:!0,children:`
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
`})}]})})]});export{v as Pagee414c5e3938c440b9a4e2e50dcc25f7d,v as default};
