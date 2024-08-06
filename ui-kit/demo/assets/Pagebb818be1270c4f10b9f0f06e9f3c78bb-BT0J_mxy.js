import{j as e,D as t}from"./index-Bl-1kopd.js";import{P as i,C as s,h as l,d as m,a as n}from"./docco-DI1KRtYq.js";import{D as a}from"./index-Cz3A2iSd.js";import{I as o}from"./inputField-BJn_KJf5.js";import"./index-dliuYOsp.js";import"./EyeOutlined-VtVLuKtp.js";import"./SearchOutlined-Drmuc8b0.js";const d={formId:"Test form",confirmChanges:!0,fieldsProps:{field1:{component:o,label:"Поле 1",placeholder:"Я не должно быть пустым"},field2:{component:o,label:"Поле 2",placeholder:"Я должно быть числом"}},validationRules:{field1:[{type:"string",rule:"not-empty",message:"Поле не должно быть пустым"}],field2:[{type:"number",rule:"not-empty",message:"Поле должно быть числом"}]},buttons:{ok:{position:"right"}}},p=()=>e.jsx("div",{style:{maxWidth:500},children:e.jsx(a,{...d})}),y=r=>e.jsxs(i,{children:[e.jsx("div",{children:e.jsx(p,{})}),e.jsx(t,{}),e.jsx("div",{children:e.jsx(s,{items:[{key:1,label:"Show source",children:e.jsx(l,{language:"javascript",style:r.darkMode?m:n,showLineNumbers:!0,children:`
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
`})}]})})]});export{y as Pagebb818be1270c4f10b9f0f06e9f3c78bb,y as default};
