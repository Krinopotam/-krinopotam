import{j as o,D as s}from"./index-DDBz1-0O.js";import{P as t,C as i,h as e,d as m,a}from"./docco-C1crFo0W.js";import{D as n}from"./dForm-BA1kBRHr.js";import"./messageBox-DliIkF0r.js";import{I as d}from"./inputField-8dkBtnUh.js";import{P as p}from"./passwordField-CMjsNl44.js";import"./index-DF9EXunC.js";import"./index-CK8-QQ6E.js";import"./EyeOutlined-Dh1NUrDq.js";import"./SearchOutlined-COl8paAj.js";const l={formId:"Test form",confirmChanges:!0,fieldsProps:{login:{component:d,label:"Логин"},password:{component:p,label:"Пароль",autoFocus:!0}},buttons:{ok:{position:"right"}}},c=()=>o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Пример простой формы с вертикальным расположением подписей полей1"}),o.jsx("div",{style:{maxWidth:500},children:o.jsx(n,{...l})})]}),D=r=>o.jsxs(t,{children:[o.jsx("div",{children:o.jsx(c,{})}),o.jsx(s,{}),o.jsx("div",{children:o.jsx(i,{items:[{key:1,label:"Show source",children:o.jsx(e,{language:"javascript",style:r.darkMode?m:a,showLineNumbers:!0,children:`
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
`})}]})})]});export{D as Page8768a9fb7b9a48e2ab33f649fd54f166,D as default};
