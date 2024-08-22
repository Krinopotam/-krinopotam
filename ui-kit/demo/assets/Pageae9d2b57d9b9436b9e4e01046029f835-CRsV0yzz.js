import{j as e,D as t}from"./index-BRcPwwbH.js";import{P as i,C as s,h as l,d as m,a as n}from"./docco-8ZfxCt3s.js";import{D as a}from"./dForm-CIlSW0lt.js";import"./messageBox-Dgk4xpFW.js";import{I as o}from"./inputField-CVlfFeBg.js";import"./index-Bcoz37Cc.js";import"./index-Bcnila5k.js";import"./EyeOutlined-CTsTM-Dg.js";import"./SearchOutlined-DcT_nl9L.js";const d={formId:"Test form",confirmChanges:!0,fieldsProps:{field1:{component:o,label:"Поле 1",placeholder:"Я не должно быть пустым"},field2:{component:o,label:"Поле 2",placeholder:"Я должно быть числом"}},validationRules:{field1:[{type:"string",rule:"not-empty",message:"Поле не должно быть пустым"}],field2:[{type:"number",rule:"not-empty",message:"Поле должно быть числом"}]},buttons:{ok:{position:"right"}}},p=()=>e.jsx("div",{style:{maxWidth:500},children:e.jsx(a,{...d})}),P=r=>e.jsxs(i,{children:[e.jsx("div",{children:e.jsx(p,{})}),e.jsx(t,{}),e.jsx("div",{children:e.jsx(s,{items:[{key:1,label:"Show source",children:e.jsx(l,{language:"javascript",style:r.darkMode?m:n,showLineNumbers:!0,children:`
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
`})}]})})]});export{P as Pageae9d2b57d9b9436b9e4e01046029f835,P as default};
