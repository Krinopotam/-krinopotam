const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-BCkY1BI4.js","assets/default-highlight-BkRzspxv.js","assets/index-D4bHa_3o.js"])))=>i.map(i=>d[i]);
import{r as t,j as o,_ as e,D as i}from"./index-D4bHa_3o.js";import{B as a}from"./modal-Cje67qL2.js";import{D as l}from"./dFormModal-BCjjhs8Y.js";import{I as m}from"./inputField-DGR4oCWc.js";import{P as n}from"./passwordField-BwrDeCTC.js";import{F as d}from"./buttonsProps-DqS9-gaB.js";import{P as p,C as c,d as u,c as f}from"./darcula-DdlBXz-Q.js";import"./dForm-3m-O6pho.js";import"./index-BrKQ3NvS.js";import"./modal-B1kKEzi9.js";import"./index-D0MhsY60.js";import"./SearchOutlined-C-5aAKd9.js";const s={},h={formId:"Test form",apiRef:s,confirmChanges:!0,arrowsButtonsSelection:!0,modalProps:{isDraggable:!1},fieldsProps:{login:{component:m,label:"Login"},password:{component:n,label:"Password"}},buttons:d(s)},P=()=>{const r=t.useCallback(()=>{s.open("create")},[]);return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Example of a simple modal form (vertical layout)"}),o.jsx("p",{children:"By default, a modal form has the ability to drag it by its title and resize it"}),o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(a,{onClick:r,children:"Open form"}),o.jsx(l,{...h})]})]})},F=t.lazy(()=>e(()=>import("./index-BCkY1BI4.js").then(r=>r.ds),__vite__mapDeps([0,1,2])).then(r=>({default:r.Prism}))),M=r=>o.jsxs(p,{children:[o.jsx("div",{children:o.jsx(P,{})}),o.jsx(i,{}),o.jsx("div",{children:o.jsx(c,{items:[{key:1,label:"Show source",children:o.jsx(t.Suspense,{fallback:o.jsx("div",{children:"Loading source..."}),children:o.jsx(F,{language:"tsx",style:r.darkMode?u:f,showLineNumbers:!0,children:`
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
`})})}]})})]});export{M as Page2fe769ec049b4323b2ecc5ecbcab71f0,M as default};
