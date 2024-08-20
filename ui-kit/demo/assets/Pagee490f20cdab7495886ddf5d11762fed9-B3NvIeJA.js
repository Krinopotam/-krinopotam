import{r as s,j as o,D as i}from"./index-DhMwsQtd.js";import{P as e,C as a,h as m,d as l,a as n}from"./docco-BR1GjPZn.js";import{B as d}from"./messageBox-CQECnf8I.js";import{D as p}from"./dFormModal-B9s_VGMc.js";import{I as c}from"./inputField-C-ak15WA.js";import{P as u}from"./passwordField-GSFpkRgN.js";import{F as f}from"./buttonsProps-BdlAnOxn.js";import"./dForm-BvND7aMS.js";import"./index-DNVFzPvX.js";import"./modal-eXRNn5Q9.js";import"./index-CYDA0FvV.js";import"./EyeOutlined-D8voB2bB.js";import"./SearchOutlined-klO5lwg7.js";const t={},F={formId:"Test form",apiRef:t,confirmChanges:!0,arrowsButtonsSelection:!0,isDraggable:!1,fieldsProps:{login:{component:c,label:"Login"},password:{component:u,label:"Password"}},buttons:f(t)},h=()=>{const r=s.useCallback(()=>{t.open("create")},[]);return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Example of a simple modal form (vertical layout)"}),o.jsx("p",{children:"By default, a modal form has the ability to drag it by its title and resize it"}),o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(d,{onClick:r,children:"Open form"}),o.jsx(p,{...F})]})]})},B=r=>o.jsxs(e,{children:[o.jsx("div",{children:o.jsx(h,{})}),o.jsx(i,{}),o.jsx("div",{children:o.jsx(a,{items:[{key:1,label:"Show source",children:o.jsx(m,{language:"javascript",style:r.darkMode?l:n,showLineNumbers:!0,children:`
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
    isDraggable: false,
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
`})}]})})]});export{B as Pagee490f20cdab7495886ddf5d11762fed9,B as default};
