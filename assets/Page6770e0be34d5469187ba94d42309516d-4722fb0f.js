import{j as e,D as s}from"./index-bd83bb7b.js";import{P as i,C as n,S as a,d as m,a as d}from"./docco-5da19923.js";import{D as p}from"./index-70b17d15.js";import{I as t}from"./inputField-0d7c82a2.js";import"./index-45228462.js";import"./EyeOutlined-9bf5471e.js";import"./SearchOutlined-5813b664.js";const c={formId:"Test form",formMode:"update",confirmChanges:!0,fieldsProps:{position:{component:t,label:"Должность"},department:{component:t,label:"Подразделение"}},onDataFetch:()=>new Promise((o,r)=>{setTimeout(()=>{Math.random()<.5?r({message:"Ошибка загрузки данных",code:400}):o({data:{position:"Директор",department:"Главная дирекция"}})},3e3)}),buttons:{ok:{position:"right"}}},l=()=>e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Пример загрузки данных формы"}),e.jsx("p",{children:"Для обеспечения загрузки необходимо в калбэк onDataFetch передать функцию, возвращающую Promise, который при успешном ответе сервера (resolve) возвращает объект вида:"}),e.jsx("code",{children:'data:{имя_поля1: "значение", имя_поля2: "значение 2"...}'}),e.jsx("p",{children:"а при ошибке (reject)"}),e.jsx("code",{children:"error:{message: string, code: number}"}),e.jsx("p",{children:"Для примера, вероятность сбоя при загрузке 50%"}),e.jsx("p",{}),e.jsx("div",{style:{maxWidth:500},children:e.jsx(p,{...c})})]}),P=o=>{const r=`
import React from 'react';
import {DForm, IDFormProps} from @krinopotam/ui-kit/dForm';
import {InputField} from @krinopotam/ui-kit/dForm/fields/input/inputField";
const formProps: IDFormProps = {
    formId: 'Test form',
    formMode: 'update',
    confirmChanges: true,
    fieldsProps: {
        position: {component: InputField, label: 'Должность'},
        department: {component: InputField, label: 'Подразделение'},
    },
    onDataFetch: () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() < 0.5) reject({message: 'Ошибка загрузки данных', code: 400});
                else resolve({data: {position: 'Директор', department: 'Главная дирекция'}});
            }, 3000);
        });
    },
    buttons: {ok: {position: 'right'}},
};
export const FormFetching = (): React.JSX.Element => {
    return (
        <>
            <div style={{maxWidth: 500}}>
                <DForm {...formProps} />
            </div>
        </>
    );
};
`;return e.jsxs(i,{children:[e.jsx("div",{children:e.jsx(l,{})}),e.jsx(s,{}),e.jsx("div",{children:e.jsx(n,{items:[{key:1,label:"Show source",children:e.jsx(a,{language:"javascript",style:o.darkMode?m:d,showLineNumbers:!0,children:r})}]})})]})};export{P as Page6770e0be34d5469187ba94d42309516d,P as default};
