const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-aRU0KM20.js","assets/default-highlight-Kf2sMSRd.js","assets/index-BEbJdilr.js"])))=>i.map(i=>d[i]);
import{r as e,j as o,_ as s,D as i}from"./index-BEbJdilr.js";import{B as a}from"./modal-DZ70cJBI.js";import{D as n}from"./dFormModal-DVM0pNWI.js";import{I as l}from"./inputField-CHnFv8h3.js";import{P as m}from"./passwordField-BZL91Zof.js";import{F as d}from"./buttonsProps-DUvqEtm5.js";import{P as p,C as c,d as u,c as f}from"./darcula-DUU8WC9V.js";import"./dForm-BUs8TQbJ.js";import"./index-DJAh43lQ.js";import"./modal-CKnotMHS.js";import"./index-C0ukGqzI.js";import"./SearchOutlined-CqkiXlgD.js";const t={},h={formId:"Test form",apiRef:t,confirmChanges:!0,arrowsButtonsSelection:!0,fieldsProps:{login:{component:l,label:"Login",rules:[{type:"string",rule:"not-empty",message:"Необходимо заполнить поле"}]},password:{component:m,label:"Password",rules:[{type:"string",rule:"not-empty",message:"Необходимо заполнить поле"}]}},buttons:d(t)},F=()=>{const r=e.useCallback(()=>{t.open("create")},[]);return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Example of a simple modal form (vertical layout)"}),o.jsx("p",{children:"By default, a modal form has the ability to drag it by its title and resize it"}),o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(a,{onClick:r,children:"Open form"}),o.jsx(n,{...h})]})]})},P=e.lazy(()=>s(()=>import("./index-aRU0KM20.js").then(r=>r.ds),__vite__mapDeps([0,1,2])).then(r=>({default:r.Prism}))),S=r=>o.jsxs(p,{children:[o.jsx("div",{children:o.jsx(F,{})}),o.jsx(i,{}),o.jsx("div",{children:o.jsx(c,{items:[{key:1,label:"Show source",children:o.jsx(e.Suspense,{fallback:o.jsx("div",{children:"Loading source..."}),children:o.jsx(P,{language:"tsx",style:r.darkMode?u:f,showLineNumbers:!0,children:`
import React, {useCallback} from 'react';
import {Button} from @krinopotam/ui-kit/button';
import {DFormModal, IDFormModalApi, IDFormModalProps} from @krinopotam/ui-kit/dFormModal';
import {IInputFieldProps, InputField} from @krinopotam/ui-kit/dForm/fields/input/inputField';
import {IPasswordFieldProps, PasswordField} from @krinopotam/ui-kit/dForm/fields/password/passwordField';
import {FormLayoutSwitch} from '../../common/buttonsProps';
const formApi = {} as IDFormModalApi;
const formProps: IDFormModalProps = {
    formId: 'Test form',
    apiRef: formApi,
    confirmChanges: true,
    arrowsButtonsSelection: true,
    fieldsProps: {
        login: {component: InputField, label: 'Login', rules: [{type: 'string', rule: 'not-empty', message: 'Необходимо заполнить поле'}]} as IInputFieldProps,
        password: {
            component: PasswordField,
            label: 'Password',
            rules: [{type: 'string', rule: 'not-empty', message: 'Необходимо заполнить поле'}],
        } as IPasswordFieldProps,
    },
    buttons: FormLayoutSwitch(formApi),
};
export const Validation = (): React.JSX.Element => {
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
`})})}]})})]});export{S as Page367166c3e67c416e81eef5cd503a1bda,S as default};
