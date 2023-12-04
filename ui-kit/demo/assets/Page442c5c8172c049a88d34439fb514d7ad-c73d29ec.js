import{j as o,D as t}from"./index-491b5652.js";import{P as i,C as e,S as m,d as a,a as d}from"./docco-2ccfe26d.js";import{D as n}from"./index-bb222d24.js";import{I as l}from"./inputField-d0938683.js";import{P as p}from"./passwordField-7e2da4e3.js";import"./index-92c2cdb7.js";import"./EyeOutlined-ab0d6fcf.js";import"./SearchOutlined-62734d32.js";const c={formId:"Test form",confirmChanges:!0,fieldsProps:{login:{component:l,label:"Логин"},password:{component:p,label:"Пароль",autoFocus:!0}},buttons:{ok:{position:"right"}}},u=()=>o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Пример простой формы с вертикальным расположением подписей полей1"}),o.jsx("div",{style:{maxWidth:500},children:o.jsx(n,{...c})})]}),b=r=>{const s=`
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
`;return o.jsxs(i,{children:[o.jsx("div",{children:o.jsx(u,{})}),o.jsx(t,{}),o.jsx("div",{children:o.jsx(e,{items:[{key:1,label:"Show source",children:o.jsx(m,{language:"javascript",style:r.darkMode?a:d,showLineNumbers:!0,children:s})}]})})]})};export{b as Page442c5c8172c049a88d34439fb514d7ad,b as default};
