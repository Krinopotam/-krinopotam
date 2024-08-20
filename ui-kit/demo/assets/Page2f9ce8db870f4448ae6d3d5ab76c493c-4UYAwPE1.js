import{j as o,D as s}from"./index-DhMwsQtd.js";import{P as t,C as e,h as i,d as m,a}from"./docco-BR1GjPZn.js";import{D as d}from"./dForm-BvND7aMS.js";import"./messageBox-CQECnf8I.js";import{I as n}from"./inputField-C-ak15WA.js";import{P as p}from"./passwordField-GSFpkRgN.js";import"./index-DNVFzPvX.js";import"./index-CYDA0FvV.js";import"./EyeOutlined-D8voB2bB.js";import"./SearchOutlined-klO5lwg7.js";const l={formId:"Test form",confirmChanges:!0,fieldsProps:{login:{component:n,label:"Логин"},password:{component:p,label:"Пароль",autoFocus:!0}},buttons:{ok:{position:"right"}}},c=()=>o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Пример простой формы с вертикальным расположением подписей полей1"}),o.jsx("div",{style:{maxWidth:500},children:o.jsx(d,{...l})})]}),D=r=>o.jsxs(t,{children:[o.jsx("div",{children:o.jsx(c,{})}),o.jsx(s,{}),o.jsx("div",{children:o.jsx(e,{items:[{key:1,label:"Show source",children:o.jsx(i,{language:"javascript",style:r.darkMode?m:a,showLineNumbers:!0,children:`
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
`})}]})})]});export{D as Page2f9ce8db870f4448ae6d3d5ab76c493c,D as default};
