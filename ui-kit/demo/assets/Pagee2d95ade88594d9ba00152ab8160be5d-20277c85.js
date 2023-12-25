import{j as o,D as t}from"./index-3024f328.js";import{P as e,C as i,S as n,d as a,a as d}from"./docco-8e796366.js";import{D as m}from"./index-901967cb.js";import{I as l}from"./inputField-a558b472.js";import{P as p}from"./passwordField-35ac74e1.js";import"./index-83c0c0ea.js";import"./EyeOutlined-ff2ae648.js";import"./SearchOutlined-8979e289.js";const c=()=>({component:l,label:"Логин",autoFocus:!0}),u=()=>({component:p,label:"Пароль"}),f={formId:"Test form",confirmChanges:!0,fieldsProps:{login:c(),password:u()},buttons:{ok:{position:"right"}}},F=()=>o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Пример формы с полями, сохраненными в виде шаблонов с предустановленными значениями"}),o.jsx("div",{style:{maxWidth:500},children:o.jsx(m,{...f})})]}),D=r=>{const s=`
import React from 'react';
import {DForm, IDFormProps} from @krinopotam/ui-kit/dForm';
import {InputField} from @krinopotam/ui-kit/dForm/fields/input/inputField";
import {PasswordField} from @krinopotam/ui-kit/dForm/fields/password/passwordField";
const login = () => {
    return {component: InputField, label: 'Логин', autoFocus: true};
};
const password = () => {
    return {component: PasswordField, label: 'Пароль'};
};
const formProps: IDFormProps = {
    formId: 'Test form',
    confirmChanges: true,
    fieldsProps: {
        login: login(),
        password: password(),
    },
    buttons: {ok: {position: 'right'}},
};
export const FormWithTemplatedFields = (): React.JSX.Element => {
    return (
        <>
            <div style={{maxWidth: 500}}>
                <DForm {...formProps} />
            </div>
        </>
    );
};
`;return o.jsxs(e,{children:[o.jsx("div",{children:o.jsx(F,{})}),o.jsx(t,{}),o.jsx("div",{children:o.jsx(i,{items:[{key:1,label:"Show source",children:o.jsx(n,{language:"javascript",style:r.darkMode?a:d,showLineNumbers:!0,children:s})}]})})]})};export{D as Pagee2d95ade88594d9ba00152ab8160be5d,D as default};
