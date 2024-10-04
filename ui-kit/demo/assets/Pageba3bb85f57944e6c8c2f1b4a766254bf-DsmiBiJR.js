const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-HHVvrn9L.js","assets/default-highlight-Bg-yw1Xy.js","assets/index-C4KfxKt0.js"])))=>i.map(i=>d[i]);
import{r as s,j as o,_ as e,D as i}from"./index-C4KfxKt0.js";import{B as a}from"./modal-B9kdAnYE.js";import{D as n}from"./dFormModal-NILuEzR7.js";import{I as l}from"./inputField-DP4apb2P.js";import{P as m}from"./passwordField-NHDAhQx4.js";import{F as p}from"./buttonsProps-DJ62UfWI.js";import{P as d,C as c,d as u,c as f}from"./darcula-Dn2EXRAk.js";import"./dForm-DkkmO2de.js";import"./index-kYmYzKiJ.js";import"./modal-DhSU9O67.js";import"./index-DguPym-O.js";import"./SearchOutlined-1XjRaxWd.js";const t={},h={formId:"Test form",apiRef:t,confirmChanges:!0,arrowsButtonsSelection:!0,fieldsProps:{login:{component:l,label:"Login",rules:[{type:"string",rule:"not-empty",message:"Необходимо заполнить поле"}]},password:{component:m,label:"Password",rules:[{type:"string",rule:"not-empty",message:"Необходимо заполнить поле"}]}},buttons:p(t)},F=()=>{const r=s.useCallback(()=>{t.open("create")},[]);return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Example of a simple modal form (vertical layout)"}),o.jsx("p",{children:"By default, a modal form has the ability to drag it by its title and resize it"}),o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(a,{onClick:r,children:"Open form"}),o.jsx(n,{...h})]})]})},P=s.lazy(()=>e(()=>import("./index-HHVvrn9L.js").then(r=>r.ds),__vite__mapDeps([0,1,2])).then(r=>({default:r.Prism}))),S=r=>o.jsxs(d,{children:[o.jsx("div",{children:o.jsx(F,{})}),o.jsx(i,{}),o.jsx("div",{children:o.jsx(c,{items:[{key:1,label:"Show source",children:o.jsx(s.Suspense,{fallback:o.jsx("div",{children:"Loading source..."}),children:o.jsx(P,{language:"tsx",style:r.darkMode?u:f,showLineNumbers:!0,children:`
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
`})})}]})})]});export{S as Pageba3bb85f57944e6c8c2f1b4a766254bf,S as default};
