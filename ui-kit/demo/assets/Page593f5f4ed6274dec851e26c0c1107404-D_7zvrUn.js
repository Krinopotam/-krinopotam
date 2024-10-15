const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-BL7bdWBR.js","assets/default-highlight-Dl6tLCjN.js","assets/index-1vveH9ac.js"])))=>i.map(i=>d[i]);
import{r as s,j as o,_ as e,D as i}from"./index-1vveH9ac.js";import{b as a}from"./mergeButtons-DTGr5PDV.js";import{D as l}from"./dFormModal-0jOrNNg7.js";import{I as m}from"./inputField-BRpnxfXg.js";import{P as n}from"./passwordField-BG5Mrjtz.js";import{F as d}from"./buttonsProps-DSDACY4d.js";import{P as p,C as c,d as u,c as f}from"./darcula-DpQ7T8l_.js";import"./dForm-D5DpcrSR.js";import"./modal-DQmoWYEp.js";import"./index-X3DQSWWD.js";import"./modal-CIPFU5OD.js";import"./index-BcuKpake.js";import"./SearchOutlined-BPQ8xTir.js";const t={},h={formId:"Test form",apiRef:t,confirmChanges:!0,arrowsButtonsSelection:!0,modalProps:{isDraggable:!1},fieldsProps:{login:{component:m,label:"Login"},password:{component:n,label:"Password"}},buttons:d(t)},P=()=>{const r=s.useCallback(()=>{t.open("create")},[]);return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Example of a simple modal form (vertical layout)"}),o.jsx("p",{children:"By default, a modal form has the ability to drag it by its title and resize it"}),o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(a,{onClick:r,children:"Open form"}),o.jsx(l,{...h})]})]})},F=s.lazy(()=>e(()=>import("./index-BL7bdWBR.js").then(r=>r.ds),__vite__mapDeps([0,1,2])).then(r=>({default:r.Prism}))),A=r=>o.jsxs(p,{children:[o.jsx("div",{children:o.jsx(P,{})}),o.jsx(i,{}),o.jsx("div",{children:o.jsx(c,{items:[{key:1,label:"Show source",children:o.jsx(s.Suspense,{fallback:o.jsx("div",{children:"Loading source..."}),children:o.jsx(F,{language:"tsx",style:r.darkMode?u:f,showLineNumbers:!0,children:`
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
    modalProps: {isDraggable: false},
    fieldsProps: {
        login: {component: InputField, label: 'Login'} as IInputFieldProps,
        password: {component: PasswordField, label: 'Password'} as IPasswordFieldProps
    },
    buttons: FormLayoutSwitch(formApi),
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
`})})}]})})]});export{A as Page593f5f4ed6274dec851e26c0c1107404,A as default};
