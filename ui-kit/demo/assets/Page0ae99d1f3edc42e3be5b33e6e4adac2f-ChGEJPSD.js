import{r as e,j as o,D as s}from"./index-zp8t8nBI.js";import{P as i,C as a,h as m,d as l,a as n}from"./docco-qM7CaTt5.js";import{B as p}from"./dForm-CtyM7E66.js";import{D as d}from"./dFormModal-DQXWVkWJ.js";import{I as c}from"./inputField-OIQHvMdf.js";import{P as u}from"./passwordField-oVt2twgH.js";import{F as f}from"./buttonsProps-B8gkb09z.js";import"./index-ClIb7A4b.js";import"./EyeOutlined-B9jVFvSG.js";import"./SearchOutlined-D8OXrZa4.js";const t={},F={formId:"Test form",apiRef:t,confirmChanges:!0,arrowsButtonsSelection:!0,fieldsProps:{login:{component:c,label:"Login",rules:[{type:"string",rule:"not-empty",message:"Необходимо заполнить поле"}]},password:{component:u,label:"Password",rules:[{type:"string",rule:"not-empty",message:"Необходимо заполнить поле"}]}},buttons:f(t)},h=()=>{const r=e.useCallback(()=>{t.open("create")},[]);return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Example of a simple modal form (vertical layout)"}),o.jsx("p",{children:"By default, a modal form has the ability to drag it by its title and resize it"}),o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(p,{onClick:r,children:"Open form"}),o.jsx(d,{...F})]})]})},M=r=>o.jsxs(i,{children:[o.jsx("div",{children:o.jsx(h,{})}),o.jsx(s,{}),o.jsx("div",{children:o.jsx(a,{items:[{key:1,label:"Show source",children:o.jsx(m,{language:"javascript",style:r.darkMode?l:n,showLineNumbers:!0,children:`
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
`})}]})})]});export{M as Page0ae99d1f3edc42e3be5b33e6e4adac2f,M as default};
