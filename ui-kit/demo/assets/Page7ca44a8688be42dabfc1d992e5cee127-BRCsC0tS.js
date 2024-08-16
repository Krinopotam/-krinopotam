import{j as o,D as s}from"./index-HhzJ4ZAZ.js";import{P as e,C as t,h as i,d as m,a}from"./docco-DFBk-y2S.js";import{D as d}from"./dForm-CEoJtw24.js";import"./messageBox-B4gQYQRN.js";import{I as n}from"./inputField-BIswQArU.js";import{P as p}from"./passwordField-DmX-DZy9.js";import"./index-B0AR281A.js";import"./index-B_B5-a9j.js";import"./EyeOutlined-iPePv-Sb.js";import"./SearchOutlined-BTqMUkSq.js";const l={formId:"Test form",confirmChanges:!0,fieldsProps:{login:{component:n,label:"Логин"},password:{component:p,label:"Пароль",autoFocus:!0}},buttons:{ok:{position:"right"}}},c=()=>o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Пример простой формы с вертикальным расположением подписей полей1"}),o.jsx("div",{style:{maxWidth:500},children:o.jsx(d,{...l})})]}),D=r=>o.jsxs(e,{children:[o.jsx("div",{children:o.jsx(c,{})}),o.jsx(s,{}),o.jsx("div",{children:o.jsx(t,{items:[{key:1,label:"Show source",children:o.jsx(i,{language:"javascript",style:r.darkMode?m:a,showLineNumbers:!0,children:`
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
`})}]})})]});export{D as Page7ca44a8688be42dabfc1d992e5cee127,D as default};
