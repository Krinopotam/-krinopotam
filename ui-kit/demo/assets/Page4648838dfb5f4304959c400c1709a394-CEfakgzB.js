import{r as s,j as o,D as i}from"./index-OT-fUFlw.js";import{P as e,C as a,h as m,d as l,a as n}from"./docco-Dp5WB1My.js";import{B as p}from"./messageBox-deXCqDea.js";import{D as d}from"./dFormModal-Brw-56ya.js";import{I as c}from"./inputField-Coz0I3xz.js";import{P as u}from"./passwordField-BVx3qSuP.js";import{F as f}from"./buttonsProps-BMlR5a_A.js";import"./dForm-CXdkNth1.js";import"./index-BzsQSyIK.js";import"./modal-Cu7Nzp09.js";import"./index-BXyp7rr8.js";import"./EyeOutlined-BLUlGsNj.js";import"./SearchOutlined-q14VqUwO.js";const t={},F={formId:"Test form",apiRef:t,confirmChanges:!0,arrowsButtonsSelection:!0,isDraggable:!1,fieldsProps:{login:{component:c,label:"Login"},password:{component:u,label:"Password"}},buttons:f(t)},h=()=>{const r=s.useCallback(()=>{t.open("create")},[]);return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Example of a simple modal form (vertical layout)"}),o.jsx("p",{children:"By default, a modal form has the ability to drag it by its title and resize it"}),o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(p,{onClick:r,children:"Open form"}),o.jsx(d,{...F})]})]})},B=r=>o.jsxs(e,{children:[o.jsx("div",{children:o.jsx(h,{})}),o.jsx(i,{}),o.jsx("div",{children:o.jsx(a,{items:[{key:1,label:"Show source",children:o.jsx(m,{language:"javascript",style:r.darkMode?l:n,showLineNumbers:!0,children:`
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
`})}]})})]});export{B as Page4648838dfb5f4304959c400c1709a394,B as default};
