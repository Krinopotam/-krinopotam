import{j as o,D as t}from"./index-23555c5c.js";import{P as e,C as i,S as n,d as a,a as m}from"./docco-c24c9fde.js";import{D as d}from"./index-e5590f2c.js";import{I as l}from"./inputField-52d55a73.js";import{P as p}from"./passwordField-3be5d937.js";import"./index-c1cedb01.js";import"./EyeOutlined-cf850273.js";import"./SearchOutlined-d23aaaab.js";const c=()=>({component:l,label:"Логин",autoFocus:!0}),u=()=>({component:p,label:"Пароль"}),f={formId:"Test form",confirmChanges:!0,fieldsProps:{login:c(),password:u()},buttons:{ok:{position:"right"}}},F=()=>o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Пример формы с полями, сохраненными в виде шаблонов с предустановленными значениями"}),o.jsx("div",{style:{maxWidth:500},children:o.jsx(d,{...f})})]}),D=r=>{const s=`
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
`;return o.jsxs(e,{children:[o.jsx("div",{children:o.jsx(F,{})}),o.jsx(t,{}),o.jsx("div",{children:o.jsx(i,{items:[{key:1,label:"Show source",children:o.jsx(n,{language:"javascript",style:r.darkMode?a:m,showLineNumbers:!0,children:s})}]})})]})};export{D as Page199833ead376447ebe8e104a50af2163,D as default};
