import{j as o,D as s}from"./index-jRq8dFl9.js";import{P as t,C as i,h as e,d as m,a}from"./docco-DVswO1UK.js";import{D as d}from"./dForm-CmpnCynY.js";import"./messageBox-A1wgNO27.js";import{I as n}from"./inputField-DjpktlwZ.js";import{P as p}from"./passwordField-BcOkdDNE.js";import"./index-h_fYsjXx.js";import"./index-CBQ57er9.js";import"./EyeOutlined-B_mcHe4i.js";import"./SearchOutlined-y0oc_54U.js";const l={formId:"Test form",confirmChanges:!0,fieldsProps:{login:{component:n,label:"Логин"},password:{component:p,label:"Пароль",autoFocus:!0}},buttons:{ok:{position:"right"}}},c=()=>o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Пример простой формы с вертикальным расположением подписей полей1"}),o.jsx("div",{style:{maxWidth:500},children:o.jsx(d,{...l})})]}),D=r=>o.jsxs(t,{children:[o.jsx("div",{children:o.jsx(c,{})}),o.jsx(s,{}),o.jsx("div",{children:o.jsx(i,{items:[{key:1,label:"Show source",children:o.jsx(e,{language:"javascript",style:r.darkMode?m:a,showLineNumbers:!0,children:`
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
`})}]})})]});export{D as Page332d989152284aa3b884091d92d7c946,D as default};
