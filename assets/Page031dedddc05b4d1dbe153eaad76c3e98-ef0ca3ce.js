import{r as i,j as o,D as e}from"./index-7abbb94e.js";import{P as a,C as m,S as l,d as n,a as d}from"./docco-6bf51e55.js";import{B as p}from"./index-22f8d441.js";import{D as c}from"./dFormModal-d77fb2bf.js";import{I as u}from"./inputField-0673e106.js";import{P as f}from"./passwordField-e3d2d2b1.js";import{F}from"./buttonsProps-48e806a3.js";import"./index-2daee1bb.js";import"./EyeOutlined-4b705a51.js";import"./SearchOutlined-7a7e5389.js";const t={},h={formId:"Test form",apiRef:t,confirmChanges:!0,arrowsButtonsSelection:!0,fieldsProps:{login:{component:u,label:"Login"},password:{component:f,label:"Password"}},buttons:F(t)},P=()=>{const r=i.useCallback(()=>{t.open("create")},[]);return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Example of a simple modal form (vertical layout)"}),o.jsx("p",{children:"By default, a modal form has the ability to drag it by its title and resize it"}),o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(p,{onClick:r,children:"Open form"}),o.jsx(c,{...h})]})]})},D=r=>{const s=`
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
`;return o.jsxs(a,{children:[o.jsx("div",{children:o.jsx(P,{})}),o.jsx(e,{}),o.jsx("div",{children:o.jsx(m,{items:[{key:1,label:"Show source",children:o.jsx(l,{language:"javascript",style:r.darkMode?n:d,showLineNumbers:!0,children:s})}]})})]})};export{D as Page031dedddc05b4d1dbe153eaad76c3e98,D as default};
