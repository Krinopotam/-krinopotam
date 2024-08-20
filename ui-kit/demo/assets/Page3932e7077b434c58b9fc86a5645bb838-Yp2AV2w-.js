import{r as i,j as o,D as s}from"./index-DhMwsQtd.js";import{P as n,C as a,h as m,d as l,a as d}from"./docco-BR1GjPZn.js";import{B as p}from"./messageBox-CQECnf8I.js";import{D as c}from"./dFormModal-B9s_VGMc.js";import{I as u}from"./inputField-C-ak15WA.js";import{P as f}from"./passwordField-GSFpkRgN.js";import{F as h}from"./buttonsProps-BdlAnOxn.js";import"./dForm-BvND7aMS.js";import"./index-DNVFzPvX.js";import"./modal-eXRNn5Q9.js";import"./index-CYDA0FvV.js";import"./EyeOutlined-D8voB2bB.js";import"./SearchOutlined-klO5lwg7.js";const e={},x={formId:"Test form",apiRef:e,confirmChanges:!0,fieldsProps:{field1:{component:u,label:"login",tooltip:"Login input"},field2:{component:f,label:"password",tooltip:"Password input"}},onSubmit:()=>new Promise((r,t)=>{setTimeout(()=>{Math.random()<.5?t({message:"Ошибка сохранения",code:400}):r({data:{login:"new login",password:"new password"}})},3e3)}),buttons:h(e)},F=()=>{const r=i.useCallback(()=>{e.open("create")},[]);return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Пример сохранения данных модальной формы"}),o.jsx("p",{children:"Для обеспечения сохранения необходимо в калбэк onSubmit передать функцию, возвращающую Promise, который при успешном ответе сервера (resolve) возвращает объект вида:"}),o.jsx("code",{children:'data:{имя_поля1: "значение", имя_поля2: "значение 2"...}'}),o.jsx("p",{children:"а при ошибке (reject)"}),o.jsx("code",{children:"error:{message: string, code: number}"}),o.jsx("p",{children:"Для примера, вероятность сбоя при сохранении 50%"}),o.jsx("p",{}),o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(p,{onClick:r,children:"Open form"}),o.jsx(c,{...x})]})]})},A=r=>o.jsxs(n,{children:[o.jsx("div",{children:o.jsx(F,{})}),o.jsx(s,{}),o.jsx("div",{children:o.jsx(a,{items:[{key:1,label:"Show source",children:o.jsx(m,{language:"javascript",style:r.darkMode?l:d,showLineNumbers:!0,children:`
import React, {useCallback} from 'react';
import {Button} from @krinopotam/ui-kit/button';
import {IDFormModalApi, DFormModal, IDFormModalProps} from @krinopotam/ui-kit/dFormModal';
import {InputField} from @krinopotam/ui-kit/dForm/fields/input/inputField";
import {PasswordField} from @krinopotam/ui-kit/dForm/fields/password/passwordField";
import {FormLayoutSwitch} from "../../common/buttonsProps";
const formApi = {} as IDFormModalApi;
const formProps: IDFormModalProps = {
    formId: 'Test form',
    apiRef: formApi,
    confirmChanges: true,
    fieldsProps: {
        field1: {component: InputField, label: 'login', tooltip: 'Login input'},
        field2: {component: PasswordField, label: 'password', tooltip: 'Password input'},
    },
    onSubmit: () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() < 0.5) reject({message: 'Ошибка сохранения', code: 400});
                else resolve({data: {login: 'new login', password: 'new password'}});
            }, 3000);
        });
    },
    buttons: FormLayoutSwitch(formApi),
}
export const ModalFormSubmitting = (): React.JSX.Element => {
    const onClick = useCallback(() => {
        formApi.open('create');
    }, []);
    return (
        <>
            <div style={{maxWidth: 500}}>
                <Button onClick={onClick}>Open form</Button>
                <DFormModal {...formProps} />
            </div>
        </>
    );
};
`})}]})})]});export{A as Page3932e7077b434c58b9fc86a5645bb838,A as default};