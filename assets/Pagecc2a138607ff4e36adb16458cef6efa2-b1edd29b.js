import{r as i,j as o,D as e}from"./index-c797af55.js";import{P as a,C as m,S as l,d as n,a as p}from"./docco-e40295f3.js";import{B as d}from"./index-8c229de7.js";import{D as c}from"./dFormModal-cedb0440.js";import{I as u}from"./inputField-d14c5b2b.js";import{P as f}from"./passwordField-6ada3416.js";import{F}from"./buttonsProps-f5de3b41.js";import"./index-e62611d6.js";import"./EyeOutlined-8bcb47e2.js";import"./SearchOutlined-f62686db.js";const t={},h={formId:"Test form",apiRef:t,confirmChanges:!0,arrowsButtonsSelection:!0,fieldsProps:{login:{component:u,label:"Login"},password:{component:f,label:"Password"}},buttons:F(t)},P=()=>{const r=i.useCallback(()=>{t.open("create")},[]);return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Example of a simple modal form (vertical layout)"}),o.jsx("p",{children:"By default, a modal form has the ability to drag it by its title and resize it"}),o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(d,{onClick:r,children:"Open form"}),o.jsx(c,{...h})]})]})},D=r=>{const s=`
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
`;return o.jsxs(a,{children:[o.jsx("div",{children:o.jsx(P,{})}),o.jsx(e,{}),o.jsx("div",{children:o.jsx(m,{items:[{key:1,label:"Show source",children:o.jsx(l,{language:"javascript",style:r.darkMode?n:p,showLineNumbers:!0,children:s})}]})})]})};export{D as Pagecc2a138607ff4e36adb16458cef6efa2,D as default};
