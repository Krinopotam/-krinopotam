const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-DY4jbcst.js","assets/default-highlight-Dn6Zkl0a.js","assets/index-CtAjfk3U.js"])))=>i.map(i=>d[i]);
import{r as e,j as o,D as s,_ as i}from"./index-CtAjfk3U.js";import{b as a}from"./buttonsRow-DIWV9y5m.js";import{D as m}from"./dFormModal-DBrO8yV5.js";import{I as n}from"./inputField-i3gDy1o8.js";import{P as l}from"./passwordField-BIusE14l.js";import{F as p}from"./buttonsProps-TJQ2MYKB.js";import{P as d,C as u}from"./pageLayout-BYJr8qhp.js";import{d as c,c as f}from"./darcula-BqMdvqtY.js";import"./isArray-Dq3mFmoY.js";import"./messageBox-BEJz6LZv.js";import"./index-CQ36vsgA.js";import"./modal-CqlI0vXJ.js";import"./baseField-CLOOMrMa.js";import"./index-tEAOawB8.js";import"./SearchOutlined-BPRhDdUX.js";const t={},h={formId:"Test form",apiRef:t,confirmChanges:!0,arrowsButtonsSelection:!0,fieldsProps:{login:{component:n,label:"Login",rules:[{type:"string",rule:"not-empty",message:"Необходимо заполнить поле"}]},password:{component:l,label:"Password",rules:[{type:"string",rule:"not-empty",message:"Необходимо заполнить поле"}]}},buttons:p(t)},F=()=>{const r=e.useCallback(()=>{t.open("create")},[]);return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Example of a simple modal form (vertical layout)"}),o.jsx("p",{children:"By default, a modal form has the ability to drag it by its title and resize it"}),o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(a,{onClick:r,children:"Open form"}),o.jsx(m,{...h})]})]})},P=e.lazy(()=>i(()=>import("./index-DY4jbcst.js").then(r=>r.dw),__vite__mapDeps([0,1,2])).then(r=>({default:r.Prism}))),B=r=>o.jsxs(d,{children:[o.jsx(F,{}),o.jsx(s,{}),o.jsx("div",{children:o.jsx(u,{items:[{key:1,label:"Show source",children:o.jsx(e.Suspense,{fallback:o.jsx("div",{children:"Loading source..."}),children:o.jsx(P,{language:"tsx",style:r.darkMode?c:f,showLineNumbers:!0,children:`
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
`})})}]})})]});export{B as Page244fa962cd7a43bdbeaa1fab5d6a7f0f,B as default};
