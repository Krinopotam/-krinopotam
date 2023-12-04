import{j as e,D as i}from"./index-c797af55.js";import{P as t,C as l,S as s,d as n,a as p}from"./docco-e40295f3.js";import{D as m}from"./index-8c229de7.js";import{I as o}from"./inputField-d14c5b2b.js";import"./index-e62611d6.js";import"./EyeOutlined-8bcb47e2.js";import"./SearchOutlined-f62686db.js";const a={formId:"Test form",confirmChanges:!0,fieldsProps:{field1:{component:o,label:"Поле 1",placeholder:"Введите что-нибудь"},field2:{component:o,label:"Поле 2 (зависит от Поля 1)",placeholder:"Меня не видно, если поле 1 пусто. Введите что-нибудь",dependsOn:["field1"]},field3:{component:o,label:"Поле 3 (зависит от Поля 1 и 2)",placeholder:"Меня не видно, если поля 1 или 2 пусты",dependsOn:["field1","field2"]}},buttons:{ok:{position:"right"}}},c=()=>e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Пример формы с зависимыми полями"}),e.jsx("p",{children:"Пока родительское поле не заполнено, зависимые поля скрыты"}),e.jsx("div",{style:{maxWidth:500},children:e.jsx(m,{...a})})]}),g=r=>{const d=`
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
`;return e.jsxs(t,{children:[e.jsx("div",{children:e.jsx(c,{})}),e.jsx(i,{}),e.jsx("div",{children:e.jsx(l,{items:[{key:1,label:"Show source",children:e.jsx(s,{language:"javascript",style:r.darkMode?n:p,showLineNumbers:!0,children:d})}]})})]})};export{g as Paged3b73bd3cd63468c84204fdd920e5816,g as default};
