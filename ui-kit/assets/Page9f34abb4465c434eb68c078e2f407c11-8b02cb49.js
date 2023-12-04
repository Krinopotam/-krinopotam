import{j as o,D as s}from"./index-9944374f.js";import{P as i,C as e,S as a,d as m,a as n}from"./docco-d767795b.js";import{D as l}from"./index-df6b3fec.js";import{I as d}from"./inputField-d7a6ced8.js";import{P as p}from"./passwordField-09fc29a2.js";import"./index-1ed5fd40.js";import"./EyeOutlined-4433dc0b.js";import"./SearchOutlined-58270f91.js";const c={formId:"Test form",confirmChanges:!0,layout:"horizontal",fieldsProps:{login:{component:d,label:"Логин",autoFocus:!0},password:{component:p,label:"Пароль"}},buttons:{ok:{position:"right"}}},u=()=>o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Пример простой формы горизонтальным расположением подписей полей"}),o.jsx("div",{style:{maxWidth:500},children:o.jsx(l,{...c})})]}),k=r=>{const t=`
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
`;return o.jsxs(i,{children:[o.jsx("div",{children:o.jsx(u,{})}),o.jsx(s,{}),o.jsx("div",{children:o.jsx(e,{items:[{key:1,label:"Show source",children:o.jsx(a,{language:"javascript",style:r.darkMode?m:n,showLineNumbers:!0,children:t})}]})})]})};export{k as Page9f34abb4465c434eb68c078e2f407c11,k as default};
