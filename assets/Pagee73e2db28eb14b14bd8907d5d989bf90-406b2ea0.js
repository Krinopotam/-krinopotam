import{j as o,D as s}from"./index-c797af55.js";import{P as i,C as e,S as a,d as m,a as n}from"./docco-e40295f3.js";import{D as d}from"./index-8c229de7.js";import{I as l}from"./inputField-d14c5b2b.js";import{P as p}from"./passwordField-6ada3416.js";import"./index-e62611d6.js";import"./EyeOutlined-8bcb47e2.js";import"./SearchOutlined-f62686db.js";const u={formId:"Test form",confirmChanges:!0,layout:"horizontal",fieldsProps:{login:{component:l,label:"Логин",autoFocus:!0},password:{component:p,label:"Пароль"}},buttons:{ok:{position:"right"}}},c=()=>o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Пример простой формы горизонтальным расположением подписей полей"}),o.jsx("div",{style:{maxWidth:500},children:o.jsx(d,{...u})})]}),k=r=>{const t=`
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
`;return o.jsxs(i,{children:[o.jsx("div",{children:o.jsx(c,{})}),o.jsx(s,{}),o.jsx("div",{children:o.jsx(e,{items:[{key:1,label:"Show source",children:o.jsx(a,{language:"javascript",style:r.darkMode?m:n,showLineNumbers:!0,children:t})}]})})]})};export{k as Pagee73e2db28eb14b14bd8907d5d989bf90,k as default};
