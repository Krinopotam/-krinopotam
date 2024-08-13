import{r as t,j as o,D as e}from"./index-zp8t8nBI.js";import{P as i,C as a,h as l,d as m,a as n}from"./docco-qM7CaTt5.js";import{B as p}from"./dForm-CtyM7E66.js";import{D as d}from"./dFormModal-DQXWVkWJ.js";import{I as c}from"./inputField-OIQHvMdf.js";import{P as f}from"./passwordField-oVt2twgH.js";import{F as u}from"./buttonsProps-B8gkb09z.js";import"./index-ClIb7A4b.js";import"./EyeOutlined-B9jVFvSG.js";import"./SearchOutlined-D8OXrZa4.js";const s={},F={formId:"Test form",apiRef:s,confirmChanges:!0,arrowsButtonsSelection:!0,isDraggable:!1,fieldsProps:{login:{component:c,label:"Login"},password:{component:f,label:"Password"}},buttons:u(s)},h=()=>{const r=t.useCallback(()=>{s.open("create")},[]);return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Example of a simple modal form (vertical layout)"}),o.jsx("p",{children:"By default, a modal form has the ability to drag it by its title and resize it"}),o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(p,{onClick:r,children:"Open form"}),o.jsx(d,{...F})]})]})},M=r=>o.jsxs(i,{children:[o.jsx("div",{children:o.jsx(h,{})}),o.jsx(e,{}),o.jsx("div",{children:o.jsx(a,{items:[{key:1,label:"Show source",children:o.jsx(l,{language:"javascript",style:r.darkMode?m:n,showLineNumbers:!0,children:`
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
`})}]})})]});export{M as Page7660dc61af0e47a88fcfbe7eba3f0b90,M as default};
