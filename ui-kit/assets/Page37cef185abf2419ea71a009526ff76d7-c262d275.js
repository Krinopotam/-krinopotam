import{j as o,D as t}from"./index-9944374f.js";import{P as e,C as i,S as m,d as a,a as n}from"./docco-d767795b.js";import{D as d}from"./index-df6b3fec.js";import{I as l}from"./inputField-d7a6ced8.js";import{P as p}from"./passwordField-09fc29a2.js";import"./index-1ed5fd40.js";import"./EyeOutlined-4433dc0b.js";import"./SearchOutlined-58270f91.js";const c={formId:"Test form",confirmChanges:!0,fieldsProps:{login:{component:l,label:"Логин"},password:{component:p,label:"Пароль",autoFocus:!0}},buttons:{ok:{position:"right"}}},u=()=>o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Пример простой формы с вертикальным расположением подписей полей1"}),o.jsx("div",{style:{maxWidth:500},children:o.jsx(d,{...c})})]}),b=r=>{const s=`
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
`;return o.jsxs(e,{children:[o.jsx("div",{children:o.jsx(u,{})}),o.jsx(t,{}),o.jsx("div",{children:o.jsx(i,{items:[{key:1,label:"Show source",children:o.jsx(m,{language:"javascript",style:r.darkMode?a:n,showLineNumbers:!0,children:s})}]})})]})};export{b as Page37cef185abf2419ea71a009526ff76d7,b as default};
