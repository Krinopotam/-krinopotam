import{j as o,D as s}from"./index-DhMwsQtd.js";import{P as t,C as e,h as i,d as n,a as d}from"./docco-BR1GjPZn.js";import{D as m}from"./dForm-BvND7aMS.js";import"./messageBox-CQECnf8I.js";import{I as a}from"./inputField-C-ak15WA.js";import{P as l}from"./passwordField-GSFpkRgN.js";import"./index-DNVFzPvX.js";import"./index-CYDA0FvV.js";import"./EyeOutlined-D8voB2bB.js";import"./SearchOutlined-klO5lwg7.js";const p=()=>({component:a,label:"Логин",autoFocus:!0}),c=()=>({component:l,label:"Пароль"}),u={formId:"Test form",confirmChanges:!0,fieldsProps:{login:p(),password:c()},buttons:{ok:{position:"right"}}},f=()=>o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Пример формы с полями, сохраненными в виде шаблонов с предустановленными значениями"}),o.jsx("div",{style:{maxWidth:500},children:o.jsx(m,{...u})})]}),v=r=>o.jsxs(t,{children:[o.jsx("div",{children:o.jsx(f,{})}),o.jsx(s,{}),o.jsx("div",{children:o.jsx(e,{items:[{key:1,label:"Show source",children:o.jsx(i,{language:"javascript",style:r.darkMode?n:d,showLineNumbers:!0,children:`
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
`})}]})})]});export{v as Page85fd5ae01de14adf9dd49c723646729b,v as default};
