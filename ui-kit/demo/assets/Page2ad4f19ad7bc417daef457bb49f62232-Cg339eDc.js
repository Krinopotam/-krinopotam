import{r as s,j as o,D as e}from"./index-B_ePoftH.js";import{P as i,C as a,h as m,d as l,a as n}from"./docco-BMPGIKWL.js";import{B as p}from"./messageBox-BvRGMm6l.js";import{D as d}from"./dFormModal-M3vltEal.js";import{I as c}from"./inputField-Di5-nvCH.js";import{P as u}from"./passwordField-DH3JxGna.js";import{F as f}from"./buttonsProps-Dc0_DHT9.js";import"./dForm-CcoZZ7WD.js";import"./index-CFabrBDT.js";import"./modal-CKEVbAO9.js";import"./index-BmPwU4as.js";import"./EyeOutlined-MiG0h1ef.js";import"./SearchOutlined-fNJs2EgW.js";const t={},F={formId:"Test form",apiRef:t,confirmChanges:!0,arrowsButtonsSelection:!0,fieldsProps:{login:{component:c,label:"Login",rules:[{type:"string",rule:"not-empty",message:"Необходимо заполнить поле"}]},password:{component:u,label:"Password",rules:[{type:"string",rule:"not-empty",message:"Необходимо заполнить поле"}]}},buttons:f(t)},h=()=>{const r=s.useCallback(()=>{t.open("create")},[]);return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Example of a simple modal form (vertical layout)"}),o.jsx("p",{children:"By default, a modal form has the ability to drag it by its title and resize it"}),o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(p,{onClick:r,children:"Open form"}),o.jsx(d,{...F})]})]})},A=r=>o.jsxs(i,{children:[o.jsx("div",{children:o.jsx(h,{})}),o.jsx(e,{}),o.jsx("div",{children:o.jsx(a,{items:[{key:1,label:"Show source",children:o.jsx(m,{language:"javascript",style:r.darkMode?l:n,showLineNumbers:!0,children:`
import React, {useCallback} from 'react';
import {Button} from @krinopotam/ui-kit/button';
import {DFormModal, IDFormModalApi, IDFormModalProps} from @krinopotam/ui-kit/dFormModal';
import {IInputFieldProps, InputField} from @krinopotam/ui-kit/dForm/fields/input/inputField';
import {IPasswordFieldProps, PasswordField} from @krinopotam/ui-kit/dForm/fields/password/passwordField';
import {FormLayoutSwitch} from '../../common/buttonsProps';
const formApi = {} as IDFormModalApi;
const formProps: IDFormModalProps = {
    formId: 'Test form',
    apiRef: formApi,
    confirmChanges: true,
    arrowsButtonsSelection: true,
    fieldsProps: {
        login: {component: InputField, label: 'Login', rules: [{type: 'string', rule: 'not-empty', message: 'Необходимо заполнить поле'}]} as IInputFieldProps,
        password: {
            component: PasswordField,
            label: 'Password',
            rules: [{type: 'string', rule: 'not-empty', message: 'Необходимо заполнить поле'}],
        } as IPasswordFieldProps,
    },
    buttons: FormLayoutSwitch(formApi),
};
export const Validation = (): React.JSX.Element => {
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
`})}]})})]});export{A as Page2ad4f19ad7bc417daef457bb49f62232,A as default};
