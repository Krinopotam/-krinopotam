import{j as e,D as s}from"./index-OT-fUFlw.js";import{P as i,C as n,h as m,d as a,a as d}from"./docco-Dp5WB1My.js";import{D as c}from"./dForm-CXdkNth1.js";import"./messageBox-deXCqDea.js";import{I as t}from"./inputField-Coz0I3xz.js";import"./index-BzsQSyIK.js";import"./index-BXyp7rr8.js";import"./EyeOutlined-BLUlGsNj.js";import"./SearchOutlined-q14VqUwO.js";const p={formId:"Test form",formMode:"update",confirmChanges:!0,fieldsProps:{position:{component:t,label:"Должность"},department:{component:t,label:"Подразделение"}},onDataFetch:()=>new Promise((o,r)=>{setTimeout(()=>{Math.random()<.5?r({message:"Ошибка загрузки данных",code:400}):o({data:{position:"Директор",department:"Главная дирекция"}})},3e3)}),buttons:{ok:{position:"right"}}},l=()=>e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Пример загрузки данных формы"}),e.jsx("p",{children:"Для обеспечения загрузки необходимо в калбэк onDataFetch передать функцию, возвращающую Promise, который при успешном ответе сервера (resolve) возвращает объект вида:"}),e.jsx("code",{children:'data:{имя_поля1: "значение", имя_поля2: "значение 2"...}'}),e.jsx("p",{children:"а при ошибке (reject)"}),e.jsx("code",{children:"error:{message: string, code: number}"}),e.jsx("p",{children:"Для примера, вероятность сбоя при загрузке 50%"}),e.jsx("p",{}),e.jsx("div",{style:{maxWidth:500},children:e.jsx(c,{...p})})]}),b=o=>e.jsxs(i,{children:[e.jsx("div",{children:e.jsx(l,{})}),e.jsx(s,{}),e.jsx("div",{children:e.jsx(n,{items:[{key:1,label:"Show source",children:e.jsx(m,{language:"javascript",style:o.darkMode?a:d,showLineNumbers:!0,children:`
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
`})}]})})]});export{b as Page26aa87625d254e559283ec6cacbc8754,b as default};
