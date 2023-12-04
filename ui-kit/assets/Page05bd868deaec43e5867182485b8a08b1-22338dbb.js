import{j as o,D as s}from"./index-9944374f.js";import{P as i,C as t,S as n,d as m,a}from"./docco-d767795b.js";import{D as d}from"./index-df6b3fec.js";import{I as l}from"./inputField-d7a6ced8.js";import{P as p}from"./passwordField-09fc29a2.js";import"./index-1ed5fd40.js";import"./EyeOutlined-4433dc0b.js";import"./SearchOutlined-58270f91.js";const c={formId:"Test form",confirmChanges:!0,fieldsProps:{login:{component:l,label:"Логин"},password:{component:p,label:"Пароль"}},onSubmit:()=>new Promise((e,r)=>{setTimeout(()=>{Math.random()<.5?r({message:"Ошибка сохранения",code:400}):e({data:{login:"new login",password:"new password"}})},3e3)}),buttons:{ok:{position:"right"}}},u=()=>o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Пример сохранения данных формы"}),o.jsx("p",{children:"Для обеспечения сохранения необходимо в калбэк onSubmit передать функцию, возвращающую Promise, который при успешном ответе сервера (resolve) возвращает объект вида:"}),o.jsx("code",{children:'data:{имя_поля1: "значение", имя_поля2: "значение 2"...}'}),o.jsx("p",{children:"а при ошибке (reject)"}),o.jsx("code",{children:"error:{message: string, code: number}"}),o.jsx("p",{children:"Для примера, вероятность сбоя при сохранении 50%"}),o.jsx("p",{}),o.jsx("div",{style:{maxWidth:500},children:o.jsx(d,{...c})})]}),P=e=>{const r=`
import React from 'react';
import {DForm, IDFormProps} from @krinopotam/ui-kit/dForm';
import {InputField} from @krinopotam/ui-kit/dForm/fields/input/inputField";
import {PasswordField} from @krinopotam/ui-kit/dForm/fields/password/passwordField";
const formProps: IDFormProps = {
    formId: 'Test form',
    confirmChanges: true,
    fieldsProps: {
        login: {component: InputField, label: 'Логин'},
        password: {component: PasswordField, label: 'Пароль'},
    },
    onSubmit: () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() < 0.5) reject({message: 'Ошибка сохранения', code: 400});
                else resolve({data: {login: 'new login', password: 'new password'}});
            }, 3000);
        });
    },
    buttons: {ok: {position: 'right'}},
};
export const FormSubmitting = (): React.JSX.Element => {
    return (
        <>
            <div style={{maxWidth: 500}}>
                <DForm {...formProps} />
            </div>
        </>
    );
};
`;return o.jsxs(i,{children:[o.jsx("div",{children:o.jsx(u,{})}),o.jsx(s,{}),o.jsx("div",{children:o.jsx(t,{items:[{key:1,label:"Show source",children:o.jsx(n,{language:"javascript",style:e.darkMode?m:a,showLineNumbers:!0,children:r})}]})})]})};export{P as Page05bd868deaec43e5867182485b8a08b1,P as default};
