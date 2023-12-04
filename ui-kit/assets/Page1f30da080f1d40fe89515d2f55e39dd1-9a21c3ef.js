import{r as i,j as o,D as s}from"./index-9944374f.js";import{P as n,C as a,S as m,d,a as l}from"./docco-d767795b.js";import{B as p}from"./index-df6b3fec.js";import{D as c}from"./dFormModal-d04b30b3.js";import{I as u}from"./inputField-d7a6ced8.js";import{P as f}from"./passwordField-09fc29a2.js";import{F as h}from"./buttonsProps-a911ca67.js";import"./index-1ed5fd40.js";import"./EyeOutlined-4433dc0b.js";import"./SearchOutlined-58270f91.js";const t={},x={formId:"Test form",apiRef:t,confirmChanges:!0,fieldsProps:{field1:{component:u,label:"login",tooltip:"Login input"},field2:{component:f,label:"password",tooltip:"Password input"}},onSubmit:()=>new Promise((r,e)=>{setTimeout(()=>{Math.random()<.5?e({message:"Ошибка сохранения",code:400}):r({data:{login:"new login",password:"new password"}})},3e3)}),buttons:h(t)},F=()=>{const r=i.useCallback(()=>{t.open("create")},[]);return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Пример сохранения данных модальной формы"}),o.jsx("p",{children:"Для обеспечения сохранения необходимо в калбэк onSubmit передать функцию, возвращающую Promise, который при успешном ответе сервера (resolve) возвращает объект вида:"}),o.jsx("code",{children:'data:{имя_поля1: "значение", имя_поля2: "значение 2"...}'}),o.jsx("p",{children:"а при ошибке (reject)"}),o.jsx("code",{children:"error:{message: string, code: number}"}),o.jsx("p",{children:"Для примера, вероятность сбоя при сохранении 50%"}),o.jsx("p",{}),o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(p,{onClick:r,children:"Open form"}),o.jsx(c,{...x})]})]})},D=r=>{const e=`
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
`;return o.jsxs(n,{children:[o.jsx("div",{children:o.jsx(F,{})}),o.jsx(s,{}),o.jsx("div",{children:o.jsx(a,{items:[{key:1,label:"Show source",children:o.jsx(m,{language:"javascript",style:r.darkMode?d:l,showLineNumbers:!0,children:e})}]})})]})};export{D as Page1f30da080f1d40fe89515d2f55e39dd1,D as default};
