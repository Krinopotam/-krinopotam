import{j as e,D as t}from"./index-DhMwsQtd.js";import{P as i,C as s,h as l,d as m,a}from"./docco-BR1GjPZn.js";import{D as n}from"./dForm-BvND7aMS.js";import"./messageBox-CQECnf8I.js";import{I as o}from"./inputField-C-ak15WA.js";import"./index-DNVFzPvX.js";import"./index-CYDA0FvV.js";import"./EyeOutlined-D8voB2bB.js";import"./SearchOutlined-klO5lwg7.js";const p={formId:"Test form",confirmChanges:!0,fieldsProps:{field1:{component:o,label:"Поле 1",placeholder:"Я не должно быть пустым"},field2:{component:o,label:"Поле 2",placeholder:"Я должно быть числом"}},validationRules:{field1:[{type:"string",rule:"not-empty",message:"Поле не должно быть пустым"}],field2:[{type:"number",rule:"not-empty",message:"Поле должно быть числом"}]},buttons:{ok:{position:"right"}}},d=()=>e.jsx("div",{style:{maxWidth:500},children:e.jsx(n,{...p})}),P=r=>e.jsxs(i,{children:[e.jsx("div",{children:e.jsx(d,{})}),e.jsx(t,{}),e.jsx("div",{children:e.jsx(s,{items:[{key:1,label:"Show source",children:e.jsx(l,{language:"javascript",style:r.darkMode?m:a,showLineNumbers:!0,children:`
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
`})}]})})]});export{P as Page42951a5e937c40c799a51c82cb701065,P as default};