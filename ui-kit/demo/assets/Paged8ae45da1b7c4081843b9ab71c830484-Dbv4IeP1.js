import{j as o,D as s}from"./index-CRRPgvdi.js";import{P as t,C as i,h as e,d as a,a as m}from"./docco-COLmzWzy.js";import{D as n}from"./index-CR3eF2D1.js";import{I as l}from"./inputField-BCG6Hv6R.js";import{P as d}from"./passwordField-Bkv8f5pi.js";import"./index-Dx0n4lO3.js";import"./EyeOutlined-DQsML7KC.js";import"./SearchOutlined-BOezqQLT.js";const p={formId:"Test form",confirmChanges:!0,layout:"horizontal",fieldsProps:{login:{component:l,label:"Логин",autoFocus:!0},password:{component:d,label:"Пароль"}},buttons:{ok:{position:"right"}}},c=()=>o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Пример простой формы горизонтальным расположением подписей полей"}),o.jsx("div",{style:{maxWidth:500},children:o.jsx(n,{...p})})]}),k=r=>o.jsxs(t,{children:[o.jsx("div",{children:o.jsx(c,{})}),o.jsx(s,{}),o.jsx("div",{children:o.jsx(i,{items:[{key:1,label:"Show source",children:o.jsx(e,{language:"javascript",style:r.darkMode?a:m,showLineNumbers:!0,children:`
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
`})}]})})]});export{k as Paged8ae45da1b7c4081843b9ab71c830484,k as default};
