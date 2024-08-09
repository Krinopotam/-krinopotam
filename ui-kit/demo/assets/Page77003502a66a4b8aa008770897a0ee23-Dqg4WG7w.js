import{r as t,j as o,D as e}from"./index-DpZR-xIT.js";import{P as i,C as a,h as l,d as m,a as n}from"./docco-D-QQhIhf.js";import{B as p}from"./dForm-BuCntjeb.js";import{D as d}from"./dFormModal-CQWCZgYu.js";import{I as c}from"./inputField-Cj-r1-uW.js";import{P as u}from"./passwordField-9PeTD59l.js";import{F as f}from"./buttonsProps-B8QWfBE3.js";import"./index-Cb1flwDV.js";import"./EyeOutlined-B5uh8JXW.js";import"./SearchOutlined-C5XLlk3g.js";const s={},F={formId:"Test form",apiRef:s,confirmChanges:!0,arrowsButtonsSelection:!0,isDraggable:!1,fieldsProps:{login:{component:c,label:"Login"},password:{component:u,label:"Password"}},buttons:f(s)},h=()=>{const r=t.useCallback(()=>{s.open("create")},[]);return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Example of a simple modal form (vertical layout)"}),o.jsx("p",{children:"By default, a modal form has the ability to drag it by its title and resize it"}),o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(p,{onClick:r,children:"Open form"}),o.jsx(d,{...F})]})]})},M=r=>o.jsxs(i,{children:[o.jsx("div",{children:o.jsx(h,{})}),o.jsx(e,{}),o.jsx("div",{children:o.jsx(a,{items:[{key:1,label:"Show source",children:o.jsx(l,{language:"javascript",style:r.darkMode?m:n,showLineNumbers:!0,children:`
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
`})}]})})]});export{M as Page77003502a66a4b8aa008770897a0ee23,M as default};
