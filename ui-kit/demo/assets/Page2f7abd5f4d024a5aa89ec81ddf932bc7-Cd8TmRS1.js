import{r as i,j as o,D as s}from"./index-C88KkuCB.js";import{P as a,C as n,h as m,d,a as l}from"./docco-ByJX3Scg.js";import{B as p}from"./messageBox-DwID5iMj.js";import{D as c}from"./dFormModal-BPcYJqc1.js";import{I as u}from"./inputField-lf7PiFAE.js";import{P as f}from"./passwordField-FgUXy12W.js";import{F as h}from"./buttonsProps-DHm11dm9.js";import"./dForm-Dv7JeuEm.js";import"./index-BuXson94.js";import"./modal-mTGTPhaP.js";import"./index-CCZkxA_l.js";import"./EyeOutlined-RPGYlChj.js";import"./SearchOutlined-B0z9pdPP.js";const e={},x={formId:"Test form",apiRef:e,confirmChanges:!0,fieldsProps:{field1:{component:u,label:"login",tooltip:"Login input"},field2:{component:f,label:"password",tooltip:"Password input"}},onSubmit:()=>new Promise((r,t)=>{setTimeout(()=>{Math.random()<.5?t({message:"Ошибка сохранения",code:400}):r({data:{login:"new login",password:"new password"}})},3e3)}),buttons:h(e)},F=()=>{const r=i.useCallback(()=>{e.open("create")},[]);return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Пример сохранения данных модальной формы"}),o.jsx("p",{children:"Для обеспечения сохранения необходимо в калбэк onSubmit передать функцию, возвращающую Promise, который при успешном ответе сервера (resolve) возвращает объект вида:"}),o.jsx("code",{children:'data:{имя_поля1: "значение", имя_поля2: "значение 2"...}'}),o.jsx("p",{children:"а при ошибке (reject)"}),o.jsx("code",{children:"error:{message: string, code: number}"}),o.jsx("p",{children:"Для примера, вероятность сбоя при сохранении 50%"}),o.jsx("p",{}),o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(p,{onClick:r,children:"Open form"}),o.jsx(c,{...x})]})]})},A=r=>o.jsxs(a,{children:[o.jsx("div",{children:o.jsx(F,{})}),o.jsx(s,{}),o.jsx("div",{children:o.jsx(n,{items:[{key:1,label:"Show source",children:o.jsx(m,{language:"javascript",style:r.darkMode?d:l,showLineNumbers:!0,children:`
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
`})}]})})]});export{A as Page2f7abd5f4d024a5aa89ec81ddf932bc7,A as default};
