import{j as o,D as s}from"./index-zp8t8nBI.js";import{P as e,C as t,h as i,d as m,a}from"./docco-qM7CaTt5.js";import{D as n}from"./dForm-CtyM7E66.js";import{I as d}from"./inputField-OIQHvMdf.js";import{P as l}from"./passwordField-oVt2twgH.js";import"./index-ClIb7A4b.js";import"./EyeOutlined-B9jVFvSG.js";import"./SearchOutlined-D8OXrZa4.js";const p={formId:"Test form",confirmChanges:!0,fieldsProps:{login:{component:d,label:"Логин"},password:{component:l,label:"Пароль",autoFocus:!0}},buttons:{ok:{position:"right"}}},c=()=>o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Пример простой формы с вертикальным расположением подписей полей1"}),o.jsx("div",{style:{maxWidth:500},children:o.jsx(n,{...p})})]}),w=r=>o.jsxs(e,{children:[o.jsx("div",{children:o.jsx(c,{})}),o.jsx(s,{}),o.jsx("div",{children:o.jsx(t,{items:[{key:1,label:"Show source",children:o.jsx(i,{language:"javascript",style:r.darkMode?m:a,showLineNumbers:!0,children:`
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
`})}]})})]});export{w as Page13caec6a12a94e119f30f754af261dcf,w as default};
