import{j as e,D as i}from"./index-C88KkuCB.js";import{P as d,C as t,h as l,d as s,a as n}from"./docco-ByJX3Scg.js";import{D as p}from"./dForm-Dv7JeuEm.js";import"./messageBox-DwID5iMj.js";import{I as o}from"./inputField-lf7PiFAE.js";import"./index-BuXson94.js";import"./index-CCZkxA_l.js";import"./EyeOutlined-RPGYlChj.js";import"./SearchOutlined-B0z9pdPP.js";const m={formId:"Test form",confirmChanges:!0,fieldsProps:{field1:{component:o,label:"Поле 1",placeholder:"Введите что-нибудь"},field2:{component:o,label:"Поле 2 (зависит от Поля 1)",placeholder:"Меня не видно, если поле 1 пусто. Введите что-нибудь",dependsOn:["field1"]},field3:{component:o,label:"Поле 3 (зависит от Поля 1 и 2)",placeholder:"Меня не видно, если поля 1 или 2 пусты",dependsOn:["field1","field2"]}},buttons:{ok:{position:"right"}}},a=()=>e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Пример формы с зависимыми полями"}),e.jsx("p",{children:"Пока родительское поле не заполнено, зависимые поля скрыты"}),e.jsx("div",{style:{maxWidth:500},children:e.jsx(p,{...m})})]}),I=r=>e.jsxs(d,{children:[e.jsx("div",{children:e.jsx(a,{})}),e.jsx(i,{}),e.jsx("div",{children:e.jsx(t,{items:[{key:1,label:"Show source",children:e.jsx(l,{language:"javascript",style:r.darkMode?s:n,showLineNumbers:!0,children:`
import React from 'react';
import {DForm, IDFormProps} from @krinopotam/ui-kit/dForm';
import {InputField} from @krinopotam/ui-kit/dForm/fields/input/inputField";
const formProps: IDFormProps = {
    formId: 'Test form',
    confirmChanges: true,
    fieldsProps: {
        field1: {component: InputField, label: 'Поле 1', placeholder: 'Введите что-нибудь'},
        field2: {
            component: InputField,
            label: 'Поле 2 (зависит от Поля 1)',
            placeholder: 'Меня не видно, если поле 1 пусто. Введите что-нибудь',
            dependsOn: ['field1'],
        },
        field3: {
            component: InputField,
            label: 'Поле 3 (зависит от Поля 1 и 2)',
            placeholder: 'Меня не видно, если поля 1 или 2 пусты',
            dependsOn: ['field1', 'field2'],
        } ,
    },
    buttons: {ok: {position: 'right'}},
};
export const FormDependedField = (): React.JSX.Element => {
    return (
        <>
            <div style={{maxWidth: 500}}>
                <DForm {...formProps} />
            </div>
        </>
    );
};
`})}]})})]});export{I as Pagef2cde0c8f2244bcbb19e90de98cf90c9,I as default};
