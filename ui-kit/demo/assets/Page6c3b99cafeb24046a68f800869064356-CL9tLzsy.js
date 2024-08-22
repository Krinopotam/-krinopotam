import{r as s,j as o,D as e}from"./index-C6ePYZvf.js";import{P as i,C as a,h as l,d as m,a as n}from"./docco-YXdAdB7y.js";import{B as p}from"./messageBox-BC7Lwadz.js";import{D as d}from"./dFormModal-uxLmPJzu.js";import{I as c}from"./inputField-D7lwRZEw.js";import{P as u}from"./passwordField-DhpwdOqy.js";import{F as f}from"./buttonsProps-wJeNiPdK.js";import"./dForm-8-NeoUsj.js";import"./index-C3U__1M9.js";import"./modal-tvTnxo6z.js";import"./index-4lm0W_ik.js";import"./EyeOutlined-Dqyyi7nw.js";import"./SearchOutlined-BdqO_rWP.js";const t={},F={formId:"Test form",apiRef:t,confirmChanges:!0,arrowsButtonsSelection:!0,fieldsProps:{login:{component:c,label:"Login"},password:{component:u,label:"Password"}},buttons:f(t),onCancel:()=>{console.log("cancel")}},h=()=>{const r=s.useCallback(()=>{t.open("create")},[]);return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Example of a simple modal form (vertical layout)"}),o.jsx("p",{children:"By default, a modal form has the ability to drag it by its title and resize it"}),o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(p,{onClick:r,children:"Open form"}),o.jsx(d,{...F})]})]})},B=r=>o.jsxs(i,{children:[o.jsx("div",{children:o.jsx(h,{})}),o.jsx(e,{}),o.jsx("div",{children:o.jsx(a,{items:[{key:1,label:"Show source",children:o.jsx(l,{language:"javascript",style:r.darkMode?m:n,showLineNumbers:!0,children:`
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
    onCancel: () => {
        console.log('cancel');
    },
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
`})}]})})]});export{B as Page6c3b99cafeb24046a68f800869064356,B as default};
