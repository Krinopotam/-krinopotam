import{j as o,D as s}from"./index-CEW5Pw51.js";import{P as e,C as t,h as i,d as m,a}from"./docco-BDmKSriJ.js";import{D as d}from"./index-XDwG7I6Z.js";import{I as n}from"./inputField-BWxo0HQm.js";import{P as l}from"./passwordField-BevpZM1L.js";import"./index-Csn6HTCS.js";import"./EyeOutlined-CTrlI0WT.js";import"./SearchOutlined-3RvbUWh0.js";const p={formId:"Test form",confirmChanges:!0,fieldsProps:{login:{component:n,label:"Логин"},password:{component:l,label:"Пароль",autoFocus:!0}},buttons:{ok:{position:"right"}}},c=()=>o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Пример простой формы с вертикальным расположением подписей полей1"}),o.jsx("div",{style:{maxWidth:500},children:o.jsx(d,{...p})})]}),k=r=>o.jsxs(e,{children:[o.jsx("div",{children:o.jsx(c,{})}),o.jsx(s,{}),o.jsx("div",{children:o.jsx(t,{items:[{key:1,label:"Show source",children:o.jsx(i,{language:"javascript",style:r.darkMode?m:a,showLineNumbers:!0,children:`
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
`})}]})})]});export{k as Page0e7edca3ffa8415e87da03ef7abb64c8,k as default};
