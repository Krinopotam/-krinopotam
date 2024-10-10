const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-l9Wg9Pc0.js","assets/default-highlight-B7lEcFzY.js","assets/index-DM4KduW8.js"])))=>i.map(i=>d[i]);
import{r as t,j as o,_ as e,D as i}from"./index-DM4KduW8.js";import{B as a}from"./modal-CrAyaDCA.js";import{D as l}from"./dFormModal-mDojMLr5.js";import{I as m}from"./inputField-CNhjASo3.js";import{P as n}from"./passwordField-CTT9QKgY.js";import{F as d}from"./buttonsProps-ChSvUGWm.js";import{P as p,C as c,d as u,c as f}from"./darcula-B-kkYBo3.js";import"./dForm-DnIX3jkH.js";import"./index-B_-TuVyw.js";import"./modal-DPQg-moX.js";import"./index-7b3wGf9w.js";import"./SearchOutlined-CrE_nQO8.js";const s={},h={formId:"Test form",apiRef:s,confirmChanges:!0,arrowsButtonsSelection:!0,modalProps:{isDraggable:!1},fieldsProps:{login:{component:m,label:"Login"},password:{component:n,label:"Password"}},buttons:d(s)},P=()=>{const r=t.useCallback(()=>{s.open("create")},[]);return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Example of a simple modal form (vertical layout)"}),o.jsx("p",{children:"By default, a modal form has the ability to drag it by its title and resize it"}),o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(a,{onClick:r,children:"Open form"}),o.jsx(l,{...h})]})]})},F=t.lazy(()=>e(()=>import("./index-l9Wg9Pc0.js").then(r=>r.ds),__vite__mapDeps([0,1,2])).then(r=>({default:r.Prism}))),M=r=>o.jsxs(p,{children:[o.jsx("div",{children:o.jsx(P,{})}),o.jsx(i,{}),o.jsx("div",{children:o.jsx(c,{items:[{key:1,label:"Show source",children:o.jsx(t.Suspense,{fallback:o.jsx("div",{children:"Loading source..."}),children:o.jsx(F,{language:"tsx",style:r.darkMode?u:f,showLineNumbers:!0,children:`
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
`})})}]})})]});export{M as Pagef8dcee91b00a4a349a3674f7a98b32e6,M as default};
