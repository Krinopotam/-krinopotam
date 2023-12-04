import{j as e,D as i}from"./index-c797af55.js";import{P as s,C as l,S as a,d as m,a as n}from"./docco-e40295f3.js";import{D as d}from"./index-8c229de7.js";import{I as o}from"./inputField-d14c5b2b.js";import"./index-e62611d6.js";import"./EyeOutlined-8bcb47e2.js";import"./SearchOutlined-f62686db.js";const p={formId:"Test form",confirmChanges:!0,fieldsProps:{field1:{component:o,label:"Поле 1",placeholder:"Я не должно быть пустым"},field2:{component:o,label:"Поле 2",placeholder:"Я должно быть числом"}},validationRules:{field1:[{type:"string",rule:"not-empty",message:"Поле не должно быть пустым"}],field2:[{type:"number",rule:"not-empty",message:"Поле должно быть числом"}]},buttons:{ok:{position:"right"}}},c=()=>e.jsx("div",{style:{maxWidth:500},children:e.jsx(d,{...p})}),b=r=>{const t=`
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
`;return e.jsxs(s,{children:[e.jsx("div",{children:e.jsx(c,{})}),e.jsx(i,{}),e.jsx("div",{children:e.jsx(l,{items:[{key:1,label:"Show source",children:e.jsx(a,{language:"javascript",style:r.darkMode?m:n,showLineNumbers:!0,children:t})}]})})]})};export{b as Pageb7afa28d929e4e4bb410a65dfd857dcc,b as default};
