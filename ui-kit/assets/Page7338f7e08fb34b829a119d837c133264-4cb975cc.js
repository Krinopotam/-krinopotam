import{j as e,D as d}from"./index-9944374f.js";import{P as t,C as l,S as s,d as n,a as p}from"./docco-d767795b.js";import{D as m}from"./index-df6b3fec.js";import{I as o}from"./inputField-d7a6ced8.js";import"./index-1ed5fd40.js";import"./EyeOutlined-4433dc0b.js";import"./SearchOutlined-58270f91.js";const a={formId:"Test form",confirmChanges:!0,fieldsProps:{field1:{component:o,label:"Поле 1",placeholder:"Введите что-нибудь"},field2:{component:o,label:"Поле 2 (зависит от Поля 1)",placeholder:"Меня не видно, если поле 1 пусто. Введите что-нибудь",dependsOn:["field1"]},field3:{component:o,label:"Поле 3 (зависит от Поля 1 и 2)",placeholder:"Меня не видно, если поля 1 или 2 пусты",dependsOn:["field1","field2"]}},buttons:{ok:{position:"right"}}},c=()=>e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Пример формы с зависимыми полями"}),e.jsx("p",{children:"Пока родительское поле не заполнено, зависимые поля скрыты"}),e.jsx("div",{style:{maxWidth:500},children:e.jsx(m,{...a})})]}),g=r=>{const i=`
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
`;return e.jsxs(t,{children:[e.jsx("div",{children:e.jsx(c,{})}),e.jsx(d,{}),e.jsx("div",{children:e.jsx(l,{items:[{key:1,label:"Show source",children:e.jsx(s,{language:"javascript",style:r.darkMode?n:p,showLineNumbers:!0,children:i})}]})})]})};export{g as Page7338f7e08fb34b829a119d837c133264,g as default};
