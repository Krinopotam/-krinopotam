const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-Cz0v0Rp9.js","assets/default-highlight-CrA-MuiQ.js","assets/index-DKsnjJVp.js"])))=>i.map(i=>d[i]);
import{r as s,j as o,_ as e,D as i}from"./index-DKsnjJVp.js";import{B as a}from"./modal-s_O7aRct.js";import{D as l}from"./dFormModal-BxobeehR.js";import{I as n}from"./inputField-E9h4FWeh.js";import{P as m}from"./passwordField-D9paVcUu.js";import{F as d}from"./buttonsProps-CvcbfanL.js";import{P as p,C as c,d as u,c as f}from"./darcula-CbhncTMN.js";import"./dForm-RzxzTjHO.js";import"./index-CSyocx7G.js";import"./modal-sKRn3jmz.js";import"./index-Cr9wBgfG.js";import"./SearchOutlined-K0l7o9jX.js";const t={},h={formId:"Test form",apiRef:t,confirmChanges:!0,arrowsButtonsSelection:!0,fieldsProps:{login:{component:n,label:"Login"},password:{component:m,label:"Password"}},buttons:d(t),onCancel:()=>{console.log("cancel")}},F=()=>{const r=s.useCallback(()=>{t.open("create")},[]);return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Example of a simple modal form (vertical layout)"}),o.jsx("p",{children:"By default, a modal form has the ability to drag it by its title and resize it"}),o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(a,{onClick:r,children:"Open form"}),o.jsx(l,{...h})]})]})},P=s.lazy(()=>e(()=>import("./index-Cz0v0Rp9.js").then(r=>r.ds),__vite__mapDeps([0,1,2])).then(r=>({default:r.Prism}))),M=r=>o.jsxs(p,{children:[o.jsx("div",{children:o.jsx(F,{})}),o.jsx(i,{}),o.jsx("div",{children:o.jsx(c,{items:[{key:1,label:"Show source",children:o.jsx(s.Suspense,{fallback:o.jsx("div",{children:"Loading source..."}),children:o.jsx(P,{language:"tsx",style:r.darkMode?u:f,showLineNumbers:!0,children:`
import React, {useCallback} from 'react';
import {Button} from @krinopotam/ui-kit/button';
import {IDFormModalApi, DFormModal, IDFormModalProps} from @krinopotam/ui-kit/dFormModal';
import {IInputFieldProps, InputField} from @krinopotam/ui-kit/dForm/fields/input/inputField";
import {IPasswordFieldProps, PasswordField} from @krinopotam/ui-kit/dForm/fields/password/passwordField";
import {FormLayoutSwitch} from "../../common/buttonsProps";
const formApi = {} as IDFormModalApi;
const formProps: IDFormModalProps = {
    formId: 'Test form',
    apiRef: formApi,
    confirmChanges: true,
    arrowsButtonsSelection: true,
    fieldsProps: {
        login: {component: InputField, label: 'Login'} as IInputFieldProps,
        password: {component: PasswordField, label: 'Password'} as IPasswordFieldProps
    },
    buttons: FormLayoutSwitch(formApi),
    onCancel: () => {
        console.log('cancel');
    },
}
export const Simple = (): React.JSX.Element => {
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
`})})}]})})]});export{M as Page37a69438292e4161a8a31905e6f19973,M as default};
