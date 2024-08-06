import{r as s,j as o,D as i}from"./index-CRRPgvdi.js";import{P as n,C as a,h as m,d as l,a as d}from"./docco-COLmzWzy.js";import{B as p}from"./index-CR3eF2D1.js";import{D as c}from"./dFormModal-Df9g-P_m.js";import{I as u}from"./inputField-BCG6Hv6R.js";import{P as f}from"./passwordField-Bkv8f5pi.js";import{F as h}from"./buttonsProps-Bczlz-e7.js";import"./index-Dx0n4lO3.js";import"./EyeOutlined-DQsML7KC.js";import"./SearchOutlined-BOezqQLT.js";const e={},x={formId:"Test form",apiRef:e,confirmChanges:!0,fieldsProps:{field1:{component:u,label:"login",tooltip:"Login input"},field2:{component:f,label:"password",tooltip:"Password input"}},onSubmit:()=>new Promise((r,t)=>{setTimeout(()=>{Math.random()<.5?t({message:"Ошибка сохранения",code:400}):r({data:{login:"new login",password:"new password"}})},3e3)}),buttons:h(e)},F=()=>{const r=s.useCallback(()=>{e.open("create")},[]);return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Пример сохранения данных модальной формы"}),o.jsx("p",{children:"Для обеспечения сохранения необходимо в калбэк onSubmit передать функцию, возвращающую Promise, который при успешном ответе сервера (resolve) возвращает объект вида:"}),o.jsx("code",{children:'data:{имя_поля1: "значение", имя_поля2: "значение 2"...}'}),o.jsx("p",{children:"а при ошибке (reject)"}),o.jsx("code",{children:"error:{message: string, code: number}"}),o.jsx("p",{children:"Для примера, вероятность сбоя при сохранении 50%"}),o.jsx("p",{}),o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(p,{onClick:r,children:"Open form"}),o.jsx(c,{...x})]})]})},I=r=>o.jsxs(n,{children:[o.jsx("div",{children:o.jsx(F,{})}),o.jsx(i,{}),o.jsx("div",{children:o.jsx(a,{items:[{key:1,label:"Show source",children:o.jsx(m,{language:"javascript",style:r.darkMode?l:d,showLineNumbers:!0,children:`
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
`})}]})})]});export{I as Page7ef52167bc514cc8a6c5485ec32206d9,I as default};
