const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-Cz0v0Rp9.js","assets/default-highlight-CrA-MuiQ.js","assets/index-DKsnjJVp.js"])))=>i.map(i=>d[i]);
import{r as t,j as o,_ as s,D as n}from"./index-DKsnjJVp.js";import{B as a}from"./modal-s_O7aRct.js";import{D as m}from"./dFormModal-BxobeehR.js";import{I as l}from"./inputField-E9h4FWeh.js";import{P as d}from"./passwordField-D9paVcUu.js";import{F as p}from"./buttonsProps-CvcbfanL.js";import{P as c,C as u,d as f,c as h}from"./darcula-CbhncTMN.js";import"./dForm-RzxzTjHO.js";import"./index-CSyocx7G.js";import"./modal-sKRn3jmz.js";import"./index-Cr9wBgfG.js";import"./SearchOutlined-K0l7o9jX.js";const e={},x={formId:"Test form",apiRef:e,confirmChanges:!0,fieldsProps:{field1:{component:l,label:"login",tooltip:"Login input"},field2:{component:d,label:"password",tooltip:"Password input"}},onSubmit:()=>new Promise((r,i)=>{setTimeout(()=>{Math.random()<.5?i({message:"Ошибка сохранения",code:400}):r({data:{login:"new login",password:"new password"}})},3e3)}),buttons:p(e)},j=()=>{const r=t.useCallback(()=>{e.open("create")},[]);return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Пример сохранения данных модальной формы"}),o.jsx("p",{children:"Для обеспечения сохранения необходимо в калбэк onSubmit передать функцию, возвращающую Promise, который при успешном ответе сервера (resolve) возвращает объект вида:"}),o.jsx("code",{children:'data:{имя_поля1: "значение", имя_поля2: "значение 2"...}'}),o.jsx("p",{children:"а при ошибке (reject)"}),o.jsx("code",{children:"error:{message: string, code: number}"}),o.jsx("p",{children:"Для примера, вероятность сбоя при сохранении 50%"}),o.jsx("p",{}),o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(a,{onClick:r,children:"Open form"}),o.jsx(m,{...x})]})]})},F=t.lazy(()=>s(()=>import("./index-Cz0v0Rp9.js").then(r=>r.ds),__vite__mapDeps([0,1,2])).then(r=>({default:r.Prism}))),_=r=>o.jsxs(c,{children:[o.jsx("div",{children:o.jsx(j,{})}),o.jsx(n,{}),o.jsx("div",{children:o.jsx(u,{items:[{key:1,label:"Show source",children:o.jsx(t.Suspense,{fallback:o.jsx("div",{children:"Loading source..."}),children:o.jsx(F,{language:"tsx",style:r.darkMode?f:h,showLineNumbers:!0,children:`
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
`})})}]})})]});export{_ as Page038a3b632cc147828e3c76823cb8d12a,_ as default};
