import{r as s,j as o,D as i}from"./index-zp8t8nBI.js";import{P as e,C as a,h as m,d as l,a as n}from"./docco-qM7CaTt5.js";import{B as d}from"./dForm-CtyM7E66.js";import{D as p}from"./dFormModal-DQXWVkWJ.js";import{I as c}from"./inputField-OIQHvMdf.js";import{P as u}from"./passwordField-oVt2twgH.js";import{F as f}from"./buttonsProps-B8gkb09z.js";import"./index-ClIb7A4b.js";import"./EyeOutlined-B9jVFvSG.js";import"./SearchOutlined-D8OXrZa4.js";const t={},F={formId:"Test form",apiRef:t,confirmChanges:!0,arrowsButtonsSelection:!0,fieldsProps:{login:{component:c,label:"Login"},password:{component:u,label:"Password"}},buttons:f(t)},h=()=>{const r=s.useCallback(()=>{t.open("create")},[]);return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Example of a simple modal form (vertical layout)"}),o.jsx("p",{children:"By default, a modal form has the ability to drag it by its title and resize it"}),o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(d,{onClick:r,children:"Open form"}),o.jsx(p,{...F})]})]})},M=r=>o.jsxs(e,{children:[o.jsx("div",{children:o.jsx(h,{})}),o.jsx(i,{}),o.jsx("div",{children:o.jsx(a,{items:[{key:1,label:"Show source",children:o.jsx(m,{language:"javascript",style:r.darkMode?l:n,showLineNumbers:!0,children:`
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
`})}]})})]});export{M as Page636e8ae9e01c4a22a2c1ada5d91f7b3f,M as default};
