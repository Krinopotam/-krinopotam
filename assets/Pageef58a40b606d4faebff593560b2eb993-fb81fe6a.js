import{j as e,D as i}from"./index-23555c5c.js";import{P as s,C as l,S as m,d as a,a as n}from"./docco-c24c9fde.js";import{D as d}from"./index-e5590f2c.js";import{I as o}from"./inputField-52d55a73.js";import"./index-c1cedb01.js";import"./EyeOutlined-cf850273.js";import"./SearchOutlined-d23aaaab.js";const p={formId:"Test form",confirmChanges:!0,fieldsProps:{field1:{component:o,label:"Поле 1",placeholder:"Я не должно быть пустым"},field2:{component:o,label:"Поле 2",placeholder:"Я должно быть числом"}},validationRules:{field1:[{type:"string",rule:"not-empty",message:"Поле не должно быть пустым"}],field2:[{type:"number",rule:"not-empty",message:"Поле должно быть числом"}]},buttons:{ok:{position:"right"}}},f=()=>e.jsx("div",{style:{maxWidth:500},children:e.jsx(d,{...p})}),F=r=>{const t=`
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
`;return e.jsxs(s,{children:[e.jsx("div",{children:e.jsx(f,{})}),e.jsx(i,{}),e.jsx("div",{children:e.jsx(l,{items:[{key:1,label:"Show source",children:e.jsx(m,{language:"javascript",style:r.darkMode?a:n,showLineNumbers:!0,children:t})}]})})]})};export{F as Pageef58a40b606d4faebff593560b2eb993,F as default};
