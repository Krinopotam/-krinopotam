import{j as o,D as t}from"./index-DhMwsQtd.js";import{P as s,C as i,h as e,d as m,a}from"./docco-BR1GjPZn.js";import{D as n}from"./dForm-BvND7aMS.js";import"./messageBox-CQECnf8I.js";import{I as l}from"./inputField-C-ak15WA.js";import{P as d}from"./passwordField-GSFpkRgN.js";import"./index-DNVFzPvX.js";import"./index-CYDA0FvV.js";import"./EyeOutlined-D8voB2bB.js";import"./SearchOutlined-klO5lwg7.js";const p={formId:"Test form",confirmChanges:!0,layout:"horizontal",fieldsProps:{login:{component:l,label:"Логин",autoFocus:!0},password:{component:d,label:"Пароль"}},buttons:{ok:{position:"right"}}},c=()=>o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Пример простой формы горизонтальным расположением подписей полей"}),o.jsx("div",{style:{maxWidth:500},children:o.jsx(n,{...p})})]}),D=r=>o.jsxs(s,{children:[o.jsx("div",{children:o.jsx(c,{})}),o.jsx(t,{}),o.jsx("div",{children:o.jsx(i,{items:[{key:1,label:"Show source",children:o.jsx(e,{language:"javascript",style:r.darkMode?m:a,showLineNumbers:!0,children:`
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
`})}]})})]});export{D as Pagee505ff9847d243cb9b69501b476230d3,D as default};
