import{j as e,D as i}from"./index-Bl-1kopd.js";import{P as d,C as l,h as t,d as s,a as n}from"./docco-DI1KRtYq.js";import{D as p}from"./index-Cz3A2iSd.js";import{I as o}from"./inputField-BJn_KJf5.js";import"./index-dliuYOsp.js";import"./EyeOutlined-VtVLuKtp.js";import"./SearchOutlined-Drmuc8b0.js";const a={formId:"Test form",confirmChanges:!0,fieldsProps:{field1:{component:o,label:"Поле 1",placeholder:"Введите что-нибудь"},field2:{component:o,label:"Поле 2 (зависит от Поля 1)",placeholder:"Меня не видно, если поле 1 пусто. Введите что-нибудь",dependsOn:["field1"]},field3:{component:o,label:"Поле 3 (зависит от Поля 1 и 2)",placeholder:"Меня не видно, если поля 1 или 2 пусты",dependsOn:["field1","field2"]}},buttons:{ok:{position:"right"}}},m=()=>e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Пример формы с зависимыми полями"}),e.jsx("p",{children:"Пока родительское поле не заполнено, зависимые поля скрыты"}),e.jsx("div",{style:{maxWidth:500},children:e.jsx(p,{...a})})]}),g=r=>e.jsxs(d,{children:[e.jsx("div",{children:e.jsx(m,{})}),e.jsx(i,{}),e.jsx("div",{children:e.jsx(l,{items:[{key:1,label:"Show source",children:e.jsx(t,{language:"javascript",style:r.darkMode?s:n,showLineNumbers:!0,children:`
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
`})}]})})]});export{g as Pageea77189aee744f25a552ab5b1187ceba,g as default};
