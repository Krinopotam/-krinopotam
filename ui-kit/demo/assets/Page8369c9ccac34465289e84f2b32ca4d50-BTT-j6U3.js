import{j as o,D as t}from"./index-HhzJ4ZAZ.js";import{P as s,C as i,h as e,d as m,a}from"./docco-DFBk-y2S.js";import{D as n}from"./dForm-CEoJtw24.js";import"./messageBox-B4gQYQRN.js";import{I as l}from"./inputField-BIswQArU.js";import{P as d}from"./passwordField-DmX-DZy9.js";import"./index-B0AR281A.js";import"./index-B_B5-a9j.js";import"./EyeOutlined-iPePv-Sb.js";import"./SearchOutlined-BTqMUkSq.js";const p={formId:"Test form",confirmChanges:!0,layout:"horizontal",fieldsProps:{login:{component:l,label:"Логин",autoFocus:!0},password:{component:d,label:"Пароль"}},buttons:{ok:{position:"right"}}},c=()=>o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Пример простой формы горизонтальным расположением подписей полей"}),o.jsx("div",{style:{maxWidth:500},children:o.jsx(n,{...p})})]}),D=r=>o.jsxs(s,{children:[o.jsx("div",{children:o.jsx(c,{})}),o.jsx(t,{}),o.jsx("div",{children:o.jsx(i,{items:[{key:1,label:"Show source",children:o.jsx(e,{language:"javascript",style:r.darkMode?m:a,showLineNumbers:!0,children:`
import React from 'react';
import {DForm, IDFormProps} from @krinopotam/ui-kit/dForm';
import {InputField} from @krinopotam/ui-kit/dForm/fields/input/inputField";
import {PasswordField} from @krinopotam/ui-kit/dForm/fields/password/passwordField";
const formProps: IDFormProps = {
    formId: 'Test form',
    confirmChanges: true,
    layout: 'horizontal',
    fieldsProps: {
        login: {component: InputField, label: 'Логин', autoFocus: true},
        password: {component: PasswordField, label: 'Пароль'},
    },
    buttons: {ok: {position: 'right'}},
};
export const FormSimpleHorizontal = (): React.JSX.Element => {
    return (
        <>
            <div style={{maxWidth: 500}}>
                <DForm {...formProps} />
            </div>
        </>
    );
};
`})}]})})]});export{D as Page8369c9ccac34465289e84f2b32ca4d50,D as default};
