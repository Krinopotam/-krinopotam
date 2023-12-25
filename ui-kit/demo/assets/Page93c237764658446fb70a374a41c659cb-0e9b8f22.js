import{r as e,j as o,D as i}from"./index-3024f328.js";import{P as a,C as m,S as n,d as l,a as p}from"./docco-8e796366.js";import{B as d}from"./index-901967cb.js";import{D as c}from"./dFormModal-09fd0649.js";import{I as u}from"./inputField-a558b472.js";import{P as f}from"./passwordField-35ac74e1.js";import{F}from"./buttonsProps-718efc56.js";import"./index-83c0c0ea.js";import"./EyeOutlined-ff2ae648.js";import"./SearchOutlined-8979e289.js";const t={},h={formId:"Test form",apiRef:t,confirmChanges:!0,arrowsButtonsSelection:!0,fieldsProps:{login:{component:u,label:"Login",rules:[{type:"string",rule:"not-empty",message:"Необходимо заполнить поле"}]},password:{component:f,label:"Password",rules:[{type:"string",rule:"not-empty",message:"Необходимо заполнить поле"}]}},buttons:F(t)},P=()=>{const r=e.useCallback(()=>{t.open("create")},[]);return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Example of a simple modal form (vertical layout)"}),o.jsx("p",{children:"By default, a modal form has the ability to drag it by its title and resize it"}),o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(d,{onClick:r,children:"Open form"}),o.jsx(c,{...h})]})]})},M=r=>{const s=`
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
`;return o.jsxs(a,{children:[o.jsx("div",{children:o.jsx(P,{})}),o.jsx(i,{}),o.jsx("div",{children:o.jsx(m,{items:[{key:1,label:"Show source",children:o.jsx(n,{language:"javascript",style:r.darkMode?l:p,showLineNumbers:!0,children:s})}]})})]})};export{M as Page93c237764658446fb70a374a41c659cb,M as default};
