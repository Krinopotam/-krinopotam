import{j as e,D as t}from"./index-B_ePoftH.js";import{P as i,C as s,h as l,d as m,a}from"./docco-BMPGIKWL.js";import{D as n}from"./dForm-CcoZZ7WD.js";import"./messageBox-BvRGMm6l.js";import{I as o}from"./inputField-Di5-nvCH.js";import"./index-CFabrBDT.js";import"./index-BmPwU4as.js";import"./EyeOutlined-MiG0h1ef.js";import"./SearchOutlined-fNJs2EgW.js";const d={formId:"Test form",confirmChanges:!0,fieldsProps:{field1:{component:o,label:"Поле 1",placeholder:"Я не должно быть пустым"},field2:{component:o,label:"Поле 2",placeholder:"Я должно быть числом"}},validationRules:{field1:[{type:"string",rule:"not-empty",message:"Поле не должно быть пустым"}],field2:[{type:"number",rule:"not-empty",message:"Поле должно быть числом"}]},buttons:{ok:{position:"right"}}},p=()=>e.jsx("div",{style:{maxWidth:500},children:e.jsx(n,{...d})}),P=r=>e.jsxs(i,{children:[e.jsx("div",{children:e.jsx(p,{})}),e.jsx(t,{}),e.jsx("div",{children:e.jsx(s,{items:[{key:1,label:"Show source",children:e.jsx(l,{language:"javascript",style:r.darkMode?m:a,showLineNumbers:!0,children:`
import React from 'react';
import {DForm, IDFormProps} from @krinopotam/ui-kit/dForm';
import {InputField} from @krinopotam/ui-kit/dForm/fields/input/inputField";
const formProps: IDFormProps = {
    formId: 'Test form',
    confirmChanges: true,
    fieldsProps: {
        field1: {component: InputField, label: 'Поле 1', placeholder: 'Я не должно быть пустым'},
        field2: {component: InputField, label: 'Поле 2', placeholder: 'Я должно быть числом'},
    },
    validationRules: {
        field1: [{type: 'string', rule: 'not-empty', message: 'Поле не должно быть пустым'}],
        field2: [{type: 'number', rule: 'not-empty', message: 'Поле должно быть числом'}],
    },
    buttons: {ok: {position: 'right'}},
};
export const FormValidation = (): React.JSX.Element => {
    return (
        <div style={{maxWidth: 500}}>
            <DForm {...formProps} />
        </div>
    );
};
`})}]})})]});export{P as Pagea6c45a3b1b834b9e91091c5afc6b2d2d,P as default};
