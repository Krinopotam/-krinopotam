import{r as i,j as o,D as e}from"./index-491b5652.js";import{P as a,C as m,S as l,d as n,a as d}from"./docco-2ccfe26d.js";import{B as p}from"./index-bb222d24.js";import{D as c}from"./dFormModal-03c7f003.js";import{I as u}from"./inputField-d0938683.js";import{P as f}from"./passwordField-7e2da4e3.js";import{F}from"./buttonsProps-74f10d61.js";import"./index-92c2cdb7.js";import"./EyeOutlined-ab0d6fcf.js";import"./SearchOutlined-62734d32.js";const t={},h={formId:"Test form",apiRef:t,confirmChanges:!0,arrowsButtonsSelection:!0,fieldsProps:{login:{component:u,label:"Login"},password:{component:f,label:"Password"}},buttons:F(t)},P=()=>{const r=i.useCallback(()=>{t.open("create")},[]);return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Example of a simple modal form (vertical layout)"}),o.jsx("p",{children:"By default, a modal form has the ability to drag it by its title and resize it"}),o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(p,{onClick:r,children:"Open form"}),o.jsx(c,{...h})]})]})},D=r=>{const s=`
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
`;return o.jsxs(a,{children:[o.jsx("div",{children:o.jsx(P,{})}),o.jsx(e,{}),o.jsx("div",{children:o.jsx(m,{items:[{key:1,label:"Show source",children:o.jsx(l,{language:"javascript",style:r.darkMode?n:d,showLineNumbers:!0,children:s})}]})})]})};export{D as Pagedce5627d5fbe48a09387c0a235f31c09,D as default};
