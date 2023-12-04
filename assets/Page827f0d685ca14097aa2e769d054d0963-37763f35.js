import{j as o,D as t}from"./index-7abbb94e.js";import{P as e,C as i,S as m,d as a,a as d}from"./docco-6bf51e55.js";import{D as n}from"./index-22f8d441.js";import{I as l}from"./inputField-0673e106.js";import{P as p}from"./passwordField-e3d2d2b1.js";import"./index-2daee1bb.js";import"./EyeOutlined-4b705a51.js";import"./SearchOutlined-7a7e5389.js";const c={formId:"Test form",confirmChanges:!0,fieldsProps:{login:{component:l,label:"Логин"},password:{component:p,label:"Пароль",autoFocus:!0}},buttons:{ok:{position:"right"}}},u=()=>o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Пример простой формы с вертикальным расположением подписей полей1"}),o.jsx("div",{style:{maxWidth:500},children:o.jsx(n,{...c})})]}),w=r=>{const s=`
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
`;return o.jsxs(e,{children:[o.jsx("div",{children:o.jsx(u,{})}),o.jsx(t,{}),o.jsx("div",{children:o.jsx(i,{items:[{key:1,label:"Show source",children:o.jsx(m,{language:"javascript",style:r.darkMode?a:d,showLineNumbers:!0,children:s})}]})})]})};export{w as Page827f0d685ca14097aa2e769d054d0963,w as default};
