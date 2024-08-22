import{j as o,D as t}from"./index-C6ePYZvf.js";import{P as s,C as i,h as e,d as a,a as m}from"./docco-YXdAdB7y.js";import{D as n}from"./dForm-8-NeoUsj.js";import"./messageBox-BC7Lwadz.js";import{I as l}from"./inputField-D7lwRZEw.js";import{P as d}from"./passwordField-DhpwdOqy.js";import"./index-C3U__1M9.js";import"./index-4lm0W_ik.js";import"./EyeOutlined-Dqyyi7nw.js";import"./SearchOutlined-BdqO_rWP.js";const p={formId:"Test form",confirmChanges:!0,layout:"horizontal",fieldsProps:{login:{component:l,label:"Логин",autoFocus:!0},password:{component:d,label:"Пароль"}},buttons:{ok:{position:"right"}}},c=()=>o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Пример простой формы горизонтальным расположением подписей полей"}),o.jsx("div",{style:{maxWidth:500},children:o.jsx(n,{...p})})]}),D=r=>o.jsxs(s,{children:[o.jsx("div",{children:o.jsx(c,{})}),o.jsx(t,{}),o.jsx("div",{children:o.jsx(i,{items:[{key:1,label:"Show source",children:o.jsx(e,{language:"javascript",style:r.darkMode?a:m,showLineNumbers:!0,children:`
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
`})}]})})]});export{D as Paged9da2f15c54b49b4abb21b012492a384,D as default};
