const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-9FGXM8eG.js","assets/default-highlight-_K3mzjfK.js","assets/index-CObHp3AH.js"])))=>i.map(i=>d[i]);
import{j as e,r as s,_ as i,D as n}from"./index-CObHp3AH.js";import{D as a}from"./dForm-DjwSwKfj.js";import{I as t}from"./inputField-CMzynz8s.js";import{P as m,C as d,d as p,c}from"./darcula-D-n55oql.js";import"./modal-BBQwvlDP.js";import"./DownOutlined-BYejAm0U.js";import"./index-BubinFZA.js";import"./CheckOutlined-ka3l-INf.js";import"./index-Bcx3LFQ2.js";import"./SearchOutlined-DZTAjpNT.js";const l={formId:"Test form",formMode:"update",confirmChanges:!0,fieldsProps:{position:{component:t,label:"Должность"},department:{component:t,label:"Подразделение"}},onDataFetch:()=>new Promise((o,r)=>{setTimeout(()=>{Math.random()<.5?r({message:"Ошибка загрузки данных",code:400}):o({data:{position:"Директор",department:"Главная дирекция"}})},3e3)}),buttons:{ok:{position:"right"}}},u=()=>e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Пример загрузки данных формы"}),e.jsx("p",{children:"Для обеспечения загрузки необходимо в калбэк onDataFetch передать функцию, возвращающую Promise, который при успешном ответе сервера (resolve) возвращает объект вида:"}),e.jsx("code",{children:'data:{имя_поля1: "значение", имя_поля2: "значение 2"...}'}),e.jsx("p",{children:"а при ошибке (reject)"}),e.jsx("code",{children:"error:{message: string, code: number}"}),e.jsx("p",{children:"Для примера, вероятность сбоя при загрузке 50%"}),e.jsx("p",{}),e.jsx("div",{style:{maxWidth:500},children:e.jsx(a,{...l})})]}),h=s.lazy(()=>i(()=>import("./index-9FGXM8eG.js").then(o=>o.ds),__vite__mapDeps([0,1,2])).then(o=>({default:o.Prism}))),_=o=>e.jsxs(m,{children:[e.jsx("div",{children:e.jsx(u,{})}),e.jsx(n,{}),e.jsx("div",{children:e.jsx(d,{items:[{key:1,label:"Show source",children:e.jsx(s.Suspense,{fallback:e.jsx("div",{children:"Loading source..."}),children:e.jsx(h,{language:"tsx",style:o.darkMode?p:c,showLineNumbers:!0,children:`
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
`})})}]})})]});export{_ as Pagebdfddf4e15314516a15297a192104269,_ as default};
