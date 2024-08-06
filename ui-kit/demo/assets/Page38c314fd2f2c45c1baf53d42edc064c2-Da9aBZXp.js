import{r as i,j as o,D as a}from"./index-CRRPgvdi.js";import{P as n,C as m,h as c,d as l,a as d}from"./docco-COLmzWzy.js";import{B as p}from"./index-CR3eF2D1.js";import{D as u}from"./dFormModal-Df9g-P_m.js";import{I as s}from"./inputField-BCG6Hv6R.js";import{F as f}from"./buttonsProps-Bczlz-e7.js";import"./index-Dx0n4lO3.js";import"./EyeOutlined-DQsML7KC.js";import"./SearchOutlined-BOezqQLT.js";const r={},h={formId:"Test form",apiRef:r,confirmChanges:!0,fieldsProps:{position:{component:s,label:"Должность"},department:{component:s,label:"Подразделение"}},onDataFetch:()=>new Promise((e,t)=>{setTimeout(()=>{Math.random()<.5?t({message:"Ошибка загрузки данных",code:400}):e({data:{position:"Директор",department:"Главная дирекция"}})},3e3)}),buttons:f(r)},x=()=>{const e=i.useCallback(()=>{r.open("update")},[]);return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Example of loading data when opening a form"}),o.jsx("p",{children:"To ensure loading, you need to pass a function to the onDataFetch callback that returns a Promise, which, if the server responds successfully (resolve), returns an object of the form:"}),o.jsx("code",{children:'data:{имя_поля1: "значение", имя_поля2: "значение 2"...}'}),o.jsx("p",{children:"and if there is an error (reject)"}),o.jsx("code",{children:"error:{message: string, code: number}"}),o.jsx("p",{children:"For example, the probability of failure during loading is 50%"}),o.jsx("p",{}),o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(p,{onClick:e,children:"Open form"}),o.jsx(u,{...h})]})]})},C=e=>o.jsxs(n,{children:[o.jsx("div",{children:o.jsx(x,{})}),o.jsx(a,{}),o.jsx("div",{children:o.jsx(m,{items:[{key:1,label:"Show source",children:o.jsx(c,{language:"javascript",style:e.darkMode?l:d,showLineNumbers:!0,children:`
import React, {useCallback} from 'react';
import {Button} from @krinopotam/ui-kit/button';
import {IDFormModalApi, DFormModal, IDFormModalProps} from @krinopotam/ui-kit/dFormModal';
import {InputField} from @krinopotam/ui-kit/dForm/fields/input/inputField";
import {FormLayoutSwitch} from "../../../common/buttonsProps";
const formApi = {} as IDFormModalApi;
const formProps: IDFormModalProps = {
    formId: 'Test form',
    apiRef: formApi,
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
    buttons: FormLayoutSwitch(formApi),
}
export const FormFetching = (): React.JSX.Element => {
    const onClick = useCallback(() => {
        formApi.open('update');
    }, []);
    return (
        <>
            <div style={{maxWidth: 500}}>
                <Button onClick={onClick}>Open form</Button>
                <DFormModal {...formProps} />
            </div>
        </>
    );
};
`})}]})})]});export{C as Page38c314fd2f2c45c1baf53d42edc064c2,C as default};
