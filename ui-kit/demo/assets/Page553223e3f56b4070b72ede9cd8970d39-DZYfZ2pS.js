import{j as o,D as s}from"./index-DpZR-xIT.js";import{P as e,C as t,h as i,d as m,a}from"./docco-D-QQhIhf.js";import{D as d}from"./dForm-BuCntjeb.js";import{I as n}from"./inputField-Cj-r1-uW.js";import{P as l}from"./passwordField-9PeTD59l.js";import"./index-Cb1flwDV.js";import"./EyeOutlined-B5uh8JXW.js";import"./SearchOutlined-C5XLlk3g.js";const p={formId:"Test form",confirmChanges:!0,fieldsProps:{login:{component:n,label:"Логин"},password:{component:l,label:"Пароль",autoFocus:!0}},buttons:{ok:{position:"right"}}},c=()=>o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Пример простой формы с вертикальным расположением подписей полей1"}),o.jsx("div",{style:{maxWidth:500},children:o.jsx(d,{...p})})]}),k=r=>o.jsxs(e,{children:[o.jsx("div",{children:o.jsx(c,{})}),o.jsx(s,{}),o.jsx("div",{children:o.jsx(t,{items:[{key:1,label:"Show source",children:o.jsx(i,{language:"javascript",style:r.darkMode?m:a,showLineNumbers:!0,children:`
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
`})}]})})]});export{k as Page553223e3f56b4070b72ede9cd8970d39,k as default};
